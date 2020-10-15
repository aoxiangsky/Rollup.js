import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";

export default {
  input: "src/main.js",
  plugins: [
    postcss({
      plugins: [
        require("autoprefixer"),
        cssnano(),
      ],
      extensions: ["less",".scss"],
      extract: `main.css`,
    }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
  output: {
    file: "dist/main.js",
    format: "cjs",
  },
};
