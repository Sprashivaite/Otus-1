import { paintTreeStructure, treeStructureType } from "./paintTreeStructure.js";

const testData1: treeStructureType = {
  name: 1,
};

const testData2: treeStructureType = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
    },
  ],
};

describe("paintTreeStructure", () => {
  test("single value", () => {
    const tree = paintTreeStructure(testData1);
    expect(tree).toBe("1");
  });
  test("tree value", () => {
    const tree = paintTreeStructure(testData2);
    const expectedString = "1\n├── 2\n│   ├── 3\n│   └── 4\n└── 5";
    expect(tree).toBe(expectedString);
  });
});
