class User{
    constructor(name, age){
        this.name=name
        this.age=age
    }

    show(){
        console.log(`hello ${this.name}, you are ${this.age} years old`)
    }
}

// const user1 = new User("ram", 20)
// console.log(user1)
// user1.show()


class Emp extends User{
    constructor(name, age, id){
        super(name,age)
        this.id = id
    }
    static show1(){
        console.log(`hello ${this.name}, you are ${this.age} years old and your id is ${this.id}`)
    }
}

const e1 = new Emp("ram",20, 100)
console.log(e1)
e1.show1()
