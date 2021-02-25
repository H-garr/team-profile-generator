class Employee{

        constructor(name,id,email){
            this.name = name;
            this.id = id;
            this.email = email;
        }

        getName (){
            return this.name;
        }
        getId (){
            return this.id;
        }
        getEmail (){
            return this.email;
        }
        getRole (){
            return "Employee";
        }
}

// var testOB = new Employee("test",1, "test@test.com")
// console.log(testOB);
module.exports = Employee;