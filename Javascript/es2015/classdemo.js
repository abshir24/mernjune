class Car{ 
    constructor(make,model,year,topspeed){
        this.make = make
        this.model = model
        this.year = year
        this.distanceTraveled = 0
        this.topspeed = topspeed
    }

    printTopSpeed(){
        console.log("The topspeed for this vehicle is " + this.topspeed)
    }

    printCarInfo(){
        console.log("Car info:", this.make, this.model, this.year)
    }

    travelTenMiles(){
        this.distanceTraveled += 10

        console.log("Total distance traveled is: " + this.distanceTraveled)
    }

    travel(miles){
       this.distanceTraveled += miles 

       console.log("Total distance traveled is: " + this.distanceTraveled)
    }
}

let car  = new Car("Honda", "Accord","2024", 140)

car.travel(100)

car.printTopSpeed()

