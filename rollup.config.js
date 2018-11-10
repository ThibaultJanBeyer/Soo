import uglify from "rollup-plugin-uglify";
const plugins = [uglify()];

export default [
  {
    input: "./index.js",
    plugins: plugins,
    output: {
      file: "build/soo.min.js",
      format: "iife",
      external: ["kelbas"],
      name: "soo"
    }
  },
  {
    input: "./index.js",
    plugins: plugins,
    output: {
      file: "build/soo.esm.js",
      format: "es",
      external: ["kelbas"],
      name: "soo"
    }
  }
];
