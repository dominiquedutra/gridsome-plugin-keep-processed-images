const fs = require('fs-extra')

module.exports = function (api) {
  api.afterBuild(() => {
    copyFiles(api.config.imagesDir, `${api.config.imageCacheDir}/`)
  })
  api.beforeBuild(() => {
    moveFiles(`${api.config.imageCacheDir}/`, api.config.imagesDir)
  })
}

async function copyFiles (source, dest) {
  try {
    await fs.copy(source, dest)
  } catch (err) {
  }
}

async function moveFiles (source, dest) {
  try {
    await fs.move(source, dest)
  } catch (err) {
  }
}
