const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const getConnection=require('./../libs/postgres');
class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        user: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
      });
    }
  }
  async find() {
    const cliente=await getConnection();
    const rta= await cliente.query("SELECT * from task");
    return rta.rows;

  }
  async findOne(id) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }
  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }
  async update(id, changes) {
    const index = this.users.findIndex((user = user.id === id));
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.user[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }
  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}
module.exports=UserService;
