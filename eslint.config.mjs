import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  { ignores: [".next/**", "out/**", "build/**", "node_modules/**", "my-app/**"] },
];

export default eslintConfig;
