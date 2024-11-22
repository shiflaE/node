const fs = require("fs").promises;

const readwritefile = async () => {
   try {
     const data = await fs.readFile("newfile.txt", "utf8");
    console.log("file contents:", data);

    await fs.writeFile("out.txt", data);
    console.log("file written successfully");
   } catch (err) {
     console.error("error:", err);
  }
};

 readwritefile();

