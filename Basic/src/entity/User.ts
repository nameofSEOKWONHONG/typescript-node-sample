export default class User {
    Index:number
    Name:string
    Age:number
    
    constructor(index:number = 0, name:string, age:number) {
        this.Index = index
        this.Name = name
        this.Age = age
    }

    print() {
        console.log(`${this.Index} ${this.Name}, ${this.Age}`)
    }
}
