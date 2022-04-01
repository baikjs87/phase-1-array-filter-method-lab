
function findMatching(array, string) {
    const newString = string.toLowerCase();
    const driverList = array.filter(function(element) {
        const newElement = element.toLowerCase();
        if(newElement === newString) {
            return element;
        }
    })
    return driverList;
}

function fuzzyMatch(array, string) {
    const driverList = array.filter(driverName => driverName.startsWith(string));
    return driverList;
}

function matchName(array, string) {
    const driverList = array.filter(function(driver) {
        const driverName = driver.name;
        if(string === driverName) {
            return driver;
        }
    })
    return driverList;
}