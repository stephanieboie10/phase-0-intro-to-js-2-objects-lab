// Write your solution in this file!
const employee = {
    name : "Steph"
}
function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] =value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]
    return employee
}