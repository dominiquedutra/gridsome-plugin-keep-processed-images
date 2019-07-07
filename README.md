# gridsome-plugin-keep-processed-images

Gridsome plugin that speeds up build time on projects involving images by preventing that images get processed (resized, cropped etc) over and over again.

It does so by keeping a fresh copy of processed images on the `.cache` directory and moving the images back to `dist` diretory before the new build is executed. The image-processor worker will not process images that already exist on `dist`.

## Usage

```
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'plugin-keep-processed-images'
    }
  ]
}
```
