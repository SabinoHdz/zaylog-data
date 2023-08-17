const {faker}=require('@faker-js/faker')
const boom = require('@hapi/boom');
class AboutService{
  constructor(){
    this.company=null;
    this.generateInfo();
  }
  generateInfo(){
    this.company={
      id:faker.string.uuid(),
      name:faker.company.name(),
      description:faker.company.catchPhraseDescriptor(),
      mision:faker.lorem.sentence(),
      vision:faker.lorem.sentence()
    }
  }
  async find(){
    return this.company;
  }
  async findOne(id){

  }
  async create(data){

  }
  async update(){

  }
  async delete(){
  }


}

module.exports=AboutService;
