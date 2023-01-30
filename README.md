## dir-To-Zip

This is a webpack build tool, build directory to zip

### How to use？

#### Download
```
npm install dir-to-zip
```

#### Use
```js
const dirToZip = require("dir-to-zip");
module.exports = {
    plugins: [
    new dirToZip({
        // compress directory
        dir: "./dist",
        // output directory and zip name
        zipName: "dist.zip",
    })
  ],
}
```