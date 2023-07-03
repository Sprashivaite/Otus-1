export type treeStructureType = {
  name: number;
  items?: treeStructureType[];
};

export const paintTreeStructure = (
  { name, items }: treeStructureType,
  prevString: string = "",
  resultStrings: string[] = [],
  isLast?: boolean
) => {
  const LString = "└── ";
  const crossString = "├── ";
  let resultString = "";

  if (isLast === undefined) {
    resultString = name.toString();
  } else if (isLast) {
    resultString = prevString + LString + name;
  } else {
    resultString = prevString + crossString + name;
  }

  resultStrings.push(resultString);

  items?.forEach((item, index, array) => {
    const isLastIndex = index === array.length - 1;
    const spaceString = "    ";
    const IString = "│   ";

    if (isLast === undefined) {
      paintTreeStructure(item, prevString, resultStrings, isLastIndex);
    } else {
      paintTreeStructure(
        item,
        isLast ? prevString + spaceString : prevString + IString,
        resultStrings,
        isLastIndex
      );
    }
  });

  return resultStrings.join("\n");
};
