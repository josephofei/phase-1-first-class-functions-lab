// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (a) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (b) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




const createFareMultiplier = function (fare1) {
    return function (fare) {
        return fare1 * fare
    }
}

const fareDoubler = function (fare2) {
    return fare2 * 2
}

const fareTripler = function (fare3) {
    return fare3 * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, functions) {
    if (functions === returnFirstTwoDrivers) {
        return drivers.slice(0, 2)
    }
    else if (functions = returnLastTwoDrivers) {
        return drivers.slice(2, 4)
    }
    //  return functions
}