This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
backend/
  controllers/
    admin.controller.js
    auth.controller.js
    contact.controller.js
    order.controller.js
    product.controller.js
  lib/
    auditLogger.js
    chapa.js
    cloudinary.js
    db.js
    imageUpload.js
    logger.js
    mailer.js
    orderSecurity.js
    redis.js
  middleware/
    adminAudit.middleware.js
    auth.middleware.js
    csrf.middleware.js
    error.middleware.js
    rateLimit.middleware.js
    validation.middleware.js
  models/
    adminAuditLog.model.js
    category.model.js
    contactMessage.model.js
    order.model.js
    product.model.js
    systemSettings.model.js
    user.model.js
  routes/
    admin.route.js
    auth.route.js
    contact.route.js
    order.route.js
    product.route.js
  tests/
    chapaSignature.test.js
    orderSecurity.test.js
    rateLimit.test.js
  validation/
    schemas.js
  server.js
frontend/
  public/
    downloads/
      2025-04/
        photo_2025-04-14_08-04-06.jpg
        photo_2025-04-15_13-15-15 (1).jpg
        photo_2025-04-15_13-15-15.jpg
        photo_2025-04-16_17-58-31.jpg
        photo_2025-04-16_17-59-53.jpg
        photo_2025-04-17_06-04-59.jpg
        photo_2025-04-17_10-02-33.jpg
        photo_2025-04-18_05-35-04 (1).jpg
        photo_2025-04-18_05-35-04.jpg
        photo_2025-04-19_13-43-33.jpg
        photo_2025-04-21_09-20-26.jpg
        photo_2026-03-24_22-19-39.jpg
      2025-05/
        photo_2025-05-01_10-13-28.jpg
        photo_2025-05-01_10-15-20.jpg
        photo_2025-05-01_10-28-50.jpg
        photo_2025-05-01_10-29-00.jpg
        photo_2025-05-15_20-15-00.jpg
        photo_2025-05-15_20-24-10.jpg
        photo_2025-05-15_20-40-49.jpg
      2025-06/
        photo_2025-06-03_06-20-16.jpg
        photo_2025-06-04_05-30-53.jpg
        photo_2025-06-05_05-30-12.jpg
        photo_2025-06-06_05-34-58.jpg
        photo_2025-06-10_13-45-13.jpg
        photo_2025-06-11_17-44-42.jpg
        photo_2025-06-13_14-42-03.jpg
        photo_2025-06-18_20-28-22 (1).jpg
        photo_2025-06-18_20-28-22.jpg
        photo_2025-06-19_05-00-17.jpg
        photo_2025-06-23_18-27-51.jpg
        photo_2025-06-26_08-12-05.jpg
      2025-07/
        photo_2025-07-02_21-03-12.jpg
        photo_2025-07-03_11-11-23.jpg
        photo_2025-07-03_11-40-22.jpg
        photo_2025-07-03_12-17-20.jpg
        photo_2025-07-03_23-40-05.jpg
        photo_2025-07-03_23-56-53.jpg
        photo_2025-07-04_00-00-15.jpg
        photo_2025-07-05_17-44-01.jpg
        photo_2025-07-05_18-33-45.jpg
        photo_2025-07-05_18-34-21.jpg
        photo_2025-07-05_18-34-37.jpg
        photo_2025-07-10_04-46-16.jpg
        photo_2025-07-10_05-02-21.jpg
        photo_2025-07-10_05-06-16.jpg
        photo_2025-07-11_13-14-07.jpg
        photo_2025-07-11_13-14-25.jpg
        photo_2025-07-11_14-02-19.jpg
        photo_2025-07-14_08-47-50.jpg
        photo_2025-07-14_08-48-11.jpg
        photo_2025-07-14_08-49-03.jpg
        photo_2025-07-16_20-04-45.jpg
        photo_2025-07-16_20-08-35.jpg
        photo_2025-07-17_14-59-55.jpg
        photo_2025-07-17_15-59-55.jpg
        photo_2025-07-18_14-28-25.jpg
        photo_2025-07-18_14-38-04.jpg
        photo_2025-07-18_17-44-57.jpg
        photo_2025-07-18_17-45-05.jpg
        photo_2025-07-18_17-45-10.jpg
        photo_2025-07-18_17-45-14.jpg
        photo_2025-07-18_17-45-19.jpg
        photo_2025-07-18_17-45-38.jpg
        photo_2025-07-18_17-45-54.jpg
        photo_2025-07-18_17-46-01.jpg
        photo_2025-07-18_17-47-24.jpg
        photo_2025-07-24_18-47-53.jpg
        photo_2025-07-24_18-49-03.jpg
        photo_2025-07-24_18-50-11.jpg
        photo_2025-07-26_10-31-50.jpg
        photo_2025-07-26_10-32-09.jpg
        photo_2025-07-26_11-29-17.jpg
        photo_2025-07-29_15-37-47 (1).jpg
        photo_2025-07-29_15-37-47.jpg
        photo_2025-07-29_18-42-12.jpg
        photo_2025-07-29_18-43-46.jpg
        photo_2025-07-30_04-04-40.jpg
        photo_2025-07-31_18-46-58.jpg
        photo_2025-07-31_20-32-22.jpg
      2025-08/
        photo_2025-08-05_09-05-37.jpg
        photo_2025-08-05_09-05-38.jpg
        photo_2025-08-05_09-20-44.jpg
        photo_2025-08-06_09-29-49.jpg
        photo_2025-08-06_09-36-48.jpg
        photo_2025-08-06_09-54-34.jpg
        photo_2025-08-11_13-53-11.jpg
        photo_2025-08-11_13-54-35.jpg
        photo_2025-08-11_16-17-14.jpg
        photo_2025-08-11_16-40-33.jpg
        photo_2025-08-12_11-46-47.jpg
        photo_2025-08-13_14-57-08.jpg
        photo_2025-08-16_04-44-49.jpg
        photo_2025-08-18_07-59-58.jpg
        photo_2025-08-19_17-37-41.jpg
        photo_2025-08-19_17-50-29.jpg
        photo_2025-08-20_17-53-19.jpg
        photo_2025-08-21_16-23-36.jpg
        photo_2025-08-21_16-28-43.jpg
        photo_2025-08-21_17-25-31.jpg
        photo_2025-08-23_15-27-17.jpg
        photo_2025-08-26_11-22-34.jpg
        photo_2025-08-26_11-22-53.jpg
        photo_2025-08-26_11-23-11 (1).jpg
        photo_2025-08-26_11-23-11.jpg
        photo_2025-08-26_12-45-40.jpg
        photo_2025-08-26_12-47-23.jpg
        photo_2025-08-26_12-54-32.jpg
        photo_2025-08-27_07-03-11.jpg
        photo_2025-08-27_10-29-01.jpg
        photo_2025-08-29_13-44-55.jpg
        photo_2025-08-29_13-45-28.jpg
        photo_2025-08-29_13-46-10.jpg
        photo_2025-08-29_13-46-26.jpg
        photo_2025-08-29_13-48-22.jpg
        photo_2025-08-29_13-52-12.jpg
        photo_2025-08-29_13-52-16.jpg
        photo_2025-08-29_13-55-14.jpg
        photo_2025-08-29_13-56-08.jpg
        photo_2025-08-29_13-57-20.jpg
        photo_2025-08-29_13-57-33.jpg
        photo_2025-08-29_14-03-02.jpg
        photo_2025-08-29_14-04-16.jpg
        photo_2025-08-29_14-04-48.jpg
        photo_2025-08-29_14-06-04.jpg
        photo_2025-08-29_14-06-55.jpg
        photo_2025-08-29_14-18-30.jpg
        photo_2025-08-29_14-25-18.jpg
        photo_2025-08-29_14-26-28.jpg
        photo_2025-08-29_14-30-03.jpg
        photo_2025-08-29_14-32-05.jpg
        photo_2025-08-29_14-37-58.jpg
        photo_2025-08-29_14-41-20.jpg
        photo_2025-08-30_07-55-58.jpg
        photo_2025-08-30_07-59-10.jpg
        photo_2025-08-30_08-19-57.jpg
        photo_2025-08-30_08-21-36.jpg
        photo_2025-08-30_08-22-43.jpg
        photo_2025-08-31_07-33-58.jpg
        photo_2025-08-31_07-36-58.jpg
        photo_2025-08-31_07-38-58 (1).jpg
        photo_2025-08-31_07-38-58.jpg
        photo_2025-08-31_07-43-58.jpg
        photo_2025-08-31_07-44-58.jpg
        photo_2025-08-31_07-45-58.jpg
        photo_2025-08-31_08-46-58.jpg
        photo_2025-08-31_08-51-58.jpg
      2025-09/
        photo_2025-09-04_06-32-50.jpg
        photo_2025-09-07_10-29-59.jpg
        photo_2025-09-10_18-05-38.jpg
        photo_2025-09-15_10-03-21.jpg
        photo_2025-09-15_10-04-04.jpg
        photo_2025-09-15_10-23-23.jpg
        photo_2025-09-16_08-46-01.jpg
        photo_2025-09-16_08-50-13.jpg
        photo_2025-09-16_08-54-01.jpg
        photo_2025-09-17_20-14-58.jpg
        photo_2025-09-18_16-16-45.jpg
        photo_2025-09-18_16-31-00.jpg
        photo_2025-09-18_18-15-22.jpg
        photo_2025-09-18_18-29-38.jpg
        photo_2025-09-18_18-29-46.jpg
        photo_2025-09-19_12-31-35.jpg
        photo_2025-09-19_12-47-44.jpg
        photo_2025-09-19_12-53-47.jpg
        photo_2025-09-20_08-16-01 (1).jpg
        photo_2025-09-20_08-16-01.jpg
        photo_2025-09-20_08-25-08.jpg
        photo_2025-09-22_18-12-34.jpg
        photo_2025-09-22_18-22-10.jpg
        photo_2025-09-22_18-30-51.jpg
        photo_2025-09-23_16-17-25.jpg
        photo_2025-09-23_16-18-06.jpg
        photo_2025-09-23_16-18-38.jpg
        photo_2025-09-23_16-20-42.jpg
        photo_2025-09-23_16-58-25.jpg
        photo_2025-09-24_16-48-31.jpg
        photo_2025-09-24_16-48-37.jpg
        photo_2025-09-25_19-10-10.jpg
        photo_2025-09-25_19-10-30.jpg
        photo_2025-09-25_19-10-38.jpg
        photo_2025-09-26_20-25-58.jpg
        photo_2025-09-29_12-05-26.jpg
        photo_2025-09-29_12-17-48.jpg
        photo_2025-09-29_12-22-34.jpg
        photo_2025-09-29_12-43-11.jpg
        photo_2025-09-30_07-01-37 (1).jpg
        photo_2025-09-30_07-01-37 (2).jpg
        photo_2025-09-30_07-01-37.jpg
      2025-10/
        photo_2025-10-01_07-03-01 (1).jpg
        photo_2025-10-01_07-03-01 (2).jpg
        photo_2025-10-01_07-03-01.jpg
        photo_2025-10-03_11-49-09.jpg
        photo_2025-10-03_11-50-20.jpg
        photo_2025-10-03_11-53-59.jpg
        photo_2025-10-04_08-05-08.jpg
        photo_2025-10-04_08-06-01.jpg
        photo_2025-10-06_17-30-20.jpg
        photo_2025-10-08_17-28-40.jpg
        photo_2025-10-08_17-29-01.jpg
        photo_2025-10-08_17-29-45.jpg
        photo_2025-10-09_18-03-46.jpg
        photo_2025-10-09_18-06-07.jpg
        photo_2025-10-10_17-39-01.jpg
        photo_2025-10-11_16-43-39.jpg
        photo_2025-10-11_16-44-32.jpg
        photo_2025-10-11_16-45-22.jpg
        photo_2025-10-12_00-24-46 (1).jpg
        photo_2025-10-12_00-24-46 (2).jpg
        photo_2025-10-12_00-24-46.jpg
        photo_2025-10-12_01-14-14.jpg
        photo_2025-10-12_01-29-48.jpg
        photo_2025-10-12_02-11-23.jpg
        photo_2025-10-13_10-51-46.jpg
        photo_2025-10-13_10-52-15.jpg
        photo_2025-10-13_10-52-25.jpg
        photo_2025-10-13_10-52-37.jpg
        photo_2025-10-16_16-54-12.jpg
        photo_2025-10-16_17-28-51.jpg
        photo_2025-10-16_18-29-51.jpg
        photo_2025-10-17_08-03-58.jpg
        photo_2025-10-17_08-04-58.jpg
        photo_2025-10-17_08-09-58.jpg
        photo_2025-10-18_08-42-58.jpg
        photo_2025-10-18_08-47-58.jpg
        photo_2025-10-18_08-49-58 (1).jpg
        photo_2025-10-18_08-49-58.jpg
        photo_2025-10-19_08-18-58.jpg
        photo_2025-10-19_08-55-58.jpg
        photo_2025-10-20_18-47-14.jpg
        photo_2025-10-20_18-48-30.jpg
        photo_2025-10-22_12-58-44.jpg
        photo_2025-10-22_12-59-04.jpg
        photo_2025-10-22_13-01-15.jpg
        photo_2025-10-22_13-02-42.jpg
        photo_2025-10-22_13-04-33.jpg
        photo_2025-10-24_16-02-25.jpg
        photo_2025-10-24_16-02-29.jpg
        photo_2025-10-24_16-02-37.jpg
        photo_2025-10-24_16-03-01.jpg
        photo_2025-10-25_13-35-36 (1).jpg
        photo_2025-10-25_13-35-36.jpg
        photo_2025-10-25_13-35-37 (1).jpg
        photo_2025-10-25_13-35-37 (2).jpg
        photo_2025-10-25_13-35-37 (3).jpg
        photo_2025-10-25_13-35-37.jpg
        photo_2025-10-25_13-35-38 (1).jpg
        photo_2025-10-25_13-35-38.jpg
        photo_2025-10-29_16-36-18.jpg
        photo_2025-10-29_16-36-24.jpg
        photo_2025-10-29_16-36-28.jpg
        photo_2025-10-29_16-36-32.jpg
        photo_2025-10-31_17-40-26.jpg
        photo_2025-10-31_17-50-53.jpg
        photo_2025-10-31_17-51-01.jpg
      2025-11/
        photo_2025-11-03_19-08-46.jpg
        photo_2025-11-03_19-08-54.jpg
        photo_2025-11-03_19-09-03.jpg
        photo_2025-11-05_17-59-09.jpg
        photo_2025-11-05_18-03-52.jpg
        photo_2025-11-05_18-11-00.jpg
        photo_2025-11-06_16-16-06.jpg
        photo_2025-11-06_16-36-36.jpg
        photo_2025-11-06_16-36-45.jpg
        photo_2025-11-07_16-43-22.jpg
        photo_2025-11-10_18-29-22.jpg
        photo_2025-11-11_18-06-36.jpg
        photo_2025-11-11_18-07-12.jpg
        photo_2025-11-11_18-07-48.jpg
        photo_2025-11-11_18-08-18.jpg
        photo_2025-11-12_16-14-16.jpg
        photo_2025-11-12_16-14-23.jpg
        photo_2025-11-12_16-14-33.jpg
        photo_2025-11-14_16-46-33.jpg
        photo_2025-11-14_16-51-22.jpg
        photo_2025-11-14_16-53-32.jpg
        photo_2025-11-19_18-11-14.jpg
        photo_2025-11-19_18-25-11.jpg
        photo_2025-11-19_18-28-50.jpg
        photo_2025-11-20_18-17-41.jpg
        photo_2025-11-20_18-26-11.jpg
        photo_2025-11-20_18-27-36.jpg
        photo_2025-11-23_11-08-09.jpg
        photo_2025-11-23_11-21-29.jpg
        photo_2025-11-24_18-01-31.jpg
        photo_2025-11-24_18-08-04.jpg
        photo_2025-11-24_18-53-53.jpg
        photo_2025-11-25_10-26-07.jpg
        photo_2025-11-25_10-29-40.jpg
        photo_2025-11-25_10-39-25.jpg
        photo_2025-11-26_16-45-53.jpg
        photo_2025-11-26_16-47-11.jpg
        photo_2025-11-26_16-49-03.jpg
        photo_2025-11-28_18-41-34.jpg
        photo_2025-11-28_18-44-52.jpg
        photo_2025-11-28_18-44-59.jpg
      2025-12/
        photo_2025-12-02_10-21-44.jpg
        photo_2025-12-02_10-23-47.jpg
        photo_2025-12-02_10-23-57.jpg
        photo_2025-12-03_17-29-35.jpg
        photo_2025-12-03_17-34-23.jpg
        photo_2025-12-03_17-34-50.jpg
        photo_2025-12-05_17-48-58.jpg
        photo_2025-12-05_18-03-58.jpg
        photo_2025-12-05_18-04-58.jpg
        photo_2025-12-06_18-08-58.jpg
        photo_2025-12-06_18-09-58.jpg
        photo_2025-12-10_16-56-53.jpg
        photo_2025-12-10_18-26-08.jpg
        photo_2025-12-10_18-53-11.jpg
        photo_2025-12-13_16-32-34.jpg
        photo_2025-12-13_16-32-47.jpg
        photo_2025-12-13_16-32-51.jpg
        photo_2025-12-13_16-32-56.jpg
        photo_2025-12-15_14-53-46.jpg
        photo_2025-12-15_14-54-08.jpg
        photo_2025-12-15_15-00-37.jpg
        photo_2025-12-17_15-10-58.jpg
        photo_2025-12-17_15-27-58.jpg
        photo_2025-12-19_15-29-58.jpg
        photo_2025-12-19_15-34-58.jpg
        photo_2025-12-19_15-36-58.jpg
        photo_2025-12-20_09-09-01.jpg
        photo_2025-12-20_09-10-06.jpg
        photo_2025-12-20_09-10-50.jpg
        photo_2025-12-20_09-13-36.jpg
        photo_2025-12-20_09-14-13.jpg
        photo_2025-12-21_09-11-01.jpg
        photo_2025-12-21_09-12-01 (1).jpg
        photo_2025-12-21_09-12-01.jpg
        photo_2025-12-23_09-13-01 (1).jpg
        photo_2025-12-23_09-13-01.jpg
        photo_2025-12-23_09-14-01.jpg
        photo_2025-12-25_09-15-06 (1).jpg
        photo_2025-12-25_09-15-06.jpg
        photo_2025-12-25_09-16-01.jpg
        photo_2025-12-27_09-18-01 (1).jpg
        photo_2025-12-27_09-18-01.jpg
      2026-01/
        photo_2026-01-02_12-09-27.jpg
        photo_2026-01-02_12-12-46.jpg
        photo_2026-01-02_12-14-48.jpg
        photo_2026-01-02_13-33-35.jpg
        photo_2026-01-03_12-25-09.jpg
        photo_2026-01-03_12-26-01.jpg
        photo_2026-01-03_12-27-01.jpg
        photo_2026-01-05_12-28-01.jpg
        photo_2026-01-05_12-29-01 (1).jpg
        photo_2026-01-05_12-29-01.jpg
        photo_2026-01-06_12-17-11.jpg
        photo_2026-01-06_12-31-01.jpg
        photo_2026-01-06_12-32-02.jpg
        photo_2026-01-08_13-26-01.jpg
        photo_2026-01-08_13-27-01.jpg
        photo_2026-01-08_13-29-01.jpg
        photo_2026-01-08_13-33-29.jpg
        photo_2026-01-09_13-31-01.jpg
        photo_2026-01-09_13-45-13.jpg
        photo_2026-01-09_13-46-01.jpg
        photo_2026-01-09_13-47-01.jpg
        photo_2026-01-09_13-48-01.jpg
        photo_2026-01-10_18-15-10.jpg
        photo_2026-01-12_13-54-01.jpg
        photo_2026-01-12_13-58-01.jpg
        photo_2026-01-15_09-01-58 (1).jpg
        photo_2026-01-15_09-01-58.jpg
        photo_2026-01-15_09-02-58.jpg
        photo_2026-01-17_09-02-58.jpg
        photo_2026-01-17_09-05-58.jpg
        photo_2026-01-19_09-29-58 (1).jpg
        photo_2026-01-19_09-29-58 (2).jpg
        photo_2026-01-19_09-29-58 (3).jpg
        photo_2026-01-19_09-29-58.jpg
        photo_2026-01-21_08-59-58.jpg
        photo_2026-01-21_09-05-58.jpg
        photo_2026-01-21_09-58-58.jpg
      2026-03/
        photo_2026-03-24_08-59-28.jpg
        photo_2026-03-24_09-02-35.jpg
        photo_2026-03-24_09-04-53.jpg
    1.jpg
    11.png
    12.png
    13.png
    14.png
    about-us.png
    basketball.png
    casual.png
    comfort.png
    delivery.png
    favico.svg
    favicon.svg
    hightops.png
    metadata.csv
    quality.png
    running.png
  src/
    components/
      AdminNav.jsx
      FooterComponent.jsx
      LoadingSpinner.jsx
      Navbar.jsx
    contexts/
      CartContext.js
    lib/
      axios.js
      imagePreview.js
    pages/
      AdminCategory.jsx
      AdminContactMessages.jsx
      AdminDashboard.jsx
      AdminMonitoring.jsx
      AdminProducts.jsx
      AdminSettings.jsx
      Analytics.jsx
      Cart.jsx
      CartProvider.jsx
      CategoryPage.jsx
      EditCategory.jsx
      EditProductPage.jsx
      HomePage.jsx
      LogInPage.jsx
      Order.jsx
      Orders.jsx
      PaymentResult.jsx
      PlaceOrder.jsx
      Product.jsx
      Products.jsx
    stores/
      useAdminStore.js
      useCartStore.js
      useCategoryStore.js
      useContactStore.js
      useOrderStore.js
      useProductStore.js
      useUserStore.js
    App.jsx
    index.css
    main.jsx
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
.env.example
.gitignore
package.json
README.md
SECURITY_REMEDIATION_PLAN.md
SECURITY.md
```

# Files

## File: backend/lib/logger.js
````javascript
import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: null,
  redact: ["req.headers.authorization", "req.cookies.accessToken", "req.cookies.refreshToken"],
});

export default logger;
````

## File: backend/lib/orderSecurity.js
````javascript
const createOrderError = (message, statusCode = 400) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const buildOrderProductsFromInventory = (cart, productsInDb) => {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw createOrderError("cart is empty");
  }

  const quantityByProductId = new Map();
  for (const item of cart) {
    const productId = String(item?._id || "");
    const quantity = Number(item?.quantity || 0);

    if (!productId || !Number.isInteger(quantity) || quantity <= 0) {
      throw createOrderError("Invalid cart items");
    }

    quantityByProductId.set(productId, (quantityByProductId.get(productId) || 0) + quantity);
  }

  const productMap = new Map(productsInDb.map((product) => [String(product._id), product]));

  if (productsInDb.length !== quantityByProductId.size) {
    throw createOrderError("One or more products are invalid");
  }

  const products = [];
  for (const [productId, quantity] of quantityByProductId.entries()) {
    const product = productMap.get(productId);
    if (!product || product.isActive === false) {
      throw createOrderError("One or more products are invalid");
    }

    if (quantity > Number(product.stock || 0)) {
      throw createOrderError(`Insufficient stock for ${product.name || productId}`, 409);
    }

    products.push({
      product: product._id,
      quantity,
      price: product.price,
    });
  }

  const totalAmount = products.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  if (totalAmount <= 0) {
    throw createOrderError("Invalid order amount");
  }

  return { products, totalAmount };
};

export const decrementStockWithRollback = async (ProductModel, products) => {
  const stockUpdates = [];

  for (const item of products) {
    const updateResult = await ProductModel.updateOne(
      { _id: item.product, stock: { $gte: item.quantity } },
      { $inc: { stock: -item.quantity } }
    );

    if (updateResult.modifiedCount !== 1) {
      for (const rollbackItem of stockUpdates) {
        await ProductModel.updateOne(
          { _id: rollbackItem.product },
          { $inc: { stock: rollbackItem.quantity } }
        );
      }

      throw createOrderError(`Insufficient stock for product ${String(item.product)}`, 409);
    }

    stockUpdates.push(item);
  }

  return stockUpdates;
};

export const rollbackStockUpdates = async (ProductModel, stockUpdates) => {
  for (const rollbackItem of stockUpdates) {
    await ProductModel.updateOne(
      { _id: rollbackItem.product },
      { $inc: { stock: rollbackItem.quantity } }
    );
  }
};
````

## File: backend/middleware/csrf.middleware.js
````javascript
import crypto from "crypto";

// Double-submit cookie CSRF protection.
// Clients must send the CSRF token in the `x-csrf-token` header which must match
// the `csrfToken` cookie set at login/refresh. Cookie is readable by JS.

export const requireCsrf = (req, res, next) => {
  try {
    const tokenFromCookie = req.cookies?.csrfToken;
    const tokenFromHeader = req.get("x-csrf-token") || req.get("X-CSRF-Token");
    if (!tokenFromCookie || !tokenFromHeader) {
      return res.status(403).json({ message: "Missing CSRF token" });
    }

    // Use constant-time comparison
    const a = Buffer.from(String(tokenFromCookie));
    const b = Buffer.from(String(tokenFromHeader));
    if (a.length !== b.length) {
      return res.status(403).json({ message: "Invalid CSRF token" });
    }
    if (!crypto.timingSafeEqual(a, b)) {
      return res.status(403).json({ message: "Invalid CSRF token" });
    }
    return next();
  } catch (err) {
    return res.status(403).json({ message: "CSRF validation failed" });
  }
};

export const generateCsrfToken = () => crypto.randomBytes(32).toString("hex");

export default requireCsrf;
````

## File: backend/middleware/error.middleware.js
````javascript
import logger from "../lib/logger.js";

export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: "Route not found" });
};

export const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || err.status || 500;
  if (statusCode >= 500) {
    logger.error({ err, method: req.method, path: req.originalUrl }, "server error");
  }

  const message =
    statusCode >= 500
      ? "Something went wrong. Please try again."
      : err.message || "Request failed";

  res.status(statusCode).json({ message });
};
````

## File: backend/middleware/validation.middleware.js
````javascript
import { ZodError } from "zod";

export const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      const parsed = schema.parse(req.body || {});
      req.body = parsed;
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({ path: e.path.join("."), message: e.message }));
        return res.status(400).json({ message: "Validation failed", errors });
      }
      return next(err);
    }
  };
};

export default validateBody;
````

## File: backend/tests/chapaSignature.test.js
````javascript
import assert from "node:assert/strict";
import crypto from "node:crypto";
import test from "node:test";

import { validateChapaCallbackSignature } from "../lib/chapa.js";

test("valid Chapa webhook signatures are accepted", () => {
  process.env.CHAPA_WEBHOOK_SECRET = "test-webhook-secret";
  const rawBody = JSON.stringify({ tx_ref: "ORDER-1", status: "success" });
  const signature = crypto
    .createHmac("sha256", process.env.CHAPA_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  assert.equal(validateChapaCallbackSignature({ rawBody, signature }), true);
});

test("invalid or missing Chapa webhook signatures are rejected", () => {
  process.env.CHAPA_WEBHOOK_SECRET = "test-webhook-secret";
  assert.equal(
    validateChapaCallbackSignature({
      rawBody: JSON.stringify({ tx_ref: "ORDER-1" }),
      signature: "bad-signature",
    }),
    false
  );

  delete process.env.CHAPA_WEBHOOK_SECRET;
  assert.equal(
    validateChapaCallbackSignature({
      rawBody: JSON.stringify({ tx_ref: "ORDER-1" }),
      signature: "bad-signature",
    }),
    false
  );
});
````

## File: backend/tests/orderSecurity.test.js
````javascript
import assert from "node:assert/strict";
import test from "node:test";

import {
  buildOrderProductsFromInventory,
  decrementStockWithRollback,
} from "../lib/orderSecurity.js";

test("order products use server prices and ignore client price tampering", () => {
  const { products, totalAmount } = buildOrderProductsFromInventory(
    [{ _id: "64a000000000000000000001", quantity: 2, price: 1 }],
    [{ _id: "64a000000000000000000001", name: "Runner", price: 750, stock: 5 }]
  );

  assert.equal(products[0].price, 750);
  assert.equal(totalAmount, 1500);
});

test("duplicate product lines are aggregated before stock validation", () => {
  assert.throws(
    () =>
      buildOrderProductsFromInventory(
        [
          { _id: "64a000000000000000000001", quantity: 3 },
          { _id: "64a000000000000000000001", quantity: 3 },
        ],
        [{ _id: "64a000000000000000000001", name: "Runner", price: 750, stock: 5 }]
      ),
    /Insufficient stock/
  );
});

test("stock decrement rolls back earlier products after a stock race", async () => {
  const calls = [];
  const ProductModel = {
    async updateOne(filter, update) {
      calls.push({ filter, update });
      if (filter._id === "second" && update.$inc.stock < 0) {
        return { modifiedCount: 0 };
      }
      return { modifiedCount: 1 };
    },
  };

  await assert.rejects(
    () =>
      decrementStockWithRollback(ProductModel, [
        { product: "first", quantity: 1 },
        { product: "second", quantity: 1 },
      ]),
    /Insufficient stock/
  );

  assert.deepEqual(calls, [
    { filter: { _id: "first", stock: { $gte: 1 } }, update: { $inc: { stock: -1 } } },
    { filter: { _id: "second", stock: { $gte: 1 } }, update: { $inc: { stock: -1 } } },
    { filter: { _id: "first" }, update: { $inc: { stock: 1 } } },
  ]);
});
````

## File: backend/tests/rateLimit.test.js
````javascript
import assert from "node:assert/strict";
import test from "node:test";

import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { redis } from "../lib/redis.js";

test("login account limiter is independent of client IP when keyByIp is false", async () => {
  redis.disconnect();

  const originalIncr = redis.incr;
  const originalExpire = redis.expire;
  const counts = new Map();

  redis.incr = async (key) => {
    const next = (counts.get(key) || 0) + 1;
    counts.set(key, next);
    return next;
  };
  redis.expire = async () => 1;

  try {
    const limiter = createRateLimiter({
      windowMs: 15 * 60 * 1000,
      maxRequests: 1,
      keyFn: (req) => `login:${String(req.body.email).toLowerCase()}`,
      keyByIp: false,
    });

    const makeReq = (ip) => ({
      ip,
      body: { email: "Admin@Example.com" },
      path: "/login",
    });

    let firstNextCalled = false;
    await limiter(makeReq("203.0.113.10"), {}, () => {
      firstNextCalled = true;
    });

    let statusCode = 0;
    let payload = null;
    await limiter(
      makeReq("198.51.100.20"),
      {
        status(code) {
          statusCode = code;
          return this;
        },
        json(body) {
          payload = body;
        },
      },
      () => assert.fail("second request should be rate limited")
    );

    assert.equal(firstNextCalled, true);
    assert.equal(statusCode, 429);
    assert.match(payload.message, /Too many requests/);
    assert.deepEqual([...counts.keys()], ["rate_limit:login:admin@example.com"]);
  } finally {
    redis.incr = originalIncr;
    redis.expire = originalExpire;
  }
});
````

## File: backend/validation/schemas.js
````javascript
import { z } from "zod";

const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const optionalImageSchema = z
  .string()
  .trim()
  .refine((value) => value === "" || value.startsWith("data:image/"), {
    message: "Image must be a base64 data URL",
  })
  .optional();
const requiredImageSchema = z
  .string()
  .trim()
  .min(1, "Image is required")
  .refine((value) => value.startsWith("data:image/"), {
    message: "Image must be a base64 data URL",
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const placeOrderSchema = z.object({
  cart: z.array(
    z.object({
      _id: objectIdSchema,
      quantity: z.coerce.number().int().min(1),
    })
  ).min(1),
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
  paymentMethod: z.enum(["COD", "Chapa", "Telebirr"]).optional(),
});

export const updateAdminProfileSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
});

export const updateAdminPasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(10),
});

export const updateContactNotificationSettingsSchema = z.object({
  emailNotificationsEnabled: z.boolean(),
  contactNotifyTo: z.string().trim().email(),
});

export const createAdminUserSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  password: z.string().min(10),
  role: z.literal("admin").optional(),
});

export const submitContactMessageSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(10).max(2000),
  sourcePage: z.string().trim().optional().default("home"),
  website: z.string().trim().optional().default(""),
});

export const createCategorySchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().optional(),
  image: requiredImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const editCategorySchema = z.object({
  name: z.string().trim().min(1).optional(),
  description: z.string().optional(),
  image: optionalImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const createProductSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  price: z.coerce.number().nonnegative(),
  image: requiredImageSchema,
  category: z.string().optional(),
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const editProductSchema = z.object({
  name: z.string().trim().min(1).optional(),
  description: z.string().optional(),
  price: z.coerce.number().nonnegative().optional(),
  stock: z.coerce.number().int().nonnegative().optional(),
  category: z.string().optional(),
  image: optionalImageSchema,
  imageOptions: z
    .object({
      width: z.coerce.number().int().positive().optional(),
      height: z.coerce.number().int().positive().optional(),
      cropMode: z.enum(["fill", "fit", "pad", "scale"]).optional(),
      removeBackground: z.boolean().optional(),
    })
    .optional(),
});

export const updateContactMessageStatusSchema = z.object({
  status: z.enum(["new", "reviewed", "closed"]),
});

export const editOrderSchema = z.object({
  customer: z
    .object({
      name: z.string().optional(),
      phoneNumber: z.string().optional(),
      email: z.string().email().optional().or(z.literal("")),
      address: z.string().optional(),
    })
    .optional(),
  products: z.array(
    z.object({
      product: z.union([objectIdSchema, z.object({ _id: objectIdSchema }).passthrough()]),
      quantity: z.coerce.number().int().min(1),
      price: z.coerce.number().nonnegative(),
    })
  ),
  orderStatus: z.enum(["processing", "shipped", "delivered", "canceled", "pending", "failed", "on hold", "returned"]).optional(),
  paymentMethod: z.enum(["Telebirr", "Chapa", "COD"]).optional(),
  paymentStatus: z.enum(["pending", "paid", "failed"]).optional(),
});

export default {
  loginSchema,
  placeOrderSchema,
  updateAdminProfileSchema,
  updateAdminPasswordSchema,
  updateContactNotificationSettingsSchema,
  createAdminUserSchema,
  submitContactMessageSchema,
  createCategorySchema,
  editCategorySchema,
  createProductSchema,
  editProductSchema,
  updateContactMessageStatusSchema,
  editOrderSchema,
};
````

## File: SECURITY_REMEDIATION_PLAN.md
````markdown
# DFXN_MERN — Security & Hardening Remediation Plan

**Audience:** GitHub Copilot / any coding agent implementing these fixes.
**Repo:** `beamlak04/DFXN_MERN` (Node.js/Express/MongoDB backend, React frontend, Chapa payment integration).
**Goal:** Bring the app to an industry-standard security baseline before production launch, with priority on financial-integrity and auth issues.

## How to use this document
Work through phases in order (P0 → P3). Each task lists: the file(s) to touch, the exact problem, the required fix, and acceptance criteria. Do not mark a task done until its acceptance criteria pass. Do not change unrelated code. After each phase, run the app and manually smoke-test checkout, login, and admin panel before moving to the next phase.

## Status as of latest remediation pass
✅ Done: Phase 0, Phase 1, Phase 2, Phase 3, and Phase 4 implementation tasks.
🟡 Operational follow-up: run the manual production-topology smoke tests listed in the Definition of Done before launch.

---

## Phase 0 — Setup

- [x] Add `helmet`, `express-rate-limit` (or continue using the existing Redis limiter), `zod` (or `joi`), and `express-mongo-sanitize` to `backend/package.json`.
- [x] Add a `.env.example` file (if missing) documenting every required env var, including new ones introduced below. Never commit real secrets.
- [x] Confirm `NODE_ENV=production` is set in the real deployment env (several security branches key off this).

---

## Phase 1 — P0 Critical (financial integrity & auth abuse) — fix before anything else

### 1.1 Server-side price/stock validation on order placement
**File:** `backend/controllers/order.controller.js` (`placeOrder`)

**Problem:** `totalAmount` and each line item's `price` are taken directly from `req.body.cart`, which is fully client-controlled. A user can submit any price/quantity and pay that amount via Chapa or COD.

**Fix:**
1. From `orderData.cart`, extract only `_id` and requested `quantity` from the client. Ignore any client-sent `price`.
2. Look up all referenced products in one query: `Product.find({ _id: { $in: productIds } })`.
3. Reject the order (400) if any product ID doesn't exist, is inactive, or requested `quantity` exceeds available `stock` (or quantity <= 0).
4. Build `products` array using the **server-fetched** `price` for each item, not client input.
5. Compute `totalAmount` from these server-fetched prices.
6. On success, decrement `stock` for each product (atomically, e.g. `Product.updateOne({ _id, stock: { $gte: qty } }, { $inc: { stock: -qty } })`), and if any decrement fails due to a stock race, roll back and reject the order (409 Conflict).

**Acceptance criteria:**
- Modifying `price` or `_id`/`quantity` payloads in devtools/Postman no longer changes the amount charged.
- Ordering more than available stock returns 400/409 and creates no order.
- Existing valid checkout flow (COD + Chapa) still works end-to-end.

### 1.2 Rate limit authentication endpoints
**Files:** `backend/routes/auth.route.js`, `backend/middleware/rateLimit.middleware.js`

**Problem:** `/api/auth/login` and `/api/auth/refreshAccessToken` have no rate limiting, enabling brute-force/credential-stuffing against admin accounts.

**Fix:**
1. Reuse `createRateLimiter` from `rateLimit.middleware.js`.
2. Apply a limiter keyed by IP **and** submitted email (to prevent both IP-based and account-based brute force) to `POST /api/auth/login`: e.g. 8 requests / 15 min.
3. Apply a looser limiter to `/api/auth/refreshAccessToken` (e.g., 30 / 15 min).
4. On repeated failed logins for the same account (track via Redis counter keyed by normalized email), consider a short account-level cool-down (e.g., lock for 5 min after 5 consecutive failures) independent of IP.

**Acceptance criteria:**
- After exceeding the threshold, `/api/auth/login` returns 429 regardless of which IP the requests come from, if targeting the same account.
- Legitimate login after a short wait still succeeds.

### 1.3 Fix client-IP trust (`x-forwarded-for` spoofing)
**Files:** `backend/server.js`, `backend/middleware/rateLimit.middleware.js`, `backend/controllers/contact.controller.js`

**Problem:** `x-forwarded-for` is read directly from the request with no `trust proxy` configuration, so any client can set an arbitrary value and bypass all IP-based rate limiting.

**Fix:**
1. In `server.js`, add `app.set("trust proxy", 1);` (adjust the number of hops to match your actual reverse proxy setup — e.g., 1 if behind a single Nginx/Cloudflare layer).
2. In `rateLimit.middleware.js` and `contact.controller.js`, replace manual `x-forwarded-for` parsing with Express's `req.ip` (which correctly honors `trust proxy`).
3. If not deployed behind a trusted proxy yet, do **not** trust `x-forwarded-for` at all — fall back to the raw socket IP.

**Acceptance criteria:**
- Sending a forged `x-forwarded-for` header no longer changes the rate-limit bucket used.
- Rate limiting still works correctly in the real deployment topology (test behind actual proxy/load balancer).

---

## Phase 2 — P1 High Priority

### 2.1 Enforce (or remove) Chapa webhook signature validation
**File:** `backend/controllers/order.controller.js` (`chapaPaymentCallback`), `backend/lib/chapa.js`

**Problem:** If signature validation fails, the code only logs a warning and continues processing. This is currently safe in practice only because `verifyChapaPayment(txRef)` re-checks status/amount directly against Chapa's API — but it makes the signature check misleading/dead code and is fragile if that secondary check is ever removed.

**Fix:**
1. Require `CHAPA_WEBHOOK_SECRET` to be set in production; fail startup (or log a loud warning) if missing when `NODE_ENV=production`.
2. In `chapaPaymentCallback`, if `signatureValid` is `false`, respond `401` and do not process the payload — do not silently fall through.
3. In `validateChapaCallbackSignature`, replace `digest === signature` with a timing-safe comparison: `crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))`, guarding against length mismatches first.

**Acceptance criteria:**
- A callback with a missing/invalid signature (when the secret is configured) is rejected with 401 and does not mutate order state.
- Valid Chapa callbacks still process correctly (test against Chapa sandbox).

**✅ Done:** `validateChapaCallbackSignature` uses `crypto.timingSafeEqual`, accepts hex or base64 signatures, and rejects callbacks when `CHAPA_WEBHOOK_SECRET` is unset. `CHAPA_WEBHOOK_SECRET` is documented in `.env.example` and `SECURITY.md`.

### 2.2 Stop leaking internal error details to clients
**Files:** all controllers (pattern: `res.status(500).json({ message: error.message })`)

**Problem:** Raw `error.message` (Mongo/Cloudinary/validation internals) is returned to the client in ~20+ places.

**Fix:**
1. Add a small `backend/lib/logger.js` using `pino` (or `winston`).
2. Add a centralized Express error-handling middleware in `server.js` registered after all routes.
3. In each controller's `catch` block: `logger.error(error)` then `res.status(500).json({ message: "Something went wrong. Please try again." })`. Keep specific, safe messages for expected validation errors (400s) — those are fine to keep descriptive.
4. Do this as a scripted find/replace across `backend/controllers/*.js`, but manually verify each 400-level "expected" error message stays user-facing and each 500-level "unexpected" error message is generic.

**Acceptance criteria:**
- No 500 response anywhere in the API contains a stack trace, file path, or raw driver error text.
- Errors are still fully visible in server-side logs for debugging.

### 2.3 Add Helmet and baseline security headers
**File:** `backend/server.js`

**Fix:**
```js
import helmet from "helmet";
app.use(helmet());
```
Configure CSP explicitly if the API serves any HTML/admin assets directly; otherwise the default API-safe helmet config is sufficient. Also ensure `app.disable("x-powered-by")` (Helmet does this by default).

**Acceptance criteria:** Response headers include `X-Content-Type-Options`, `X-Frame-Options`/frame-ancestors CSP, `Strict-Transport-Security` (in production over HTTPS), and no `X-Powered-By: Express`.

### 2.4 Fix ReDoS-able regex search in admin contact-message search
**File:** `backend/controllers/contact.controller.js` (`getContactMessages`)

**Fix:** Escape all regex metacharacters in the `search` query param before building `$regex`:
```js
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// then: { name: { $regex: escapeRegex(search), $options: "i" } }
```
Apply the same escaping anywhere else user input is passed into `$regex` (audit the whole codebase for other `$regex` usages).

**Acceptance criteria:** Submitting regex metacharacters (e.g. `(a+)+$`) in the search field is treated as a literal string, not a pattern, and returns quickly.

### 2.5 Remove or fix dead/broken server-side cart code
**File:** `backend/controllers/cart.controller.js`, `backend/models/user.model.js`, `backend/routes/cart.route.js`

**Problem:** References `user.cartItems`, a field that does not exist on the `User` schema; `updateProductQuantity` also has a typo (`user.CartItems`). This code throws at runtime if ever invoked and is unused attack surface.

**Fix — pick one:**
- **Option A (recommended if cart truly lives client-side today):** Delete `cart.controller.js`, `cart.route.js`, and its mount in `server.js`. Confirm frontend (`useCartStore`/`CartProvider`) doesn't call `/api/cart`.
- **Option B (if server-side cart is actually wanted):** Add a proper `cartItems: [{ product: ObjectId, quantity: Number }]` field to `user.model.js`, fix the typo, and add server-side stock/price checks consistent with 1.1.

**Acceptance criteria:** No route in the app can throw a `TypeError` from a missing schema field; `/api/cart/*` either works correctly end-to-end or does not exist.

### 2.6 Rate-limit public order/checkout endpoints
**File:** `backend/routes/order.route.js`

**Fix:** Apply `createRateLimiter` to `POST /place-order` (e.g., 10 requests / 10 min per IP) to prevent spam orders and abuse of your Chapa merchant account via repeated `initialize` calls.

**Acceptance criteria:** Rapid repeated order submissions from one IP are throttled with 429; normal checkout is unaffected.

---

## Phase 3 — P2 Medium Priority

### 3.1 Centralize input validation
**Files:** all controllers, new `backend/validators/*.js`

**Fix:** Introduce `zod` schemas per endpoint (login, createAdminUser, createProduct, editProduct, createCategory, placeOrder, submitContactMessage, etc.) and a small middleware `validate(schema)` that parses `req.body`/`req.params`/`req.query` and returns 400 with field-level errors on failure. Migrate hand-rolled validation (e.g., in `contact.controller.js`) to this pattern for consistency; keep behavior equivalent (same limits: name 2–80 chars, message 10–2000 chars, etc.).

**Acceptance criteria:** Every mutating endpoint has an explicit schema; invalid payloads return a consistent `{ message, errors: [...] }` 400 shape.

**✅ Done:** `backend/middleware/validation.middleware.js` and `backend/validation/schemas.js` are wired across mutating auth, order, admin settings, category, product, and contact-message endpoints with a consistent `{ message, errors: [...] }` validation response.

### 3.2 Standardize password policy
**Files:** `backend/models/user.model.js`, `backend/controllers/admin.controller.js` (`createAdminUser`, `updateAdminPassword`)

**Fix:** Set one minimum (recommend 10+ characters) consistently across the schema `minlength`, `createAdminUser`, and `updateAdminPassword`. Optionally add a basic strength check (reject top-10000 common passwords via a small local list, or use `zxcvbn`). Bump `bcrypt.genSalt` cost factor from 10 to 12 in `user.model.js` (admin-only signups, so the extra hashing cost is negligible for UX but meaningfully raises brute-force cost).

**Acceptance criteria:** All three places enforce the same minimum length; new admin passwords under the new minimum are rejected everywhere consistently.

### 3.3 Restrict/validate Cloudinary image uploads
**File:** `backend/lib/imageUpload.js`

**Fix:** 
1. Only accept base64 data URIs from the client (reject raw remote URLs) by checking the `image` string starts with `data:image/`.
2. Enforce an explicit `resource_type: "image"` and a max file size check before upload (reject base64 payloads over e.g. 8MB before sending to Cloudinary).
3. Validate MIME type against an allowlist (`image/jpeg`, `image/png`, `image/webp`).

**Acceptance criteria:** Passing a non-image or externally-hosted URL as `image` is rejected client-request-side (400) before reaching Cloudinary.

**✅ Done:** Remote URL uploads are rejected, only base64 `data:image/` inputs are accepted, upload size is capped by `MAX_IMAGE_UPLOAD_BYTES`, Cloudinary uses `resource_type: "image"`, and SVG is excluded from the allowlist.

### 3.4 Add CSRF mitigation for cookie-authenticated admin actions
**Files:** `backend/server.js`, `backend/middleware/*`, frontend admin forms

**Fix:** Since auth relies on httpOnly cookies with `sameSite: "strict"`, CSRF risk is already reduced, but add a belt-and-suspenders CSRF token (e.g., `csurf`-equivalent or a double-submit cookie pattern) for all state-changing `/api/admin/*` routes, or confirm and document that `sameSite: strict` + no cross-site admin usage is an accepted risk trade-off.

**Acceptance criteria:** Either CSRF tokens are required and validated on all admin POST/PUT/PATCH/DELETE routes, or a written risk acceptance is recorded in this doc.

**✅ Done:** Double-submit CSRF protection is required on admin state-changing routes and product create/edit/toggle/delete routes.

---

## Phase 4 — P3 Nice-to-Have / Operational Hardening

- [x] Add `express-mongo-sanitize` (or equivalent) globally to strip `$`/`.` operators from `req.body`/`req.query`/`req.params`, defending against NoSQL injection even though current queries mostly use typed lookups.
- [x] Confirm `CHAPA_DEFAULT_EMAIL` fallback (`chapa.test@gmail.com`) is not reachable in production config — gate behind `NODE_ENV !== "production"` or remove entirely for prod.
- [x] Log Chapa's own transaction ID (not just your internal `tx_ref`) on `order.model.js` for dispute/reconciliation purposes with banks/Chapa support.
- [x] Add structured audit log retention/rotation policy for `adminAuditLog.model.js` (e.g., TTL index or scheduled archival) so it doesn't grow unbounded.
- [x] Add automated tests (Jest/Supertest) covering: price-tampering rejection (1.1), login rate limiting (1.2), Chapa signature enforcement (2.1), and stock race conditions.
- [x] Add a `SECURITY.md` documenting how to report vulnerabilities and the env vars required for secure production deployment.

---

## Definition of Done

A phase is complete when:
1. All checkboxes in that phase are checked.
2. Manual smoke test: guest checkout (COD + Chapa sandbox), admin login, admin product/category CRUD, and contact form submission all still work.
3. No regressions in existing behavior beyond the intended security fix.
4. Any new environment variables are documented in `.env.example` and the README.

**Recommended order of execution:** Phase 1 (all three items) → Phase 2 → Phase 3 → Phase 4. Do not skip Phase 1 items; they are the difference between "has bugs" and "loses real money."
````

## File: SECURITY.md
````markdown
# Security Policy

## Reporting a Vulnerability

Please report suspected vulnerabilities privately to the repository owner or maintainer. Include:

- Affected endpoint, page, or workflow.
- Steps to reproduce.
- Expected impact.
- Any logs, request samples, or screenshots that help confirm the issue.

Do not open public issues for active vulnerabilities until a fix is available.

## Production Security Checklist

Required environment variables:

- `NODE_ENV=production`
- `MONGO_URI`
- `UPSTASH_REDIS_URL`
- `ACCESS_TOKEN_SECRET`
- `REFRESH_TOKEN_SECRET`
- `CLIENT_URLS`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET_KEY`
- `CHAPA_SECRET_KEY`
- `CHAPA_WEBHOOK_SECRET`
- `CHAPA_SIGNATURE_HEADER`
- `CHAPA_CALLBACK_URL`
- `CHAPA_RETURN_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `CONTACT_NOTIFY_TO`
- `MASTER_EMAIL`
- `MASTER_PASSWORD`
- `MASTER_NAME`

Recommended operational settings:

- `MAX_IMAGE_UPLOAD_BYTES=8388608`
- `ADMIN_AUDIT_LOG_RETENTION_DAYS=365`
- Run behind exactly the trusted proxy hops configured by `app.set("trust proxy", 1)`.
- Keep `CHAPA_DEFAULT_EMAIL` out of production payment flow; production online payments require a valid customer email.
- Rotate JWT, Chapa, Cloudinary, Redis, SMTP, and MongoDB secrets after any suspected exposure.
````

## File: backend/controllers/contact.controller.js
````javascript
import ContactMessage from "../models/contactMessage.model.js";
import { sendContactNotificationEmail } from "../lib/mailer.js";
import SystemSettings from "../models/systemSettings.model.js";
import logger from "../lib/logger.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeString = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
};

export const submitContactMessage = async (req, res) => {
  try {
    const name = normalizeString(req.body?.name);
    const email = normalizeString(req.body?.email).toLowerCase();
    const subject = normalizeString(req.body?.subject);
    const phone = normalizeString(req.body?.phone);
    const message = normalizeString(req.body?.message);
    const sourcePage = normalizeString(req.body?.sourcePage) || "home";
    const website = normalizeString(req.body?.website);

    // Honeypot field: silently accept to avoid signaling bots.
    if (website) {
      return res.status(200).json({
        message: "Message received successfully",
      });
    }

    if (!name || name.length < 2 || name.length > 80) {
      return res.status(400).json({
        message: "Name must be between 2 and 80 characters",
      });
    }

    if (!email || !emailPattern.test(email) || email.length > 120) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    if (subject.length > 120) {
      return res.status(400).json({
        message: "Subject must be 120 characters or less",
      });
    }

    if (phone.length > 30) {
      return res.status(400).json({
        message: "Phone number is too long",
      });
    }

    if (!message || message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        message: "Message must be between 10 and 2000 characters",
      });
    }

    const createdMessage = await ContactMessage.create({
      name,
      email,
      subject,
      phone,
      message,
      sourcePage,
      ipAddress: req.ip || "",
      userAgent: req.get("user-agent") || "",
    });

    try {
      const settings = await SystemSettings.findOne({ key: "global" })
        .select("emailNotificationsEnabled contactNotifyTo")
        .lean();

      const shouldNotify = settings?.emailNotificationsEnabled ?? true;
      const recipientAddress = settings?.contactNotifyTo || process.env.CONTACT_NOTIFY_TO || "";

      if (shouldNotify && recipientAddress) {
        await sendContactNotificationEmail(createdMessage, recipientAddress);
      }
    } catch (error) {
      // Notification should not fail the contact submission.
      console.log("contact notification email failed", error.message);
    }

    return res.status(201).json({
      message: "Message received successfully",
    });
  } catch (error) {
    logger.error({ err: error }, "error in submitContactMessage");
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
    const skip = (page - 1) * limit;
    const status = normalizeString(req.query.status);
    const search = normalizeString(req.query.search);

    const query = {};
    if (["new", "reviewed", "closed"].includes(status)) {
      query.status = status;
    }

    if (search) {
      const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const escapedSearch = escapeRegex(search);
      query.$or = [
        { name: { $regex: escapedSearch, $options: "i" } },
        { email: { $regex: escapedSearch, $options: "i" } },
        { subject: { $regex: escapedSearch, $options: "i" } },
        { message: { $regex: escapedSearch, $options: "i" } },
      ];
    }

    const [messages, total] = await Promise.all([
      ContactMessage.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      ContactMessage.countDocuments(query),
    ]);

    return res.status(200).json({
      messages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(Math.ceil(total / limit), 1),
      },
    });
  } catch (error) {
    logger.error({ err: error }, "error in getContactMessages");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const updateContactMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = normalizeString(req.body?.status);

    if (!["new", "reviewed", "closed"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value",
      });
    }

    const updated = await ContactMessage.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    return res.status(200).json({
      message: "Contact message status updated",
      contactMessage: updated,
    });
  } catch (error) {
    logger.error({ err: error }, "error in updateContactMessageStatus");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};
````

## File: backend/lib/auditLogger.js
````javascript
import mongoose from "mongoose";

import AdminAuditLog from "../models/adminAuditLog.model.js";
import User from "../models/user.model.js";
import { redis } from "./redis.js";

const getRequestIp = (req) => req?.ip || req?.socket?.remoteAddress || "";

const mapMongoStatus = (readyState) => {
  if (readyState === 1) return "connected";
  if (readyState === 2) return "connecting";
  if (readyState === 3) return "disconnecting";
  return "disconnected";
};

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildMonitorQuery = ({ status, action, route, actorRole, search }) => {
  const query = {};

  if (["success", "failure"].includes(status)) {
    query.status = status;
  }

  if (action) {
    query.action = { $regex: escapeRegex(action), $options: "i" };
  }

  if (route) {
    query.route = { $regex: escapeRegex(route), $options: "i" };
  }

  if (["admin", "master"].includes(actorRole)) {
    query["actor.role"] = actorRole;
  }

  if (search) {
    const escaped = escapeRegex(search);
    query.$or = [
      { action: { $regex: escaped, $options: "i" } },
      { resource: { $regex: escaped, $options: "i" } },
      { route: { $regex: escaped, $options: "i" } },
      { "actor.name": { $regex: escaped, $options: "i" } },
      { "actor.email": { $regex: escaped, $options: "i" } },
    ];
  }

  return query;
};

export const recordAuditEvent = async ({
  user,
  req,
  action,
  resource = "",
  status = "success",
  statusCode = 200,
  metadata = {},
}) => {
  if (!user) {
    return null;
  }

  try {
    return await AdminAuditLog.create({
      actor: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      action,
      resource,
      method: req?.method || "",
      route: req?.originalUrl || req?.url || "",
      status,
      statusCode,
      metadata,
      ipAddress: getRequestIp(req),
      userAgent: req?.get?.("user-agent") || "",
    });
  } catch (error) {
    console.log("audit log write failed", error.message);
    return null;
  }
};

export const buildMonitoringOverview = async (params = {}) => {
  const page = Math.max(Number(params.page) || 1, 1);
  const limit = Math.min(Math.max(Number(params.limit) || 10, 1), 50);
  const query = buildMonitorQuery(params);
  const skip = (page - 1) * limit;

  const [masterUsers, totalEvents, successEvents, failureEvents, filteredTotal, recentEvents, routeBreakdown, actorBreakdown] =
    await Promise.all([
      User.countDocuments({ role: "master" }),
      AdminAuditLog.countDocuments(),
      AdminAuditLog.countDocuments({ status: "success" }),
      AdminAuditLog.countDocuments({ status: "failure" }),
      AdminAuditLog.countDocuments(query),
      AdminAuditLog.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      AdminAuditLog.aggregate([
        { $match: query },
        {
          $group: {
            _id: "$route",
            count: { $sum: 1 },
            failures: {
              $sum: {
                $cond: [{ $eq: ["$status", "failure"] }, 1, 0],
              },
            },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]),
      AdminAuditLog.aggregate([
        { $match: query },
        {
          $group: {
            _id: {
              userId: "$actor.userId",
              name: "$actor.name",
              email: "$actor.email",
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]),
    ]);

  let redisStatus = "unavailable";
  try {
    redisStatus = redis.status || "unknown";
  } catch (error) {
    redisStatus = "unavailable";
  }

  const memoryUsage = process.memoryUsage();

  return {
    summary: {
      masterUsers,
      totalEvents,
      successEvents,
      failureEvents,
      uptimeSeconds: Math.floor(process.uptime()),
      databaseStatus: mapMongoStatus(mongoose.connection.readyState),
      cacheStatus: redisStatus,
      heapUsedMb: Number((memoryUsage.heapUsed / 1024 / 1024).toFixed(1)),
      rssMb: Number((memoryUsage.rss / 1024 / 1024).toFixed(1)),
    },
    filteredSummary: {
      totalEvents: filteredTotal,
      page,
      limit,
    },
    pagination: {
      page,
      limit,
      total: filteredTotal,
      totalPages: Math.max(Math.ceil(filteredTotal / limit), 1),
    },
    routeBreakdown: routeBreakdown.map((entry) => ({
      route: entry._id || "unknown",
      count: entry.count,
      failures: entry.failures,
    })),
    actorBreakdown: actorBreakdown.map((entry) => ({
      userId: entry._id?.userId,
      name: entry._id?.name || "Unknown",
      email: entry._id?.email || "",
      count: entry.count,
    })),
    recentEvents: recentEvents.map((event) => ({
      _id: event._id,
      action: event.action,
      resource: event.resource || "",
      method: event.method || "",
      route: event.route || "",
      status: event.status,
      statusCode: event.statusCode,
      metadata: event.metadata || {},
      actor: {
        name: event.actor?.name || "Unknown",
        email: event.actor?.email || "",
        role: event.actor?.role || "",
      },
      createdAt: event.createdAt,
    })),
  };
};
````

## File: backend/lib/imageUpload.js
````javascript
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
````

## File: backend/lib/mailer.js
````javascript
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
const smtpSecure = String(process.env.SMTP_SECURE || "false") === "true";

let transporter = null;

const isSmtpConfigured = () => {
  return Boolean(smtpHost && smtpPort && smtpUser && smtpPass);
};

const getTransporter = () => {
  if (!isSmtpConfigured()) {
    return null;
  }

  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
};

export const sendContactNotificationEmail = async (contactMessage, recipientAddress) => {
  const smtpTransport = getTransporter();
  const notifyTo = (recipientAddress || process.env.CONTACT_NOTIFY_TO || "").trim();
  if (!smtpTransport || !notifyTo) {
    return;
  }

  const subject = contactMessage.subject || "General inquiry";
  const phoneLine = contactMessage.phone
    ? `<p><strong>Phone:</strong> ${contactMessage.phone}</p>`
    : "";

  await smtpTransport.sendMail({
    from: process.env.SMTP_FROM || smtpUser,
    to: notifyTo,
    replyTo: contactMessage.email,
    subject: `[DFXN Contact] ${subject}`,
    html: `
      <h2>New contact message submitted</h2>
      <p><strong>Name:</strong> ${contactMessage.name}</p>
      <p><strong>Email:</strong> ${contactMessage.email}</p>
      ${phoneLine}
      <p><strong>Source:</strong> ${contactMessage.sourcePage}</p>
      <p><strong>Message:</strong></p>
      <p>${contactMessage.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
};
````

## File: backend/middleware/adminAudit.middleware.js
````javascript
import { recordAuditEvent } from "../lib/auditLogger.js";

const buildRoutePath = (req) => {
  const routePath = req?.route?.path || req?.path || req?.originalUrl || "";
  return `${req?.baseUrl || ""}${routePath}`.replace(/\/+/g, "/");
};

export const auditMasterActivity = (req, res, next) => {
  if (!req.user || !["admin", "master"].includes(req.user.role)) {
    return next();
  }

  const startedAt = Date.now();
  res.on("finish", () => {
    recordAuditEvent({
      user: req.user,
      req,
      action: `${req.method} ${buildRoutePath(req)}`,
      resource: buildRoutePath(req),
      status: res.statusCode >= 400 ? "failure" : "success",
      statusCode: res.statusCode,
      metadata: {
        durationMs: Date.now() - startedAt,
      },
    });
  });

  next();
};
````

## File: backend/middleware/rateLimit.middleware.js
````javascript
import { redis } from "../lib/redis.js";

const getClientIp = (req) => req.ip || req.socket?.remoteAddress || "unknown";

export const createRateLimiter = ({ windowMs, maxRequests, keyFn, keyByIp = true }) => {
  return async (req, res, next) => {
    try {
      const clientIp = getClientIp(req);
      const windowSeconds = Math.max(Math.ceil(windowMs / 1000), 1);
      const extraKey = typeof keyFn === "function" ? keyFn(req) : req.path;
      const key = keyByIp
        ? `rate_limit:${extraKey}:${clientIp}`
        : `rate_limit:${extraKey}`;

      const currentCount = await redis.incr(key);
      if (currentCount === 1) {
        await redis.expire(key, windowSeconds);
      }

      if (currentCount > maxRequests) {
        return res.status(429).json({
          message: "Too many requests. Please try again later.",
        });
      }

      return next();
    } catch (error) {
      // Fail open if limiter backend is unavailable.
      console.log("rate limiter fallback", error.message);
      return next();
    }
  };
};

export const normalizeEmail = (email) => String(email || "").trim().toLowerCase();

export const getEmailRateLimitKey = (email) => {
  const normalized = normalizeEmail(email);
  return normalized ? `email:${normalized}` : "email:unknown";
};

export const getLoginLockKey = (email) => `login_lock:${normalizeEmail(email)}`;

export const getLoginFailureKey = (email) => `login_failures:${normalizeEmail(email)}`;
````

## File: backend/models/adminAuditLog.model.js
````javascript
import mongoose from "mongoose";

const retentionDays = Math.max(
  Number(process.env.ADMIN_AUDIT_LOG_RETENTION_DAYS) || 365,
  1
);
const retentionSeconds = Math.round(retentionDays * 24 * 60 * 60);

const adminAuditLogSchema = new mongoose.Schema(
  {
    actor: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      name: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      role: {
        type: String,
        default: "",
      },
    },
    action: {
      type: String,
      required: true,
      trim: true,
    },
    resource: {
      type: String,
      default: "",
      trim: true,
    },
    method: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },
    route: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["success", "failure"],
      default: "success",
    },
    statusCode: {
      type: Number,
      default: 200,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    ipAddress: {
      type: String,
      default: "",
      trim: true,
    },
    userAgent: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

adminAuditLogSchema.index({ createdAt: -1 });
adminAuditLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: retentionSeconds });
adminAuditLogSchema.index({ "actor.userId": 1, createdAt: -1 });

const AdminAuditLog = mongoose.model("AdminAuditLog", adminAuditLogSchema);

export default AdminAuditLog;
````

## File: backend/models/contactMessage.model.js
````javascript
import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    subject: {
      type: String,
      trim: true,
      maxlength: 120,
      default: "General inquiry",
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 30,
      default: "",
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    sourcePage: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "home",
    },
    ipAddress: {
      type: String,
      trim: true,
      default: "",
    },
    userAgent: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
````

## File: backend/models/systemSettings.model.js
````javascript
import mongoose from "mongoose";

const systemSettingsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: "global",
    },
    emailNotificationsEnabled: {
      type: Boolean,
      default: true,
    },
    contactNotifyTo: {
      type: String,
      trim: true,
      lowercase: true,
      default: process.env.CONTACT_NOTIFY_TO || "",
    },
  },
  { timestamps: true }
);

const SystemSettings = mongoose.model("SystemSettings", systemSettingsSchema);

export default SystemSettings;
````

## File: backend/routes/contact.route.js
````javascript
import express from "express";
import { submitContactMessage } from "../controllers/contact.controller.js";
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { submitContactMessageSchema } from "../validation/schemas.js";

const router = express.Router();

const contactSubmitRateLimit = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 5,
});

router.post("/submit", contactSubmitRateLimit, validateBody(submitContactMessageSchema), submitContactMessage);

export default router;
````

## File: frontend/public/favico.svg
````xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1390 3992 c0 -2 10 -12 23 -22 l22 -18 3 -439 c2 -241 1 -457 -3
-481 -3 -23 -15 -51 -26 -61 -19 -17 -14 -18 158 -14 214 5 313 21 410 67 128
61 226 178 260 310 22 86 14 251 -16 328 -61 159 -208 275 -396 312 -69 13
-435 28 -435 18z m178 -17 c-7 -8 -128 -8 -135 -1 -4 3 27 6 67 6 40 0 71 -2
68 -5z m90 -2 c-16 -2 -40 -2 -55 0 -16 2 -3 4 27 4 30 0 43 -2 28 -4z m59 1
c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-214 -44 c3 -11 1 -18
-3 -15 -5 3 -7 -12 -5 -32 3 -21 2 -29 -1 -18 -12 44 -27 74 -35 69 -5 -3 -9
0 -9 5 0 20 47 12 53 -9z m282 6 c112 -25 187 -67 270 -152 118 -120 146 -360
63 -543 -24 -54 -117 -148 -173 -176 -22 -11 -42 -23 -45 -26 -12 -16 -161
-40 -248 -40 -144 -1 -132 -44 -132 477 0 514 -10 474 123 474 45 -1 109 -7
142 -14z m105 -1 c19 -7 28 -13 20 -13 -8 0 -31 6 -50 13 -19 7 -28 13 -20 13
8 0 31 -6 50 -13z m-412 -895 c3 11 5 11 9 2 2 -6 8 -10 13 -7 4 3 6 -4 3 -15
-6 -22 -33 -28 -33 -7 0 8 -4 7 -11 -3 -9 -12 -10 -12 -5 3 3 10 7 220 8 465
l3 447 5 -450 c3 -247 7 -443 8 -435z m521 844 c4 3 8 -1 8 -9 0 -19 0 -19
-25 4 -12 10 -19 21 -15 25 4 4 11 0 16 -9 4 -8 12 -13 16 -11z m46 -24 c3 -6
-1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m31 -47 c0 -15 -3 -20 -10
-13 -14 14 -16 37 -2 37 7 0 12 -11 12 -24z m74 -69 c0 -2 -8 0 -19 5 -10 6
-22 7 -26 3 -5 -4 -5 -1 -1 6 5 9 12 9 27 2 10 -6 19 -13 19 -16z m12 -26 c-7
-7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m-25 -10 c-3 -8 -6 -5
-6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m38 -40 l-3 -43 13 30 14 30 -2 -32
c-1 -17 -5 -29 -9 -26 -5 2 -8 -6 -8 -18 0 -53 -14 2 -19 74 -1 5 -6 5 -13 1
-7 -4 -8 -3 -4 5 4 6 12 9 17 6 5 -4 9 -1 9 4 0 6 2 11 4 11 3 0 3 -19 1 -42z
m44 -95 l-2 -38 -6 35 c-11 63 -22 5 -12 -65 6 -42 6 -76 -1 -99 -8 -24 -8
-43 0 -65 6 -17 7 -31 3 -31 -5 0 -11 10 -13 23 -7 34 -2 253 6 266 14 22 26
10 25 -26z m18 -135 c-2 -24 -4 -7 -4 37 0 44 2 63 4 43 2 -21 2 -57 0 -80z
m-20 40 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m1 -103 c-1 -19
-5 -32 -9 -27 -7 7 -1 62 7 62 3 0 4 -16 2 -35z m-39 -136 c-18 -26 -38 -42
-24 -20 3 5 1 12 -5 16 -5 3 -10 11 -10 18 0 6 6 3 13 -7 13 -18 14 -18 21 -1
4 10 2 21 -4 25 -7 4 -8 18 -4 35 l7 27 13 -32 c13 -29 12 -35 -7 -61z m-61
-63 c-2 -17 -7 -22 -17 -18 -10 4 -11 7 -3 10 7 2 12 10 12 18 0 8 2 14 5 14
3 0 4 -11 3 -24z m-13 -38 c5 4 5 1 1 -6 -6 -10 -11 -10 -22 -1 -8 6 -14 14
-14 16 0 3 6 0 13 -6 8 -6 18 -7 22 -3z m-35 -13 c0 -2 -10 -9 -22 -15 -22
-11 -22 -10 -4 4 21 17 26 19 26 11z m-573 -37 c-3 -7 -5 -2 -5 12 0 14 2 19
5 13 2 -7 2 -19 0 -25z m61 -115 c-21 -2 -57 -2 -80 0 -24 2 -7 4 37 4 44 0
63 -2 43 -4z m135 0 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z"/>
<path d="M2026 3192 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4
-9 -8z"/>
<path d="M2170 3291 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"/>
<path d="M2296 3971 l24 -24 0 -474 0 -474 -24 -22 -24 -22 95 0 c91 0 93 0
71 17 -23 17 -23 18 -26 308 l-3 291 78 -2 c99 -3 187 -29 227 -68 l31 -30 0
104 c0 58 -1 105 -2 105 -1 0 -15 -13 -31 -29 -36 -37 -111 -58 -219 -64 l-83
-4 0 171 c0 94 4 177 9 184 7 11 52 13 227 10 197 -4 224 -6 265 -25 26 -12
56 -32 68 -44 l21 -23 0 70 0 69 -364 0 -364 0 24 -24z m263 4 c-7 -7 -229 -8
-236 -1 -4 3 49 6 117 6 68 0 121 -2 119 -5z m417 -35 c2 -33 1 -33 -3 -4 l-4
32 -122 1 c-67 1 -123 4 -126 7 -3 2 53 3 125 2 l129 -3 1 -35z m-69 14 c-3
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-547 -16 c0 6 7 12 15 12
13 0 15 -59 15 -475 0 -446 -1 -475 -17 -474 -11 0 -13 3 -5 6 9 4 12 105 11
461 0 257 -4 448 -9 437 -4 -11 -8 -215 -7 -453 1 -238 -1 -423 -4 -410 -5 20
-7 18 -10 -12 -2 -19 -4 179 -4 442 0 262 3 471 7 465 6 -9 8 -9 8 1z m359
-355 c0 -29 -2 -33 -8 -18 -7 18 -4 55 5 55 2 0 4 -17 3 -37z m-59 -3 c-8 -5
-26 -9 -40 -9 -23 1 -23 2 5 9 43 11 52 11 35 0z m35 -10 c3 -6 -4 -10 -17
-10 -18 0 -20 2 -8 10 19 12 18 12 25 0z m-302 -597 c-13 -2 -35 -2 -50 0 -16
2 -5 4 22 4 28 0 40 -2 28 -4z"/>
<path d="M3020 3988 c0 -5 8 -8 18 -8 25 0 65 -46 131 -150 96 -150 136 -214
174 -275 21 -33 44 -69 52 -80 13 -19 10 -27 -43 -101 -31 -45 -95 -137 -142
-205 -103 -150 -134 -186 -174 -204 -30 -13 -28 -13 40 -13 70 1 70 1 66 27
-3 20 19 60 91 168 85 127 168 244 187 266 4 4 27 -25 51 -65 24 -40 71 -116
105 -168 83 -129 107 -177 100 -206 -6 -23 -5 -23 84 -22 49 1 90 5 90 9 0 5
-8 9 -18 9 -36 0 -76 54 -266 360 -42 69 -82 132 -88 141 -9 13 1 33 47 100
32 46 99 143 149 214 97 140 145 195 170 195 9 0 16 3 16 8 0 4 -29 7 -65 7
-59 0 -83 -7 -54 -17 15 -5 -26 -79 -112 -203 -38 -55 -93 -135 -122 -177 -28
-43 -55 -78 -58 -78 -4 0 -9 8 -13 18 -3 9 -29 53 -57 97 -96 148 -189 308
-189 325 0 9 4 20 9 25 6 6 -25 10 -85 10 -51 0 -94 -3 -94 -7z m150 -15 c0
-5 -15 -8 -34 -8 -19 0 -38 3 -42 8 -4 4 11 7 34 7 23 0 42 -3 42 -7z m614 -8
c-4 -8 -7 -15 -9 -15 -2 0 -5 7 -9 15 -3 9 0 15 9 15 9 0 12 -6 9 -15z m-640
-26 c-2 -4 1 -9 8 -11 7 -3 8 -7 3 -10 -6 -3 -18 2 -27 11 -16 16 -16 17 2 17
10 0 17 -3 14 -7z m46 -52 c9 15 11 15 6 1 -3 -9 -2 -19 2 -21 4 -2 2 -2 -5
-1 -6 2 -13 -2 -15 -8 -2 -6 -9 3 -16 18 -11 26 -11 27 2 11 14 -18 15 -18 26
0z m60 -92 c0 -5 -5 -3 -10 5 -6 10 -10 11 -10 3 0 -7 -5 -13 -10 -13 -6 0 -5
8 2 20 9 14 14 16 20 7 4 -7 8 -16 8 -22z m36 -65 c2 -26 0 -28 -16 -20 -10 5
-20 19 -23 30 -3 11 -1 18 4 14 5 -3 9 -12 9 -20 0 -8 5 -14 10 -14 13 0 13
16 -1 43 -9 18 -9 20 2 10 7 -7 14 -26 15 -43z m53 -73 c0 -8 -2 -8 -6 1 -4
10 -8 10 -21 0 -15 -12 -16 -11 -3 4 14 19 32 15 30 -5z m18 -43 c-3 -3 -12
-4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m18 -34 c-5 20 -4 22 5 8 5 -9 7
-23 4 -32 -5 -13 -9 -12 -25 8 -26 33 -24 48 2 16 l20 -25 -6 25z m34 -57 c-7
-10 -14 -19 -15 -21 -1 -2 -4 4 -8 13 -3 9 -2 13 3 10 5 -3 12 -1 16 5 3 5 9
10 12 10 3 0 -1 -8 -8 -17z m44 -60 c-4 -11 -3 -14 5 -9 17 10 15 1 -4 -14
-12 -11 -15 -11 -12 1 2 8 -3 13 -9 12 -20 -4 -15 15 5 20 9 3 18 5 19 6 1 0
-1 -6 -4 -16z m32 -58 c1 -14 -2 -22 -5 -19 -3 3 -5 16 -5 29 -1 14 2 22 5 19
3 -3 5 -16 5 -29z m35 -29 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11
10 11 6 0 10 -2 10 -4z m24 -62 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7
11 14 -7z m34 -39 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7 -7 10 -15 7 -18z
m-11 -37 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m37 -31 c-4
-13 -2 -17 5 -13 7 5 9 1 5 -9 -4 -11 -2 -14 9 -9 8 3 18 1 22 -5 3 -7 0 -8
-9 -5 -9 3 -16 1 -16 -5 0 -6 5 -11 10 -11 6 0 10 -8 10 -17 -1 -11 -10 -3
-25 22 -14 22 -22 48 -19 58 3 9 1 17 -4 17 -5 0 -9 7 -9 16 0 14 2 14 14 -2
7 -10 10 -27 7 -37z m51 -97 c-3 -5 -1 -10 4 -10 6 0 11 -5 11 -11 0 -8 -5 -8
-15 1 -13 11 -12 30 1 30 3 0 2 -4 -1 -10z m27 -42 c-8 -8 -9 -4 -5 13 4 13 8
18 11 10 2 -7 -1 -18 -6 -23z m26 -22 c-8 -6 -13 -18 -11 -26 4 -13 3 -13 -6
0 -15 21 -14 30 5 30 9 0 12 5 8 12 -5 7 -3 8 6 3 10 -6 10 -10 -2 -19z m37
-29 c6 -5 3 -7 -7 -3 -20 6 -25 -10 -5 -17 7 -3 5 -6 -5 -6 -11 -1 -18 6 -18
17 0 22 11 35 19 25 3 -4 11 -12 16 -16z m-628 -43 c-3 -3 -12 -4 -19 -1 -8 3
-5 6 6 6 11 1 17 -2 13 -5z m626 -1 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0
24 -2 18 -5z"/>
<path d="M3890 3988 c0 -5 5 -8 11 -8 5 0 17 -16 25 -35 11 -28 14 -112 14
-469 0 -279 -4 -445 -11 -463 -5 -15 -20 -36 -32 -45 -21 -17 -19 -18 63 -18
83 0 85 1 62 18 -13 10 -27 36 -32 57 -5 22 -10 231 -10 465 l0 425 34 -55
c41 -66 152 -239 296 -464 58 -89 146 -226 195 -304 58 -92 96 -142 107 -142
16 0 17 36 20 501 l3 501 23 18 c12 10 22 20 22 22 0 1 -31 3 -70 3 -38 0 -70
-2 -70 -4 0 -2 7 -9 15 -15 29 -21 35 -118 33 -491 l-3 -369 -100 157 c-55 87
-148 233 -207 325 -58 92 -138 217 -176 277 l-69 110 -72 5 c-39 3 -71 2 -71
-2z m129 -44 c-7 -9 -1 -19 21 -36 17 -13 32 -34 35 -47 3 -18 1 -20 -9 -12
-7 6 -16 9 -19 6 -4 -3 -5 -2 -2 2 3 3 0 12 -6 20 -6 7 -9 13 -5 13 3 0 -2 8
-11 18 -10 10 -24 17 -30 14 -7 -2 -13 1 -13 8 0 10 -3 10 -15 0 -12 -10 -15
-9 -15 5 0 14 6 16 30 11 17 -3 29 -2 26 2 -3 5 1 9 9 9 11 0 12 -4 4 -13z
m32 -21 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m62
-127 c15 -18 23 -36 20 -40 -4 -3 -1 -6 5 -6 7 0 11 -3 11 -7 -3 -21 2 -34 11
-28 6 4 9 1 8 -6 -2 -7 2 -13 9 -14 16 0 28 -14 28 -33 0 -9 5 -16 12 -15 8 2
10 -4 6 -14 -4 -11 -3 -14 6 -9 6 4 11 4 10 -1 -3 -20 2 -34 11 -28 6 3 7 -1
4 -10 -4 -10 -2 -15 7 -13 9 2 13 -4 11 -16 -2 -10 1 -16 5 -13 5 3 10 -4 10
-16 1 -12 6 -23 11 -25 6 -2 8 -13 5 -25 -4 -17 -3 -19 6 -7 8 12 12 9 20 -13
6 -16 15 -25 21 -22 6 4 7 -1 3 -11 -5 -15 -7 -15 -16 1 -8 14 -11 15 -19 4
-6 -10 -7 -7 -3 10 5 16 4 21 -4 17 -6 -4 -13 0 -16 8 -3 9 -8 24 -12 34 -3 9
-7 20 -7 24 -2 16 -64 77 -72 70 -5 -4 -3 1 5 10 11 14 9 19 -7 29 -12 7 -18
19 -14 27 3 10 1 13 -7 8 -6 -4 -10 -4 -9 1 5 13 -38 63 -47 55 -5 -4 -5 -2
-1 5 6 12 -29 82 -49 95 -7 5 -6 8 1 8 7 0 23 -15 37 -34z m290 -431 c4 3 2
-1 -3 -7 -9 -10 -13 -10 -19 1 -5 7 -14 11 -20 7 -7 -5 -8 -1 -4 10 5 13 3 15
-7 9 -9 -6 -11 -4 -5 4 5 9 13 7 29 -8 12 -12 26 -19 29 -16z m22 -65 c15 -22
31 -38 35 -35 4 2 7 -6 6 -18 -1 -12 7 -29 18 -38 16 -13 17 -17 5 -24 -8 -5
-11 -5 -7 0 4 4 0 14 -10 21 -9 7 -18 17 -18 23 -1 6 -2 16 -3 22 0 5 -6 7
-13 3 -7 -5 -8 -3 -3 6 6 10 4 12 -10 6 -16 -6 -16 -4 -4 11 12 15 12 16 -3
10 -13 -4 -15 -2 -11 10 4 10 2 14 -5 9 -6 -3 -14 -1 -18 5 -5 8 -3 9 6 4 10
-6 12 -4 7 8 -10 27 -2 20 28 -23z m92 -126 c-7 -8 15 -33 25 -28 3 2 4 -4 1
-15 -3 -10 1 -22 8 -26 8 -6 10 -4 5 6 -4 8 2 3 13 -10 12 -13 22 -33 22 -45
1 -11 5 -3 9 19 l7 40 1 -35 c1 -33 -16 -91 -17 -61 -1 7 -15 31 -32 52 -17
22 -32 47 -34 57 -1 9 -7 16 -12 15 -5 -1 -10 7 -10 18 -1 10 3 19 9 19 6 0 9
-3 5 -6z m-540 -200 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"/>
<path d="M3241 3974 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M1361 3914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M3130 3810 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M3336 3767 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
<path d="M3610 3620 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M3321 3514 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M3585 3381 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
<path d="M3405 3320 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
<path d="M3216 3253 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
<path d="M3550 3140 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M4416 3135 c4 -8 11 -15 16 -15 6 0 5 6 -2 15 -7 8 -14 15 -16 15 -2
0 -1 -7 2 -15z"/>
<path d="M3600 3056 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"/>
<path d="M2245 3020 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M2440 2486 c0 -37 4 -66 10 -66 6 0 10 26 10 59 0 33 -4 63 -10 66
-6 4 -10 -18 -10 -59z"/>
<path d="M2480 2545 c0 -3 9 -14 21 -26 22 -22 20 -66 -4 -81 -6 -4 -8 -10 -4
-14 3 -4 13 -1 22 6 21 18 19 83 -3 103 -18 17 -32 22 -32 12z"/>
<path d="M2560 2487 c0 -37 3 -67 8 -67 9 0 9 116 -1 126 -4 4 -7 -23 -7 -59z"/>
<path d="M2606 2541 c-3 -5 1 -11 9 -15 9 -3 15 0 15 9 0 16 -16 20 -24 6z"/>
<path d="M2655 2484 c0 -36 4 -64 10 -64 6 0 10 27 10 60 0 33 -4 61 -10 64
-6 2 -10 -22 -10 -60z"/>
<path d="M2700 2540 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"/>
<path d="M2750 2549 c-6 -55 -3 -129 5 -129 11 0 12 116 1 127 -3 3 -6 4 -6 2z"/>
<path d="M2897 2544 c-6 -6 79 -124 89 -124 11 0 1 20 -37 70 -23 30 -42 56
-43 58 -2 1 -5 -1 -9 -4z"/>
<path d="M2960 2539 c0 -5 4 -9 9 -9 5 0 12 -12 14 -27 l4 -28 2 28 c1 20 6
27 22 27 18 0 20 -5 18 -52 -2 -33 1 -53 9 -56 8 -2 12 14 12 57 0 51 -3 61
-17 62 -10 0 -30 2 -45 4 -16 2 -28 -1 -28 -6z"/>
<path d="M3062 2541 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z"/>
<path d="M3170 2540 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M3220 2544 c0 -2 11 -22 25 -44 14 -22 25 -44 25 -49 0 -12 29 -35
36 -28 4 3 0 12 -8 20 -7 8 -22 32 -32 55 -10 22 -25 43 -32 46 -8 3 -14 3
-14 0z"/>
<path d="M3286 2541 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"/>
<path d="M3325 2543 c-14 -4 -6 -123 8 -123 8 0 11 16 9 48 -4 71 -6 79 -17
75z"/>
<path d="M3370 2548 c-1 -2 -2 -31 -3 -66 -2 -55 0 -62 17 -62 15 0 16 3 6 15
-8 10 -11 32 -8 60 3 25 2 48 -3 51 -5 3 -9 4 -9 2z"/>
<path d="M3459 2546 c-8 -9 3 -126 12 -126 11 0 10 118 -1 125 -4 2 -9 3 -11
1z"/>
<path d="M3490 2543 c0 -1 9 -7 20 -13 16 -8 20 -8 20 4 0 9 -8 14 -20 13 -11
-1 -20 -2 -20 -4z"/>
<path d="M2820 2531 c0 -17 45 -111 53 -111 10 0 0 33 -24 83 -19 36 -29 46
-29 28z"/>
<path d="M3128 2480 c2 -37 8 -60 15 -60 8 0 11 19 9 60 -2 37 -8 60 -15 60
-8 0 -11 -19 -9 -60z"/>
<path d="M2892 2490 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path d="M2600 2490 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"/>
<path d="M2700 2490 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M3170 2490 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"/>
<path d="M3502 2491 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z"/>
<path d="M2800 2473 c0 -12 -4 -25 -10 -28 -12 -7 -13 -25 -2 -25 13 0 30 48
21 62 -6 9 -9 7 -9 -9z"/>
<path d="M2613 2443 c-18 -6 -16 -23 1 -23 17 0 30 16 19 23 -5 2 -14 2 -20 0z"/>
<path d="M3178 2433 c-8 -10 -3 -13 20 -13 16 0 32 6 35 13 3 7 -5 12 -20 12
-14 0 -29 -6 -35 -12z"/>
<path d="M3518 2443 c-24 -6 -23 -23 2 -23 11 0 20 7 20 15 0 8 -1 14 -2 14
-2 -1 -11 -3 -20 -6z"/>
<path d="M2890 2430 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"/>
<path d="M3410 2430 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M2706 2417 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
<path d="M3167 2399 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"/>
<path d="M3330 2390 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M2545 2380 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M2968 2383 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path d="M2475 2370 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
</g>
</svg>
````

## File: frontend/public/favicon.svg
````xml
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="16" fill="#111827"/>
  <text x="32" y="40" text-anchor="middle" fill="#F9FAFB" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="1.5">DFXN</text>
</svg>
````

## File: frontend/public/metadata.csv
````
Date,File_Path,Caption
2026-03-24 09:04:53+00:00,downloads/2026-03/photo_2026-03-24_09-04-53.jpg,**Dark color**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-03-24 09:02:35+00:00,downloads/2026-03/photo_2026-03-24_09-02-35.jpg,**Linen-Blend Drawstring Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-03-24 08:59:28+00:00,downloads/2026-03/photo_2026-03-24_08-59-28.jpg,**Dark navy blue color**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-21 09:58:58+00:00,downloads/2026-01/photo_2026-01-21_09-58-58.jpg,**Core Corporate Leather Sneaker**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-21 09:05:58+00:00,downloads/2026-01/photo_2026-01-21_09-05-58.jpg,**Suede Trainer Sneakers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-21 08:59:58+00:00,downloads/2026-01/photo_2026-01-21_08-59-58.jpg,**Men's Low-Top Sneakers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-19 09:29:58+00:00,downloads/2026-01/photo_2026-01-19_09-29-58.jpg,**New Jeans**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-19 09:29:58+00:00,downloads/2026-01/photo_2026-01-19_09-29-58 (1).jpg,**New Jeans**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-19 09:29:58+00:00,downloads/2026-01/photo_2026-01-19_09-29-58 (2).jpg,**New Jeans**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-19 09:29:58+00:00,downloads/2026-01/photo_2026-01-19_09-29-58 (3).jpg,**New Jeans**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-17 09:05:58+00:00,downloads/2026-01/photo_2026-01-17_09-05-58.jpg,**Gurkha-style trousers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-17 09:02:58+00:00,downloads/2026-01/photo_2026-01-17_09-02-58.jpg,**Gurkha-style trousers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-15 09:02:58+00:00,downloads/2026-01/photo_2026-01-15_09-02-58.jpg,**Gurkha-style trousers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-15 09:01:58+00:00,downloads/2026-01/photo_2026-01-15_09-01-58.jpg,**Gurkha-style trousers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-15 09:01:58+00:00,downloads/2026-01/photo_2026-01-15_09-01-58 (1).jpg,**Gurkha-style trousers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-12 13:58:01+00:00,downloads/2026-01/photo_2026-01-12_13-58-01.jpg,**Aldo Suede Chukka Boots**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-12 13:54:01+00:00,downloads/2026-01/photo_2026-01-12_13-54-01.jpg,**Loro Piana Summer Walk loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-10 18:15:10+00:00,downloads/2026-01/photo_2026-01-10_18-15-10.jpg,brown suede Chelsea boots.   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-09 13:48:01+00:00,downloads/2026-01/photo_2026-01-09_13-48-01.jpg,**Grey Perforated Suede Loafer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-09 13:47:01+00:00,downloads/2026-01/photo_2026-01-09_13-47-01.jpg,**Black Cap-Toe Oxford**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-09 13:46:01+00:00,downloads/2026-01/photo_2026-01-09_13-46-01.jpg,**Tommy Hilfiger Corporate Leather Cupsole Sneakers.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-09 13:45:13+00:00,downloads/2026-01/photo_2026-01-09_13-45-13.jpg,**Tommy Hilfiger Essential Leather Cupsole Sneakers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-09 13:31:01+00:00,downloads/2026-01/photo_2026-01-09_13-31-01.jpg,**bit loafer**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-08 13:33:29+00:00,downloads/2026-01/photo_2026-01-08_13-33-29.jpg,**Tommy Hilfiger Corporate Cupsole**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-08 13:29:01+00:00,downloads/2026-01/photo_2026-01-08_13-29-01.jpg,**Tommy Hilfiger Corporate Leather Sneakers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-08 13:27:01+00:00,downloads/2026-01/photo_2026-01-08_13-27-01.jpg,**brown suede Chelsea boots**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-08 13:26:01+00:00,downloads/2026-01/photo_2026-01-08_13-26-01.jpg,Black Embossed Gancini Loafers  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-06 12:32:02+00:00,downloads/2026-01/photo_2026-01-06_12-32-02.jpg,**Black Pebbled Leather Venetian Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-06 12:31:01+00:00,downloads/2026-01/photo_2026-01-06_12-31-01.jpg,**Bit Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-06 12:17:11+00:00,downloads/2026-01/photo_2026-01-06_12-17-11.jpg,No Caption
2026-01-05 12:29:01+00:00,downloads/2026-01/photo_2026-01-05_12-29-01.jpg,**Corduroy loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-05 12:29:01+00:00,downloads/2026-01/photo_2026-01-05_12-29-01 (1).jpg,**Navy Blue Suede Penny Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-05 12:28:01+00:00,downloads/2026-01/photo_2026-01-05_12-28-01.jpg,**White Perforated Leather Penny Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-03 12:27:01+00:00,downloads/2026-01/photo_2026-01-03_12-27-01.jpg,**Suede Penny Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-03 12:26:01+00:00,downloads/2026-01/photo_2026-01-03_12-26-01.jpg,**Black Leather Bit Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-03 12:25:09+00:00,downloads/2026-01/photo_2026-01-03_12-25-09.jpg,**Bugatti Wingtip Tassel Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-02 13:33:35+00:00,downloads/2026-01/photo_2026-01-02_13-33-35.jpg,**Burgundy Polished Leather Chain-Bit Loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-02 12:14:48+00:00,downloads/2026-01/photo_2026-01-02_12-14-48.jpg,**Brown Perforated Suede Loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-02 12:12:46+00:00,downloads/2026-01/photo_2026-01-02_12-12-46.jpg,**black bit loafers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2026-01-02 12:09:27+00:00,downloads/2026-01/photo_2026-01-02_12-09-27.jpg,**Slip-on Loafers  ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-27 09:18:01+00:00,downloads/2025-12/photo_2025-12-27_09-18-01.jpg,**Ellesse sneakers.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-27 09:18:01+00:00,downloads/2025-12/photo_2025-12-27_09-18-01 (1).jpg,**Suede Court Sneaker**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-25 09:16:01+00:00,downloads/2025-12/photo_2025-12-25_09-16-01.jpg,**Beverly Hills Polo Club sneakers.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-25 09:15:06+00:00,downloads/2025-12/photo_2025-12-25_09-15-06.jpg,**Scott Supertrac Speed RC.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-25 09:15:06+00:00,downloads/2025-12/photo_2025-12-25_09-15-06 (1).jpg,**Geox Spherica sneakers.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-23 09:14:01+00:00,downloads/2025-12/photo_2025-12-23_09-14-01.jpg,**Beverly Hills Polo Club brand.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-23 09:13:01+00:00,downloads/2025-12/photo_2025-12-23_09-13-01.jpg,**Beverly Hills Polo Club.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-23 09:13:01+00:00,downloads/2025-12/photo_2025-12-23_09-13-01 (1).jpg,**Nike LeBron 20 (LeBron XX)**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-21 09:12:01+00:00,downloads/2025-12/photo_2025-12-21_09-12-01.jpg,**Scott Supertrac Ultra RC**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-21 09:12:01+00:00,downloads/2025-12/photo_2025-12-21_09-12-01 (1).jpg,**U.S. Polo Assn. mens white sneakers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-21 09:11:01+00:00,downloads/2025-12/photo_2025-12-21_09-11-01.jpg,**green knit sock sneakers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-20 09:14:13+00:00,downloads/2025-12/photo_2025-12-20_09-14-13.jpg,**Beverly Hills Polo Club**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-20 09:13:36+00:00,downloads/2025-12/photo_2025-12-20_09-13-36.jpg,**Jacket **   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-20 09:10:50+00:00,downloads/2025-12/photo_2025-12-20_09-10-50.jpg,**VECTIV Fastpack.**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-20 09:10:06+00:00,downloads/2025-12/photo_2025-12-20_09-10-06.jpg,**Boggi Milano high-top sneakers**   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-20 09:09:01+00:00,downloads/2025-12/photo_2025-12-20_09-09-01.jpg,**Converse Chuck Taylor All Star**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-19 15:36:58+00:00,downloads/2025-12/photo_2025-12-19_15-36-58.jpg,**COLE HAAN**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-19 15:34:58+00:00,downloads/2025-12/photo_2025-12-19_15-34-58.jpg,**lace-up dress shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-19 15:29:58+00:00,downloads/2025-12/photo_2025-12-19_15-29-58.jpg,**Men's Horsebit Loafer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-17 15:27:58+00:00,downloads/2025-12/photo_2025-12-17_15-27-58.jpg,**Horsebit Loafer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-17 15:10:58+00:00,downloads/2025-12/photo_2025-12-17_15-10-58.jpg,**Louis Vuitton Monte Carlo Moccasin**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-15 15:00:37+00:00,downloads/2025-12/photo_2025-12-15_15-00-37.jpg,**Coat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-15 14:54:08+00:00,downloads/2025-12/photo_2025-12-15_14-54-08.jpg,**Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-15 14:53:46+00:00,downloads/2025-12/photo_2025-12-15_14-53-46.jpg,**Horsebit Loafer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-13 16:32:56+00:00,downloads/2025-12/photo_2025-12-13_16-32-56.jpg,**Tracksuit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-13 16:32:51+00:00,downloads/2025-12/photo_2025-12-13_16-32-51.jpg,**Tracksuit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-13 16:32:47+00:00,downloads/2025-12/photo_2025-12-13_16-32-47.jpg,**Tracksuit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-13 16:32:34+00:00,downloads/2025-12/photo_2025-12-13_16-32-34.jpg,**Tracksuit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-10 18:53:11+00:00,downloads/2025-12/photo_2025-12-10_18-53-11.jpg,**Two-piece Tracksuit ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-10 18:26:08+00:00,downloads/2025-12/photo_2025-12-10_18-26-08.jpg,**Two-piece Tracksuit ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-10 16:56:53+00:00,downloads/2025-12/photo_2025-12-10_16-56-53.jpg,**Two-piece Tracksuit ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-06 18:09:58+00:00,downloads/2025-12/photo_2025-12-06_18-09-58.jpg,**Ribbed polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-06 18:08:58+00:00,downloads/2025-12/photo_2025-12-06_18-08-58.jpg,**Black O T-Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-05 18:04:58+00:00,downloads/2025-12/photo_2025-12-05_18-04-58.jpg,**Ribbed polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-05 18:03:58+00:00,downloads/2025-12/photo_2025-12-05_18-03-58.jpg,**Ribbed polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-05 17:48:58+00:00,downloads/2025-12/photo_2025-12-05_17-48-58.jpg,**Black Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-03 17:34:50+00:00,downloads/2025-12/photo_2025-12-03_17-34-50.jpg,**Long-Sleeve Knit Polo**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-03 17:34:23+00:00,downloads/2025-12/photo_2025-12-03_17-34-23.jpg,**Long-Sleeve Knit Polo**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-03 17:29:35+00:00,downloads/2025-12/photo_2025-12-03_17-29-35.jpg,**Utility Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-02 10:23:57+00:00,downloads/2025-12/photo_2025-12-02_10-23-57.jpg,Formal Trousers  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-02 10:23:47+00:00,downloads/2025-12/photo_2025-12-02_10-23-47.jpg,Formal Trousers  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-12-02 10:21:44+00:00,downloads/2025-12/photo_2025-12-02_10-21-44.jpg,Formal Trousers  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-28 18:44:59+00:00,downloads/2025-11/photo_2025-11-28_18-44-59.jpg,**New** T-Shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-28 18:44:52+00:00,downloads/2025-11/photo_2025-11-28_18-44-52.jpg,**New** T-Shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-28 18:41:34+00:00,downloads/2025-11/photo_2025-11-28_18-41-34.jpg,**New** T-Shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-26 16:49:03+00:00,downloads/2025-11/photo_2025-11-26_16-49-03.jpg,**Steve Madden**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-26 16:47:11+00:00,downloads/2025-11/photo_2025-11-26_16-47-11.jpg,**Suede Cap-Toe Brogue Derby**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-26 16:45:53+00:00,downloads/2025-11/photo_2025-11-26_16-45-53.jpg,**Woven Leather Penny Loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-25 10:39:25+00:00,downloads/2025-11/photo_2025-11-25_10-39-25.jpg,**casual navy sneakers Polo Assn**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-25 10:29:40+00:00,downloads/2025-11/photo_2025-11-25_10-29-40.jpg,**cross-strap slip-on sandals**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-25 10:26:07+00:00,downloads/2025-11/photo_2025-11-25_10-26-07.jpg,**two-strap slide sandals**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-24 18:53:53+00:00,downloads/2025-11/photo_2025-11-24_18-53-53.jpg,**Vest Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-24 18:08:04+00:00,downloads/2025-11/photo_2025-11-24_18-08-04.jpg,**Vest Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-24 18:01:31+00:00,downloads/2025-11/photo_2025-11-24_18-01-31.jpg,**Vest Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-23 11:21:29+00:00,downloads/2025-11/photo_2025-11-23_11-21-29.jpg,zip-up sweater  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-23 11:08:09+00:00,downloads/2025-11/photo_2025-11-23_11-08-09.jpg,**zip-up sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-20 18:27:36+00:00,downloads/2025-11/photo_2025-11-20_18-27-36.jpg,**Lumberjack Sandals**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-20 18:26:11+00:00,downloads/2025-11/photo_2025-11-20_18-26-11.jpg,**Two-strap comfort sandal**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-20 18:17:41+00:00,downloads/2025-11/photo_2025-11-20_18-17-41.jpg,**white double-strap comfort sandals**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-19 18:28:50+00:00,downloads/2025-11/photo_2025-11-19_18-28-50.jpg,**Fosco luxury slip-on loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-19 18:25:11+00:00,downloads/2025-11/photo_2025-11-19_18-25-11.jpg,**Fosco luxury slip-on loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-19 18:11:14+00:00,downloads/2025-11/photo_2025-11-19_18-11-14.jpg,**black Fosco men’s slip-on loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-14 16:53:32+00:00,downloads/2025-11/photo_2025-11-14_16-53-32.jpg,**Cotton 2 piece cloth**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-14 16:51:22+00:00,downloads/2025-11/photo_2025-11-14_16-51-22.jpg,**Cotton 2 piece cloth**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-14 16:46:33+00:00,downloads/2025-11/photo_2025-11-14_16-46-33.jpg,**Cotton 2 piece cloth**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-12 16:14:33+00:00,downloads/2025-11/photo_2025-11-12_16-14-33.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-12 16:14:23+00:00,downloads/2025-11/photo_2025-11-12_16-14-23.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-12 16:14:16+00:00,downloads/2025-11/photo_2025-11-12_16-14-16.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-11 18:08:18+00:00,downloads/2025-11/photo_2025-11-11_18-08-18.jpg,**Porto Filo jacket and pants**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-11 18:07:48+00:00,downloads/2025-11/photo_2025-11-11_18-07-48.jpg,**Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-11 18:07:12+00:00,downloads/2025-11/photo_2025-11-11_18-07-12.jpg,**Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-11 18:06:36+00:00,downloads/2025-11/photo_2025-11-11_18-06-36.jpg,**Polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-10 18:29:22+00:00,downloads/2025-11/photo_2025-11-10_18-29-22.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-07 16:43:22+00:00,downloads/2025-11/photo_2025-11-07_16-43-22.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-06 16:36:45+00:00,downloads/2025-11/photo_2025-11-06_16-36-45.jpg,**New Watch  **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-06 16:36:36+00:00,downloads/2025-11/photo_2025-11-06_16-36-36.jpg,**New Watch  **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-06 16:16:06+00:00,downloads/2025-11/photo_2025-11-06_16-16-06.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-05 18:11:00+00:00,downloads/2025-11/photo_2025-11-05_18-11-00.jpg,**Complete Short **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-05 18:03:52+00:00,downloads/2025-11/photo_2025-11-05_18-03-52.jpg,**Complete Short **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-05 17:59:09+00:00,downloads/2025-11/photo_2025-11-05_17-59-09.jpg,**Complete Short **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-03 19:09:03+00:00,downloads/2025-11/photo_2025-11-03_19-09-03.jpg,New Suit  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-03 19:08:54+00:00,downloads/2025-11/photo_2025-11-03_19-08-54.jpg,Blue Black Suit  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-11-03 19:08:46+00:00,downloads/2025-11/photo_2025-11-03_19-08-46.jpg,Green Suit  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-31 17:51:01+00:00,downloads/2025-10/photo_2025-10-31_17-51-01.jpg,**New Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ:  ፍየል ቤት
2025-10-31 17:50:53+00:00,downloads/2025-10/photo_2025-10-31_17-50-53.jpg,**New Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ:  ፍየል ቤት
2025-10-31 17:40:26+00:00,downloads/2025-10/photo_2025-10-31_17-40-26.jpg,**New Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ:  ፍየል ቤት
2025-10-29 16:36:32+00:00,downloads/2025-10/photo_2025-10-29_16-36-32.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-29 16:36:28+00:00,downloads/2025-10/photo_2025-10-29_16-36-28.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-29 16:36:24+00:00,downloads/2025-10/photo_2025-10-29_16-36-24.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-29 16:36:18+00:00,downloads/2025-10/photo_2025-10-29_16-36-18.jpg,**Sport Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:38+00:00,downloads/2025-10/photo_2025-10-25_13-35-38.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:38+00:00,downloads/2025-10/photo_2025-10-25_13-35-38 (1).jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:37+00:00,downloads/2025-10/photo_2025-10-25_13-35-37.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:37+00:00,downloads/2025-10/photo_2025-10-25_13-35-37 (1).jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:37+00:00,downloads/2025-10/photo_2025-10-25_13-35-37 (2).jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:37+00:00,downloads/2025-10/photo_2025-10-25_13-35-37 (3).jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:36+00:00,downloads/2025-10/photo_2025-10-25_13-35-36.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-25 13:35:36+00:00,downloads/2025-10/photo_2025-10-25_13-35-36 (1).jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-24 16:03:01+00:00,downloads/2025-10/photo_2025-10-24_16-03-01.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-24 16:02:37+00:00,downloads/2025-10/photo_2025-10-24_16-02-37.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-24 16:02:29+00:00,downloads/2025-10/photo_2025-10-24_16-02-29.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-24 16:02:25+00:00,downloads/2025-10/photo_2025-10-24_16-02-25.jpg,**Baseball Hat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-22 13:04:33+00:00,downloads/2025-10/photo_2025-10-22_13-04-33.jpg,G**reen crewneck sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-22 13:02:42+00:00,downloads/2025-10/photo_2025-10-22_13-02-42.jpg,**brown crewneck sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-22 13:01:15+00:00,downloads/2025-10/photo_2025-10-22_13-01-15.jpg,C**ream white crewneck sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-22 12:59:04+00:00,downloads/2025-10/photo_2025-10-22_12-59-04.jpg,Casual Slim-Fit  Trousers  Color: Black  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-22 12:58:44+00:00,downloads/2025-10/photo_2025-10-22_12-58-44.jpg,**Casual Slim-Fit  Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-20 18:48:30+00:00,downloads/2025-10/photo_2025-10-20_18-48-30.jpg,**long sleeve shirt ** High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-20 18:47:14+00:00,downloads/2025-10/photo_2025-10-20_18-47-14.jpg,**long sleeve shirt**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-19 08:55:58+00:00,downloads/2025-10/photo_2025-10-19_08-55-58.jpg,**Brand: Clarks**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-19 08:18:58+00:00,downloads/2025-10/photo_2025-10-19_08-18-58.jpg,**Penny Loafers **  Brand: Cardamun  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-18 08:49:58+00:00,downloads/2025-10/photo_2025-10-18_08-49-58.jpg,**single-breasted casual blazer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-18 08:49:58+00:00,downloads/2025-10/photo_2025-10-18_08-49-58 (1).jpg,**single-breasted casual blazer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-18 08:47:58+00:00,downloads/2025-10/photo_2025-10-18_08-47-58.jpg,**single-breasted casual blazer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-18 08:42:58+00:00,downloads/2025-10/photo_2025-10-18_08-42-58.jpg,**single-breasted casual blazer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-17 08:09:58+00:00,downloads/2025-10/photo_2025-10-17_08-09-58.jpg,**New Suit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-17 08:04:58+00:00,downloads/2025-10/photo_2025-10-17_08-04-58.jpg,**Blue Black Suit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-17 08:03:58+00:00,downloads/2025-10/photo_2025-10-17_08-03-58.jpg,**Green Suit**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-16 18:29:51+00:00,downloads/2025-10/photo_2025-10-16_18-29-51.jpg,**Wingtip Oxford**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-16 17:28:51+00:00,downloads/2025-10/photo_2025-10-16_17-28-51.jpg,**White leather Sneakers**  Brand: ZARA  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-16 16:54:12+00:00,downloads/2025-10/photo_2025-10-16_16-54-12.jpg,Brand : Boggi Milano  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-13 10:52:37+00:00,downloads/2025-10/photo_2025-10-13_10-52-37.jpg,**Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-13 10:52:25+00:00,downloads/2025-10/photo_2025-10-13_10-52-25.jpg,**Louis Vuitton LV Driver Loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-13 10:52:15+00:00,downloads/2025-10/photo_2025-10-13_10-52-15.jpg,**Cole Haan Grandseries Wingtip Oxford Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-13 10:51:46+00:00,downloads/2025-10/photo_2025-10-13_10-51-46.jpg,**wingtip brogue dress shoe**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-12 02:11:23+00:00,downloads/2025-10/photo_2025-10-12_02-11-23.jpg,**Black Blazer** **Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-12 01:29:48+00:00,downloads/2025-10/photo_2025-10-12_01-29-48.jpg,**Olive Green Blazer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-12 01:14:14+00:00,downloads/2025-10/photo_2025-10-12_01-14-14.jpg,**Men’s trail-inspired casual sneakers ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-12 00:24:46+00:00,downloads/2025-10/photo_2025-10-12_00-24-46.jpg,No Caption
2025-10-12 00:24:46+00:00,downloads/2025-10/photo_2025-10-12_00-24-46 (1).jpg,No Caption
2025-10-12 00:24:46+00:00,downloads/2025-10/photo_2025-10-12_00-24-46 (2).jpg,**White denim jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-11 16:45:22+00:00,downloads/2025-10/photo_2025-10-11_16-45-22.jpg,**High Green** ** Quality Suit**  Size :- 48 - 58  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-11 16:44:32+00:00,downloads/2025-10/photo_2025-10-11_16-44-32.jpg,**High cream Quality Suit**  Size :- 48 - 58  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-11 16:43:39+00:00,downloads/2025-10/photo_2025-10-11_16-43-39.jpg,New Suit  Best for formal and Casual   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-10 17:39:01+00:00,downloads/2025-10/photo_2025-10-10_17-39-01.jpg,New Suit  Best for formal and Casual   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-09 18:06:07+00:00,downloads/2025-10/photo_2025-10-09_18-06-07.jpg,**DIESEL – 10 BAR**  **All-black**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-09 18:03:46+00:00,downloads/2025-10/photo_2025-10-09_18-03-46.jpg,**Full gold-tone**  **DIESEL**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-08 17:29:45+00:00,downloads/2025-10/photo_2025-10-08_17-29-45.jpg,Casual Slim-Fit  Trousers  Color: Black  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-08 17:29:01+00:00,downloads/2025-10/photo_2025-10-08_17-29-01.jpg,**Casual Slim-Fit  Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-08 17:28:40+00:00,downloads/2025-10/photo_2025-10-08_17-28-40.jpg,**Casual Slim-Fit  Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-06 17:30:20+00:00,downloads/2025-10/photo_2025-10-06_17-30-20.jpg,**lightweight Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-04 08:06:01+00:00,downloads/2025-10/photo_2025-10-04_08-06-01.jpg,**Scott sports shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-04 08:05:08+00:00,downloads/2025-10/photo_2025-10-04_08-05-08.jpg,**Scott sports shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-03 11:53:59+00:00,downloads/2025-10/photo_2025-10-03_11-53-59.jpg,**Scott sports shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-03 11:50:20+00:00,downloads/2025-10/photo_2025-10-03_11-50-20.jpg,**Scott sports shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-03 11:49:09+00:00,downloads/2025-10/photo_2025-10-03_11-49-09.jpg,**Scott sports shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-01 07:03:01+00:00,downloads/2025-10/photo_2025-10-01_07-03-01.jpg,**classic Black long-sleeve polo shirt.**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-01 07:03:01+00:00,downloads/2025-10/photo_2025-10-01_07-03-01 (1).jpg,**classic White long-sleeve polo shirt.**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-10-01 07:03:01+00:00,downloads/2025-10/photo_2025-10-01_07-03-01 (2).jpg,**Dark green jeans**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-30 07:01:37+00:00,downloads/2025-09/photo_2025-09-30_07-01-37.jpg,**Light Blue jeans**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-30 07:01:37+00:00,downloads/2025-09/photo_2025-09-30_07-01-37 (1).jpg,**light blue jeans**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-30 07:01:37+00:00,downloads/2025-09/photo_2025-09-30_07-01-37 (2).jpg,**Medium blue wash jeans**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-29 12:43:11+00:00,downloads/2025-09/photo_2025-09-29_12-43-11.jpg,**Mid-blue Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-29 12:22:34+00:00,downloads/2025-09/photo_2025-09-29_12-22-34.jpg,**Black Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-29 12:17:48+00:00,downloads/2025-09/photo_2025-09-29_12-17-48.jpg,**warm light-brown Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-29 12:05:26+00:00,downloads/2025-09/photo_2025-09-29_12-05-26.jpg,**Light Gray Trousers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-26 20:25:58+00:00,downloads/2025-09/photo_2025-09-26_20-25-58.jpg,**እንኳን ለብርሃነ መስቀሉ በሠላም አደረሳችሁ ::    Cloth City**
2025-09-25 19:10:38+00:00,downloads/2025-09/photo_2025-09-25_19-10-38.jpg,Casual Slim-Fit  Trousers  Color: Beige  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-25 19:10:30+00:00,downloads/2025-09/photo_2025-09-25_19-10-30.jpg,Casual Slim-Fit  Trousers  Color: Beige  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-25 19:10:10+00:00,downloads/2025-09/photo_2025-09-25_19-10-10.jpg,Casual Slim-Fit  Trousers  Color: Black  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-24 16:48:37+00:00,downloads/2025-09/photo_2025-09-24_16-48-37.jpg,**long sleeve shirt ** High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-24 16:48:31+00:00,downloads/2025-09/photo_2025-09-24_16-48-31.jpg,**long sleeve shirt**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-23 16:58:25+00:00,downloads/2025-09/photo_2025-09-23_16-58-25.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-23 16:20:42+00:00,downloads/2025-09/photo_2025-09-23_16-20-42.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-23 16:18:38+00:00,downloads/2025-09/photo_2025-09-23_16-18-38.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-23 16:18:06+00:00,downloads/2025-09/photo_2025-09-23_16-18-06.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-23 16:17:25+00:00,downloads/2025-09/photo_2025-09-23_16-17-25.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-22 18:30:51+00:00,downloads/2025-09/photo_2025-09-22_18-30-51.jpg,Casual Slim-Fit  Trousers  Color: Black  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-22 18:22:10+00:00,downloads/2025-09/photo_2025-09-22_18-22-10.jpg,Casual Slim-Fit  Trousers  Color: Beige  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-22 18:12:34+00:00,downloads/2025-09/photo_2025-09-22_18-12-34.jpg,Casual Slim-Fit  Trousers  Color :- Olive Green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-20 08:25:08+00:00,downloads/2025-09/photo_2025-09-20_08-25-08.jpg,Double-Breasted Coat  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-20 08:16:01+00:00,downloads/2025-09/photo_2025-09-20_08-16-01.jpg,**Brand: Jordan (by Nike)**  Model/Name: Air Jordan 5 Retro   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-20 08:16:01+00:00,downloads/2025-09/photo_2025-09-20_08-16-01 (1).jpg,**Brand: Salomon**  Model/Name: Salomon S/Lab Sense Ride (variant)  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-19 12:53:47+00:00,downloads/2025-09/photo_2025-09-19_12-53-47.jpg,**Brand: Salomon**  Model/Name: Salomon Ultra Flow  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-19 12:47:44+00:00,downloads/2025-09/photo_2025-09-19_12-47-44.jpg,**Brand: The North Face**  Model/Line: VECTIV Futurelight  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-19 12:31:35+00:00,downloads/2025-09/photo_2025-09-19_12-31-35.jpg,**Brand: Salomon**  Model/Name: Salomon Ultra Flow  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-18 18:29:46+00:00,downloads/2025-09/photo_2025-09-18_18-29-46.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-18 18:29:38+00:00,downloads/2025-09/photo_2025-09-18_18-29-38.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-18 18:15:22+00:00,downloads/2025-09/photo_2025-09-18_18-15-22.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-18 16:31:00+00:00,downloads/2025-09/photo_2025-09-18_16-31-00.jpg,**Brand: Salomon**  Model/Name: Salomon Ultra Glide 2  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-18 16:16:45+00:00,downloads/2025-09/photo_2025-09-18_16-16-45.jpg,**Brand: Adidas**  Model/Line: Cloudfoam  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-17 20:14:58+00:00,downloads/2025-09/photo_2025-09-17_20-14-58.jpg,**Porto Filo jacket and pants**  High quality original cloth    Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-16 08:54:01+00:00,downloads/2025-09/photo_2025-09-16_08-54-01.jpg,D**ress Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-16 08:50:13+00:00,downloads/2025-09/photo_2025-09-16_08-50-13.jpg,D**ress Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-16 08:46:01+00:00,downloads/2025-09/photo_2025-09-16_08-46-01.jpg,D**ress Shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-15 10:23:23+00:00,downloads/2025-09/photo_2025-09-15_10-23-23.jpg,C**ream cardigan sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-15 10:04:04+00:00,downloads/2025-09/photo_2025-09-15_10-04-04.jpg,**Brown cardigan sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-15 10:03:21+00:00,downloads/2025-09/photo_2025-09-15_10-03-21.jpg,B**lack cardigan sweater**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-10 18:05:38+00:00,downloads/2025-09/photo_2025-09-10_18-05-38.jpg,በዓሉ የሰላም፣ የጤና እና የፍቅር ይሁንላቹህ።    መልካም አዲስ አመት  Cloth City
2025-09-07 10:29:59+00:00,downloads/2025-09/photo_2025-09-07_10-29-59.jpg,**Loro Piana Summer Walk shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-09-04 06:32:50+00:00,downloads/2025-09/photo_2025-09-04_06-32-50.jpg,ለመላዉ የእስልምና እምነት ተከታዮች በሙሉ እንኳን ለነብዩ መሐመድ  የልደት በዓል (መውሊድ) በሠላም አደረሰዎ!  በዓሉ የሰላም፣ የጤና እና የፍቅር ይሁንላቹህ።    መልካም የመውሊድ በዓል!  Cloth City
2025-08-31 08:51:58+00:00,downloads/2025-08/photo_2025-08-31_08-51-58.jpg,**Air Jordan sneakers ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 08:46:58+00:00,downloads/2025-08/photo_2025-08-31_08-46-58.jpg,Air Jordan sneakers  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:45:58+00:00,downloads/2025-08/photo_2025-08-31_07-45-58.jpg,**Scott trail running shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:44:58+00:00,downloads/2025-08/photo_2025-08-31_07-44-58.jpg,**Salomon Sense Ride 5 Trail Running Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:43:58+00:00,downloads/2025-08/photo_2025-08-31_07-43-58.jpg,**Nike Wildhorse Trail Running Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:38:58+00:00,downloads/2025-08/photo_2025-08-31_07-38-58.jpg,**Scott Supertrac 3 GTX**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:38:58+00:00,downloads/2025-08/photo_2025-08-31_07-38-58 (1).jpg,**Scott Supertrac 3 Trail Running Shoe**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:36:58+00:00,downloads/2025-08/photo_2025-08-31_07-36-58.jpg,**Cole Haan GrandSeries Men’s Loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-31 07:33:58+00:00,downloads/2025-08/photo_2025-08-31_07-33-58.jpg,**pair of black leather wingtip brogue dress shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-30 08:22:43+00:00,downloads/2025-08/photo_2025-08-30_08-22-43.jpg,**minimalist black low-top sneakers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-30 08:21:36+00:00,downloads/2025-08/photo_2025-08-30_08-21-36.jpg,**Clarks slip-on brogue shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-30 08:19:57+00:00,downloads/2025-08/photo_2025-08-30_08-19-57.jpg,**wingtip brogue dress shoe**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-30 07:59:10+00:00,downloads/2025-08/photo_2025-08-30_07-59-10.jpg,**Cole Haan Grandseries Wingtip Oxford Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-30 07:55:58+00:00,downloads/2025-08/photo_2025-08-30_07-55-58.jpg,**suede brogue derby shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:41:20+00:00,downloads/2025-08/photo_2025-08-29_14-41-20.jpg,**Louis Vuitton LV Driver Loafers**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:37:58+00:00,downloads/2025-08/photo_2025-08-29_14-37-58.jpg,**Shoes**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:32:05+00:00,downloads/2025-08/photo_2025-08-29_14-32-05.jpg,**Classic Brown Suede Chukka Boots**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:30:03+00:00,downloads/2025-08/photo_2025-08-29_14-30-03.jpg,**Louis Vuitton Monte Carlo Moccasin**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:26:28+00:00,downloads/2025-08/photo_2025-08-29_14-26-28.jpg,**Clarks  Black Leather Brogue Strap **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:25:18+00:00,downloads/2025-08/photo_2025-08-29_14-25-18.jpg,**black leather penny loafer**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:18:30+00:00,downloads/2025-08/photo_2025-08-29_14-18-30.jpg,**Wool Overcoat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:06:55+00:00,downloads/2025-08/photo_2025-08-29_14-06-55.jpg,**Double-Breasted Overcoat **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:06:04+00:00,downloads/2025-08/photo_2025-08-29_14-06-04.jpg,**Double-Breasted Overcoat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:04:48+00:00,downloads/2025-08/photo_2025-08-29_14-04-48.jpg,**Double-Breasted Men’s Trench Coat**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:04:16+00:00,downloads/2025-08/photo_2025-08-29_14-04-16.jpg,**Double-Breasted Men’s Trench Coat ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 14:03:02+00:00,downloads/2025-08/photo_2025-08-29_14-03-02.jpg,**Shirt ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:57:33+00:00,downloads/2025-08/photo_2025-08-29_13-57-33.jpg,**classic polo collar ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:57:20+00:00,downloads/2025-08/photo_2025-08-29_13-57-20.jpg,**classic polo collar**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:56:08+00:00,downloads/2025-08/photo_2025-08-29_13-56-08.jpg,White  shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:55:14+00:00,downloads/2025-08/photo_2025-08-29_13-55-14.jpg,**classic polo collar**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:52:16+00:00,downloads/2025-08/photo_2025-08-29_13-52-16.jpg,shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:52:12+00:00,downloads/2025-08/photo_2025-08-29_13-52-12.jpg,shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:48:22+00:00,downloads/2025-08/photo_2025-08-29_13-48-22.jpg,polo shirt  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:46:26+00:00,downloads/2025-08/photo_2025-08-29_13-46-26.jpg,**White shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:46:10+00:00,downloads/2025-08/photo_2025-08-29_13-46-10.jpg,**polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:45:28+00:00,downloads/2025-08/photo_2025-08-29_13-45-28.jpg,**polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-29 13:44:55+00:00,downloads/2025-08/photo_2025-08-29_13-44-55.jpg,**polo shirt**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-27 10:29:01+00:00,downloads/2025-08/photo_2025-08-27_10-29-01.jpg,wristwatch  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-27 07:03:11+00:00,downloads/2025-08/photo_2025-08-27_07-03-11.jpg,**Reward (Excellanc Collection)**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-26 12:54:32+00:00,downloads/2025-08/photo_2025-08-26_12-54-32.jpg,**Parfum **  🔹 Product Name: Tom Ford Jasmin Rouge 🔹 Type: Eau de Parfum (EDP) 🔹 Size: 100 ml  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-26 12:47:23+00:00,downloads/2025-08/photo_2025-08-26_12-47-23.jpg,**Parfum **  **Brand**: Chanel  **Fragrance Line**: Bleu de Chanel  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-26 12:45:40+00:00,downloads/2025-08/photo_2025-08-26_12-45-40.jpg,**Parfum **  **Brand**: Christian Dior **Fragrance** Line: Sauvage **Type**: Eau de Parfum (EDP)  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-26 11:23:11+00:00,downloads/2025-08/photo_2025-08-26_11-23-11.jpg,No Caption
2025-08-26 11:23:11+00:00,downloads/2025-08/photo_2025-08-26_11-23-11 (1).jpg,**light grey**  Color :- light grey  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-26 11:22:53+00:00,downloads/2025-08/photo_2025-08-26_11-22-53.jpg,**Olive** green  Color :- Olive green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-26 11:22:34+00:00,downloads/2025-08/photo_2025-08-26_11-22-34.jpg,**Camel Beige**  Color :- Camel Beige  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-08-23 15:27:17+00:00,downloads/2025-08/photo_2025-08-23_15-27-17.jpg,**Reward Men’s wristwatch**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-21 17:25:31+00:00,downloads/2025-08/photo_2025-08-21_17-25-31.jpg,**gold-tone leather strap watch**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-21 16:28:43+00:00,downloads/2025-08/photo_2025-08-21_16-28-43.jpg,**Toward VIP men’s wristwatch**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-21 16:23:36+00:00,downloads/2025-08/photo_2025-08-21_16-23-36.jpg,**Gold-Tone Chronograph Watch**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-20 17:53:19+00:00,downloads/2025-08/photo_2025-08-20_17-53-19.jpg,D**ark brown shade Jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-19 17:50:29+00:00,downloads/2025-08/photo_2025-08-19_17-50-29.jpg,**Bomber** Jacket  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-19 17:37:41+00:00,downloads/2025-08/photo_2025-08-19_17-37-41.jpg,**Bomber** Jacket  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-18 07:59:58+00:00,downloads/2025-08/photo_2025-08-18_07-59-58.jpg,**Navy blue Chore jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-16 04:44:49+00:00,downloads/2025-08/photo_2025-08-16_04-44-49.jpg,light  jacket   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-13 14:57:08+00:00,downloads/2025-08/photo_2025-08-13_14-57-08.jpg,light  jacket   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-12 11:46:47+00:00,downloads/2025-08/photo_2025-08-12_11-46-47.jpg,**light tan jacket **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-11 16:40:33+00:00,downloads/2025-08/photo_2025-08-11_16-40-33.jpg,**light olive men’s jacket**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-11 16:17:14+00:00,downloads/2025-08/photo_2025-08-11_16-17-14.jpg,**olive green Chelsea boots ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-11 13:54:35+00:00,downloads/2025-08/photo_2025-08-11_13-54-35.jpg,**suede chukka boots **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-11 13:53:11+00:00,downloads/2025-08/photo_2025-08-11_13-53-11.jpg,**black suede Chelsea boots ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-06 09:54:34+00:00,downloads/2025-08/photo_2025-08-06_09-54-34.jpg,**Camel wool overcoat ** Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-06 09:36:48+00:00,downloads/2025-08/photo_2025-08-06_09-36-48.jpg,**Polaris Brown Suede Slide Sandals**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-06 09:29:49+00:00,downloads/2025-08/photo_2025-08-06_09-29-49.jpg,wool overcoat  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-05 09:20:44+00:00,downloads/2025-08/photo_2025-08-05_09-20-44.jpg,Polaris Double Buckle Slide Sandals – Olive Green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-08-05 09:05:38+00:00,downloads/2025-08/photo_2025-08-05_09-05-38.jpg,No Caption
2025-08-05 09:05:37+00:00,downloads/2025-08/photo_2025-08-05_09-05-37.jpg,Polaris men's slide sandal  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-31 20:32:22+00:00,downloads/2025-07/photo_2025-07-31_20-32-22.jpg,**Camel Beige**  Color :- Camel Beige  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-31 18:46:58+00:00,downloads/2025-07/photo_2025-07-31_18-46-58.jpg,**Olive** green  Color :- Olive green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-30 04:04:40+00:00,downloads/2025-07/photo_2025-07-30_04-04-40.jpg,If you're qualified only **DM** us @albashfashionn
2025-07-29 18:43:46+00:00,downloads/2025-07/photo_2025-07-29_18-43-46.jpg,**Olive** green  Color :- Olive green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-29 18:42:12+00:00,downloads/2025-07/photo_2025-07-29_18-42-12.jpg,**Olive** green  Color :- Olive green  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-29 15:37:47+00:00,downloads/2025-07/photo_2025-07-29_15-37-47.jpg,No Caption
2025-07-29 15:37:47+00:00,downloads/2025-07/photo_2025-07-29_15-37-47 (1).jpg,**light grey**  Color :- light grey  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-26 11:29:17+00:00,downloads/2025-07/photo_2025-07-26_11-29-17.jpg,"2 pic jacket and pants  High quality original cloth   Brand:- Porto  Color :-  White, Black, Gray  and Dusty Blue  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-07-26 10:32:09+00:00,downloads/2025-07/photo_2025-07-26_10-32-09.jpg,"**2 pic jacket and pants**  High quality original cloth   Brand:- Porto  Color :-  `White, Black, Gray  and Dusty Blue`  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-07-26 10:31:50+00:00,downloads/2025-07/photo_2025-07-26_10-31-50.jpg,"**2 pic jacket and pants**  High quality original cloth   Brand:- Porto  Color :-  `White, Black, Gray  and Dusty Blue`  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: `ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-07-24 18:50:11+00:00,downloads/2025-07/photo_2025-07-24_18-50-11.jpg,**Vest**   Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ`
2025-07-24 18:49:03+00:00,downloads/2025-07/photo_2025-07-24_18-49-03.jpg,**Vest**   Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ`
2025-07-24 18:47:53+00:00,downloads/2025-07/photo_2025-07-24_18-47-53.jpg,**Vest**   Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ`
2025-07-18 17:47:24+00:00,downloads/2025-07/photo_2025-07-18_17-47-24.jpg,🇺🇸 **Tracksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:46:01+00:00,downloads/2025-07/photo_2025-07-18_17-46-01.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:54+00:00,downloads/2025-07/photo_2025-07-18_17-45-54.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:38+00:00,downloads/2025-07/photo_2025-07-18_17-45-38.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:19+00:00,downloads/2025-07/photo_2025-07-18_17-45-19.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:14+00:00,downloads/2025-07/photo_2025-07-18_17-45-14.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:10+00:00,downloads/2025-07/photo_2025-07-18_17-45-10.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:45:05+00:00,downloads/2025-07/photo_2025-07-18_17-45-05.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 17:44:57+00:00,downloads/2025-07/photo_2025-07-18_17-44-57.jpg,`🇺🇸` Tra**cksuit**  Best for winter and summer cloth  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ :-                `1. ፍየል ቤት ከዮናስ ጨርጨር አጠገብ       2. መሃል ፒያሳ ከሲኒማ አምፒር አጠገብ`
2025-07-18 14:38:04+00:00,downloads/2025-07/photo_2025-07-18_14-38-04.jpg,**Beige Puffer Jacket**  Available on :- ፍየል ቤት ከዮናስ ጨርጨር አገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-18 14:28:25+00:00,downloads/2025-07/photo_2025-07-18_14-28-25.jpg,**Beige Puffer Jacket**  Available on :- ፍየል ቤት ከዮናስ ጨርጨር አገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-17 15:59:55+00:00,downloads/2025-07/photo_2025-07-17_15-59-55.jpg,**Taupe Double-Breasted Trench Coat ** Available on :- ፍየል ቤት ከዮናስ ጨርጨር አተገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-17 14:59:55+00:00,downloads/2025-07/photo_2025-07-17_14-59-55.jpg,**Taupe Double-Breasted Trench Coat ** Available on :- ፍየል ቤት ከዮናስ ጨርጨር አተገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-16 20:08:35+00:00,downloads/2025-07/photo_2025-07-16_20-08-35.jpg,**Baseball Hat ** Best for winter and summer cloth   Location :- ፒያሳ ከሲኒማ አምፒር አጠገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-16 20:04:45+00:00,downloads/2025-07/photo_2025-07-16_20-04-45.jpg,**Baseball Hat ** Best for winter and summer cloth   Location :- ፒያሳ ከሲኒማ አምፒር አጠገብ   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-14 08:49:03+00:00,downloads/2025-07/photo_2025-07-14_08-49-03.jpg,Winter Jacket   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-14 08:48:11+00:00,downloads/2025-07/photo_2025-07-14_08-48-11.jpg,Jacket   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-14 08:47:50+00:00,downloads/2025-07/photo_2025-07-14_08-47-50.jpg,Jacket   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-11 14:02:19+00:00,downloads/2025-07/photo_2025-07-11_14-02-19.jpg,**Winter Jacket **  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-11 13:14:25+00:00,downloads/2025-07/photo_2025-07-11_13-14-25.jpg,**Navy blue Casual Sneakers**  Brand:  Beverly Hills Polo Club  Type: Casual/Basketball-inspired sneaker. 👞  Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-11 13:14:07+00:00,downloads/2025-07/photo_2025-07-11_13-14-07.jpg,**Scott Supertrac Amphib**  Brand: Scott  Type: Casual/Basketball-inspired sneaker. 👞  Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-10 05:06:16+00:00,downloads/2025-07/photo_2025-07-10_05-06-16.jpg,white sneakers  Brand: Polo Club pair  Type: Casual/Basketball-inspired sneaker. 👞   Size :- 38 - 44 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-10 05:02:21+00:00,downloads/2025-07/photo_2025-07-10_05-02-21.jpg,**Scott Supertrac Amphib**  Brand: Scott  Type: Casual/Basketball-inspired sneaker. 👞   Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-10 04:46:16+00:00,downloads/2025-07/photo_2025-07-10_04-46-16.jpg,**Puma Rebound LayUp Low**  **Puma Smash **  Brand: Puma  Type: Casual/Basketball-inspired sneaker. 👞   Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-07-05 18:34:37+00:00,downloads/2025-07/photo_2025-07-05_18-34-37.jpg,**Tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-05 18:34:21+00:00,downloads/2025-07/photo_2025-07-05_18-34-21.jpg,**Tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-05 18:33:45+00:00,downloads/2025-07/photo_2025-07-05_18-33-45.jpg,**Tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-05 17:44:01+00:00,downloads/2025-07/photo_2025-07-05_17-44-01.jpg,**Tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-04 00:00:15+00:00,downloads/2025-07/photo_2025-07-04_00-00-15.jpg,**Tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-03 23:56:53+00:00,downloads/2025-07/photo_2025-07-03_23-56-53.jpg,T**racksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-03 23:40:05+00:00,downloads/2025-07/photo_2025-07-03_23-40-05.jpg,T**racksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-03 12:17:20+00:00,downloads/2025-07/photo_2025-07-03_12-17-20.jpg,**Loro Piana Baseball Hat ** Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-03 11:40:22+00:00,downloads/2025-07/photo_2025-07-03_11-40-22.jpg,**Baseball Hat ** Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-03 11:11:23+00:00,downloads/2025-07/photo_2025-07-03_11-11-23.jpg,**Loro Piana Baseball Hat ** Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-07-02 21:03:12+00:00,downloads/2025-07/photo_2025-07-02_21-03-12.jpg,**Modern Single-Breasted Beige Overcoat**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-06-26 08:12:05+00:00,downloads/2025-06/photo_2025-06-26_08-12-05.jpg,**tracksuit**  Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-06-23 18:27:51+00:00,downloads/2025-06/photo_2025-06-23_18-27-51.jpg,ሙሉ ቱታ    Best for winter and summer cloth   Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-19 05:00:17+00:00,downloads/2025-06/photo_2025-06-19_05-00-17.jpg,ሙሉ ቱታ    Best for winter and summer  Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-18 20:28:22+00:00,downloads/2025-06/photo_2025-06-18_20-28-22.jpg,No Caption
2025-06-18 20:28:22+00:00,downloads/2025-06/photo_2025-06-18_20-28-22 (1).jpg,**በሁለቱም በኩል  የሚለበስ ቦመር ጃኬት**  Best for winter and summer  Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-13 14:42:03+00:00,downloads/2025-06/photo_2025-06-13_14-42-03.jpg,**White** long-sleeve   Best for winter and summer  Location :- ፍየል ቤት ከዮናስ ጨርጨር አጠገብ  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-11 17:44:42+00:00,downloads/2025-06/photo_2025-06-11_17-44-42.jpg,**FLANNEL SHIRT JACKET**  Best for winter and summer  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-10 13:45:13+00:00,downloads/2025-06/photo_2025-06-10_13-45-13.jpg,**FLANNEL SHIRT JACKET**  Best for winter and summer  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-06 05:34:58+00:00,downloads/2025-06/photo_2025-06-06_05-34-58.jpg,**Crocodile-Embossed Horsebit Loafer**  Brand: `Mr Walker`   designed for dressy and smart-casual settings 👞  Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-05 05:30:12+00:00,downloads/2025-06/photo_2025-06-05_05-30-12.jpg,"**Porto Filo jacket and pants**  High quality original cloth   Brand:- Porto  Color :-  `White, Black, Gray  and Dusty Blue`  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት"
2025-06-04 05:30:53+00:00,downloads/2025-06/photo_2025-06-04_05-30-53.jpg,Model: Rebound LayUp Lo  **Puma Smash **  Brand: Puma  Type: Casual/Basketball-inspired sneaker. 👞   Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-06-03 06:20:16+00:00,downloads/2025-06/photo_2025-06-03_06-20-16.jpg,"**Puma Smash **  Brand: Puma  They pair well with jeans, joggers, or chinos and offer a clean, fresh aesthetic that works year-round. 👞  Size :- `38 - 44` 👟  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-05-15 20:40:49+00:00,downloads/2025-05/photo_2025-05-15_20-40-49.jpg,"B**rown leather wingtip brogue (Oxford-style) **   Perfect for formal events, office wear, or elevating your everyday look 👞  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-05-15 20:24:10+00:00,downloads/2025-05/photo_2025-05-15_20-24-10.jpg,"**Brown leather wingtip Oxford** ** ** Perfect for formal events, office wear, or elevating your everyday look 👞  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`"
2025-05-15 20:15:00+00:00,downloads/2025-05/photo_2025-05-15_20-15-00.jpg,"**Sardinelli Oxfords ** Perfect for formal events, office wear, or elevating your everyday look 👞  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት"
2025-05-01 10:29:00+00:00,downloads/2025-05/photo_2025-05-01_10-29-00.jpg,**High blue** **Quality Suit**  Size :- 48 -58   Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-05-01 10:28:50+00:00,downloads/2025-05/photo_2025-05-01_10-28-50.jpg,**High cream Quality Suit**  Size :- 48 - 58  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-05-01 10:15:20+00:00,downloads/2025-05/photo_2025-05-01_10-15-20.jpg,**High brown Quality Suit**  Size :- 48 - 58  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-05-01 10:13:28+00:00,downloads/2025-05/photo_2025-05-01_10-13-28.jpg,**High Green** ** Quality Suit**  Size :- 48 - 58  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-04-21 09:20:26+00:00,downloads/2025-04/photo_2025-04-21_09-20-26.jpg,Lacoste Colorblock Tracksuit 🏃‍  Brand : Lacoste Type: Tracksuit (hoodie and sweatpants)  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-04-19 13:43:33+00:00,downloads/2025-04/photo_2025-04-19_13-43-33.jpg,**Porto Filo jacket and pants**  High quality cloth  Brand:- Porto  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-04-18 05:35:04+00:00,downloads/2025-04/photo_2025-04-18_05-35-04.jpg,No Caption
2025-04-18 05:35:04+00:00,downloads/2025-04/photo_2025-04-18_05-35-04 (1).jpg,"Oxford  Full-grain leather upper & Leather sole with rubber grip  Perfect for formal events, office wear, or elevating your everyday look 👞  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት"
2025-04-17 10:02:33+00:00,downloads/2025-04/photo_2025-04-17_10-02-33.jpg,**lacoste tracksuits 🏃‍**  Brand : **lacoste** Type: **Tracksuit (hoodie and sweatpants)**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-04-17 06:04:59+00:00,downloads/2025-04/photo_2025-04-17_06-04-59.jpg,**lacoste tracksuits 🏃‍**  Brand : **lacoste** Type: **Tracksuit (hoodie and sweatpants)**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-04-16 17:59:53+00:00,downloads/2025-04/photo_2025-04-16_17-59-53.jpg,**lacoste tracksuits** 🏃‍  Brand : **lacoste** Type: Tracksuit (hoodie and sweatpants)  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት
2025-04-16 17:58:31+00:00,downloads/2025-04/photo_2025-04-16_17-58-31.jpg,**Nike tracksuits 🏃‍**  Brand : **Nike** Type: **Tracksuit (hoodie and sweatpants)**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-04-15 13:15:15+00:00,downloads/2025-04/photo_2025-04-15_13-15-15.jpg,No Caption
2025-04-15 13:15:15+00:00,downloads/2025-04/photo_2025-04-15_13-15-15 (1).jpg,"**Handcrafted navy blue Brogue Oxford**  __Full-grain leather upper & Leather sole with rubber grip__  Perfect for formal events, office wear, or elevating your everyday look 👞  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት"
2025-04-14 08:04:06+00:00,downloads/2025-04/photo_2025-04-14_08-04-06.jpg,**Adidas tracksuits 🏃‍**  Brand : **Adidas** Type: **Tracksuit (hoodie and sweatpants)**  Contact us Phone 📞 :- +251927686868 Telegram 💬 :- @ClothCity_Chat  📍`አድራሻ: ቁጥር 1 መሃል ፒያሳ          ቁጥር 2 አራት ኪሎ          ቁጥር 3 ፍየል ቤት`
2025-04-13 17:17:56+00:00,downloads/2025-04/photo_2026-03-24_22-19-39.jpg,No Caption
````

## File: frontend/src/contexts/CartContext.js
````javascript
import { createContext } from "react";

export const CartContext = createContext();
````

## File: frontend/src/lib/imagePreview.js
````javascript
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
````

## File: frontend/src/pages/AdminContactMessages.jsx
````javascript
import React, { useEffect, useMemo, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const STATUS_OPTIONS = ["all", "new", "reviewed", "closed"];

const badgeClassByStatus = {
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-yellow-100 text-yellow-700",
  closed: "bg-green-100 text-green-700",
};

const formatDate = (value) => {
  if (!value) {
    return "-";
  }
  return new Date(value).toLocaleString();
};

const AdminContactMessages = () => {
  const {
    fetchContactMessages,
    contactMessages,
    contactMessagesLoading,
    contactMessagesPagination,
    updateContactMessageStatus,
  } = useAdminStore();

  const [statusFilter, setStatusFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchInput.trim());
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    fetchContactMessages({
      page,
      limit: 20,
      status: statusFilter,
      search: searchTerm,
    });
  }, [fetchContactMessages, page, statusFilter, searchTerm]);

  const hasPagination = useMemo(
    () => Number(contactMessagesPagination.totalPages || 1) > 1,
    [contactMessagesPagination.totalPages]
  );

  const handleStatusUpdate = async (messageId, status) => {
    const success = await updateContactMessageStatus(messageId, status);
    if (success && statusFilter !== "all") {
      fetchContactMessages({
        page,
        limit: 20,
        status: statusFilter,
        search: searchTerm,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="contacts">
        <div className="rounded border shadow-sm bg-white">
          <div className="px-4 py-3 border-b flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <h2 className="text-lg font-semibold">Customer Complaints</h2>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search by name, email, subject"
                className="px-3 py-2 border rounded-lg text-sm w-full sm:w-72"
              />
              <select
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value);
                  setPage(1);
                }}
                className="px-3 py-2 border rounded-lg text-sm"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All statuses" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Sender</th>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-left">Received</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {contactMessagesLoading ? (
                  <tr>
                    <td className="px-4 py-6 text-gray-500" colSpan={5}>
                      Loading contact messages...
                    </td>
                  </tr>
                ) : contactMessages.length ? (
                  contactMessages.map((message) => (
                    <React.Fragment key={message._id}>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <p className="font-medium">{message.name}</p>
                          <p className="text-xs text-gray-600">{message.email}</p>
                        </td>
                        <td className="px-4 py-3">{message.subject || "General inquiry"}</td>
                        <td className="px-4 py-3 text-xs text-gray-600">{formatDate(message.createdAt)}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${badgeClassByStatus[message.status] || "bg-gray-100 text-gray-700"}`}
                          >
                            {message.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 space-x-2">
                          <button
                            className="text-xs text-gray-700 underline"
                            onClick={() =>
                              setExpandedId((prev) => (prev === message._id ? "" : message._id))
                            }
                          >
                            {expandedId === message._id ? "Hide" : "View"}
                          </button>
                          {message.status !== "reviewed" && (
                            <button
                              className="text-xs text-yellow-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "reviewed")}
                            >
                              Mark Reviewed
                            </button>
                          )}
                          {message.status !== "closed" && (
                            <button
                              className="text-xs text-green-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "closed")}
                            >
                              Close
                            </button>
                          )}
                          {message.status !== "new" && (
                            <button
                              className="text-xs text-blue-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "new")}
                            >
                              Reopen
                            </button>
                          )}
                        </td>
                      </tr>
                      {expandedId === message._id && (
                        <tr className="bg-slate-50">
                          <td className="px-4 py-3" colSpan={5}>
                            <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                            <p className="text-xs text-gray-500 mt-2">
                              Source: {message.sourcePage || "home"}
                            </p>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-6 text-gray-500" colSpan={5}>
                      No contact messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {hasPagination && (
            <div className="px-4 py-3 border-t flex items-center justify-between">
              <p className="text-xs text-gray-600">
                Page {contactMessagesPagination.page} of {contactMessagesPagination.totalPages}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                  className="px-3 py-1 text-xs border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setPage((prev) =>
                      Math.min(prev + 1, Number(contactMessagesPagination.totalPages || 1))
                    )
                  }
                  disabled={page >= Number(contactMessagesPagination.totalPages || 1)}
                  className="px-3 py-1 text-xs border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminContactMessages;
````

## File: frontend/src/pages/AdminMonitoring.jsx
````javascript
import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const AdminMonitoring = () => {
  const { monitoringData, monitoringLoading, fetchMonitoring } = useAdminStore();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState("all");
  const [actorRole, setActorRole] = useState("all");
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchMonitoring({ page, limit, status, actorRole, search, route });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [page, limit, status, actorRole, search, route, fetchMonitoring]);

  useEffect(() => {
    setPage(1);
  }, [limit, status, actorRole, search, route]);

  const pagination = monitoringData.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  const summaryCards = [
    { label: "Total Events", value: monitoringData.summary.totalEvents },
    { label: "Successful", value: monitoringData.summary.successEvents },
    { label: "Failures", value: monitoringData.summary.failureEvents },
    {
      label: "Filtered Events",
      value: monitoringData.filteredSummary.totalEvents,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="monitoring">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Monitoring</h1>
              <p className="text-sm text-gray-500">
                Review audit events, server health, and master/admin activity.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Showing {monitoringData.filteredSummary.totalEvents} events across {pagination.totalPages} pages
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {summaryCards.map((card) => (
              <MetricCard key={card.label} label={card.label} value={card.value} />
            ))}
          </div>

          <section className="bg-white rounded-xl shadow p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
              <FilterSelect label="Status" value={status} onChange={setStatus} options={[
                { label: "All statuses", value: "all" },
                { label: "Success", value: "success" },
                { label: "Failure", value: "failure" },
              ]} />
              <FilterSelect label="Actor" value={actorRole} onChange={setActorRole} options={[
                { label: "All actors", value: "all" },
                { label: "Admin", value: "admin" },
                { label: "Master", value: "master" },
              ]} />
              <FilterInput label="Search" value={search} onChange={setSearch} placeholder="Action, route, name..." />
              <FilterInput label="Route" value={route} onChange={setRoute} placeholder="/admin/products" />
              <FilterSelect label="Page Size" value={String(limit)} onChange={(value) => setLimit(Number(value))} options={[
                { label: "10 / page", value: "10" },
                { label: "25 / page", value: "25" },
                { label: "50 / page", value: "50" },
              ]} />
            </div>
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
            <section className="bg-white rounded-xl shadow overflow-hidden">
              <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between gap-3">
                <h2 className="font-semibold text-gray-800">Audit Events</h2>
                <span className="text-sm text-gray-500">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
              </div>

              {monitoringLoading ? (
                <div className="p-4 text-sm text-gray-500">Loading monitoring data...</div>
              ) : monitoringData.recentEvents.length > 0 ? (
                <div className="divide-y">
                  {monitoringData.recentEvents.map((event) => (
                    <article key={event._id} className="p-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-gray-900">{event.action}</h3>
                          <StatusPill status={event.status} code={event.statusCode} />
                        </div>
                        <p className="text-sm text-gray-600">
                          {event.actor.name}{event.actor.email ? ` · ${event.actor.email}` : ""}{event.actor.role ? ` · ${event.actor.role}` : ""}
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.method} {event.route}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(event.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 md:text-right">
                        <p>{event.resource || "resource not set"}</p>
                        {event.metadata?.durationMs !== undefined && <p>{event.metadata.durationMs} ms</p>}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-sm text-gray-500">No events match the current filters.</div>
              )}

              <div className="px-4 py-3 border-t bg-gray-50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="px-3 py-2 rounded-md border disabled:opacity-50"
                  onClick={() => setPage((current) => Math.max(current - 1, 1))}
                  disabled={pagination.page <= 1 || monitoringLoading}
                >
                  Previous
                </button>
                <span className="text-sm text-gray-500">
                  {pagination.total === 0 ? "No records" : `${pagination.total} records`}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 rounded-md border disabled:opacity-50"
                  onClick={() => setPage((current) => Math.min(current + 1, pagination.totalPages))}
                  disabled={pagination.page >= pagination.totalPages || monitoringLoading}
                >
                  Next
                </button>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="bg-white rounded-xl shadow p-4">
                <h2 className="font-semibold text-gray-800 mb-3">Top Routes</h2>
                <div className="space-y-3">
                  {monitoringData.routeBreakdown.length > 0 ? (
                    monitoringData.routeBreakdown.map((item) => (
                      <div key={item.route} className="flex items-center justify-between gap-3 text-sm border-b pb-2">
                        <div>
                          <p className="font-medium text-gray-900">{item.route || "unknown"}</p>
                          <p className="text-gray-500">{item.failures} failures</p>
                        </div>
                        <span className="font-semibold text-gray-700">{item.count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No route activity for the current filter set.</p>
                  )}
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-4">
                <h2 className="font-semibold text-gray-800 mb-3">Top Actors</h2>
                <div className="space-y-3">
                  {monitoringData.actorBreakdown.length > 0 ? (
                    monitoringData.actorBreakdown.map((item) => (
                      <div key={`${item.name}-${item.email}`} className="flex items-center justify-between gap-3 text-sm border-b pb-2">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-500">{item.email || "No email"}</p>
                        </div>
                        <span className="font-semibold text-gray-700">{item.count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No actor breakdown available.</p>
                  )}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </AdminNav>
    </div>
  );
};

const MetricCard = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
    <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
  </div>
);

const FilterSelect = ({ label, value, onChange, options }) => (
  <label className="block text-sm">
    <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full border rounded-md px-3 py-2 bg-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

const FilterInput = ({ label, value, onChange, placeholder }) => (
  <label className="block text-sm">
    <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</span>
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-md px-3 py-2"
    />
  </label>
);

const StatusPill = ({ status, code }) => (
  <span
    className={`text-xs px-2 py-1 rounded-full ${
      status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
    }`}
  >
    {status} {code}
  </span>
);

export default AdminMonitoring;
````

## File: frontend/src/stores/useContactStore.js
````javascript
import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useContactStore = create((set) => ({
  submitting: false,
  submitContactMessage: async (payload) => {
    set({ submitting: true });
    try {
      const response = await axios.post("/contact/submit", payload);
      toast.success(response.data?.message || "Message sent successfully");
      set({ submitting: false });
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
      set({ submitting: false });
      return false;
    }
  },
}));
````

## File: backend/lib/cloudinary.js
````javascript
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: process.cwd() + '/.env' });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

export default cloudinary
````

## File: backend/lib/db.js
````javascript
import mongoose from "mongoose"


export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected : ${conn.connection.host}`)
    }catch(error){
        console.log("Error connecting to MongoDB", error.message);
        process.exit(1)
    };
    
}
````

## File: backend/lib/redis.js
````javascript
import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config({ path: process.cwd() + '/.env' }); 

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  connectTimeout: 20000, // 10 seconds
  retryStrategy(times) {
    const delay = Math.min(times * 100, 2000);
    return delay;
  }
});
````

## File: backend/models/category.model.js
````javascript
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        default: "",
    },
    image:{
        type: String,
        required: [true, "Image is required"],
    },
},{timestamps: true}
)

const Category = mongoose.model("Category", categorySchema);
export default Category;
````

## File: backend/models/product.model.js
````javascript
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        min: 0,
        required: true
    },
    image:{
        type: String,
        required: [true, "Image is required"]
    },
    stock: {
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
},{timestamps: true});


const Product = mongoose.model("Product", productSchema);

export default Product;
````

## File: frontend/src/components/LoadingSpinner.jsx
````javascript
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='relative'>
            <div className='w-20 h-20 border-gray-600 rounded-full'/>
            <div className='w-20 h-20 border-gray-800 border-t-2 animate-spin rounded-full absolute top-0 left-0'/>
            <div className='sr-only'>Loading</div>
        </div>
    </div>
  )
}

export default LoadingSpinner
````

## File: frontend/src/pages/PaymentResult.jsx
````javascript
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { useOrderStore } from "../stores/useOrderStore";
import { Loader } from "lucide-react";

const PaymentResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const txRef = searchParams.get("tx_ref");
  const status = searchParams.get("status");
  const shouldVerifyOnReturn = import.meta.env.VITE_CHAPA_VERIFY_ON_RETURN === "true";

  const { clearCartItems } = useContext(CartContext);
  const { getPaymentResult, verifyPayment } = useOrderStore();

  const [result, setResult] = useState(null);
  const [isResolving, setIsResolving] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const isReturnSuccess = useMemo(() => {
    return String(status || "").toLowerCase() === "success";
  }, [status]);

  useEffect(() => {
    if (!txRef) return;

    const run = async () => {
      if (isReturnSuccess) {
        const confirmed = await verifyPayment(txRef);
        if (confirmed?.paid) {
          clearCartItems();
          setResult(confirmed);
        } else {
          setResult(
            confirmed || {
              paid: false,
              failed: true,
              pending: false,
              message: "Payment could not be confirmed",
            }
          );
        }

        setIsResolving(false);

        return;
      }

      const maxAttempts = 5;

      for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const initialResult = await getPaymentResult(txRef);

        if (initialResult?.paid) {
          clearCartItems();
          setResult(initialResult);
          setIsResolving(false);
          return;
        }

        if (isReturnSuccess || shouldVerifyOnReturn || initialResult?.pending) {
          await verifyPayment(txRef);
        }

        const refreshedResult = await getPaymentResult(txRef);
        if (refreshedResult?.paid) {
          clearCartItems();
          setResult(refreshedResult);
          setIsResolving(false);
          return;
        }

        setResult(refreshedResult);

        if (attempt < maxAttempts - 1) {
          await sleep(2000);
        }
      }

      setIsResolving(false);
    };

    run();
  }, [
    txRef,
    isReturnSuccess,
    shouldVerifyOnReturn,
    verifyPayment,
    getPaymentResult,
    clearCartItems,
  ]);

  if (!txRef) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar page="payment-result" />
        <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Payment Result</h1>
          <p className="text-gray-600 mt-3">Missing payment reference.</p>
          <button
            onClick={() => navigate("/place-order")}
            className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Back to Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar page="payment-result" />
      <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Payment Result</h1>

        {isResolving && !result ? (
          <div className="mt-6 flex flex-col items-center gap-3 text-gray-600">
            <Loader className="animate-spin" />
            <p>Checking payment status...</p>
          </div>
        ) : null}

        {!isResolving && result?.paid ? (
          <div className="mt-6">
            <p className="text-green-700 font-medium">Payment successful.</p>
            <p className="text-gray-600 mt-2">Your order has been confirmed.</p>
          </div>
        ) : null}

        {!isResolving && result?.failed ? (
          <div className="mt-6">
            <p className="text-red-700 font-medium">Payment failed.</p>
            <p className="text-gray-600 mt-2">Please try again or choose another method.</p>
          </div>
        ) : null}

        {!isResolving && result?.pending ? (
          <div className="mt-6">
            <p className="text-amber-700 font-medium">Payment pending confirmation.</p>
            <p className="text-gray-600 mt-2">Webhook confirmation is still in progress. Refresh shortly.</p>
          </div>
        ) : null}

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/place-order")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Back to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
````

## File: frontend/src/index.css
````css
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;


.font-primary{
    font-family: "Forum", serif ;
}
body{
    font-family: "Inter", sans-serif;
}
.text-logo{
    font-size: 2rem;
}
.text-underlogo{
    font-size: 0.6rem;
}
````

## File: frontend/src/main.jsx
````javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
````

## File: frontend/.gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: frontend/eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
````

## File: frontend/postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: frontend/README.md
````markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
````

## File: frontend/tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xs: "380px",
      ss: "480px",
      sm: "540px",
      md: "768px",
      lg: "1060px",
      xl: "1440px",
      xxl: "1700px"
    }
  },
  plugins: [],
}
````

## File: backend/lib/chapa.js
````javascript
import axios from "axios";
import crypto from "crypto";

const CHAPA_BASE_URL = "https://api.chapa.co/v1";

const getChapaHeaders = () => {
	const secretKey = process.env.CHAPA_SECRET_KEY;
	if (!secretKey) {
		throw new Error("CHAPA_SECRET_KEY is not configured");
	}

	return {
		Authorization: `Bearer ${secretKey}`,
		"Content-Type": "application/json",
	};
};

export const initializeChapaPayment = async ({
	amount,
	email,
	firstName,
	lastName,
	phoneNumber,
	txRef,
	callbackUrl,
	returnUrl,
	customization,
	paymentMethod,
}) => {
	const payload = {
		amount,
		currency: "ETB",
		email,
		first_name: firstName,
		last_name: lastName,
		phone_number: phoneNumber,
		tx_ref: txRef,
		callback_url: callbackUrl,
		return_url: returnUrl,
		customization,
	};

	if (paymentMethod === "Telebirr") {
		payload.available_payment_methods = ["telebirr"];
	}

	const response = await axios.post(`${CHAPA_BASE_URL}/transaction/initialize`, payload, {
		headers: getChapaHeaders(),
	});

	return response.data;
};

export const verifyChapaPayment = async (txRef) => {
	const response = await axios.get(`${CHAPA_BASE_URL}/transaction/verify/${txRef}`, {
		headers: getChapaHeaders(),
	});

	return response.data;
};

export const validateChapaCallbackSignature = ({ rawBody, signature }) => {
	const webhookSecret = process.env.CHAPA_WEBHOOK_SECRET;
	// Enforce webhook secret presence — do not silently accept callbacks when
	// no secret is configured (previous behavior returned true which is unsafe).
	if (!webhookSecret) {
		return false;
	}

	if (!rawBody || !signature) {
		return false;
	}

	const digest = crypto.createHmac("sha256", webhookSecret).update(rawBody).digest();

	// Accept hex or base64 signatures from Chapa; normalize to buffers for
	// timing-safe comparison.
	let sigBuf;
	try {
		// Try hex first
		sigBuf = Buffer.from(String(signature).trim(), "hex");
		if (sigBuf.length === 0) throw new Error("invalid-hex");
	} catch (err) {
		try {
			// Fallback to base64
			sigBuf = Buffer.from(String(signature).trim(), "base64");
			if (sigBuf.length === 0) throw new Error("invalid-base64");
		} catch (err2) {
			return false;
		}
	}

	// Ensure equal length before timingSafeEqual to avoid exceptions.
	if (!Buffer.isBuffer(digest) || digest.length !== sigBuf.length) {
		// If lengths differ, compare in constant time using a padded buffer to
		// avoid leaking timing — create a same-length buffer and compare.
		const paddedDigest = Buffer.concat([digest, Buffer.alloc(Math.max(0, sigBuf.length - digest.length))]);
		const paddedSig = Buffer.concat([sigBuf, Buffer.alloc(Math.max(0, paddedDigest.length - sigBuf.length))]);
		return crypto.timingSafeEqual(paddedDigest, paddedSig);
	}

	return crypto.timingSafeEqual(digest, sigBuf);
};
````

## File: backend/middleware/auth.middleware.js
````javascript
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import logger from "../lib/logger.js";


export const protectRoute = async (req, res, next)=>{
    try {
        const accessToken = req.cookies.accessToken;
        if(!accessToken){
            return res.status(401).json({message:"Unauthorized - No access token provided"});
        }
        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password");
            if(!user){
                return res.status(401).json({message:"User not found"});
            }
            req.user = user;
            next();
        } catch (error) {
            if (error.name === "TokenExpiredError"){
                return res.status(401).json({message:"Token expired"});
            }
            throw error;
        }
    } catch (error) {
        logger.error({ err: error }, "error in protectRoute");
        return res.status(500).json({message: "Something went wrong. Please try again."});
    }
}


export const adminRoute = (req, res, next)=>{
    if(req.user && ["admin", "master"].includes(req.user.role)){
        next();
    }else{
        return res.status(403).json({message: "Access denied - Admins only"});
    }
}

export const masterRoute = (req, res, next) => {
    if (req.user && req.user.role === "master") {
        next();
    } else {
        return res.status(403).json({ message: "Access denied - Master only" });
    }
}
````

## File: backend/models/order.model.js
````javascript
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
        name: String,
        phoneNumber: String,
        email: String,
        address: String,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Telebirr", "Chapa", "COD"],
      default: "COD",
    },
    paymentReference: {
      type: String,
      default: "",
    },
    paymentProvider: {
      type: String,
      enum: ["chapa", "none"],
      default: "none",
    },
    paymentUrl: {
      type: String,
      default: "",
    },
    chapaTransactionId: {
      type: String,
      default: "",
      index: true,
    },
    paidAt: {
      type: Date,
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "canceled","pending", "failed", "on hold", "returned"],
      default: "processing",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;
````

## File: backend/routes/auth.route.js
````javascript
import express from "express";
import { login, logout, refreshAccessToken, getProfile} from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { loginSchema } from "../validation/schemas.js";


const router = express.Router();

const loginLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000,
	maxRequests: 8,
	keyFn: (req) => `login:${String(req.body?.email || "").trim().toLowerCase() || "unknown"}`,
	keyByIp: false,
});

// Per-IP limiter to mitigate password-spraying across many accounts
const loginIpLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 30,
  keyFn: () => "login:ip",
});

const refreshLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000,
	maxRequests: 30,
	keyFn: () => "auth-refresh",
});

// Apply both IP-based and email-based limiters: IP limiter first to catch
// password-spraying, then the per-account limiter to limit targeted brute-force.
router.post(
	"/login",
	loginIpLimiter,
	loginLimiter,
	validateBody(loginSchema),
	login
);

router.post("/logout", logout)

router.post("/refreshAccessToken", refreshLimiter, refreshAccessToken)

router.get("/profile", protectRoute, getProfile)

export default router
````

## File: backend/routes/order.route.js
````javascript
import express from "express";

import {
	chapaPaymentCallback,
	getPaymentResult,
	placeOrder,
	verifyOrderPayment,
} from "../controllers/order.controller.js";
import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { placeOrderSchema } from "../validation/schemas.js";

const router = express.Router();


// Throttle order submissions per IP to reduce spam and external API abuse.
const placeOrderLimiter = createRateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	maxRequests: 20, // allow burst of orders per IP
	keyFn: () => "place-order",
});

router.post("/place-order", placeOrderLimiter, validateBody(placeOrderSchema), placeOrder);
router.get("/verify-payment", verifyOrderPayment);
router.get("/payment-result", getPaymentResult);
router.post("/payment/callback", chapaPaymentCallback);


export default router;
````

## File: frontend/src/components/FooterComponent.jsx
````javascript
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center md:text-left">
            <Link to="/">
              <h3 className="text-xl font-bold mb-2 font-primary">DFXN</h3>
            </Link>
            <p className="text-gray-400 text-sm mb-3">
              Premium footwear for the modern lifestyle
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DFXN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
````

## File: frontend/src/components/Navbar.jsx
````javascript
"use client";
import React, { useContext, useMemo, useState } from "react";
import {
  ShoppingCart,
  LogOut,
  Lock,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useUserStore } from "../stores/useUserStore";
import { CartContext } from "../contexts/CartContext";



const Navbar = ({page}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useUserStore();
  const admin = ["admin", "master"].includes(user?.role);
  const {cart} = useContext(CartContext);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + (item.quantity || 0), 0), [cart]);

  const NavLinks = () => (
    <>
      <Link to="/" className={page === "home"? "font-semibold text-gray-800" : "text-gray-700 hover:text-gray-600"} onClick={() => setMobileMenuOpen(false)}>
        Home
      </Link>
      <Link to="/#About" className="text-gray-800 hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>
        About
      </Link>
      <Link to="/#Contact" className="text-gray-800 hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>
        Contact
      </Link>
      <Link to="/products" className={page === "products"? "font-semibold text-gray-800" : "text-gray-700 hover:text-gray-600"} onClick={() => setMobileMenuOpen(false)}>Products</Link>
    </>
  );

  return (
    <header>
      {/* Desktop Navbar */}
      <nav className="flex justify-between pt-5 px-5 xs:px-10 sm:px-14 lg:px-20 items-center xl:px-32 xxl:px-40">
        {/* Logo */}
        <Link to="/" className="flex flex-col text-center md:px-10">
          <span className="text-3xl lg:text-5xl font-primary">DFXN</span>
          <span className="text-sm lg:text-sm font-primary">DEFIANT EXILE</span>
        </Link>

        {/* Right Side */}
        <div className="flex gap-3 items-center">
          {/* Main Links */}
          <div className="hidden md:flex gap-4 items-center">
            <ul className="md:flex gap-5">
              <NavLinks />
            </ul>
            {admin && (
              <Link
                to="/admin/dashboard"
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-700 text-white bg-gray-800 p-2 rounded-md"
              >
                <Lock size={15} />
                <span className="md:text-sm">Dashboard</span>
              </Link>
            )}
          </div>

          {/* Auth / Logout */}
          {admin && (
            <button
              onClick={logout}
              className="hidden md:flex gap-2 items-center active:scale-95 hover:bg-gray-800 bg-slate-600 text-white p-2 rounded-md"
            >
              <LogOut size={15} />
              <span className="text-sm">Log out</span>
            </button>
          )}

          {/* Cart */}

          <Link to="/cart" className="relative flex gap-2 items-center active:scale-95 rounded-md hover:text-gray-800">
            <ShoppingCart />
            {cartCount > 0 && <span className="absolute -top-3 -left-2 bg-gray-800 text-white rounded-full py-0.5 px-2 text-xs">
              {cartCount}
            </span>}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 bg-white transition-all z-50 w-full overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-3 px-5 sm:p-4 sm:px-5">
            <Link to="/" className="flex flex-col text-center md:px-5">
              <span className="text-3xl font-primary">DFXN</span>
              <span className="text-sm font-primary">DEFIANT EXILE</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XIcon />
            </button>
          </div>

          <hr className="w-96 mx-auto my-3" />

          {/* Links */}
          <div className="flex flex-col gap-4 items-center mt-10">
            <NavLinks />
            {admin && (
              <Link
                to="/admin/dashboard"
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-700 text-white bg-gray-800 p-2 rounded-md"
              >
                <Lock size={15} />
                <span>Dashboard</span>
              </Link>
            )}

            {admin && (
              <button
                onClick={logout}
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-800 text-white bg-gray-700 p-2 rounded-md"
              >
                <LogOut size={15} />
                <span>Log out</span>
              </button>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
````

## File: frontend/src/lib/axios.js
````javascript
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

const refreshClient = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

let refreshPromise = null;

const readCookie = (name) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : null;
};

// Attach CSRF token for mutating requests using double-submit cookie pattern.
axiosInstance.interceptors.request.use((config) => {
    try {
        const method = (config.method || "get").toLowerCase();
        if (["get", "head", "options"].includes(method)) return config;
        const csrf = readCookie("csrfToken");
        if (csrf) {
            config.headers = config.headers || {};
            config.headers["x-csrf-token"] = csrf;
        }
    } catch (e) {
        // ignore
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const status = error?.response?.status;

        if (!status || status !== 401 || !originalRequest) {
            return Promise.reject(error);
        }

        if (
            originalRequest._retry ||
            originalRequest.url?.includes("/auth/refreshAccessToken")
        ) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!refreshPromise) {
                refreshPromise = refreshClient
                    .post("/auth/refreshAccessToken")
                    .finally(() => {
                        refreshPromise = null;
                    });
            }

            await refreshPromise;
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }
);


export default axiosInstance
````

## File: frontend/src/pages/AdminDashboard.jsx
````javascript
import React, { useEffect } from "react";
import AdminNav from "../components/AdminNav";
import { useUserStore } from "../stores/useUserStore";
import { useAdminStore } from "../stores/useAdminStore";

const orderStatus = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  canceled: "bg-red-100 text-red-700",
  pending: "bg-orange-100 text-orange-500",
  failed: "bg-gray-200 text-gray-600",
  "on hold": "bg-purple-100 text-purple-700",
  returned: "bg-pink-100 text-pink-500",
};

