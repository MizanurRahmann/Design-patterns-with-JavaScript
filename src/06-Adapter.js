// old interface
class OldApp {
    constructor() {
      this.operations = function(x, y, type) {
        switch (type) {
          case 'add':
            return x + y;
          case 'sub':
            return x - y;
          default:
            return NaN;
        }
      };
    }
  }
  
  // new interface
  class NewApp {
    constructor() {
      this.add = function(x, y) {
        return x + y;
      };
      this.sub = function(x, y) {
        return x - y;
      };
    }
  }
  
  // Adapter Class
  class AppAdapter {
    constructor() {
      const newCalc = new NewCalculator();
  
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            // using the new implementation under the hood
            return newCalc.add(term1, term2);
          case 'sub':
            return newCalc.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }
  
  // usaage
  const oldInstance = new OldApp();
  console.log(oldInstance.operations(7, 5, 'add'));
  
  const newInstance = new NewApp();
  console.log(newInstance.add(10, 5));
  
  const adaptedInstance = new AppAdapter();
  console.log(adaptedInstance.operations(10, 13, 'add'));
