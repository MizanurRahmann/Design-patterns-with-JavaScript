//A prototype
const fullTimeEmployee = {
    type: "fulltime",
    salary: "৳40,0000",
    startingTime: "08:00AM",
    EndingTime: "04:00PM",
};  

//Create new initialized object
const employee_1 = Object.create(fullTimeEmployee, { name: { value: 'Biddut vai' } });

console.log(`${employee_1.name} is a ${employee_1.type} worker.`);
console.log(`${employee_1.name}'s working schedule ${employee_1.startingTime} to ${employee_1.EndingTime}`);