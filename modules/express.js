const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    if (!users) {
      return res.status(404).json({ message: "Usuário(s) não encontrado." });
    }
    res.status(200).json({ message: "Lista de usuario(s)", users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json({ message: "Usuário por ID", user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json({ message: "Usuário criado com sucesso", user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.status(200).json({ message: "Usuário atualizado com sucesso.", user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.status(200).json({ message: "Usuário deletado com sucesso.", user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
