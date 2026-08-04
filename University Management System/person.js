class Person{
    constructor(id, name, age, gender){
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    display(){
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

module.exports=Person;