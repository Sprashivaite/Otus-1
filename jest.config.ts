import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testMatch: ["**/**/*.test.ts"],
  transform: {
    "^.+\\.ts": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default jestConfig;