const AdminDashboard = () => {
  const { user } = useUserStore();
  const { fetchDashboard, dashboardData, dashboardLoading } = useAdminStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const { summary, topSelling, recentOrders } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar & Top Nav */}
      <AdminNav activePage="dashboard">
        {/* Dashboard Content */}
        <div className="p-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="bg-white rounded-full shadow px-4 py-2">
              <span className="text-gray-600">👋 Hello, </span>
              <span className="font-semibold text-gray-800">{user?.name}</span>
            </div>
          </div>

          {dashboardLoading ? (
            <p className="text-gray-500">Loading dashboard data...</p>
          ) : (
            <>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
                <Card title="Total Products" value={summary.totalProducts} />
                <Card title="Total Orders" value={summary.totalOrders} />
                <Card title="Orders Today" value={summary.ordersToday} />
                <Card title="Revenue (ETB)" value={summary.totalRevenue} isCurrency />
                <Card title="Customers" value={summary.totalCustomers} />
              </div>

              {/* Main Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Recent Orders
                  </h2>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-500 border-b">
                        <th className="py-2">Customer</th>
                        <th className="py-2">Total</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders?.length ? (
                        recentOrders.map((order) => (
                          <tr key={order._id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{order?.customer?.name || "N/A"}</td>
                            <td className="py-2">ETB {Number(order?.totalAmount || 0).toFixed(2)}</td>
                            <td className="py-2">
                              <span
                                className={`p-1 rounded ${
                                  orderStatus[order.orderStatus] || "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {order.orderStatus}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="py-3 text-gray-500" colSpan={3}>
                            No recent orders available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Top Selling Products */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Top Selling Products
                  </h2>
                  <ul className="space-y-3">
                    {topSelling?.length ? (
                      topSelling.map((item) => (
                        <li key={item._id} className="flex justify-between items-center border-b pb-2 gap-3">
                          <img
                            src={item?.productInfo?.image}
                            alt={item?.productInfo?.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <span className="flex-1 text-sm">{item?.productInfo?.name}</span>
                          <span className="font-semibold text-sm">{item.totalSold} sold</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No top selling products yet.</li>
                    )}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

/* Small reusable summary card */
const Card = ({ title, value, isCurrency = false }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2">
      {isCurrency ? Number(value || 0).toFixed(2) : value}
    </p>
  </div>
);

export default AdminDashboard;
````

## File: frontend/src/pages/Analytics.jsx
````javascript
import React, { useEffect, useMemo, useState } from "react";
import AdminNav from "../components/AdminNav";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useAdminStore } from "../stores/useAdminStore";

const STATUS_COLOR_MAP = {
  processing: "#F59E0B",
  "in progress": "#2563EB",
  pending: "#8B5CF6",
  shipped: "#0EA5E9",
  delivered: "#16A34A",
  canceled: "#DC2626",
  failed: "#7F1D1D",
  returned: "#9333EA",
  "on hold": "#F97316",
};

const STATUS_FALLBACK_COLORS = ["#111827", "#1F2937", "#374151", "#4B5563", "#6B7280"];

const getStatusColor = (status, index) => {
  const normalized = (status || "").toLowerCase();
  return STATUS_COLOR_MAP[normalized] || STATUS_FALLBACK_COLORS[index % STATUS_FALLBACK_COLORS.length];
};

const Analytics = () => {
  const [rangeDays, setRangeDays] = useState(30);
  const { analyticsData, analyticsLoading, fetchAnalytics } = useAdminStore();

  useEffect(() => {
    fetchAnalytics(rangeDays);
  }, [fetchAnalytics, rangeDays]);

  const totals = useMemo(() => {
    const totalRevenue = analyticsData.salesTrend.reduce(
      (sum, item) => sum + (item.revenue || 0),
      0
    );
    const totalOrders = analyticsData.salesTrend.reduce(
      (sum, item) => sum + (item.orders || 0),
      0
    );

    return {
      totalRevenue,
      totalOrders,
    };
  }, [analyticsData]);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"analytics"}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <select
              value={rangeDays}
              onChange={(e) => setRangeDays(Number(e.target.value))}
              className="border rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Metric title="Revenue (Paid Orders)" value={`ETB ${totals.totalRevenue.toFixed(2)}`} />
            <Metric title="Orders In Range" value={totals.totalOrders} />
          </div>

          {analyticsLoading ? (
            <p className="text-gray-500">Loading analytics...</p>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow p-4 h-80">
                <h2 className="font-semibold mb-4">Revenue Trend</h2>
                <ResponsiveContainer width="100%" height="90%">
                  <LineChart data={analyticsData.salesTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" hide={analyticsData.salesTrend.length > 12} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#111827" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-4 h-80">
                  <h2 className="font-semibold mb-4">Order Status Distribution</h2>
                  <ResponsiveContainer width="100%" height="90%">
                    <PieChart>
                      <Pie
                        data={analyticsData.orderStatus}
                        dataKey="count"
                        nameKey="status"
                        outerRadius={90}
                        label
                      >
                        {analyticsData.orderStatus.map((entry, index) => (
                          <Cell
                            key={entry.status}
                            fill={getStatusColor(entry.status, index)}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl shadow p-4 h-80">
                  <h2 className="font-semibold mb-4">Payment Methods</h2>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={analyticsData.paymentMethods}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="method" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#1F2937" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-4 h-96">
                <h2 className="font-semibold mb-4">Category Performance</h2>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={analyticsData.categoryPerformance} layout="vertical" margin={{ left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#111827" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

const Metric = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default Analytics;
````

## File: frontend/src/pages/CartProvider.jsx
````javascript
// CartContext.js
import React, { useState, useEffect } from "react";
import {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../stores/useCartStore.js";
import toast from "react-hot-toast";
import { CartContext } from "../contexts/CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addItem = (product) => {
    const updatedCart = addToCart(product);
    setCart(updatedCart);
    toast.success(`${product.name} added to cart`)
  };

  const removeItem = (id) => {
    const updatedCart = removeFromCart(id);
    setCart(updatedCart);
  };

  const updateItemQuantity = (id, quantity) => {
      const updatedCart = updateQuantity(id, quantity);
      setCart(updatedCart);
  };

  const clearCartItems = () => {
    clearCart();
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItemQuantity, clearCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
````

## File: frontend/src/pages/CategoryPage.jsx
````javascript
import React from "react";
import { Navigate, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <Navigate
      to={`/products?category=${encodeURIComponent(category || "")}`}
      replace
    />
  );
};

export default CategoryPage;
````

## File: frontend/src/pages/Order.jsx
````javascript
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";
import AdminNav from "../components/AdminNav";
import { ArrowLeft, Edit, Save, RotateCcw, Trash2 } from "lucide-react";

const orderStatus = [
  "processing",
  "shipped",
  "delivered",
  "canceled",
  "pending",
  "failed",
  "on hold",
  "returned",
];
const paymentStatus = ["pending", "paid", "failed"];

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { order, getOrderById, updateOrder } = useOrderStore();

  const [isEditing, setIsEditing] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    getOrderById(id);
  }, [getOrderById, id]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (order?.paymentStatus === "pending") {
        getOrderById(id);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [getOrderById, id, order?.paymentStatus]);

  useEffect(() => {
    if (order) {
      const formattedOrder = {
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        orderStatus: order.orderStatus,
        totalAmount: order.totalAmount,
        customer: {
          name: order.customer.name,
          phoneNumber: order.customer.phoneNumber,
          email: order.customer.email,
          address: order.customer.address,
        },
        products: order.products,
      };
      setOrderData(formattedOrder);
    }
  }, [order]);

  if (!orderData) {
    return <p className="text-center py-10 text-gray-500">Loading order...</p>;
  }

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      customer: {
        ...orderData.customer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSelectChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteProduct = (index) => {
    const deletedProduct = orderData.products[index];
    orderData.totalAmount = orderData.totalAmount - (deletedProduct.price * deletedProduct.quantity);
    const updatedProducts = orderData.products.filter((_, i) => i !== index);
    setOrderData({
      ...orderData,
      products: updatedProducts,
    });    
  };

  const handleSave = () => {
    updateOrder(id, orderData);
    setIsEditing(false);
  };

  const handleReset = () => {
    setOrderData(order);
    setIsEditing(false);
  };

  return (
    <AdminNav page="orders">
      <div className="space-y-6">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-gray-200 hover:bg-gray-100 p-2 px-3 flex items-center gap-2"
          >
            <ArrowLeft className="w-5" />
            Go back
          </button>
          <h2 className="mx-auto font-semibold text-xl">Order Details</h2>
          <button
            onClick={() => {
              if (!isEditing) setIsEditing(true);
            }}
            className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition ml-auto"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={orderData.customer.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={orderData.customer.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={orderData.customer.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={orderData.customer.address}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Order Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="paymentStatus" className="block font-semibold">
                Payment status
              </label>
              <select
                name="paymentStatus"
                value={orderData.paymentStatus}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                {paymentStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Auto-refreshes every 10 seconds while the page is open.
              </p>
            </div>
            <div>
              <label htmlFor="orderStatus" className="block font-semibold">
                Order status
              </label>
              <select
                name="orderStatus"
                value={orderData.orderStatus}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                {orderStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={orderData.paymentMethod}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                <option value="Telebirr">Telebirr</option>
                <option value="Chapa">Chapa</option>
                <option value="COD">Cash on Delivery</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Ordered Products</h3>
          <div className="hidden sm:flex justify-between font-semibold">
            <div className="w-2/3">Product</div>
            <div className="w-1/6 text-right">Quantity</div>
            <div className="w-1/6 text-right">Price</div>
            {isEditing && <div className="w-1/6 text-center">Action</div>}
          </div>
          <hr className="my-2 hidden sm:block" />
          {orderData.products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-2 gap-3 sm:gap-0"
            >
              <div className="flex items-center space-x-4 w-full sm:w-2/3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.product.name}</span>
              </div>
              <div className="flex justify-between sm:block w-full sm:w-1/6 text-right">
                <span className="sm:hidden font-semibold">Qty: </span>
                {item.quantity}
              </div>
              <div className="flex justify-between sm:block w-full sm:w-1/6 text-right">
                <span className="sm:hidden font-semibold">Price: </span>
                {item.price}
              </div>
              {isEditing && (
                <div className="flex justify-end sm:justify-center w-full sm:w-1/6">
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold">
            <div>Total</div>
            <div>{orderData.totalAmount}</div> 
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        )}
      </div>
    </AdminNav>
  );
};

export default Order;
````

## File: frontend/src/pages/Product.jsx
````javascript
import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import { useProductStore } from "../stores/useProductStore";
import FooterComponent from "../components/FooterComponent";
import { CartContext } from "../contexts/CartContext";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {addItem} = useContext(CartContext);

  const { product, fetchProductById, products, fetchAllProducts, loading } = useProductStore();

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
    if (products.length === 0) {
      fetchAllProducts();
    }
  }, [id, fetchProductById, fetchAllProducts, products.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  // Related products (same category, exclude current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md h-[350px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                ETB {product.price.toFixed(2)}
              </p>
              {product.stock > 0 ? (
                <p className="text-green-600 font-medium mb-4">
                  In stock ({product.stock} left)
                </p>
              ) : (
                <p className="text-red-500 font-medium mb-4">Out of stock</p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addItem(product)}
              disabled={product.stock === 0}
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium px-5 py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <div
                  key={rp._id}
                  onClick={() => navigate(`/products/${rp._id}`)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer flex flex-col"
                >
                  <div className="w-full h-[200px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 truncate mb-2">
                    {rp.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {rp.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-gray-900 font-semibold">
                      ETB {rp.price.toFixed(2)}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(rp);
                      }}
                      className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Product;
````

## File: frontend/src/stores/useCartStore.js
````javascript
// cartUtils.js

import toast from "react-hot-toast";

const CART_KEY = "cartItems";

// Get cart from local storage
export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

// Save cart to local storage
export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product) => {
  let cart = getCart();
  const existingItem = cart.find((item) => item._id === product._id);

  if (existingItem && existingItem.quantity < product.stock) {
    existingItem.quantity += 1;
    saveCart(cart);

  } else if (product.stock > 0) {
    cart.push({ ...product, quantity: 1 });
    saveCart(cart);
  } else {
    toast.error("out of stock");
  }
  return cart
};

// Remove item from cart
export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter((item) => item._id !== id);
  saveCart(cart);
  return cart;
};

// Update item quantity
export const updateQuantity = (id, quantity) => {
  let cart = getCart();
  const item = cart.find((item) => item._id === id);
  if (item) {
    const maxAllowed = Math.max(1, Number(item.stock || 1));
    const normalizedQuantity = Math.max(1, Math.min(Number(quantity || 1), maxAllowed));
    item.quantity = normalizedQuantity;
  }
  saveCart(cart);
  return cart;
};

// Clear cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
````

## File: frontend/src/stores/useCategoryStore.js
````javascript
import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  setCategories: (categories) => set({ categories }),
  createCategory: async (categoryData) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        "/admin/categories/create-category",
        categoryData
      );
      set((prevState) => ({
        categories: [...prevState.categories, response.data.category],
        loading: false,
      }));
      toast.success("Category created successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create category");
      set({ loading: false });
    }
  },
  getAllCategories: async () => {
    set({ loading: true });
    try {
        const response = await axios.get("/admin/categories");
        set({ categories: response.data.categories, loading: false });
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load categories");
        set({ loading: false });
    }
  },
  editCategory: async (categoryId, categoryData) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/admin/categories/${categoryId}`, categoryData);

      const update = response.data.category;
      set(() => ({
        category: update,
        loading: false,
      }));
      toast.success("Category updated successfully");
      return update;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to update category");
    }
  },
  fetchCategoryById: async (categoryId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/admin/categories/${categoryId}`);
      set({ category: response.data.category, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to load category");
    }
  },
  deleteCategory: async (categoryId) => {
    set({ loading: true });
    try {
      await axios.delete(`/admin/categories/${categoryId}`);
      set((prevCategories) => ({
        categories: prevCategories.categories.filter(
          (category) => category._id !== categoryId
        ),
        loading: false,
      }));
      toast.success("Category deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to delete category");
    }
  },
}));
````

## File: frontend/src/stores/useProductStore.js
````javascript
import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  featuredProducts: [],
  loading: false,
  setProducts: (products) => set({ products }),
  setFeaturedProducts: (featuredProducts) => set({ featuredProducts }),
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data.product],
        loading: false,
      }));
      toast.success("Product created successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create product");
      set({ loading: false });
    }
  },
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({
        error: "failed to fetch products: " + error.message,
        loading: false,
      });
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  },
  fetchFeaturedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products/featured");
      set({ featuredProducts: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch featured products"
      );
    }
  },
  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/category/${category}`);
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log(error.message);
      toast.error(error.response?.data?.message || "Failed to load category");
    }
  },
  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(`/products/${productId}`);
      set((prevProducts) => ({
        products: prevProducts.products.filter(
          (product) => product._id !== productId
        ),
        loading: false,
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  },
  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.patch(`/products/${productId}`);
      const updated = response.data;

      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, isFeatured: updated.isFeatured }
            : product
        ),
        featuredProducts: updated.isFeatured
          ? [
              updated,
              ...state.featuredProducts.filter(
                (product) => product._id !== updated._id
              ),
            ]
          : state.featuredProducts.filter(
              (product) => product._id !== updated._id
            ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to feature product");
    }
  },
  fetchProductById: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/${productId}`);
      set({ product: response.data.product, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to load product");
    }
  },
  editProduct: async (productId, productData) => {
    set({ loading: true });

    try {
      const response = await axios.put(`/products/${productId}`, productData);

      const updatedProduct = response.data.product;

      set(() => ({
        product: updatedProduct,
        loading: false,
      }));
      toast.success(response.data.message || "Product updated successfully");
      return updatedProduct;
    } catch (error) {
      set({ loading: false });
      console.error(
        "Error editing product:",
        error.response?.data || error.message
      );
      const errorMessage =
        error.response?.data?.message || "Something went wrong";      
      toast.error(errorMessage);
    }
  },
}));
````

