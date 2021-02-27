// Write your solution in this file!
const employee = {
    name: 'Merv',
    streetAddress: '105 Holeman'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObject = {...employee};

    newObject[key] = value;

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
} 

function deleteFromEmployeeByKey(obj, key) {
    const newObject = {...obj};
    
    delete newObject[key];

    return newObject;
}
