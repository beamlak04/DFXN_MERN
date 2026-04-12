import cloudinary from "./cloudinary.js";

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

  try {
    return await cloudinary.uploader.upload(image, {
      folder,
      transformation,
    });
  } catch (error) {
    if (!normalized.removeBackground) {
      throw error;
    }

    // Retry without background removal when add-on is unavailable.
    return cloudinary.uploader.upload(image, {
      folder,
      transformation: buildTransformations({
        ...normalized,
        removeBackground: false,
      }),
    });
  }
};