## File: frontend/package.json
````json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "node ./node_modules/vite/bin/vite.js",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.5",
    "axios": "^1.10.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.525.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hot-toast": "^2.5.2",
    "react-router-dom": "^7.7.0",
    "zustand": "^5.0.6"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^7.0.4"
  }
}
````

## File: frontend/vite.config.js
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  envDir: "..",
  envPrefix: ["F_"],
  plugins: [
    react(),
  ],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  }
})
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.vite
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?


.env


analysis_results.md
````

## File: backend/models/user.model.js
````javascript
import mongoose from "mongoose";
import bcrypt from "bcryptjs";



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [10, "Password must be at least 10 characters long"],
    },
    role: {
      type: String,
      enum: ["customer", "admin", "master"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    try{
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(error){
        next(error)
    }
})


userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema)
export default User;
````

## File: frontend/src/pages/Cart.jsx
````javascript
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import { Minus, Plus, Trash2, ScanLine } from "lucide-react"; // icons for elegant controls
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeItem, clearCartItems, updateItemQuantity } =
    useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar page="cart" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {cart.length > 0 && (
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Your Cart
          </h2>
        )}

        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product._id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md mr-6"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <p className="text-gray-800 mt-2 font-medium">
                    ETB {product.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateItemQuantity(product._id, product.quantity - 1)
                    }
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                    disabled={product.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 font-semibold text-sm shadow-inner">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateItemQuantity(product._id, product.quantity + 1)
                    }
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                    disabled={product.quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove Item */}
                <button
                  onClick={() => removeItem(product._id)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            {/* Cart Footer */}
            <div className="flex justify-between items-center mt-8 bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Total: ETB {total.toFixed(2)}
              </h3>
              <button
                onClick={clearCartItems}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-center">
            <p className="mb-6">Your cart is empty</p>
            <Link
              to="/products"
              className="rounded bg-gray-800 hover:bg-gray-700 text-white py-2 px-5"
            >
              Shop now
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white rounded py-2 w-full my-5 md:w-1/5 active:scale-95"
            onClick={() => {
              navigate("/place-order");
            }}
            disabled={cart.length === 0}
          >
            <span className="flex gap-2 justify-center items-center">
              <ScanLine /> Checkout
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
````

## File: frontend/src/pages/Products.jsx
````javascript
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import { useProductStore } from "../stores/useProductStore";
import { useCategoryStore } from "../stores/useCategoryStore";
import FooterComponent from "../components/FooterComponent";
import { CartContext } from "../contexts/CartContext";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useContext(CartContext);
  const { products, fetchAllProducts, fetchProductsByCategory, loading } =
    useProductStore();
  const { categories, getAllCategories } = useCategoryStore();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const selectedCategoryFromQuery = searchParams.get("category") || "all";

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  useEffect(() => {
    const normalizedCategory =
      selectedCategoryFromQuery === "all"
        ? "all"
        : decodeURIComponent(selectedCategoryFromQuery);

    setSelectedCategory(normalizedCategory);
    setCurrentPage(1);

    if (normalizedCategory === "all") {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(normalizedCategory);
    }
  }, [selectedCategoryFromQuery, fetchAllProducts, fetchProductsByCategory]);

  const handleCategoryChange = async (e) => {
    const value = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    if (value === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", value);
    }
    setSearchParams(nextParams);
  };

  // Filtering + searching
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar page="products" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full sm:w-auto border rounded-lg px-3 py-2 bg-white text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-8 border rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : currentProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {currentProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-200"
                >
                  <div
                    onClick={() => navigate(`/products/${product._id}`)}
                    className="cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-full object-contain"
                    />
                    <div className="p-4">
                      <h2 className="font-semibold text-lg text-gray-800 truncate">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-2 font-bold text-gray-900">
                        ETB {product.price.toFixed(2)}
                      </p>

                      {/* Stock Status */}
                      <div
                        className={`mt-2 text-sm ${
                          product.stock > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.stock > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="p-4 pt-0 mt-auto">
                    <button
                      onClick={() => {
                        if (product.stock > 0) {
                          addItem(product);
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
                      disabled={product.stock <= 0}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center mt-8 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === i + 1
                      ? "bg-gray-800 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Products;
````

## File: frontend/src/stores/useOrderStore.js
````javascript
import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useOrderStore = create((set) => ({
  loading: false,
  orders: [],
  setOrders: (orders) => {
    set({ orders });
  },
  placeOrder: async (orderData) => {
    set({ loading: true });
    try {
      const response = await axios.post("/orders/place-order", orderData);
      toast.success(response.data.message);
      set({ loading: false });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to place order");
      set({ loading: false });
      return null;
    }
  },
  verifyPayment: async (txRef) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/orders/verify-payment?tx_ref=${encodeURIComponent(txRef)}`);
      if (response.data?.paid) {
        toast.success(response.data.message || "Payment verified");
      } else {
        toast.error(response.data?.message || "Payment verification failed");
      }
      set({ loading: false });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to verify payment");
      set({ loading: false });
      return null;
    }
  },
  getPaymentResult: async (txRef) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/orders/payment-result?tx_ref=${encodeURIComponent(txRef)}`);
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch payment result");
      return null;
    }
  },
  getAllOrders: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/admin/orders");
      set({ orders: response.data.orders, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch orders");
    }
  },
  getOrderById: async (orderId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/admin/orders/${orderId}`);
      set({ order: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch order");
    }
  },
  updateOrder: async (orderId, orderData) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/admin/orders/${orderId}`, orderData);
      const newOrder = response.data.order;
      set(() => ({
        order: newOrder,
        loading: false,
      }));
      toast.success("Order updated successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to update order");
    }
  },
  deleteOrder: async (orderId) => {
    set({ loading: true });
    try {
      await axios.delete(`/admin/orders/${orderId}`);
      set((prevOrders) => ({
        orders: prevOrders.orders.filter((order) => order._id !== orderId),
        loading: false,
      }));
      toast.success("Order deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  },
}));
````

## File: frontend/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favico.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DFXN</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "dfxn",
  "version": "1.0.0",
  "description": "",
  "main": "backend/server.js",
  "scripts": {
    "dev": "node ./node_modules/nodemon/bin/nodemon.js backend/server.js",
    "start": "node backend/server.js",
    "test": "node --test \"backend/tests/**/*.test.js\""
  },
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.10.0",
    "bcryptjs": "^3.0.2",
    "body-parser": "^2.2.0",
    "chapa-nodejs": "^2.0.1",
    "cloudinary": "^2.6.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^7.0.0",
    "framer-motion": "^12.23.6",
    "helmet": "^7.0.0",
    "ioredis": "^5.6.1",
    "jsonwebtoken": "^9.0.2",
    "lucide-react": "^0.525.0",
    "mongoose": "^8.15.2",
    "nodemailer": "^8.0.5",
    "pino": "^10.3.1",
    "react-confetti": "^6.4.0",
    "react-hot-toast": "^2.5.2",
    "react-router-dom": "^7.7.0",
    "react-router-hash-link": "^2.4.3",
    "recharts": "^3.1.0",
    "stripe": "^18.2.1",
    "zod": "^3.23.2",
    "zustand": "^5.0.6"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
````

## File: backend/controllers/product.controller.js
````javascript
import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";
import { redis } from "../lib/redis.js";
import { uploadImageWithProcessing } from "../lib/imageUpload.js";
import logger from "../lib/logger.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    logger.error({ err: error }, "error in getAllProducts");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await redis.get("featured_products");
    if (featuredProducts) {
      return res.json(JSON.parse(featuredProducts));
    }
    featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set("featured_products", JSON.stringify(featuredProducts));
    res.json(featuredProducts);
  } catch (error) {
    logger.error({ err: error }, "error in getFeaturedProducts");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const createProduct = async (req, res) => {
  try {
    let { name, description, price, image, category, imageOptions } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await uploadImageWithProcessing({
        image,
        folder: "products",
        imageType: "product",
        imageOptions,
      });
    }
    if (category === "None") {
      category = null;
    }
    let stock = 5;
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
      category,
    });

    res.status(201).json({ product });
  } catch (error) {
    logger.error({ err: error }, "error in createProduct");
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Something went wrong. Please try again.",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.isFeatured) {
      product.isFeatured = false;
      await product.save();
      await updateFeaturedProductsCache();
    }
    const publicId = product.image.split("/").pop().split(".")[0];
    try {
      await cloudinary.uploader.destroy(`products/${publicId}`);
      console.log("Image deleted from cloudinary");
    } catch (error) {
      console.log("Error deleting image from cloudinary", error.message);
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    logger.error({ err: error }, "error in deleteProduct");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    // const { category } = req.params.category;
    const category = await Category.findOne({ name: req.params.category });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products = await Product.find({ category: category._id });
    res.json({ products });
  } catch (error) {
    logger.error({ err: error }, "error in getProductsByCategory");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isFeatured = !product.isFeatured;
      const updatedProduct = await product.save();
      await updateFeaturedProductsCache();
      res.json(updatedProduct);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    logger.error({ err: error }, "error in toggleFeaturedProduct");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

async function updateFeaturedProductsCache() {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set("featured_products", JSON.stringify(featuredProducts));
  } catch (error) {
    console.log("error in update cache featured products");
  }
}
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.status(200).json({ product });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    logger.error({ err: error }, "error in getProduct");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, image, imageOptions } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only if provided
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (category !== undefined) {
      if (category === "None") {
        product.category = null;
      } else {
        product.category = category;
      }
    }
    if (stock !== undefined) product.stock = stock;

    // Handle image replacement
    if (image) {
      try {
        const publicId = product.image?.split("/").pop().split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`products/${publicId}`);
          console.log("Old image deleted from Cloudinary");
        }
      } catch (error) {
        console.log("Error deleting old image from Cloudinary:", error.message);
      }

      let cloudinaryResponse;
      try {
        cloudinaryResponse = await uploadImageWithProcessing({
          image,
          folder: "products",
          imageType: "product",
          imageOptions,
        });
        product.image = cloudinaryResponse?.secure_url || "";
      } catch (error) {
        console.log("Error uploading new image:", error.message);
        return res.status(error.statusCode || 500).json({
          message: error.statusCode ? error.message : "Image upload failed",
        });
      }
    }

    await product.save();
    if (product.isFeatured) {
      await updateFeaturedProductsCache();
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    logger.error({ err: error }, "error in editProduct");
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Something went wrong. Please try again.",
    });
  }
};
````

## File: backend/routes/product.route.js
````javascript
import express from "express";
import { getAllProducts, getFeaturedProducts , createProduct, toggleFeaturedProduct, deleteProduct, getProductsByCategory, editProduct, getProduct} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";
import { requireCsrf } from "../middleware/csrf.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import { createProductSchema, editProductSchema } from "../validation/schemas.js";

const router = express.Router();

router.get("/featured", getFeaturedProducts)
router.get('/category/:category', getProductsByCategory)
router.get("/:id", getProduct)
router.get("/",  getAllProducts)
router.post("/", protectRoute, adminRoute, requireCsrf, validateBody(createProductSchema), auditMasterActivity, createProduct)
router.put("/:id", protectRoute, adminRoute, requireCsrf, validateBody(editProductSchema), auditMasterActivity, editProduct)
router.patch("/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, toggleFeaturedProduct)
router.delete("/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteProduct)

export default router
````

## File: frontend/src/pages/AdminCategory.jsx
````javascript
import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { Link } from "react-router-dom";
import {
  Upload,
  PlusCircle,
  CheckCircle,
  Loader,
  Edit,
  Trash,
} from "lucide-react";
import { createImagePreview } from "../lib/imagePreview";

const AdminCategory = () => {
  const {
    categories,
    getAllCategories,
    createCategory,
    loading,
    deleteCategory,
  } = useCategoryStore();

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    image: "",
    imageOptions: {
      cropMode: "fill",
      width: 700,
      height: 700,
      removeBackground: false,
    },
  });
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
  const [imagePreviewNotice, setImagePreviewNotice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newCategory.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newCategory.image, newCategory.imageOptions);
      setImagePreview(processedPreview);
      if (newCategory.imageOptions.removeBackground) {
        setImagePreviewNotice("Background removal is applied on save; preview shows crop and sizing only.");
      }
    } catch (error) {
      setImagePreview("");
      setImagePreviewNotice(error.message || "Preview generation failed");
    } finally {
      setImagePreviewLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory(newCategory);
      setNewCategory({
        name: "",
        description: "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 700,
          height: 700,
          removeBackground: false,
        },
      });
    } catch {
      // Errors are surfaced via store toasts.
    }
  };

  return (
    <div>
      <AdminNav activePage="categories">
        {/* Categories Section */}
        <div className="rounded border shadow-sm">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-medium">Categories</h3>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("createCategory")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-sm px-3 py-1.5 rounded-xl bg-gray-900 text-white"
            >
              Add
            </button>
          </div>

          {/* Table for desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-6 py-3 font-medium tracking-wider text-left">
                    Category
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-left">
                    Description
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-center">
                    Edit
                  </th>
                  <th className="px-6 py-3 font-medium tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {categories?.map((category) => (
                  <tr key={category._id} className="hover:bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="h-10 w-10 object-cover rounded-full"
                        />
                        <div className="ml-4 text-sm font-normal">
                          {category.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {category.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/admin/categories/${category._id}/edit`}
                        className="hover:text-gray-500"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="text-red-400 hover:text-red-300"
                        onClick={() => deleteCategory(category._id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile */}
          <div className="sm:hidden divide-y">
            {categories?.map((category) => (
              <div
                key={category._id}
                className="p-4 flex items-start justify-between hover:bg-slate-100"
              >
                <div className="flex gap-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-12 w-12 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {category.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Link
                    to={`/admin/categories/${category._id}/edit`}
                    className="hover:text-gray-500"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => deleteCategory(category._id)}
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Category Form */}
        <div className="rounded shadow-sm border mt-6 bg-white" id="createCategory">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Create a Category</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-500"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCategory.name}
                  placeholder="Enter category name"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium text-gray-500"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newCategory.description}
                  required
                  rows={4}
                  placeholder="Enter category description"
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-slate-50">
                <h4 className="font-medium text-sm mb-3">Image Processing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                    <select
                      value={newCategory.imageOptions.cropMode}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
                            cropMode: e.target.value,
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    >
                      <option value="fill">Fill (best for cards)</option>
                      <option value="fit">Fit</option>
                      <option value="pad">Pad</option>
                      <option value="scale">Scale</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Width</label>
                    <input
                      type="number"
                      min={200}
                      max={2000}
                      value={newCategory.imageOptions.width}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
                            width: Number(e.target.value || 700),
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Height</label>
                    <input
                      type="number"
                      min={200}
                      max={2000}
                      value={newCategory.imageOptions.height}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          imageOptions: {
                            ...newCategory.imageOptions,
                            height: Number(e.target.value || 700),
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    />
                  </div>
                </div>

                <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={newCategory.imageOptions.removeBackground}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        imageOptions: {
                          ...newCategory.imageOptions,
                          removeBackground: e.target.checked,
                        },
                      })
                    }
                  />
                  Remove Background (if supported by provider)
                </label>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="image"
                  className="cursor-pointer inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                  <Upload className="h-4 w-4" />
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {newCategory.image && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                )}
              </div>

              <button
                type="button"
                onClick={applyImagePreview}
                disabled={!newCategory.image || imagePreviewLoading}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60"
              >
                {imagePreviewLoading ? "Applying..." : "Apply Image Settings"}
              </button>

              <div className="border rounded-lg p-4 bg-slate-50">
                <p className="text-xs text-gray-500 mb-2">Preview (square card)</p>
                <div className="w-44 h-44 rounded-md border overflow-hidden bg-white flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Processed preview"
                      className="w-full h-full object-cover"
                    />
                  ) : newCategory.image ? (
                    <img
                      src={newCategory.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No image selected</span>
                  )}
                </div>
                {imagePreviewNotice && (
                  <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 shadow"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4" />
                    Create Category
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminCategory;
````

## File: frontend/src/pages/AdminProducts.jsx
````javascript
import React, { useEffect, useState } from "react";
import {
  Trash,
  Star,
  Edit,
  Upload,
  PlusCircle,
  Loader,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";

const AdminProducts = () => {
  const {
    products,
    fetchAllProducts,
    toggleFeaturedProduct,
    deleteProduct,
    createProduct,
    loading,
  } = useProductStore();
  const { categories, getAllCategories } = useCategoryStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    imageOptions: {
      cropMode: "fill",
      width: 900,
      height: 900,
      removeBackground: false,
    },
  });
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
  const [imagePreviewNotice, setImagePreviewNotice] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCategories();
    fetchAllProducts();
  }, [getAllCategories, fetchAllProducts]);

  // Filter products by search
  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      String(product.price).includes(query)
    );
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newProduct.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newProduct.image, newProduct.imageOptions);
      setImagePreview(processedPreview);
      if (newProduct.imageOptions.removeBackground) {
        setImagePreviewNotice("Background removal is applied on save; preview shows crop and sizing only.");
      }
    } catch (error) {
      setImagePreview("");
      setImagePreviewNotice(error.message || "Preview generation failed");
    } finally {
      setImagePreviewLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 900,
          height: 900,
          removeBackground: false,
        },
      });
    } catch {
      // Errors are surfaced via store toasts.
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="products">
        <div className="rounded border shadow-sm">
          {/* Header with Add & Search */}
          <div className="px-4 py-3 border-b flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-medium text-lg">Products</h3>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("createProduct")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="text-sm px-3 py-2 rounded-lg bg-gray-900 text-white text-center"
              >
                Add
              </button>
            </div>
          </div>

          {/* Table wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-left">Product</th>
                  <th className="px-4 py-3 font-medium text-left">Price</th>
                  <th className="px-4 py-3 font-medium text-left">Stock</th>
                  <th className="px-4 py-3 font-medium text-center">Featured</th>
                  <th className="px-4 py-3 font-medium text-center">Edit</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-slate-100">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 object-cover rounded-full"
                          />
                          <span className="ml-3">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{product.price}</td>
                      <td className="px-4 py-3">{product.stock}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => toggleFeaturedProduct(product._id)}
                          className={`p-1 rounded-full ${
                            product.isFeatured
                              ? "bg-gray-800 text-white"
                              : "hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          <Star className="h-5 w-5" />
                        </button>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          to={`/admin/products/${product._id}/edit`}
                          className="hover:text-gray-500"
                        >
                          <Edit className="h-5 w-5" />
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => deleteProduct(product._id)}
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No matching products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Product Form */}
        <div className="rounded shadow-sm border mt-6 bg-white" id="createProduct">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Create a Product</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Product Name
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  placeholder="Enter product name"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Price
                </label>
                <input
                  type="number"
                  value={newProduct.price}
                  required
                  step={0.01}
                  placeholder="0.00"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Description
                </label>
                <textarea
                  value={newProduct.description}
                  required
                  rows={3}
                  placeholder="Enter product description"
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500">
                  Category
                </label>
                <select
                  value={newProduct.category}
                  required
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className="mt-1 w-full rounded-md px-3 py-2 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:outline-none"
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                  <option value="None">None</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-slate-50">
                <h4 className="font-medium text-sm mb-3">Image Processing</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                    <select
                      value={newProduct.imageOptions.cropMode}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          imageOptions: {
                            ...newProduct.imageOptions,
                            cropMode: e.target.value,
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    >
                      <option value="fill">Fill (best for cards)</option>
                      <option value="fit">Fit</option>
                      <option value="pad">Pad</option>
                      <option value="scale">Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Width</label>
                    <input
                      type="number"
                      min={200}
                      max={2000}
                      value={newProduct.imageOptions.width}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          imageOptions: {
                            ...newProduct.imageOptions,
                            width: Number(e.target.value || 900),
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Height</label>
                    <input
                      type="number"
                      min={200}
                      max={2000}
                      value={newProduct.imageOptions.height}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          imageOptions: {
                            ...newProduct.imageOptions,
                            height: Number(e.target.value || 900),
                          },
                        })
                      }
                      className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                    />
                  </div>
                </div>

                <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={newProduct.imageOptions.removeBackground}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: {
                          ...newProduct.imageOptions,
                          removeBackground: e.target.checked,
                        },
                      })
                    }
                  />
                  Remove Background (if supported by provider)
                </label>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="image"
                  className="cursor-pointer inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                  <Upload className="h-4 w-4" />
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {newProduct.image && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                )}
              </div>

              <button
                type="button"
                onClick={applyImagePreview}
                disabled={!newProduct.image || imagePreviewLoading}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60"
              >
                {imagePreviewLoading ? "Applying..." : "Apply Image Settings"}
              </button>

              <div className="border rounded-lg p-4 bg-slate-50">
                <p className="text-xs text-gray-500 mb-2">Preview (square card)</p>
                <div className="w-44 h-44 rounded-md border overflow-hidden bg-white flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Processed preview"
                      className="w-full h-full object-cover"
                    />
                  ) : newProduct.image ? (
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No image selected</span>
                  )}
                </div>
                {imagePreviewNotice && (
                  <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 shadow"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4" />
                    Create Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminProducts;
````

## File: frontend/src/pages/EditCategory.jsx
````javascript
import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, SaveIcon, ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";


const EditCategory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {editCategory, fetchCategoryById,category, loading, } = useCategoryStore();
    const [newCategory, setNewCategory] = useState({
        name: "",
        description: "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 700,
          height: 700,
          removeBackground: false,
        },
    });
    const [imagePreview, setImagePreview] = useState("");
    const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
    const [imagePreviewNotice, setImagePreviewNotice] = useState("");
    useEffect(()=>{
        fetchCategoryById(id);
    },[fetchCategoryById, id])
    useEffect(()=>{
        if(category){
            setNewCategory({
                name: category.name,
                description: category.description,
                image: "",
                imageOptions: {
                  cropMode: "fill",
                  width: 700,
                  height: 700,
                  removeBackground: false,
                },
            })
        }
    },[category]);
    
    const isChanged = JSON.stringify({
        name: category?.name,
        description: category?.description,
    }) !== JSON.stringify({
        name: newCategory.name,
        description: newCategory.description,
    }) || newCategory.image;

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newCategory.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newCategory.image, newCategory.imageOptions);
      setImagePreview(processedPreview);
      if (newCategory.imageOptions.removeBackground) {
        setImagePreviewNotice("Background removal is applied on save; preview shows crop and sizing only.");
      }
    } catch (error) {
      setImagePreview("");
      setImagePreviewNotice(error.message || "Preview generation failed");
    } finally {
      setImagePreviewLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await editCategory(id, newCategory);
    if (updated) {
      navigate(-1);
    }
  }

  return (
    <div
        className="rounded-md mx-auto w-11/12 max-w-4xl"
      >
        <h3 className="text-center text-xl p-5 font-semibold">
          Edit Category {category?.name}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md rounded-xl p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newCategory.name}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-gray-600">Category Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-slate-50">
              <h4 className="font-medium text-sm mb-3">Image Processing</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                  <select
                    value={newCategory.imageOptions.cropMode}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        imageOptions: { ...newCategory.imageOptions, cropMode: e.target.value },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  >
                    <option value="fill">Fill (best for cards)</option>
                    <option value="fit">Fit</option>
                    <option value="pad">Pad</option>
                    <option value="scale">Scale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Width</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newCategory.imageOptions.width}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        imageOptions: { ...newCategory.imageOptions, width: Number(e.target.value || 700) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Height</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newCategory.imageOptions.height}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        imageOptions: { ...newCategory.imageOptions, height: Number(e.target.value || 700) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
              </div>

              <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={newCategory.imageOptions.removeBackground}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      imageOptions: {
                        ...newCategory.imageOptions,
                        removeBackground: e.target.checked,
                      },
                    })
                  }
                />
                Remove Background (if supported by provider)
              </label>
            </div>

            <div className="relative">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-300 px-3 py-2 rounded-md shadow-sm text-sm hover:bg-gray-400 inline-flex items-center"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload New Image
            </label>
            {newCategory.image && (
              <span className="ml-3 text-sm absolute text-gray-700 top-2">
                <CheckCircle/>
              </span>
            )}
          </div>

            <button
              type="button"
              onClick={applyImagePreview}
              disabled={!newCategory.image || imagePreviewLoading}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60"
            >
              {imagePreviewLoading ? "Applying..." : "Apply Image Settings"}
            </button>

          <div className="border rounded-lg p-4 bg-slate-50">
            <p className="text-xs text-gray-500 mb-2">Preview (square card)</p>
            <div className="w-44 h-44 rounded-md border overflow-hidden bg-white flex items-center justify-center">
              {imagePreview ? (
                <img src={imagePreview} alt="Processed preview" className="w-full h-full object-cover" />
              ) : newCategory.image ? (
                <img src={newCategory.image} alt="New preview" className="w-full h-full object-contain" />
              ) : category?.image ? (
                <img src={category.image} alt="Current" className="w-full h-full object-contain" />
              ) : (
                <span className="text-xs text-gray-400">No image available</span>
              )}
            </div>
            {imagePreviewNotice && (
              <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
            )}
          </div>
          </div>

          <div className="flex gap-2 lg:col-span-2">
            <button
              onClick={() => navigate(-1)}
              className="w-2/5 flex justify-center py-2 rounded-md shadow-sm text-sm text-gray-800 bg-gray-300 hover:bg-gray-200  transition-colors"
            >
              <ArrowLeft className="mr-1 h-5 w-5" />
              Back
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-2 rounded-md shadow-sm text-sm text-white bg-gray-800 hover:bg-gray-700 "
              disabled = {loading || !isChanged}
            >
              {loading ? (
                <>
                  <Loader
                    className="mr-2 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  Loading
                </>
              ) : (
                <>
                  <SaveIcon className="mr-2 h-5 w-5" />
                  Save
                </>
              )}
            </button>
          </div>
        </form>
      </div>
  )
}

