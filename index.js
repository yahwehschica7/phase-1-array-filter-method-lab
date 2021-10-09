function findMatching(drivers, name) {
    const newDrivers = drivers.filter(names => names.toLowerCase()
    === name.toLowerCase());
    return newDrivers;
};

function fuzzyMatch(array, name) {
    return array.filter(el => el.slice(0,1) === name.slice(0,1))
}


function matchName(driverArray, string) {
    return driverArray.filter(element => element.name === string);
}
        




//   `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.


// function isBigEnough(value) {
//     return value >= 10
//   }