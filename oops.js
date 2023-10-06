function Person(name,age,gender){
    this.name=name,
    this.age=age,
    this.gender=gender,

    this.show=()=>{
        console.log(`Hello ${this.name}`)
    }
}


const p1 = new Person("ram", 20, "Male")
p1.show()