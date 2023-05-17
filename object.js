const person = {
    nome: 'mario',
    cognome: 'rossi',
    eta: 40,
    indirizzo:{
        via: 'roma',
        cap: 10010,
        comune: 'Ivrea',
        provincia: 'Torino'
    },
    isMaggiorenne: function(){
        return this.eta>=18;
    }
};

console.log(person);

console.log(person.isMaggiorenne()); //true

person.eta = 10;

console.log(person.isMaggiorenne()); //false

console.log(person.indirizzo.cap);
console.log(person['indirizzo']['cap']);

//stringhe e template literals
const parola1 = "dfw fwff" +
 "5656 gf";
const parola2 = 'dfw fwff ' + person.indirizzo.cap + ' gf';

const parola3 = `dfw 
fwff 
${person.indirizzo.cap} 
gf`;

class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    move(w,h){
        this.x += w;
        this.y += h;
    }

    reset(){
        this.x = 0;
        this.y = 0;
    }
}

const p = new Punto(10,10);
console.log(p);
