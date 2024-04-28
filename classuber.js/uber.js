
//write a class to calculate the uber price.

class uberFarePrice {                                       
    constructor(base_fare, minutes, distance, fees) {       
        this.base_fare = base_fare;                       
        this.minutes = minutes;
        this.distance =distance;
        this.fees= fees;
    }
    getFare(cpm=0.2, cpd=20){        //cpm= cost per minute, cpd = cost per distance
        var fare = this.base_fare + (cpm * this.minutes) + (this.distance * cpd) + this.fees      
        console.log (`Fare for ride is: ${fare}`)
    }  
}

let ride1 = new uberFarePrice(50, 55, 20, 40)

ride1.getFare();       
