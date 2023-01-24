var Car1 = /** @class */ (function () {
    function Car1(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car1.prototype.displayModel = function () {
        console.log(this.model + " " + this.year);
    };
    return Car1;
}());
var tesla = new Car1("Tesla", "X", 2021);
tesla.displayModel();
