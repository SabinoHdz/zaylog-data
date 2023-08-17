const { faker } = require('@faker-js/faker');
const boom= require('@hapi/boom')
class Services {
  constructor() {
    this.services = [];
    this.generateData();
  }
  generateData() {
    const limit = 20;
    for (let i = 0; i < limit; i++) {

      this.services.push({
        id:faker.string.uuid(),
        name:faker.lorem.word(),
        description:faker.lorem.paragraph(),
        count:faker.number.int(),
        price:faker.number.float(),
        image:faker.image.dataUri(),
      });
    }
  }
  async find(){
      return this.services;
  }
  async findOne(id){
    let element =this.services.find(item=>item.id===id);
    if (!element) {
      throw boom.notFound('service not found');
    }
    return element;
  }
  async create(body){

  }
  async update(id,body){

  }
  async delete(id){

  }
}

module.exports=Services;
