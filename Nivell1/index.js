/* EXERCICI 1 */

console.log('Hola mundo');

/* EXERCICI 2 */
function alertMessage(message) {
    alert(message);
};

window.onload = alertMessage('¡Me llamo marta!');

/* EXERCICI 3 */

const name = 'Marta';
const lastName = 'Camacho';

/* EXERCICI 4 */

const number1 = 31348627428;
const number2 = 437427468738;

let sum = number1 + number2;

/* EXERCICI 5 */

let nota_examen;

function passedOrNot(nota_examen) {
    if(nota_examen < 5){
        alertMessage(`Ohhh! has suspendido el examen con un ${nota_examen}`)
    } else {
        alertMessage(`Oleee! has aprobado el examen con un ${nota_examen}`)
    };
};

passedOrNot(3);
passedOrNot(7);

/* EXERCICI 6 */

const text = 'Tinc un cotxe de color blau';
const blau = text.replace('blau', 'verd');
const u = text.replace(/o/g, 'u');

/* EXERCICI 7 */

const obj =  ['taula', 'cadira', 'ordinador', 'libreta'];
for (let i = 0; i < obj.length; i++){
    const message = `L'objecte ${obj[i]} està a la posició ${[i]}.`
    console.log(message);
};


/* EXERCICI 8 */

function calculadora( operator, val1, val2){
    if(operator == 'resta'){
        console.log(val1 - val2);
    } else if (operator == 'suma') {
        console.log(val1 + val2);
    } else if (operator == 'multiplicacion'){
        console.log(val1 * val2);
    };
};
			
var resultat = calculadora('multiplicacion',40,20);