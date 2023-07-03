import { paintTreeStructure, treeStructureType } from "./paintTreeStructure.js";

const data: treeStructureType = {
  name: 1,
  items: [
    {
      name: 2,
      items: [
        {
          name: 3,
          items: [{ name: 4, items: [{ name: 9 }] }],
        },
        { name: 8 },
      ],
    },
    {
      name: 11,
      items: [
        {
          name: 12,
          items: [{ name: 13 }],
        },
      ],
    },
  ],
};

console.log(paintTreeStructure(data));
