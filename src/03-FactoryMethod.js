function Factory() {
    this.createEmployee = function (type) {
        var employee;
 
        if (type === "fulltime") {
            employee = new FullTime();
        } else{
            employee = new PartTime();
        }
        employee.type = type;
        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }
        return employee;
    }
}
 
var FullTime = function () {
    this.hourly = "৳40,0000";
};
 
var PartTime = function () {
    this.hourly = "৳15,000";
};

function run() {
    var employees = [];
    var factory = new Factory();
 
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("fulltime"));
    
    
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}
run();
