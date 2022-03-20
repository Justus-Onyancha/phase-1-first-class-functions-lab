// Code your solution in this file!

//return first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

//return first two drivers from the passed-in array
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, driverToReturn){
    return driverToReturn(drivers)
}

