// Write your solution in this file!
// creating an object employee
const employee = {employeeName : "Wanted Joe", streetAddress: "194,Mainstreet,Africa"};
// console.log(employee);

// returns an employee with the original key value pairs and the new key value pair
// it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue (obj , key, value ) {
    const newObj = {...obj};

    newObj[key]=value;
    return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue (
    employee, 
    'streetAddress', 
    "44,Nairobi, Kenyatta Avenue"
); 
// console.log(newEmployee);

// // destructive
function destructivelyUpdateEmployeeWithKeyAndValue (obj,key,value) {
    obj[key]=value;
    return obj;
}
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'employeeName', 'Susan Cute');
// console.log(employee);

//  deleteFromEmployeeByKey(employee, key)
// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
  
function deleteFromEmployeeByKey (obj,key){
const aNewObj = {...obj};
delete aNewObj[key];
return aNewObj;
}
const currentEmployee = deleteFromEmployeeByKey(employee, 'employeeName')
// console.log(currentEmployee);
// console.log(employee)

// returns employee without the deleted key/value pair and modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key]
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'employeeName');
console.log(employee)
