import cloudinary from "./cloudinary.js";

const createInputError = (message) => {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
};

const toPositiveInt = (value, fallback) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return Math.round(parsed);
};

const normalizeCropMode = (value, fallback) => {
  const allowedModes = ["fill", "fit", "pad", "scale"];
  if (allowedModes.includes(value)) {
    return value;
  }
  return fallback;
};

const normalizeImageOptions = (imageType, options = {}) => {
  const defaultSize = imageType === "category" ? 700 : 900;
  const defaultMode = "fill";

  return {
    width: toPositiveInt(options.width, defaultSize),
    height: toPositiveInt(options.height, defaultSize),
    cropMode: normalizeCropMode(options.cropMode, defaultMode),
    removeBackground: Boolean(options.removeBackground),
  };
};

const buildTransformations = (normalized) => {
  const transformations = [
    {
      width: normalized.width,
      height: normalized.height,
      crop: normalized.cropMode,
      gravity: "auto",
      fetch_format: "auto",
      quality: "auto",
    },
  ];

  if (normalized.removeBackground) {
    transformations.push({ effect: "background_removal" });
  }

  return transformations;
};

export const uploadImageWithProcessing = async ({
  image,
  folder,
  imageType,
  imageOptions,
}) => {
  const normalized = normalizeImageOptions(imageType, imageOptions);
  const transformation = buildTransformations(normalized);
  // Validate and normalize image input
  const MAX_BYTES = Number(process.env.MAX_IMAGE_UPLOAD_BYTES || 5 * 1024 * 1024); // default 5MB

  const isDataUrl = (str) => typeof str === "string" && /^data:([^;]+);base64,/.test(str);

  let uploadSource = image;
  let inferredMime = null;

  if (isDataUrl(image)) {
    const match = String(image).match(/^data:([^;]+);base64,(.+)$/);
    if (!match) throw createInputError("Invalid data URL image format");
    inferredMime = match[1].toLowerCase();
    if (!inferredMime.startsWith("image/")) {
      throw createInputError("Uploaded data is not an image");
    }

    const base64Payload = match[2];
    // Calculate approximate byte size from base64 length
    const padded = base64Payload.length;
    const sizeBytes = Math.floor((padded * 3) / 4) - (base64Payload.endsWith("==") ? 2 : base64Payload.endsWith("=") ? 1 : 0);
    if (sizeBytes > MAX_BYTES) {
      throw createInputError(`Image exceeds max size of ${Math.round(MAX_BYTES / 1024)} KB`);
    }

    uploadSource = image; // data URL is acceptable to cloudinary uploader
  } else {
    throw createInputError("Unsupported image input. Expecting a base64 data URL starting with data:image/.");
  }

  const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!inferredMime || !allowedMimeTypes.has(inferredMime)) {
    throw createInputError("Unsupported image type. Allowed types: image/jpeg, image/png, image/webp");
  }

  const uploadOptionsBase = {
    folder,
    transformation,
    resource_type: "image",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  };

  try {
    return await cloudinary.uploader.upload(uploadSource, uploadOptionsBase);
  } catch (error) {
    if (!normalized.removeBackground) {
      throw error;
    }

    // Retry without background removal when add-on is unavailable.
    return cloudinary.uploader.upload(uploadSource, {
      ...uploadOptionsBase,
      transformation: buildTransformations({
        ...normalized,
        removeBackground: false,
      }),
    });
  }
};