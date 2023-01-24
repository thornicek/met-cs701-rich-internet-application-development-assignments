var person = {
    firstname: "Tom",
    lastname: "Hanks",
    fullName: function( firstname:string, lastname :string ):string{
        console.log(this.firstname + " " + this.lastname ) 
        return this.firstname + " " + this.lastname   
    }
};
