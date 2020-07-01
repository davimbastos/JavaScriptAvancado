// ARROW FUNCTIONS

var sum = (a, b) => a + b;

var sum2 = (a, b) => {
    return a + b;
}

var sum3 = a => a + 5;

console.log(sum3(4));

var createObj = () => ({test: 123}); // Função com passagem de objetos
console.log(createObj());

function Car() { // Exemplo de função construtora
    this.foo = 'bar'
}

console.log(new Car()); 

var obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log("After 1000ms")
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

/*************** DEFAULT FUNCTION ARGUMENTS *********/

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(3));
console.log(multiply(2,6));

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function multiply2(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply2(2));

/************ ENHANCED OBJECT LITERALS *********/

var prop1 = 'Digital Innovation One';
var prop2 = 'Digital Innovation One';
function prop3(){
    console.log('prop called');
}

var obj = {
    prop :'Digital Innovation One',
    prop1: prop1,
    prop2,
    prop3
};

obj.prop3();

console.log(obj);


/********* REST OPERATOR ********/

//Declaração tradicional
function sum(a, b) {
    var value = 0;

    for (var i =0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));
// Fim da declaração 

// Usando rest operator

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5, 2, 3));

/********* SPREAD OPERATOR ********/

const multiply3 = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply3(...rest);
};

console.log(sum(5, 5, 5, 2, 3));


// Usando spread em string
const str = "Digital Innovation One";

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

// Usando spread em array

const arr = [1, 2, 3, 4];

function logArgs2(a, b, c){
    console.log(a,b,c);
}

logArgs2(...arr);

const arr2 = [...arr, 5, 6, 7];

console.log(arr2);

/************* DESTRUCTURING ASSIGNMENT ************/   

// Declaração antes do ES6

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Usando destructuring assigment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2);

/****************** GENERATORS *************/

function* hello(){
    console.log("Hello");
    yield;

    console.log("From");
    yield;

    console.log("Function");

}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

/************ PROMISES *********************/

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('First data');
        }, 1000);
});

const doOtherthingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Second data');
        }, 1000);
});

Promise.all([doSomethingPromise(), doOtherthingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

Promise.race([doSomethingPromise(), doOtherthingPromise()]).then(data => {
    console.log(data);
}); // A promise que resolver primeiro é quem dará o retorno


/*doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherthingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Deu ruim!', error));
*/
/************ CALLBACKS *********************/

// Exemplos de funções com callbacks antes do ES6

function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherthing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
            doOtherthing(function(data2) {
                var processedData2 = data2.split('');

                try {
                setTimeout(function() {
                    console.log(processedData, processedData2);
                }, 1000);
                } catch(err){
                    // handle error
                }
        });
        } catch(err){
            // handle error
        }
    });
    } catch(err){
        // handle error
    }
}

doAll();



/********* ASYNC / AWAIT ***********/

const asyncTimer = () => Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

/*********** EVENT EMITTER **********/

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Davi Bastos'});



/************** TRATAMENTO DE ERRO **************/

try{
    console.log(name);
    const name = 'Davi Bastos';
} catch (err) {
    console.log('Error:', err);
}

console.log('Keep going...');