

class Worker{
    constructor(name,surName,rate,days){
        this.name =name
        this.surName =surName
        this.rate =rate
        this.days =days
    }

    getSalary(){
        return this.rate*this.days
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surName); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31