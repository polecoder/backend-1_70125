// Aprenderemos a utilizar el módulo "crypto" de Node.js para encriptar y desencriptar información.
const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  constructor(path) {
    this.path = path;
  }

  // La función "addUser" recibe un objeto "user" con los campos "username", "password", "name" y "surname". Primero, verificamos que el usuario tenga todos los campos requeridos. Luego, obtenemos la lista de usuarios existentes, hasheamos la contraseña y agregamos el nuevo usuario a la lista. Finalmente, guardamos la lista de usuarios en un archivo JSON.
  async addUser(user) {
    try {
      await this.checkUser(user);
      if (await this.existsUser(user.username)) {
        return console.log("User already exists. Exiting function.");
      }
      const { username, password, name, surname } = user;
      const users = await this.getUsers();
      // Hasheamos la contraseña antes de guardarla
      const hashedPassword = await this.hashPassword(password);
      users.push({ username, password: hashedPassword, name, surname });
      await fs.promises.writeFile(this.path, JSON.stringify(users), "utf-8");
    } catch (error) {
      console.error(error);
    }
  }

  async checkUser(user) {
    if (!user.username || !user.password || !user.name || !user.surname) {
      throw new Error(
        "The user is missing mandatory fields. Please check the user object."
      );
    }
  }

  async existsUser(username) {
    const users = await this.getUsers();
    return users.some((user) => user.username === username);
  }

  async getUsers() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const users = JSON.parse(data);
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async hashPassword(password) {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    const hashedPassword = hash.digest("hex");
    return hashedPassword;
  }

  // La función "checkPassword" recibe un "username" y una "password". Obtenemos la lista de usuarios, buscamos el usuario con el nombre de usuario proporcionado y comparamos la contraseña hasheada con la contraseña proporcionada. Si las contraseñas coinciden, imprimimos un mensaje de bienvenida.
  async checkPassword(username, password) {
    const users = await this.getUsers();
    const user = users.find((user) => user.username === username);
    if (!user) {
      return console.log("User not found.");
    }
    const hashedPassword = await this.hashPassword(password);
    if (user.password !== hashedPassword) {
      return console.log("Incorrect password.");
    }
    console.log(`Welcome back, ${user.name} ${user.surname}!`);
  }
}

// Al ejecutar el script, se agrega un nuevo usuario con nombre de usuario "john_doe" y contraseña "password123". Luego, verificamos la contraseña del usuario "john_doe" con la contraseña "password123" y se imprime un mensaje de bienvenida si la contraseña es correcta.
async function main() {
  const userManager = new UserManager("./users.json");
  await userManager.addUser({
    username: "john_doe",
    password: "password123",
    name: "John",
    surname: "Doe",
  });
  await userManager.checkPassword("john_doe", "password123");
  await userManager.checkPassword("john_doe", "wrong_password123");
}

main();

// En este ejemplo, hemos creado una clase "UserManager" que nos permite agregar usuarios y verificar sus contraseñas.
