const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/[!_]*.js", {
  nodir: true
});

let data = {};
apiFiles.forEach(filePath => {
  const api = require(filePath);
  let [, url] = filePath.split("mock/");
  url =
    url.slice(url.length - 9) === "/index.js"
      ? url.slice(0, url.length - 9) // remove /index.js
      : url.slice(0, url.length - 3); // remove .js
  data[url.replace(/\//g, "-")] = api;
});
module.exports = () => {
  return data;
};
