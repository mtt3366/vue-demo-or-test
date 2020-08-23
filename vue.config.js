const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: "localhost",
    port: "9090"
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"));
  }
};
