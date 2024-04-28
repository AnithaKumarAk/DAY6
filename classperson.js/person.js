
//Write a “person” class to hold all the details.

class Person{                                                                             
    constructor(first_name, last_name, age, gender, city, state, pin, mobile_number ){   
        this.first_name= first_name;                                                     
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.mobile_number = mobile_number;
    }

    getPersonFirstName(){                                                                 
        console.log(`First Name: ${this.first_name}`)
    }
    getPersonLastName(){                                                                    
        console.log(`Last Name: ${this.last_name}`)
    }   
    getAge(){                                                                               
        console.log(`Age: ${this.age}`)
    }
    getGender(){                                                                           
        console.log(`Gender: ${this.gender}`)
    }
    getCity(){                                                                              
        console.log(`City: ${this.city}`)
    }
    getState(){                                                                             
        console.log(`State: ${this.state}`)
    }
    getPIN(){                                                                               
        console.log(`PIN: ${this.pin}`)
    }
    getMobileNumber(){                                                                          
        console.log(`Number: ${this.mobile_number}`)
    }
}

const Anitha = new Person("Anitha", "Kumar", 23, "Female", "Chennai","Tamilnadu", 600083, 1234567890)   

//accessing methods
Anitha.getPersonFirstName();
Anitha.getPersonLastName();
Anitha.getAge();
Anitha.getGender();
Anitha.getCity();
Anitha.getState();
Anitha.getPIN();
Anitha.getMobileNumber();
