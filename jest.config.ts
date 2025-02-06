import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      { presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"] },
    ],
  },
  transformIgnorePatterns: ["/node_modules/"],
};

export default config;