export type treeStructureType = {
  name: number;
  items?: treeStructureType[];
};

export const paintTreeStructure = (
  { name, items }: treeStructureType,
  prevString: string = "",
  isLast?: boolean
) => {
  const LString = "└── ";
  const crossString = "├── ";

  if (isLast === undefined) {
    console.log(name.toString());
  } else if (isLast) {
    console.log(prevString + LString + name);
  } else {
    console.log(prevString + crossString + name);
  }

  items?.forEach((item, index, array) => {
    const isLastIndex = index === array.length - 1;
    const spaceString = "    ";
    const IString = "│   ";

    if (isLast === undefined) {
      paintTreeStructure(item, prevString, isLastIndex);
    } else {
      paintTreeStructure(
        item,
        isLast ? prevString + spaceString : prevString + IString,
        isLastIndex
      );
    }
  });
};
