const fs = require("fs").promises;

async function main() {
  try {
    const data = await fs.readFile("./package.json", "utf8");
    console.log(data);

    const parsedData = JSON.parse(data);
    console.log(parsedData);

    // fs.promises.stat devuelve informacion sobre un archivo de forma asincronica
    const fileSize = (await fs.stat("./package.json")).size;
    console.log(fileSize);

    const fileInfo = {
      size: fileSize,
      string: data,
      JSON: parsedData,
    };
    await fs.writeFile(
      "./data/07-fileInfo.json",
      JSON.stringify(fileInfo, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("Hubo un error al leer el archivo: ", err);
  }
}

main();
