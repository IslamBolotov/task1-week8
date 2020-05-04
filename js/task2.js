

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
    get days(){
        return this._days
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surName); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31