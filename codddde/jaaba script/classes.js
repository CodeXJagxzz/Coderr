let DATA = "secret information";

class user {

    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    veiwData(){
        console.log("data =", DATA);
    }
}

let student1 = new user("jagrat","jagrat69.com");

let student2 = new user("ridhi","ridhi.com");

class admin extends user {
    constructor(name , email){

        super(name,email);
    }

    editData(){
        DATA = "something new"; 
    }
}

let admin1 = new admin("harry", "shradha.com");

