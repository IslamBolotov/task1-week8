

class Worker{
    constructor(name,surName,rate,days){
        this._name =name
        this._surName =surName
        this._rate =rate
        this._days =days
    }

    getSalary(){
        return this._rate*this._days
    }

    get name(){
        return this._name
    }
    get surName(){
        return this._surName
    }
    get rate(){
        return this._rate
    }
    
    set rate(value){
        this._rate = value 
    }

    get days(){
        return this._days
    }

    set days(value){
        this._days = value
    }
}


var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.rate=20; //увеличим ставку
worker.days=10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
console.log(worker.rate); //выведет 20
console.log(worker.days); //выведет 10