const DEFAULT_SIZE = 900;

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image preview"));
    image.src = src;
  });

const createCanvas = (width, height) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

const clampDimension = (value, fallback = DEFAULT_SIZE) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return Math.min(Math.max(Math.round(parsed), 200), 2000);
};

const normalizeOptions = (options = {}) => ({
  width: clampDimension(options.width),
  height: clampDimension(options.height),
  cropMode: ["fill", "fit", "pad", "scale"].includes(options.cropMode)
    ? options.cropMode
    : "fill",
});

const drawCover = (context, image, width, height) => {
  const imageRatio = image.width / image.height;
  const frameRatio = width / height;

  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;

  if (imageRatio > frameRatio) {
    drawHeight = height;
    drawWidth = image.width * (height / image.height);
    offsetX = (width - drawWidth) / 2;
  } else {
    drawWidth = width;
    drawHeight = image.height * (width / image.width);
    offsetY = (height - drawHeight) / 2;
  }

  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};

const drawContain = (context, image, width, height) => {
  const imageRatio = image.width / image.height;
  const frameRatio = width / height;

  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;

  if (imageRatio > frameRatio) {
    drawHeight = width / imageRatio;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawWidth = height * imageRatio;
    offsetX = (width - drawWidth) / 2;
  }

  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};

export const createImagePreview = async (source, options = {}) => {
  const { width, height, cropMode } = normalizeOptions(options);
  const image = await loadImage(source);

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas is not supported in this browser");
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  if (cropMode === "pad") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    drawContain(context, image, width, height);
  } else if (cropMode === "fit") {
    context.clearRect(0, 0, width, height);
    drawContain(context, image, width, height);
  } else if (cropMode === "scale") {
    context.clearRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
  } else {
    context.clearRect(0, 0, width, height);
    drawCover(context, image, width, height);
  }

  return canvas.toDataURL("image/png");
};