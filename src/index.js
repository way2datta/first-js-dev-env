import numeral from 'numeral';
import './index.css';

const name = "Arnav";
const greetingCardValue = numeral(100).format('Rs.0,0.00');
console.log(`I would pay ${greetingCardValue} for this greeting card!`);
console.log(`Hello, My name is ${name}.`);
