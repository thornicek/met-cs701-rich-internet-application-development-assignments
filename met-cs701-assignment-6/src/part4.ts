class Car1 {
    public make: string;
    public model: string;
    public year: number;
 constructor(make: string,model: string, year: number) {
    this.make = make; 
    this.model = model;
    this.year = year;
 } 
 displayModel(){
    console.log(this.model + " " + this.year);
 }
}
const tesla = new Car1("Tesla","X",2021);
tesla.displayModel();