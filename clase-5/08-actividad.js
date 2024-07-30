const fs = require("fs").promises;

class UsersManager {
  constructor(path) {
    this.path = path;
  }

  async getUsers() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }

  async addUser(user) {
    if (!user || !user.name || !user.surname || !user.age || !user.course) {
      throw new Error("El usuario no tiene todos los datos necesarios");
    }

    try {
      const users = await this.getUsers();
      users.push(user);
      await fs.writeFile(this.path, JSON.stringify(users, null, 2), "utf8");
    } catch (err) {
      console.error("[addUser] Hubo un error al leer el archivo: ", err);
    }
  }
}

async function main() {
  const usersManager = new UsersManager("./data/08-users.json");

  try {
    const users = await usersManager.getUsers();
    console.log(users);

    await usersManager.addUser({
      name: "Juan",
      surname: "Perez",
      age: 25,
      course: "Fullstack",
    });

    const newUsers = await usersManager.getUsers();
    console.log(newUsers);
  } catch (err) {
    console.error("Hubo un error al leer el archivo: ", err);
  }
}

main();
