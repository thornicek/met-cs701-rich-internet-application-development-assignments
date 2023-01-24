interface IVehicle{
    year: number;
    make: string;
    printYearMake():void;
}
class Machine{
    speed: number;
    type: string;
    isFloating: boolean;
    changeSpeed(amount:number){
        this.speed += amount;
    }
    constructor(speed: number, type: string, isFloating: boolean){
        this.speed = speed;
        this.type = type;
        this.isFloating = isFloating;
    }
}
class Car extends Machine implements IVehicle{
    year: number;
    make: string;
    printYearMake(){
        console.log(this.year + " " + this.make)
    }
    constructor(speed: number, type: string, isFloating: boolean, year: number, make: string){
        super(speed, type, isFloating);
        this.year = year;
        this.make = make;
    }
}
class Cart extends Machine implements IVehicle{
    year: number;
    make: string;
    printYearMake(){
        console.log(this.year + " " + this.make)
    }
    changeSpeed(amount: number): void {
        if (this.speed + amount >= 10){
            this.speed = 10;
        } else{
            super.changeSpeed(amount);
        }
    }
    constructor(speed: number, type: string, isFloating: boolean, year: number, make: string){
        super(speed, type, isFloating);
        this.year = year;
        this.make = make;
    }
}
class Boat extends Machine implements IVehicle{
    year: number;
    make: string;
    printYearMake(){
        console.log(this.year + " " + this.make)
    }
    changeSpeed(amount: number): void {
        if (this.speed + amount >= 30){
            this.speed = 30;
        } else{
            super.changeSpeed(amount);
        }
    }
    constructor(speed: number, type: string, isFloating: boolean, year: number, make: string){
        super(speed, type, isFloating);
        this.year = year;
        this.make = make;
    }
}
var teslaX = new Car(90,"X",false,2021,"Tesla");
var goCart = new Cart(5,"RS",false,1996,"Ferarri");
var yacht = new Boat(20,"LCRX",true,2020,"Lamborghini");

goCart.changeSpeed(2);
console.log(goCart.speed);
goCart.changeSpeed(12);
console.log(goCart.speed);
yacht.changeSpeed(5);
console.log(yacht.speed);
yacht.changeSpeed(15);
console.log(yacht.speed);