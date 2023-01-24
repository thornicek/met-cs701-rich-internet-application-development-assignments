var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Machine = /** @class */ (function () {
    function Machine(speed, type, isFloating) {
        this.speed = speed;
        this.type = type;
        this.isFloating = isFloating;
    }
    Machine.prototype.changeSpeed = function (amount) {
        this.speed += amount;
    };
    return Machine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(speed, type, isFloating, year, make) {
        var _this = _super.call(this, speed, type, isFloating) || this;
        _this.year = year;
        _this.make = make;
        return _this;
    }
    Car.prototype.printYearMake = function () {
        console.log(this.year + " " + this.make);
    };
    return Car;
}(Machine));
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(speed, type, isFloating, year, make) {
        var _this = _super.call(this, speed, type, isFloating) || this;
        _this.year = year;
        _this.make = make;
        return _this;
    }
    Cart.prototype.printYearMake = function () {
        console.log(this.year + " " + this.make);
    };
    Cart.prototype.changeSpeed = function (amount) {
        if (this.speed + amount >= 10) {
            this.speed = 10;
        }
        else {
            _super.prototype.changeSpeed.call(this, amount);
        }
    };
    return Cart;
}(Machine));
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat(speed, type, isFloating, year, make) {
        var _this = _super.call(this, speed, type, isFloating) || this;
        _this.year = year;
        _this.make = make;
        return _this;
    }
    Boat.prototype.printYearMake = function () {
        console.log(this.year + " " + this.make);
    };
    Boat.prototype.changeSpeed = function (amount) {
        if (this.speed + amount >= 30) {
            this.speed = 30;
        }
        else {
            _super.prototype.changeSpeed.call(this, amount);
        }
    };
    return Boat;
}(Machine));
var teslaX = new Car(90, "X", false, 2021, "Tesla");
var goCart = new Cart(5, "RS", false, 1996, "Ferarri");
var yacht = new Boat(20, "LCRX", true, 2020, "Lamborghini");
goCart.changeSpeed(2);
console.log(goCart.speed);
goCart.changeSpeed(12);
console.log(goCart.speed);
yacht.changeSpeed(5);
console.log(yacht.speed);
yacht.changeSpeed(15);
console.log(yacht.speed);
