const fs = require("fs");
const path = require("path");

// Cria uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro:", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Hello Node!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }

    console.log("Arquivo criada com sucesso!");
    
    // Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Hello Word!",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }

        console.log("Arquivo criada com sucesso!");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro:", error);
        }

        console.log(data);
      }
    );
  }
);
