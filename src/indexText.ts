import fs from "fs";

export const indexText = (path: string) => {
  const readStream = fs.createReadStream(path, {
    encoding: "utf8",
  });
  const writeStream = fs.createWriteStream("./src/docs/text-created.json", {
    encoding: "utf8",
  });

  readStream.on("data", (chunk: string) => {
    const onlyLettersRegExp = new RegExp(/[^\w\s]|_/, "g");
    const noDoubleSpacesRegExp = new RegExp(/\s+/, "g");

    const sortedChunk = chunk
      .replace(onlyLettersRegExp, "")
      .replace(noDoubleSpacesRegExp, " ")
      .split(" ")
      .map((item) => item.toLocaleLowerCase())
      .sort((a, b) => a.localeCompare(b));

    const obj: Record<string, number> = {};

    sortedChunk.forEach((item) => {
      if (obj[item] === undefined) {
        obj[item] = 1;
      } else {
        obj[item] = obj[item] + 1;
      }
    });

    writeStream.write(JSON.stringify(Object.values(obj)));
  });

  const handleError = (error: Error) => {
    console.log(error.message);
    readStream.destroy();
    writeStream.end("Error");
  };

  readStream.on("error", handleError);
  writeStream.on("error", handleError);
};
