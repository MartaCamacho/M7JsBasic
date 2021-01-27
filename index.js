/* EXERCICI 1 */

console.log('Hola mundo')

/* EXERCICI 2 */
function alertMessage(message) {
    alert(message)
}

window.onload = alertMessage('¡Me llamo marta!')

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
    }
}

passedOrNot(7);

/* EXERCICI 6 */

const text = 'Tinc un cotxe de color blau';
const blau = text.replace('blau', 'verd')
const u = text.replace(/o/g, 'u')

/* EXERCICI 7 */

/* EXERCICI 8 */