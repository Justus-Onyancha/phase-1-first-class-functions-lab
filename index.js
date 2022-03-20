// Code your solution in this file!

//return first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

//return first two drivers from the passed-in array
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}


//returns firstTwoDrivers ans lastTwoDrivers as its elements in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// should multiply a given value using created muiliplier
const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value
    }
}

// faredubler fucntion from createmulpiplier fucntion above
const fareDoubler = createFareMultiplier(2)

// fareTripler fucntion from createmulpiplier fucntion above
const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(drivers, driverToReturn){
    return driverToReturn(drivers)
}

