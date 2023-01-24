var person = {
    firstname: "Tom",
    lastname: "Hanks",
    fullName: function (firstname, lastname) {
        console.log(this.firstname + " " + this.lastname);
        return this.firstname + " " + this.lastname;
    }
};
