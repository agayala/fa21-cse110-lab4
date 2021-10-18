let statistics = {
    redCars: 21,
    blueCars:45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let prop in statistics) {
    //Checking if the value of the property is odd
    if (((statistics[prop])%2) != 0 ) {
        console.log(statistics[prop]);
    }
    //Checking if the first letter of the property starts with 'r' 
    else if(prop.charAt(0) == 'r'){
        console.log(statistics[prop]);
    }
}
