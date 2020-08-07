class Manager {
    constructor(name) {
      if (Manager.exists) {
        return Manager.instance;
      }
      this.name = name;
      Manager.instance = this;
      Manager.exists = true;
      return this;
    }
  
    getManagerName() {
      return this.name;
    }
  }
  
  const salamVai = new Manager('Abdus Salam');
  console.log(salamVai.getManagerName());
  
  const gutibajSalam = new Manager('Gutibaj Salam');
  console.log(gutibajSalam.getManagerName());