export default EditCategory
````

## File: frontend/src/pages/EditProductPage.jsx
````javascript
import React from "react";
import { useState, useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, SaveIcon, ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useCategoryStore } from "../stores/useCategoryStore";
import { createImagePreview } from "../lib/imagePreview";


const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchProductById, product, loading, editProduct } = useProductStore();
  const {categories,getAllCategories} = useCategoryStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    category: "",
    image: "",
    imageOptions: {
      cropMode: "fill",
      width: 900,
      height: 900,
      removeBackground: false,
    },
  });
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewLoading, setImagePreviewLoading] = useState(false);
  const [imagePreviewNotice, setImagePreviewNotice] = useState("");

  useEffect(() => {
    getAllCategories();
    if (product) {
      setNewProduct({
        name: product.name || "",
        description: product.description || "",
        stock: product.stock || "",
        price: product.price || "",
        category: product.category || "",
        image: "",
        imageOptions: {
          cropMode: "fill",
          width: 900,
          height: 900,
          removeBackground: false,
        },
      });
    }
  }, [product,getAllCategories]);
  const isChanged =
    JSON.stringify({
      name: product?.name,
      description: product?.description,
      stock: product?.stock,
      price: product?.price,
      category: product?.category,
    }) !==
      JSON.stringify({
        name: newProduct.name,
        description: newProduct.description,
        stock: newProduct.stock,
        price: newProduct.price,
        category: newProduct.category,
      }) || newProduct.image;

  useEffect(() => {
    fetchProductById(id);
  }, [fetchProductById, id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
        setImagePreview("");
        setImagePreviewNotice("");
      };
      reader.readAsDataURL(file);
    }
  };

  const applyImagePreview = async () => {
    if (!newProduct.image) {
      return;
    }

    setImagePreviewLoading(true);
    setImagePreviewNotice("");

    try {
      const processedPreview = await createImagePreview(newProduct.image, newProduct.imageOptions);
      setImagePreview(processedPreview);
      if (newProduct.imageOptions.removeBackground) {
        setImagePreviewNotice("Background removal is applied on save; preview shows crop and sizing only.");
      }
    } catch (error) {
      setImagePreview("");
      setImagePreviewNotice(error.message || "Preview generation failed");
    } finally {
      setImagePreviewLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await editProduct(id, newProduct);
    if (updated) {
      navigate("/admin/products");
    }
  };

  return (
    <div>
      <div
        className="rounded-md mx-auto w-11/12 max-w-5xl"
      >
        <h3 className="text-center text-xl p-5 font-semibold">
          Edit Product {product?.name}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md rounded-xl p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-gray-600">Product Description</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="stock" className="block text-sm text-gray-600">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={newProduct.stock}
                  step={1}
                  className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm text-gray-600">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  step={0.01}
                  className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm text-gray-600">Category</label>
              <select
                name="category"
                id="category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="mt-1 block w-full bg-slate-50 border border-gray-300 rounded-md py-2 px-3 outline-none"
              >
                <option value="None">None</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id} className="outline-none">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-slate-50">
              <h4 className="font-medium text-sm mb-3">Image Processing</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Crop Mode</label>
                  <select
                    value={newProduct.imageOptions.cropMode}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, cropMode: e.target.value },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  >
                    <option value="fill">Fill (best for cards)</option>
                    <option value="fit">Fit</option>
                    <option value="pad">Pad</option>
                    <option value="scale">Scale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Width</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newProduct.imageOptions.width}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, width: Number(e.target.value || 900) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Height</label>
                  <input
                    type="number"
                    min={200}
                    max={2000}
                    value={newProduct.imageOptions.height}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        imageOptions: { ...newProduct.imageOptions, height: Number(e.target.value || 900) },
                      })
                    }
                    className="w-full rounded-md px-3 py-2 text-sm border border-gray-300"
                  />
                </div>
              </div>

              <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={newProduct.imageOptions.removeBackground}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      imageOptions: {
                        ...newProduct.imageOptions,
                        removeBackground: e.target.checked,
                      },
                    })
                  }
                />
                Remove Background (if supported by provider)
              </label>
            </div>

            <div className="relative">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-300 px-3 py-2 rounded-md shadow-sm text-sm hover:bg-gray-400 inline-flex items-center"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload New Image
            </label>
            {newProduct.image && (
              <span className="ml-3 text-sm absolute text-gray-700 top-2">
                <CheckCircle/>
              </span>
            )}
          </div>

            <button
              type="button"
              onClick={applyImagePreview}
              disabled={!newProduct.image || imagePreviewLoading}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60"
            >
              {imagePreviewLoading ? "Applying..." : "Apply Image Settings"}
            </button>

            <div className="border rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-gray-500 mb-2">Preview (square card)</p>
              <div className="w-44 h-44 rounded-md border overflow-hidden bg-white flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Processed preview" className="w-full h-full object-cover" />
                ) : newProduct.image ? (
                  <img src={newProduct.image} alt="New preview" className="w-full h-full object-contain" />
                ) : product?.image ? (
                  <img src={product.image} alt="Current" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-gray-400">No image available</span>
                )}
              </div>
              {imagePreviewNotice && (
                <p className="mt-2 text-xs text-gray-500">{imagePreviewNotice}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2 lg:col-span-2">
            <button
              onClick={() => navigate(-1)}
              className="w-2/5 flex justify-center py-2 rounded-md shadow-sm text-sm text-gray-800 bg-gray-300 hover:bg-gray-200  transition-colors"
            >
              <ArrowLeft className="mr-1 h-5 w-5" />
              Back
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-2 rounded-md shadow-sm text-sm text-white bg-gray-800 hover:bg-gray-700 "
              disabled = {loading || !isChanged}
            >
              {loading ? (
                <>
                  <Loader
                    className="mr-2 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  Loading
                </>
              ) : (
                <>
                  <SaveIcon className="mr-2 h-5 w-5" />
                  Save
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
````

## File: frontend/src/pages/LogInPage.jsx
````javascript
import React from "react";

import { useState } from "react";
import { Home, Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

import { useUserStore } from "../stores/useUserStore";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative">
      <Link
        to="/"
        className="absolute top-3 left-3 flex gap-1 hover:text-blue-500 hover:cursor-pointer"
      >
        <Home />
        Back to Home page
      </Link>
      <div>
        <h2 className="text-center font-bold text-gray-800 text-2xl my-3">
          Admin Login
        </h2>
        <p className="text-center text-sm text-gray-600">
          Authorized administrators only
        </p>
      </div>

      <div>
        <div className="mt-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 mx-auto p-5 bg-slate-100 rounded-md shadow-md w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            {/* input for email */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <Mail />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="John@example.com"
                />
              </div>
            </div>
            {/* input for password */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <Lock />
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="********"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="text-center text-white bg-gray-800 rounded w-full py-2 hover:bg-gray-700 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader
                      className="mx-auto animate-spin"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>Login</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
````

## File: frontend/src/pages/Orders.jsx
````javascript
import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useOrderStore } from "../stores/useOrderStore";
import { useNavigate } from "react-router-dom";

const orderStatus = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  canceled: "bg-red-100 text-red-700",
  pending: "bg-orange-100 text-orange-500",
  failed: "bg-gray-200 text-gray-600",
  "on hold": "bg-purple-100 text-purple-700",
  returned: "bg-pink-100 text-pink-500",
};

const Orders = () => {
  const { orders, getAllOrders, deleteOrder } = useOrderStore();
  const [search, setSearch] = useState("");
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (orders.some((order) => order.paymentStatus === "pending")) {
        getAllOrders();
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [getAllOrders, orders]);

  // Filter orders by search query
  const filteredOrders = orders.filter((order) => {
    const query = search.toLowerCase();
    return (
      order._id.toLowerCase().includes(query) ||
      order.customer?.name?.toLowerCase().includes(query) ||
      order.orderStatus.toLowerCase().includes(query)
    );
  });

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // Shorten OrderId
  const getShortId = (id) => id.slice(0, 8) + "...";

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"orders"}>
        <div className="rounded border shadow-sm">
          <div className="px-4 py-3 border-b flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <h3 className="font-medium text-lg">Manage Orders</h3>
            {/* Search box */}
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-left">OrderId</th>
                  <th className="px-4 py-3 font-medium text-left">Customer</th>
                  <th className="px-4 py-3 font-medium text-left">Date</th>
                  <th className="px-4 py-3 font-medium text-left">Status</th>
                  <th className="px-4 py-3 font-medium text-left">Total</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr
                      key={order._id}
                      onClick={() => navigate(`/admin/orders/${order._id}`)}
                      className="hover:bg-slate-100 hover:cursor-pointer"
                    >
                      {/* Shortened OrderId with toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedOrderId(
                              expandedOrderId === order._id ? null : order._id
                            );
                          }}
                          className="text-gray-800 font-mono text-xs underline"
                        >
                          {expandedOrderId === order._id
                            ? order._id
                            : getShortId(order._id)}
                        </button>
                      </td>

                      <td className="px-4 py-3">{order.customer?.name}</td>
                      <td className="px-4 py-3">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className={`px-4 py-3`}>
                        <span className={`p-1 rounded ${orderStatus[order.orderStatus]}`}>
                          {order.orderStatus}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          {order.paymentStatus}
                        </div>
                      </td>
                      <td className="px-4 py-3">ETB {order.totalAmount}</td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button
                          className="text-red-600 hover:text-red-900 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteOrder(order._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No matching orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </AdminNav>
    </div>
  );
};

export default Orders;
````

## File: frontend/src/pages/PlaceOrder.jsx
````javascript
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { useOrderStore } from "../stores/useOrderStore";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const { cart, clearCartItems } = useContext(CartContext);
  const { placeOrder, loading } = useOrderStore();
  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (number) => {
    // Regex for a 10-digit number, optionally starting with '09'
    const phoneRegex = /^(09|\+2519|07|\+2517)\d{8}$/;
    if (!phoneRegex.test(number)) {
      setPhoneError(
        "Please enter a valid 10-digit phone number (e.g., 09xxxxxxxx or 07xxxxxxxx)"
      );
      return false;
    }
    setPhoneError("");
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validatePhoneNumber(phoneNumber)) {
      const orderData = { customer: customerDetail, cart, paymentMethod };
      if (cart.length > 0) {
        const result = await placeOrder(orderData);
        if (!result) return;

        if (result.paymentUrl) {
          window.location.href = result.paymentUrl;
          return;
        }

        clearCartItems();
      } else {
        toast.error("Cart is empty");
      }
    } else {
      toast.error("Please fix the form errors");
    }
  };

  return (
    <div className="bg-gray-50 ">
      <Navbar page="place-order" />
      <div className="w-full max-w-md mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Place Your Order 🛒
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({ ...customerDetail, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({ ...customerDetail, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNo"
              required
              placeholder="e.g., 0911111111"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setCustomerDetail({ ...customerDetail, phoneNumber: e.target.value });
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Chapa">Chapa</option>
              <option value="Telebirr">Telebirr</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              required
              placeholder="Your full address"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({
                  ...customerDetail,
                  address: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition duration-200 ease-in-out focus:outline-none"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin mx-auto" />
              </>
            ) : (
              <>Place Order</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
````

## File: frontend/src/stores/useAdminStore.js
````javascript
import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
    dashboardLoading: false,
    analyticsLoading: false,
    settingsLoading: false,
    contactMessagesLoading: false,
    dashboardData: {
        summary: {
            totalProducts: 0,
            totalOrders: 0,
            ordersToday: 0,
            totalRevenue: 0,
            totalCustomers: 0,
        },
        topSelling: [],
        recentOrders: [],
    },
    analyticsData: {
        rangeDays: 30,
        salesTrend: [],
        orderStatus: [],
        paymentMethods: [],
        categoryPerformance: [],
    },
    settingsProfile: {
        name: "",
        email: "",
        role: "",
    },
    settingsPermissions: {
        canManageAdmins: false,
    },
    settingsContactNotifications: {
        emailNotificationsEnabled: true,
        contactNotifyTo: "",
    },
    monitoringLoading: false,
    monitoringData: {
        summary: {
            masterUsers: 0,
            totalEvents: 0,
            successEvents: 0,
            failureEvents: 0,
            uptimeSeconds: 0,
            databaseStatus: "disconnected",
            cacheStatus: "unavailable",
            heapUsedMb: 0,
            rssMb: 0,
        },
        filteredSummary: {
            totalEvents: 0,
            page: 1,
            limit: 10,
        },
        pagination: {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 1,
        },
        routeBreakdown: [],
        actorBreakdown: [],
        recentEvents: [],
    },
    adminUsers: [],
    contactMessages: [],
    contactMessagesPagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 1,
    },

    fetchDashboard: async () => {
        set({ dashboardLoading: true });
        try {
            const response = await axios.get("/admin/dashboard");
            set({ dashboardData: response.data, dashboardLoading: false });
        } catch (error) {
            set({ dashboardLoading: false });
            toast.error(error.response?.data?.message || "Failed to load dashboard");
        }
    },

    fetchAnalytics: async (days = 30) => {
        set({ analyticsLoading: true });
        try {
            const response = await axios.get(`/admin/analytics?days=${days}`);
            set({ analyticsData: response.data, analyticsLoading: false });
        } catch (error) {
            set({ analyticsLoading: false });
            toast.error(error.response?.data?.message || "Failed to load analytics");
        }
    },

    fetchSettings: async () => {
        set({ settingsLoading: true });
        try {
            const response = await axios.get("/admin/settings");
            set({
                settingsProfile: response.data.profile,
                settingsPermissions: response.data.permissions || {
                    canManageAdmins: false,
                },
                settingsContactNotifications: response.data.contactNotifications || {
                    emailNotificationsEnabled: true,
                    contactNotifyTo: "",
                },
                settingsLoading: false,
            });
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to load settings");
        }
    },

    updateProfile: async (profileData) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/profile", profileData);
            set({ settingsProfile: response.data.profile, settingsLoading: false });
            toast.success(response.data.message || "Profile updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update profile");
            throw error;
        }
    },

    updatePassword: async (passwordData) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/password", passwordData);
            set({ settingsLoading: false });
            toast.success(response.data.message || "Password updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update password");
            throw error;
        }
    },

    updateContactNotificationSettings: async (payload) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/contact-notifications", payload);
            set({
                settingsContactNotifications: response.data.contactNotifications,
                settingsLoading: false,
            });
            toast.success(response.data.message || "Notification settings updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update notification settings");
            throw error;
        }
    },

    fetchAdminUsers: async () => {
        set({ settingsLoading: true });
        try {
            const response = await axios.get("/admin/settings/admin-users");
            set({ adminUsers: response.data.users || [], settingsLoading: false });
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to load admin users");
        }
    },

    createAdminUser: async (payload) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.post("/admin/settings/admin-users", payload);
            set((state) => ({
                adminUsers: [response.data.user, ...state.adminUsers],
                settingsLoading: false,
            }));
            toast.success(response.data.message || "Admin user created");
            return response.data.user;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to create admin user");
            return null;
        }
    },

    fetchMonitoring: async (params = {}) => {
        set({ monitoringLoading: true });
        try {
            const query = new URLSearchParams();
            if (params.page) query.set("page", params.page);
            if (params.limit) query.set("limit", params.limit);
            if (params.status && params.status !== "all") query.set("status", params.status);
            if (params.action) query.set("action", params.action);
            if (params.route) query.set("route", params.route);
            if (params.actorRole && params.actorRole !== "all") query.set("actorRole", params.actorRole);
            if (params.search) query.set("search", params.search);

            const suffix = query.toString() ? `?${query.toString()}` : "";
            const response = await axios.get(`/admin/monitoring${suffix}`);
            set({ monitoringData: response.data, monitoringLoading: false });
        } catch (error) {
            set({ monitoringLoading: false });
            toast.error(error.response?.data?.message || "Failed to load monitoring data");
        }
    },

    fetchContactMessages: async (params = {}) => {
        set({ contactMessagesLoading: true });
        try {
            const query = new URLSearchParams();
            if (params.page) query.set("page", params.page);
            if (params.limit) query.set("limit", params.limit);
            if (params.status && params.status !== "all") query.set("status", params.status);
            if (params.search) query.set("search", params.search);

            const suffix = query.toString() ? `?${query.toString()}` : "";
            const response = await axios.get(`/admin/contact-messages${suffix}`);
            set({
                contactMessages: response.data.messages || [],
                contactMessagesPagination: response.data.pagination || {
                    page: 1,
                    limit: 20,
                    total: 0,
                    totalPages: 1,
                },
                contactMessagesLoading: false,
            });
        } catch (error) {
            set({ contactMessagesLoading: false });
            toast.error(error.response?.data?.message || "Failed to load contact messages");
        }
    },

    updateContactMessageStatus: async (messageId, status) => {
        try {
            const response = await axios.patch(`/admin/contact-messages/${messageId}/status`, { status });
            set((state) => ({
                contactMessages: state.contactMessages.map((message) =>
                    message._id === messageId
                        ? { ...message, status }
                        : message
                ),
            }));
            toast.success(response.data?.message || "Status updated");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update message status");
            return false;
        }
    },
}));
````

## File: frontend/src/stores/useUserStore.js
````javascript
import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "../lib/axios";

export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: true,
  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });
      set({ user: res.data.user, loading: false });
      toast.success("Logged in successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Please try again later");
    }
  },
  logout: async () => {
    try {
      await axios.post("/auth/logout");
      set({ user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred logging out");
    }
  },
  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/auth/profile");
      set({ user: response.data, checkingAuth: false });
    } catch {
      set({ checkingAuth: false, user: null });
    }
  },
  refreshToken: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.post("/auth/refreshAccessToken");
      set({ checkingAuth: false });
      return response.data;
    } catch (error) {
      set({ user: null, checkingAuth: false });
      throw error;
    }
  },
}));
````

## File: backend/controllers/admin.controller.js
````javascript
import Category from "../models/category.model.js";
import cloudinary from "../lib/cloudinary.js";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import SystemSettings from "../models/systemSettings.model.js";
import { uploadImageWithProcessing } from "../lib/imageUpload.js";
import { buildMonitoringOverview, recordAuditEvent } from "../lib/auditLogger.js";
import logger from "../lib/logger.js";

const DASHBOARD_TOP_LIMIT = 5;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getSystemSettings = async () => {
  let settings = await SystemSettings.findOne({ key: "global" });
  if (!settings) {
    settings = await SystemSettings.create({
      key: "global",
      emailNotificationsEnabled: true,
      contactNotifyTo: process.env.CONTACT_NOTIFY_TO || "",
    });
  }
  return settings;
};

const getTodayRange = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
};

const getWindowStart = (days) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));
  return start;
};

const buildTopSellingPipeline = (matchStage = null, limit = DASHBOARD_TOP_LIMIT) => {
  const pipeline = [];
  if (matchStage) {
    pipeline.push({ $match: matchStage });
  }

  pipeline.push(
    { $unwind: "$products" },
    {
      $group: {
        _id: "$products.product",
        totalSold: { $sum: "$products.quantity" },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "productInfo",
      },
    },
    { $unwind: "$productInfo" },
    { $sort: { totalSold: -1 } },
    { $limit: limit }
  );

  return pipeline;
};

export const adminInfo = async (req, res) => {
  try {
    const { start, end } = getTodayRange();
    const [totalProducts, totalOrders, todayOrders, revenueAgg, topSelling, recentOrders] =
      await Promise.all([
        Product.countDocuments(),
        Order.countDocuments(),
        Order.countDocuments({ createdAt: { $gte: start, $lt: end } }),
        Order.aggregate([
          { $match: { paymentStatus: "paid" } },
          { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
        ]),
        Order.aggregate(buildTopSellingPipeline()),
        Order.find({})
          .sort({ createdAt: -1 })
          .limit(8)
          .select("customer totalAmount orderStatus paymentStatus createdAt")
          .lean(),
      ]);

    const distinctCustomers = await Order.distinct("customer.phoneNumber", {
      "customer.phoneNumber": { $exists: true, $ne: "" },
    });

    res.status(200).json({
      summary: {
        totalProducts,
        totalOrders,
        ordersToday: todayOrders,
        totalRevenue: revenueAgg[0]?.totalRevenue || 0,
        totalCustomers: distinctCustomers.length,
      },
      topSelling,
      recentOrders,
    });
  } catch (error) {
    logger.error({ err: error }, "error in adminInfo");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const days = Math.min(Math.max(Number(req.query.days) || 30, 7), 365);
    const startDate = getWindowStart(days);

    const baseMatch = { createdAt: { $gte: startDate } };

    const [salesTrend, orderStatus, paymentMethods, categoryPerformance] = await Promise.all([
      Order.aggregate([
        { $match: baseMatch },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$createdAt",
              },
            },
            orders: { $sum: 1 },
            revenue: {
              $sum: {
                $cond: [{ $eq: ["$paymentStatus", "paid"] }, "$totalAmount", 0],
              },
            },
          },
        },
        { $project: { _id: 0, date: "$_id", orders: 1, revenue: 1 } },
        { $sort: { date: 1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $group: { _id: "$orderStatus", count: { $sum: 1 } } },
        { $project: { _id: 0, status: "$_id", count: 1 } },
        { $sort: { count: -1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $group: { _id: "$paymentMethod", count: { $sum: 1 } } },
        { $project: { _id: 0, method: "$_id", count: 1 } },
        { $sort: { count: -1 } },
      ]),
      Order.aggregate([
        { $match: baseMatch },
        { $unwind: "$products" },
        {
          $lookup: {
            from: "products",
            localField: "products.product",
            foreignField: "_id",
            as: "productInfo",
          },
        },
        {
          $unwind: {
            path: "$productInfo",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "productInfo.category",
            foreignField: "_id",
            as: "categoryInfo",
          },
        },
        {
          $unwind: {
            path: "$categoryInfo",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $group: {
            _id: { $ifNull: ["$categoryInfo.name", "Uncategorized"] },
            totalSold: { $sum: "$products.quantity" },
            revenue: { $sum: { $multiply: ["$products.quantity", "$products.price"] } },
            orderIds: { $addToSet: "$_id" },
          },
        },
        {
          $project: {
            _id: 0,
            category: "$_id",
            totalSold: 1,
            revenue: 1,
            orders: { $size: "$orderIds" },
          },
        },
        { $sort: { revenue: -1 } },
        { $limit: 10 },
      ]),
    ]);

    res.status(200).json({
      rangeDays: days,
      salesTrend,
      orderStatus,
      paymentMethods,
      categoryPerformance,
    });
  } catch (error) {
    logger.error({ err: error }, "error in getAnalytics");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getAdminSettings = async (req, res) => {
  try {
    const settings = await getSystemSettings();
    res.status(200).json({
      profile: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
      permissions: {
        canManageAdmins: req.user.role === "master",
      },
      contactNotifications: {
        emailNotificationsEnabled: settings.emailNotificationsEnabled,
        contactNotifyTo: settings.contactNotifyTo || "",
      },
    });
  } catch (error) {
    logger.error({ err: error }, "error in getAdminSettings");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getAdminMonitoring = async (req, res) => {
  try {
    const overview = await buildMonitoringOverview(req.query);
    return res.status(200).json(overview);
  } catch (error) {
    logger.error({ err: error }, "error in getAdminMonitoring");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const updateContactNotificationSettings = async (req, res) => {
  try {
    const { emailNotificationsEnabled, contactNotifyTo } = req.body;

    const normalizedAddress = String(contactNotifyTo || "")
      .trim()
      .toLowerCase();

    if (!normalizedAddress || !emailPattern.test(normalizedAddress)) {
      return res.status(400).json({
        message: "Please provide a valid contact notification email",
      });
    }

    const settings = await getSystemSettings();
    settings.emailNotificationsEnabled = Boolean(emailNotificationsEnabled);
    settings.contactNotifyTo = normalizedAddress;
    await settings.save();

    await recordAuditEvent({
      user: req.user,
      req,
      action: "admin.contact-notifications.updated",
      resource: "admin/settings/contact-notifications",
      metadata: {
        emailNotificationsEnabled: settings.emailNotificationsEnabled,
        contactNotifyTo: settings.contactNotifyTo,
      },
    });

    return res.status(200).json({
      message: "Contact notification settings updated",
      contactNotifications: {
        emailNotificationsEnabled: settings.emailNotificationsEnabled,
        contactNotifyTo: settings.contactNotifyTo,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "error in updateContactNotificationSettings");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const updateAdminProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const existing = await User.findOne({
      email,
      _id: { $ne: req.user._id },
    }).select("_id");
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name: name.trim(), email: email.trim().toLowerCase() },
      { new: true, runValidators: true }
    ).select("-password");

    await recordAuditEvent({
      user: updatedUser,
      req,
      action: "admin.profile.updated",
      resource: "admin/settings/profile",
      metadata: {
        email: updatedUser.email,
      },
    });

    res.status(200).json({
      message: "Profile updated successfully",
      profile: {
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      },
      user: updatedUser,
    });
  } catch (error) {
    logger.error({ err: error }, "error in updateAdminProfile");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const updateAdminPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Current and new password are required" });
    }
    if (newPassword.length < 10) {
      return res
        .status(400)
        .json({ message: "New password must be at least 10 characters" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    user.password = newPassword;
    await user.save();

    await recordAuditEvent({
      user: req.user,
      req,
      action: "admin.password.updated",
      resource: "admin/settings/password",
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    logger.error({ err: error }, "error in updateAdminPassword");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getAdminUsers = async (_req, res) => {
  try {
    const adminUsers = await User.find({ role: { $in: ["admin", "master"] } })
      .select("name email role createdAt updatedAt")
      .sort({ role: -1, createdAt: -1 })
      .lean();

    await recordAuditEvent({
      user: _req.user,
      req: _req,
      action: "admin.users.viewed",
      resource: "admin/settings/admin-users",
      metadata: {
        resultCount: adminUsers.length,
      },
    });

    res.status(200).json({ users: adminUsers });
  } catch (error) {
    logger.error({ err: error }, "error in getAdminUsers");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const createAdminUser = async (req, res) => {
  try {
    const { name, email, password, role = "admin" } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    if (!emailPattern.test(String(email).trim().toLowerCase())) {
      return res.status(400).json({ message: "Please provide a valid email" });
    }

    if (String(password).length < 10) {
      return res
        .status(400)
        .json({ message: "Password must be at least 10 characters" });
    }

    if (role !== "admin") {
      return res
        .status(400)
        .json({ message: "Master can only create admin users" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail }).select("_id");

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const createdUser = await User.create({
      name: String(name).trim(),
      email: normalizedEmail,
      password: String(password),
      role: "admin",
    });

    await recordAuditEvent({
      user: req.user,
      req,
      action: "admin.user.created",
      resource: "admin/settings/admin-users",
      metadata: {
        createdUserId: createdUser._id,
        createdUserEmail: createdUser.email,
      },
    });

    res.status(201).json({
      message: "Admin user created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        role: createdUser.role,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "error in createAdminUser");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description, image, imageOptions } = req.body;
    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await uploadImageWithProcessing({
        image,
        folder: "categories",
        imageType: "category",
        imageOptions,
      });
    }
    const category = await Category.create({
      name,
      description,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
    });
    res.status(201).json({ category });
  } catch (error) {
    logger.error({ err: error }, "error in createCategory");
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Something went wrong. Please try again.",
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json({ categories });
  } catch (error) {
    logger.error({ err: error }, "error in getAllCategories");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const editCategory = async (req, res) => {
  try {
    const { name, description, image, imageOptions } = req.body;
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (name) category.name = name;
    if (description) category.description = description;
    if (image) {
      try {
        const publicId = category.image?.split("/").pop().split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`categories/${publicId}`);
          console.log("Old image deleted from Cloudinary");
        }
      } catch (error) {
        console.log("Error deleting old image from Cloudinary:", error.message);
      }

      let cloudinaryResponse;
      try {
        cloudinaryResponse = await uploadImageWithProcessing({
          image,
          folder: "categories",
          imageType: "category",
          imageOptions,
        });
        category.image = cloudinaryResponse?.secure_url || "";
      } catch (error) {
        console.log("Error uploading new image:", error.message);
        return res.status(error.statusCode || 500).json({
          message: error.statusCode ? error.message : "Image upload failed",
        });
      }
    }
    await category.save();
    return res.status(200).json({
      category,
      message: "Category updated successfully",
    });
  } catch (error) {
    logger.error({ err: error }, "error in editCategory");
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Something went wrong. Please try again.",
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      return res.status(200).json({ category });
    } else {
      return res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    logger.error({ err: error }, "error in getCategoryById");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    try {
      const publicId = category.image?.split("/").pop().split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(`categories/${publicId}`);
        console.log("Old image deleted from Cloudinary");
      }
    } catch (error) {
      console.log("Error deleting old image from Cloudinary:", error.message);
    }
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted Successfully" });
  } catch (error) {
    logger.error({ err: error }, "error in deleteCategory");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};
````

## File: backend/controllers/auth.controller.js
````javascript
import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { recordAuditEvent } from "../lib/auditLogger.js";
import logger from "../lib/logger.js";
import { getLoginFailureKey, getLoginLockKey, normalizeEmail } from "../middleware/rateLimit.middleware.js";
import { generateCsrfToken } from "../middleware/csrf.middleware.js";

const LOGIN_FAILURE_LIMIT = 5;
const LOGIN_LOCK_SECONDS = 5 * 60;

const generateTokens = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

    return {accessToken, refreshToken}  
}

const storeRefreshToken = async(userId, refreshToken) =>{
    await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7*24*60*60)
}

const setCookies = (res, refreshToken, accessToken, csrfToken) => {
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // Secure flag required for SameSite=None; localhost is treated as a secure context in modern browsers
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 7*24*60*60*1000
    })
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 15 * 60 * 1000
    })
    // csrfToken cookie intentionally NOT httpOnly so frontend JS can read it for the
    // double-submit CSRF protection. Keep sameSite consistent with accessToken.
    if (csrfToken) {
      res.cookie("csrfToken", csrfToken, {
        httpOnly: false,
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 15 * 60 * 1000,
      });
    }
}
export const signup = async (req,res) => {
    return res.status(403).json({
        message: "Public signup is disabled. Ask a master user to create admin access.",
    });
}

export const login = async (req,res) => {
    try {
        const email = normalizeEmail(req.body?.email);
        const password = String(req.body?.password || "");

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const lockKey = getLoginLockKey(email);
        const lockedUntil = await redis.get(lockKey);
        if (lockedUntil) {
            return res.status(429).json({
                message: "Too many failed login attempts. Please try again later.",
            });
        }

        const user = await User.findOne({email});
        
        if (user && (await user.comparePassword(password))){
            await redis.del(getLoginFailureKey(email));
            await redis.del(lockKey);
            const {accessToken, refreshToken} = generateTokens(user._id);
            await storeRefreshToken(user._id, refreshToken);
            const csrfToken = generateCsrfToken();
            setCookies(res, refreshToken, accessToken, csrfToken);
            await recordAuditEvent({
                user,
                req,
                action: "auth.login",
                resource: "auth/login",
                metadata: {
                    email: user.email,
                },
            });
            res.status(200).json({user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }, message: "Login successful"});
        }else{
            const failureKey = getLoginFailureKey(email);
            const failedAttempts = await redis.incr(failureKey);
            if (failedAttempts === 1) {
                await redis.expire(failureKey, LOGIN_LOCK_SECONDS);
            }

            if (failedAttempts >= LOGIN_FAILURE_LIMIT) {
                await redis.set(lockKey, "1", "EX", LOGIN_LOCK_SECONDS);
                await redis.del(failureKey);
            }

            res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        logger.error({ err: error }, "error in login");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}

export const logout = async (req,res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        let user = null;
        if(refreshToken){
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`);
            user = await User.findById(decoded.userId).select("name email role").lean();
        }

        if (user) {
            await recordAuditEvent({
                user,
                req,
                action: "auth.logout",
                resource: "auth/logout",
            });
        }
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        };
        res.clearCookie("accessToken", cookieOptions);
        res.clearCookie("refreshToken", cookieOptions);
        res.json({message:"Logout successful"});
    } catch (error) {
        logger.error({ err: error }, "error in logout");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}


export const refreshAccessToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken){
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

        if (storedToken !== refreshToken){
            return res.status(401).json({message: "Invalid refresh token"})
        }
        const accessToken = jwt.sign({userId: decoded.userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
        const csrfToken = generateCsrfToken();
        res.cookie("accessToken", accessToken,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
            maxAge: 15 * 60 * 1000
        })
        // update csrf token alongside refreshed access token
        res.cookie("csrfToken", csrfToken, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
            maxAge: 15 * 60 * 1000,
        })
        res.json({message: "Token refreshed successfully"})
    } catch (error) {
        if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid or expired refresh token" });
        }
        logger.error({ err: error }, "error in refreshAccessToken");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}

export const getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.log("error in profile route")
        logger.error({ err: error }, "error in getProfile");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}
````

## File: backend/controllers/order.controller.js
````javascript
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import {
  initializeChapaPayment,
  validateChapaCallbackSignature,
  verifyChapaPayment,
} from "../lib/chapa.js";
import { recordAuditEvent } from "../lib/auditLogger.js";
import logger from "../lib/logger.js";
import {
  buildOrderProductsFromInventory,
  decrementStockWithRollback,
  rollbackStockUpdates,
} from "../lib/orderSecurity.js";

const buildCallbackUrl = (req) => {
  if (process.env.CHAPA_CALLBACK_URL) {
    return process.env.CHAPA_CALLBACK_URL;
  }

  return `${req.protocol}://${req.get("host")}/api/orders/payment/callback`;
};

const buildReturnUrl = () => {
  if (process.env.CHAPA_RETURN_URL) {
    return process.env.CHAPA_RETURN_URL;
  }

  const fallbackClientUrl = process.env.CLIENT_URLS?.split(",")?.[0]?.trim();
  return `${fallbackClientUrl || "http://localhost:5173"}/payment-result`;
};

const buildReturnUrlWithTxRef = (txRef) => {
  const returnUrl = new URL(buildReturnUrl());
  returnUrl.searchParams.set("tx_ref", txRef);
  return returnUrl.toString();
};

const isWebhookFirstEnabled = () => {
  return String(process.env.CHAPA_WEBHOOK_FIRST || "true").toLowerCase() === "true";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUCCESS_STATUSES = new Set(["success"]);
const FAILED_STATUSES = new Set([
  "failed",
  "canceled",
  "cancelled",
  "declined",
  "expired",
  "error",
  "timeout",
]);

const normalizeChapaStatus = (status) => String(status || "").trim().toLowerCase();

const extractChapaTransactionId = (verification) => {
  const data = verification?.data || {};
  return String(
    data.id ||
      data.transaction_id ||
      data.reference ||
      data.chapa_reference ||
      data.tx_ref ||
      ""
  );
};

const getChapaEmail = (customerEmail) => {
  const providedEmail = String(customerEmail || "").trim();
  if (emailPattern.test(providedEmail)) {
    return providedEmail;
  }

  if (process.env.NODE_ENV === "production") {
    const error = new Error("A valid customer email is required for online payment");
    error.statusCode = 400;
    throw error;
  }

  return process.env.CHAPA_DEFAULT_EMAIL || "chapa.test@gmail.com";
};

const getNameParts = (name = "") => {
  const parts = String(name).trim().split(" ").filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "Customer", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
};

export const placeOrder = async (req, res) => {
  const stockUpdates = [];
  let createdOrder = null;

  try {
    const orderData = req.body;
    if (!Array.isArray(orderData?.cart) || orderData.cart.length === 0) {
      return res.status(400).json({ message: "cart is empty" });
    }

    const productIds = [...new Set(orderData.cart.map((item) => String(item?._id || "")))];
    const productsInDb = await Product.find({ _id: { $in: productIds } }).lean();
    const { products, totalAmount } = buildOrderProductsFromInventory(
      orderData.cart,
      productsInDb
    );
    stockUpdates.push(...(await decrementStockWithRollback(Product, products)));

    const paymentMethod = ["COD", "Chapa", "Telebirr"].includes(orderData.paymentMethod)
      ? orderData.paymentMethod
      : "COD";

    const paymentProvider = paymentMethod === "COD" ? "none" : "chapa";

    const orderPayload = {
      customer: orderData.customer,
      products,
      totalAmount,
      paymentMethod,
      paymentProvider,
    };

    if (paymentMethod !== "COD") {
      orderPayload.orderStatus = "pending";
    }

    const order = await Order.create(orderPayload);
    createdOrder = order;

    await recordAuditEvent({
      user: {
        _id: null,
        name: orderData?.customer?.name || "Guest",
        email: orderData?.customer?.email || "",
        role: "customer",
      },
      req,
      action: "order.created",
      resource: "orders/place-order",
      metadata: {
        orderId: order._id,
        paymentMethod,
        paymentProvider,
        totalAmount,
      },
    });

    if (paymentMethod === "COD") {
      return res.status(201).json({ order, message: "order placed successfully" });
    }

    const { firstName, lastName } = getNameParts(orderData?.customer?.name);
    const txRef = `ORDER-${order._id}-${Date.now()}`;

    const chapaEmail = getChapaEmail(orderData?.customer?.email);

    const chapaResponse = await initializeChapaPayment({
      amount: totalAmount,
      email: chapaEmail,
      firstName,
      lastName,
      phoneNumber: orderData?.customer?.phoneNumber,
      txRef,
      callbackUrl: buildCallbackUrl(req),
      returnUrl: buildReturnUrlWithTxRef(txRef),
      customization: {
        title: "DFXN Payment",
        description: `Order ${String(order._id).slice(-6)} payment`,
      },
      paymentMethod,
    });

    const checkoutUrl = chapaResponse?.data?.checkout_url;
    if (!checkoutUrl) {
      await rollbackStockUpdates(Product, stockUpdates);
      stockUpdates.splice(0, stockUpdates.length);
      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "failed",
        orderStatus: "failed",
      });
      return res.status(502).json({ message: "Failed to initialize payment" });
    }

    order.paymentReference = txRef;
    order.paymentUrl = checkoutUrl;
    await order.save();

    return res.status(201).json({
      order,
      message: "Order created. Complete payment to confirm your order.",
      paymentUrl: checkoutUrl,
      txRef,
    });
  } catch (error) {
    logger.error({ err: error }, "error in placeOrder");
    if (stockUpdates.length > 0) {
      await rollbackStockUpdates(Product, stockUpdates);
    }
    if (createdOrder?._id) {
      await Order.findByIdAndDelete(createdOrder._id);
    }
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Something went wrong. Please try again.",
    });
  }

  // const {customerName, customerEmail, customerPhoneNumber, customerAddress} = orderData.customer;
  // console.log(customerName, customerEmail, customerPhoneNumber, customerAddress);
};
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().lean().sort({ createdAt: -1 });
    res.status(200).json({ orders });
  } catch (error) {
    logger.error({ err: error }, "error in getAllOrders");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const verifyOrderPayment = async (req, res) => {
  try {
    const txRef = req.query.tx_ref || req.body?.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef });
    if (!order) {
      return res.status(404).json({ message: "Order not found for this payment reference" });
    }

    if (order.paymentStatus === "paid") {
      return res.status(200).json({
        message: "Payment already confirmed",
        paid: true,
        pending: false,
        order,
        source: "database",
      });
    }

    const verification = await verifyChapaPayment(txRef);
    const status = normalizeChapaStatus(verification?.data?.status);
    const amount = Number(verification?.data?.amount || 0);
    const chapaTransactionId = extractChapaTransactionId(verification);

    if (SUCCESS_STATUSES.has(status) && amount >= order.totalAmount) {
      order.paymentStatus = "paid";
      order.orderStatus = "processing";
      order.paidAt = new Date();
      order.chapaTransactionId = chapaTransactionId;
      await order.save();

      return res.status(200).json({
        message: "Payment verified successfully",
        paid: true,
        pending: false,
        order,
        source: "chapa",
      });
    }

    if (FAILED_STATUSES.has(status)) {
      order.paymentStatus = "failed";
      order.orderStatus = "failed";
      order.chapaTransactionId = chapaTransactionId;
      await order.save();

      return res.status(200).json({
        message: "Payment failed",
        paid: false,
        failed: true,
        pending: false,
        order,
        source: "chapa",
      });
    }

    return res.status(200).json({
      message: "Payment is still pending confirmation",
      paid: false,
      failed: false,
      pending: true,
      order,
      source: "chapa",
    });
  } catch (error) {
    logger.error({ err: error }, "error in verifyOrderPayment");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getPaymentResult = async (req, res) => {
  try {
    const txRef = req.query.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef }).lean();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const paid = order.paymentStatus === "paid";
    const failed = order.paymentStatus === "failed";

    return res.status(200).json({
      paid,
      failed,
      pending: !paid && !failed,
      order,
      message: paid
        ? "Payment confirmed"
        : failed
        ? "Payment failed"
        : "Payment is pending callback confirmation",
    });
  } catch (error) {
    logger.error({ err: error }, "error in getPaymentResult");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const chapaPaymentCallback = async (req, res) => {
  try {
    const signatureHeader = process.env.CHAPA_SIGNATURE_HEADER || "x-chapa-signature";
    const signature = req.get(signatureHeader);
    const signatureValid = validateChapaCallbackSignature({
      rawBody: req.rawBody,
      signature,
    });

    if (!signatureValid) {
      logger.warn({ header: signatureHeader, signature }, "invalid chapa callback signature");
      // Reject invalid/unauthenticated callbacks — caller should retry from Chapa.
      return res.status(401).json({ message: "Invalid webhook signature" });
    }

    const txRef = req.body?.tx_ref || req.query?.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const verification = await verifyChapaPayment(txRef);
    const status = normalizeChapaStatus(verification?.data?.status);
    const amount = Number(verification?.data?.amount || 0);
    const chapaTransactionId = extractChapaTransactionId(verification);

    if (SUCCESS_STATUSES.has(status) && amount >= order.totalAmount) {
      order.paymentStatus = "paid";
      order.orderStatus = "processing";
      order.paidAt = new Date();
      order.chapaTransactionId = chapaTransactionId;
    } else if (FAILED_STATUSES.has(status)) {
      order.paymentStatus = "failed";
      order.orderStatus = "failed";
      order.chapaTransactionId = chapaTransactionId;
    }

    await order.save();

    await recordAuditEvent({
      user: {
        _id: order.customer?._id || null,
        name: order.customer?.name || "Customer",
        email: order.customer?.email || "",
        role: "customer",
      },
      req,
      action: "order.payment.callback",
      resource: "orders/payment/callback",
      metadata: {
        orderId: order._id,
        chapaTransactionId,
        paymentStatus: order.paymentStatus,
        orderStatus: order.orderStatus,
      },
    });

    return res.status(200).json({ message: "Callback processed" });
  } catch (error) {
    logger.error({ err: error }, "error in chapaPaymentCallback");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id })
      .populate({
        path: "products.product",
        select: "name image",
      })
      .lean();
    if (!order) {
      return res.status(404).json({ message: "order not found " });
    }
    return res.status(200).json(order);
  } catch (error) {
    logger.error({ err: error }, "error in getOrderById");
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const editOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate({
      path: "products.product",
      select: "name image",
    });
    const updatedOrderData = req.body;
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    if (
      !Array.isArray(updatedOrderData.products) ||
      updatedOrderData.products.length === 0
    ) {
      order.orderStatus = "canceled";
      await order.save();
      return res.status(200).json({ message: "Canceled the order" });
    } else {
      order.customer = updatedOrderData.customer;
      order.products = updatedOrderData.products;
      order.orderStatus = updatedOrderData.orderStatus;
      order.paymentMethod = updatedOrderData.paymentMethod;
      order.paymentStatus = updatedOrderData.paymentStatus;
      order.totalAmount = 0;
      updatedOrderData.products.forEach((item) => {
        order.totalAmount += item.quantity * item.price;
      });
    }
    await order.save();
    res.status(200).json({ message: "Saved changes", order });
  } catch (error) {
    logger.error({ err: error }, "error in editOrder");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted Successfully" });
  } catch (error) {
    logger.error({ err: error }, "error in deleteOrder");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};
````

## File: backend/routes/admin.route.js
````javascript
import express from "express";

import { protectRoute, adminRoute, masterRoute } from "../middleware/auth.middleware.js";
import { requireCsrf } from "../middleware/csrf.middleware.js";
import { auditMasterActivity } from "../middleware/adminAudit.middleware.js";
import { validateBody } from "../middleware/validation.middleware.js";
import {
	createAdminUserSchema,
	createCategorySchema,
	editOrderSchema,
	editCategorySchema,
	updateContactMessageStatusSchema,
	updateContactNotificationSettingsSchema,
	updateAdminPasswordSchema,
	updateAdminProfileSchema,
} from "../validation/schemas.js";
import {
	getAllCategories,
	createCategory,
	editCategory,
	getCategoryById,
	deleteCategory,
	adminInfo,
	getAnalytics,
	getAdminSettings,
	getAdminMonitoring,
	updateAdminProfile,
	updateAdminPassword,
	updateContactNotificationSettings,
	getAdminUsers,
	createAdminUser,
} from "../controllers/admin.controller.js";
import { deleteOrder, editOrder, getAllOrders, getOrderById } from "../controllers/order.controller.js";
import { getContactMessages, updateContactMessageStatus } from "../controllers/contact.controller.js";

const router = express.Router();
router.get("/dashboard", protectRoute, adminRoute, auditMasterActivity, adminInfo)
router.get("/analytics", protectRoute, adminRoute, auditMasterActivity, getAnalytics)
router.get("/settings", protectRoute, adminRoute, auditMasterActivity, getAdminSettings)
router.get("/monitoring", protectRoute, masterRoute, getAdminMonitoring)
router.put("/settings/profile", protectRoute, adminRoute, requireCsrf, validateBody(updateAdminProfileSchema), auditMasterActivity, updateAdminProfile)
router.put("/settings/password", protectRoute, adminRoute, requireCsrf, validateBody(updateAdminPasswordSchema), auditMasterActivity, updateAdminPassword)
router.put("/settings/contact-notifications", protectRoute, adminRoute, requireCsrf, validateBody(updateContactNotificationSettingsSchema), auditMasterActivity, updateContactNotificationSettings)
router.get("/settings/admin-users", protectRoute, masterRoute, auditMasterActivity, getAdminUsers)
router.post("/settings/admin-users", protectRoute, masterRoute, requireCsrf, validateBody(createAdminUserSchema), auditMasterActivity, createAdminUser)
router.get("/orders/:id", protectRoute, adminRoute, auditMasterActivity, getOrderById);
router.put("/orders/:id", protectRoute, adminRoute, requireCsrf, validateBody(editOrderSchema), auditMasterActivity, editOrder)
router.post("/orders/:id", protectRoute, adminRoute, requireCsrf, validateBody(editOrderSchema), auditMasterActivity, editOrder)
router.delete("/orders/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteOrder);
router.post("/categories/create-category",protectRoute,adminRoute, requireCsrf, validateBody(createCategorySchema), auditMasterActivity, createCategory);
router.get("/orders", protectRoute, adminRoute, auditMasterActivity, getAllOrders);
router.get("/contact-messages", protectRoute, adminRoute, auditMasterActivity, getContactMessages);
router.patch("/contact-messages/:id/status", protectRoute, adminRoute, requireCsrf, validateBody(updateContactMessageStatusSchema), auditMasterActivity, updateContactMessageStatus);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", protectRoute,adminRoute, requireCsrf, validateBody(editCategorySchema), auditMasterActivity, editCategory);
router.post("/categories/edit/:id", protectRoute,adminRoute, requireCsrf, validateBody(editCategorySchema), auditMasterActivity, editCategory);
router.delete("/categories/:id", protectRoute, adminRoute, requireCsrf, auditMasterActivity, deleteCategory);
export default router
````

## File: backend/server.js
````javascript
import express from "express"
import dotenv from "dotenv"
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js"
import adminRoutes from "./routes/admin.route.js"
import orderRoutes from "./routes/order.route.js"
import contactRoutes from "./routes/contact.route.js"
import { connectDB } from "./lib/db.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";
import logger from "./lib/logger.js";

dotenv.config({ path: process.cwd() + '/.env' });



const app = express();
app.set("trust proxy", 1);

// security middleware
app.use(helmet());


const PORT = process.env.PORT;
const allowedOrigins = process.env.CLIENT_URLS
    ? process.env.CLIENT_URLS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : ["http://localhost:5173", "http://192.168.1.11:5173"];

console.log("Allowed CORS origins:", allowedOrigins);

app.use(express.json({
    limit:"5mb",
    verify: (req, _res, buf) => {
        req.rawBody = buf.toString("utf8");
    },
}));
const mongoSanitizeOptions = { replaceWith: "_" };
app.use((req, _res, next) => {
    if (req.body) mongoSanitize.sanitize(req.body, mongoSanitizeOptions);
    if (req.params) mongoSanitize.sanitize(req.params, mongoSanitizeOptions);
    if (req.query) mongoSanitize.sanitize(req.query, mongoSanitizeOptions);
    return next();
});
app.use(cors({
    origin: (origin, callback) => {
        // allow non-browser requests like curl (no origin)
        if (!origin) return callback(null, true);
        // allow explicit configured origins
        if (allowedOrigins.includes(origin)) return callback(null, true);
        // allow localhost on any port
        if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return callback(null, true);
        // allow local network hosts (e.g., 192.168.x.x) on any port
        if (/^https?:\/\/192\.168\.\d+\.\d+(:\d+)?$/.test(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}))
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("server is running on http://localhost:" + PORT);
        });
    } catch (error) {
        logger.error({ err: error }, "failed to start server");
        process.exit(1);
    }
};

startServer();
````

## File: frontend/src/components/AdminNav.jsx
````javascript
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  MessageSquare,
  Activity,
  Settings,
  Menu,
  LogOut,
  X,
} from "lucide-react";
import clsx from "clsx";
import { useUserStore } from "../stores/useUserStore";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: Home, to: "/admin/dashboard" },
  { id: "products", label: "Products", icon: Package, to: "/admin/products" },
  { id: "orders", label: "Orders", icon: ShoppingCart, to: "/admin/orders" },
  { id: "categories", label: "Categories", icon: Users, to: "/admin/categories" },
  { id: "complaints", label: "Complaints", icon: MessageSquare, to: "/admin/complaints" },
  { id: "analytics", label: "Analytics", icon: BarChart3, to: "/admin/analytics" },
  { id: "monitoring", label: "Monitoring", icon: Activity, to: "/admin/monitoring" },
];

export default function AdminNav({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const { logout, user } = useUserStore();

  const visibleNav = NAV.filter((n) => {
    if (n.id === "monitoring" && user?.role !== "master") return false;
    return true;
  });

  // const Title = NAV.find((n) => (n.to === location.pathname)?.label) || "Admin";
  const Title =
    location.pathname.includes("/admin/monitoring")
      ? "Monitoring"
      :
    location.pathname.includes("/admin/settings")
      ? "Settings"
      : NAV.find((n) => location.pathname.includes(n.to))?.label || "Admin";
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="flex flex-col text-center">
              <span className="text-xl lg:text-3xl font-primary">DFXN</span>
            </Link>
            <span className="hidden sm:inline-flex text-sm text-gray-500">
              / Admin / {Title}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/admin/settings"
              className="p-2 rounded-xl hover:bg-gray-100"
              title="Settings"
            >
              <Settings className="h-5 w-5" />
            </Link>
            <button
              className="p-2 rounded-xl hover:bg-gray-100"
              title="Log out"
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-6">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <Sidebar navItems={visibleNav} />
        </aside>

        {/* Content */}
        <main>{children}</main>
      </div>

      {/* Mobile sidebar */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/30"
            onClick={() => setOpen(false)}
          />
            <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white border-r shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Menu</span>
              <button
                className="p-2 rounded-xl hover:bg-gray-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Sidebar navItems={visibleNav} onSelect={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ onSelect }) {
  return (
    <nav className="space-y-1">
      {(arguments[0].navItems || NAV).map(({ id, label, icon, to }) => (
        <NavLink
          key={id}
          to={to}
          onClick={onSelect}
          className={({ isActive }) =>
            clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-sm transition",
              isActive
                ? "bg-gray-900 text-white shadow"
                : "hover:bg-gray-100 text-gray-700"
            )
          }
        >
          {React.createElement(icon, { className: "h-5 w-5" })}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
````

## File: frontend/src/pages/AdminSettings.jsx
````javascript
import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const AdminSettings = () => {
  const {
    settingsProfile,
    settingsPermissions,
    settingsContactNotifications,
    adminUsers,
    settingsLoading,
    fetchSettings,
    fetchAdminUsers,
    createAdminUser,
    updateProfile,
    updatePassword,
    updateContactNotificationSettings,
  } = useAdminStore();

  const [profileForm, setProfileForm] = useState({ name: "", email: "" });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notificationForm, setNotificationForm] = useState({
    emailNotificationsEnabled: true,
    contactNotifyTo: "",
  });
  const [adminUserForm, setAdminUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  useEffect(() => {
    if (settingsPermissions.canManageAdmins) {
      fetchAdminUsers();
    }
  }, [settingsPermissions.canManageAdmins, fetchAdminUsers]);

  useEffect(() => {
    setProfileForm({
      name: settingsProfile.name || "",
      email: settingsProfile.email || "",
    });
  }, [settingsProfile]);

  useEffect(() => {
    setNotificationForm({
      emailNotificationsEnabled: settingsContactNotifications.emailNotificationsEnabled,
      contactNotifyTo: settingsContactNotifications.contactNotifyTo || "",
    });
  }, [settingsContactNotifications]);

  const submitProfile = async (e) => {
    e.preventDefault();
    await updateProfile(profileForm);
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      return;
    }
    await updatePassword({
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
    });
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const submitNotifications = async (e) => {
    e.preventDefault();
    await updateContactNotificationSettings(notificationForm);
  };

  const submitAdminUser = async (e) => {
    e.preventDefault();
    const created = await createAdminUser(adminUserForm);
    if (created) {
      setAdminUserForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"settings"}>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form onSubmit={submitProfile} className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold">Profile</h2>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Role</label>
                <input
                  type="text"
                  value={settingsProfile.role || ""}
                  disabled
                  className="w-full border rounded-md px-3 py-2 bg-gray-100"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md"
                disabled={settingsLoading}
              >
                {settingsLoading ? "Saving..." : "Save Profile"}
              </button>
            </form>

            <form onSubmit={submitPassword} className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold">Change Password</h2>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Current Password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">New Password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  minLength={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  minLength={6}
                  required
                />
              </div>

              {passwordForm.newPassword !== passwordForm.confirmPassword &&
                passwordForm.confirmPassword && (
                  <p className="text-sm text-red-500">Passwords do not match.</p>
                )}

              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md"
                disabled={
                  settingsLoading ||
                  !passwordForm.currentPassword ||
                  !passwordForm.newPassword ||
                  passwordForm.newPassword !== passwordForm.confirmPassword
                }
              >
                {settingsLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>

          <form onSubmit={submitNotifications} className="bg-white rounded-xl shadow p-6 space-y-4 max-w-2xl">
            <h2 className="text-lg font-semibold">Contact Notifications</h2>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notificationForm.emailNotificationsEnabled}
                onChange={(e) =>
                  setNotificationForm({
                    ...notificationForm,
                    emailNotificationsEnabled: e.target.checked,
                  })
                }
              />
              <span className="text-sm text-gray-700">Enable email notifications for new customer complaints</span>
            </label>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Notification recipient email</label>
              <input
                type="email"
                value={notificationForm.contactNotifyTo}
                onChange={(e) =>
                  setNotificationForm({
                    ...notificationForm,
                    contactNotifyTo: e.target.value,
                  })
                }
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded-md"
              disabled={settingsLoading}
            >
              {settingsLoading ? "Saving..." : "Save Notification Settings"}
            </button>
          </form>

          {settingsPermissions.canManageAdmins && (
            <div className="bg-white rounded-xl shadow p-6 space-y-5 max-w-3xl">
              <h2 className="text-lg font-semibold">Admin Access Management</h2>
              <p className="text-sm text-gray-500">
                Only master users can create additional admin accounts.
              </p>

              <form onSubmit={submitAdminUser} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={adminUserForm.name}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, name: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="Admin name"
                  required
                />
                <input
                  type="email"
                  value={adminUserForm.email}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, email: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="admin@example.com"
                  required
                />
                <input
                  type="password"
                  value={adminUserForm.password}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, password: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="Temporary password"
                  minLength={8}
                  required
                />
                <button
                  type="submit"
                  className="md:col-span-3 bg-gray-900 text-white px-4 py-2 rounded-md"
                  disabled={settingsLoading}
                >
                  {settingsLoading ? "Creating..." : "Create Admin User"}
                </button>
              </form>

              <div className="space-y-2">
                <h3 className="font-medium">Existing Admin Users</h3>
                <div className="border rounded-md divide-y">
                  {adminUsers.length > 0 ? (
                    adminUsers.map((user) => (
                      <div key={user._id} className="px-3 py-2 flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-gray-500">{user.email}</p>
                        </div>
                        <span className="uppercase text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                          {user.role}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="px-3 py-3 text-sm text-gray-500">No admin users found.</p>
                  )}
                </div>
              </div>

            </div>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminSettings;
````

## File: frontend/src/pages/HomePage.jsx
````javascript
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useCategoryStore } from "../stores/useCategoryStore";
import { useContactStore } from "../stores/useContactStore";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  const { featuredProducts, fetchFeaturedProducts, loading } = useProductStore();
  const {
    categories,
    getAllCategories,
    loading: categoriesLoading,
  } = useCategoryStore();
  const { submitContactMessage, submitting } = useContactStore();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    website: "",
  });

  useEffect(() => {
    fetchFeaturedProducts();
    getAllCategories();
  }, [fetchFeaturedProducts, getAllCategories]);

  const handleContactInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const success = await submitContactMessage({
      ...contactForm,
      sourcePage: "home",
    });

    if (success) {
      setContactForm({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        website: "",
      });
    }
  };
  
  return (
    <div>
      <Navbar page= "home" />
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row-reverse items-center">
        <div className="w-full sm:w-3/5 ">
          <img src="/1.jpg" alt="" className="w-full" />
        </div>

        <div className="w-full sm:w-2/5 h-full sm:px-10 flex flex-col items-center gap-5 md:gap-10 font-primary">
          <h1 className="text-3xl md:text-5xl text-center">
            Find Your Perfect <br /> Pair Today
          </h1>
          <Link
            to="/products"
            className=" p-3 rounded-full bg-gray-800 text-xl text-white hover:bg-gray-700 active:scale-95"
          >
            Shop now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      {(loading || featuredProducts.length > 0) && (
        <div className="mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
          <h2 className="text-center text-3xl font-semibold mb-10">
            Featured Products
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading featured products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <Link
                  key={product._id}
                  to={`/products/${product._id}`}
                  className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden bg-white"
                >
                  <div className="w-full h-56 bg-gray-50 overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
                      {product.description}
                    </p>
                    <p className="mt-3 font-bold text-gray-900">
                      ETB {Number(product.price || 0).toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categories */}
      {(categoriesLoading || categories.length > 0) && (
        <div className="mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">
          <h2 className="text-center text-3xl font-semibold my-10">
            Shop Trainers by Category
          </h2>
          {categoriesLoading ? (
            <p className="text-center text-gray-500">Loading categories...</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center overflow-hidden bg-gray-50 p-3">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">{category.name}</span>
                    )}
                  </div>
                  <h3 className="text-lg text-center font-semibold text-gray-800 py-4">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* About Us */}
      <div className="bg-gray-50 " id="About">
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/about-us.png"
              alt="About Us"
              className="w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="px-10">
            <h2 className="py-10 sm:py-0 text-center text-3xl font-semibold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="md:text-lg text-gray-600 ">
              DFXN is your trusted source for premium trainers, carefully
              sourced from leading brands across Europe and delivered to
              customers across Africa. We bring global quality and style
              directly to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Why us */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Why Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {/* High-quality materials */}
          <div className="flex flex-col items-center">
            <img
              src="/quality.png" // replace with your local image path
              alt="High-quality materials"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              High-quality materials
            </h3>
          </div>

          {/* Comfort and performance */}
          <div className="flex flex-col items-center">
            <img
              src="/comfort.png" // replace with your local image path
              alt="Comfort and performance"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Comfort and performance
            </h3>
          </div>

          {/* Fast and free shipping */}
          <div className="flex flex-col items-center">
            <img
              src="/delivery.png" // replace with your local image path
              alt="Fast and free shipping"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Fast and free shipping
            </h3>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className=" px-10 md:w-10/12 mx-auto  bg-white mb-5" id="Contact">
        <h1 className="text-center text-3xl font-semibold mb-10">Contact Us</h1>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-10">
          {/* Left - Contact Info */}
          <div className="flex-1 text-center sm:text-left">
            <p className="md:text-lg mb-6">
              Get in touch with DFXN — your trusted source for premium trainers
              sourced from Europe and sold in Africa.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <Mail className="w-6 h-6 text-gray-700" />
              <span>contact@dfxn.com</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <Phone className="w-6 h-6 text-gray-700" />
              <span>+251 900 000 000</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-gray-700" />
              <span>Addis Ababa, Ethiopia</span>
            </div>

            <div className="flex justify-center sm:justify-start gap-5 mt-6">
              <Facebook className="w-7 h-7 text-gray-600 hover:text-blue-500 cursor-pointer transition" />
              <Instagram className="w-7 h-7 text-gray-600 hover:text-pink-500 cursor-pointer transition" />
              <Twitter className="w-7 h-7 text-gray-600 hover:text-sky-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1">
            <form className="bg-slate-100 p-6 rounded-2xl shadow-md" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleContactInputChange}
                required
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleContactInputChange}
                required
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={contactForm.subject}
                onChange={handleContactInputChange}
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone (Optional)"
                value={contactForm.phone}
                onChange={handleContactInputChange}
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                name="website"
                value={contactForm.website}
                onChange={handleContactInputChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactForm.message}
                onChange={handleContactInputChange}
                required
                minLength={10}
                maxLength={2000}
                className="w-full p-4 mb-4 rounded-xl border-none focus:ring-2 focus:ring-black h-28"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default HomePage;
````

## File: README.md
````markdown
# DFXN_MERN

DFXN_MERN is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project provides a full-stack framework for rapid development of modern web apps with seamless frontend-backend integration.

## Features

- **Modern Frontend**: Built with React.js for interactive and responsive user interfaces.
- **Robust Backend**: Powered by Node.js and Express.js to handle HTTP requests and API endpoints.
- **Database Integration**: Uses MongoDB for flexible and scalable data storage.
- **RESTful APIs**: Well-structured APIs for client-server communication.
- **Authentication & Authorization**: Secure user login and access control mechanisms.
- **Component-Based Architecture**: Modular and reusable code structure for maintainability.
- **Environment Configuration**: Uses environment variables for secure configuration.
- **Contact Workflow**: Public contact submission with admin review statuses (`new`, `reviewed`, `closed`).
- **Email Notifications**: SMTP-based notifications for new contact submissions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/beamlak04/DFXN_MERN.git
    cd DFXN_MERN
    ```

2. Install backend dependencies from the repo root:
    ```bash
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

### Configuration

- Copy `.env.example` to `.env` in the repo root and fill in real secrets.
- In production, set `NODE_ENV=production`, configure `CHAPA_WEBHOOK_SECRET`, and use a secret store instead of committing credentials.
- Online Chapa/Telebirr payments require a valid customer email in production. `CHAPA_DEFAULT_EMAIL` is only a local/sandbox fallback.
- Admin audit logs are retained by MongoDB TTL index for `ADMIN_AUDIT_LOG_RETENTION_DAYS` days.

Example contact-related variables:

```env
UPSTASH_REDIS_URL=redis://...

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=example-user
SMTP_PASS=example-pass
SMTP_FROM=alerts@yourdomain.com
CONTACT_NOTIFY_TO=support@yourdomain.com

# Chapa sandbox integration
CHAPA_SECRET_KEY=CHAPAK_TEST_xxxxxxxxxxxxxxxxxxxxx
CHAPA_WEBHOOK_SECRET=
CHAPA_SIGNATURE_HEADER=x-chapa-signature
CHAPA_WEBHOOK_FIRST=true
CHAPA_CALLBACK_URL=https://your-public-domain.com/api/orders/payment/callback
CHAPA_RETURN_URL=http://localhost:5173/payment-result
MAX_IMAGE_UPLOAD_BYTES=8388608
ADMIN_AUDIT_LOG_RETENTION_DAYS=365
```

### Chapa Sandbox Checkout Test

1. Update root `.env` and set your sandbox Chapa keys.
2. Start backend and frontend.
3. Go to checkout (`/place-order`) and choose `Chapa` or `Telebirr`.
4. Complete sandbox payment from Chapa hosted page.
5. You will return to `/payment-result` where status is shown.

Note:
- With `CHAPA_WEBHOOK_FIRST=true`, order payment is confirmed from callback/webhook first.
- Frontend return flow will show `pending` until callback updates the order.
- Optional frontend fallback verify can be enabled in `frontend/.env` with `VITE_CHAPA_VERIFY_ON_RETURN=true`.

### Running the Application

1. Start MongoDB (if running locally).
2. Run the server:
    ```bash
    npm start
    ```
3. Run the client (in another terminal):
    ```bash
    cd frontend
    npm run dev
    ```

### Tests

Run backend security unit tests from the repo root:

```bash
npm test
```

## Usage

- Access the frontend at [http://localhost:3000](http://localhost:3000)
- Backend APIs available at [http://localhost:5000/api](http://localhost:5000/api) (default)

## Folder Structure

```
DFXN_MERN/
  frontend/  # React frontend source code
  backend/   # Node.js/Express/MongoDB backend code
```

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues](https://github.com/beamlak04/DFXN_MERN/issues) or submit a pull request!


## Author

Made by [beamlak04](https://github.com/beamlak04).
````

## File: frontend/src/App.jsx
````javascript
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import LoadingSpinner from "./components/LoadingSpinner";
import { CartProvider } from "./pages/CartProvider";
import Analytics from "./pages/Analytics";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import EditCategory from "./pages/EditCategory";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import PaymentResult from "./pages/PaymentResult";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import { useUserStore } from "./stores/useUserStore";
import AdminCategory from "./pages/AdminCategory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMonitoring from "./pages/AdminMonitoring";
import AdminSettings from "./pages/AdminSettings";
import AdminContactMessages from "./pages/AdminContactMessages";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const admin = ["admin", "master"].includes(user?.role);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return <LoadingSpinner />;
  }
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/payment-result" element={<PaymentResult />} />
        <Route path="/signup" element={<Navigate to="/admin/login" replace />} />
        <Route path="/signUp" element={<Navigate to="/admin/login" replace />} />
        <Route
          path="/admin/login"
          element={!admin ? <LogInPage /> : <Navigate to="/admin/dashboard" replace />}
        />
        <Route
          path="/admin"
          element={!admin ? <Navigate to="/admin/login" replace /> : <Navigate to="/admin/dashboard" replace />}
        />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route
          path="/admin/dashboard"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminDashboard />}
        />
        <Route
          path="/admin/products/:id/edit"
          element={!admin ? <Navigate to="/admin/login" /> : <EditProductPage />}
        />
        <Route
          path="/admin/products"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminProducts />}
        />
        <Route
          path="/admin/analytics"
          element={!admin ? <Navigate to="/admin/login" /> : <Analytics />}
        />
        <Route
          path="/admin/monitoring"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminMonitoring />}
        />
        <Route
          path="/admin/categories"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminCategory />}
        />
        <Route
          path="/admin/contacts"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminContactMessages />}
        />
        <Route
          path="/admin/complaints"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminContactMessages />}
        />
        <Route
          path="/admin/categories/:id/edit"
          element={!admin ? <Navigate to="/admin/login" /> : <EditCategory />}
        />
        <Route
          path="/admin/settings"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminSettings />}
        />
        <Route
          path="/admin/orders"
          element={!admin ? <Navigate to="/admin/login" /> : <Orders />}
        />
        <Route
          path="/admin/orders/:id"
          element={!admin ? <Navigate to="/admin/login" /> : <Order />}
        />
      </Routes>
      <Toaster />
    </CartProvider>
  );
}

export default App;
````
