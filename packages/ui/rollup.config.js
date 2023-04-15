import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    }
  ],
  plugins: [typescript()],
};
