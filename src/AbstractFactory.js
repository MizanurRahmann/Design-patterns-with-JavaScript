function IcecreamCustomer(name) {
    this.name = name;
    this.say = function () {
        console.log(name + " is a icecream customer ");
    };
}
 
function IcecreamFactory() {
    this.addCustomer = function(name) {
        return new IcecreamCustomer(name);
    };
}
 
function CakeCustomer(name) {
    this.name = name;
    this.say = function () {
        console.log(name + " is a cake customer ");
    };
}
 
function CakeFactory() {
    this.addCustomer = function(name) {
        return new CakeCustomer(name);
    };
}
 
function run() {
    var persons = [];
    var icecreamFactory = new IcecreamFactory();
    var cakeFactory = new CakeFactory();
 
    persons.push(icecreamFactory.addCustomer("Joan DiSilva"));
    persons.push(icecreamFactory.addCustomer("Tim O'Neill"));
    persons.push(cakeFactory.addCustomer("Gerald Watson"));
    persons.push(cakeFactory.addCustomer("Nicole McNight"));
 
    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}
run();