const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Cria objeto do path
console.log(path.parse(__filename));

// Juntar caminhos de aquivos
console.log(path.join(__dirname, 'test', 'teste.html'));
