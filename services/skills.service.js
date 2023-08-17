const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
class SkillsService {
  constructor() {
    this.skills = [];
    this.generateSkills();
  }
  generateSkills() {
    let limit = 5;
    for (let index = 0; index < limit; index++) {
      this.skills.push({ id: index, name: faker.word.words() });
    }
  }
  async find() {
    return this.skills;
  }
  async search(id) {
    console.log('name: ', id);
    id = parseInt(id);
    const findSkill = this.skills.find((item) => item.id === id);
    console.log('find', findSkill);
    if (!findSkill) {
      throw boom.notFound('skill not found');
      // throw new Error('skill not found');
    }
    return findSkill;
  }
  async create(data) {
    const newSkill={
      id:this.skills.length,
      ...data
    }
    this.skills.push(newSkill);
    return newSkill;
  }

  async update(id, data) {
    const index = this.skills.findIndex((skill) => skill === data);

    if (index === -1) {
      //throw boom.notFound('skill not found');
      throw new Error('skill not found');
    }
    this.skills[index] = data;
    return this.skills[index];
  }
  async delete(data) {
    const index = this.skills.findIndex((skill) => skill === data);
    if (index === -1) {
      //throw boom.notFound('skill not found');
      throw new Error('skill not found');
    }
    this.skills.splice(index, 1);
    return { index };
  }
}

module.exports = SkillsService;
