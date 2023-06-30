import paintTreeStructure from "./paintTreeStructure.js";

const data = {
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

paintTreeStructure(data);
