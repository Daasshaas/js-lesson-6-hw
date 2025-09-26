import shout, { greet } from './modules/greet.js';
import { add } from './modules/calc.js';

const greetingEl = document.getElementById('greeting');
const resultEl = document.getElementById('result');
const aInp = document.getElementById('a');
const bInp = document.getElementById('b');
const sumBtn = document.getElementById('sumBtn');

greetingEl.textContent = greet('Дарія'); 
console.log(shout('це тест для консолі'));

sumBtn.addEventListener('click', () => {
  const a = Number(aInp.value);
  const b = Number(bInp.value);
  const s = add(a, b);
  resultEl.textContent = `Результат: ${s}`;
});

import { products } from '../data.js';
import Handlebars from 'handlebars';

async function init() {
  const resp = await fetch(new URL('./template.hbs', import.meta.url));
  const templateSrc = await resp.text();
  const template = Handlebars.compile(templateSrc);
  const html = template({ products });
  document.querySelector('#app').innerHTML = html;
}

init().catch(err => {
  console.error('Init error:', err);
  document.querySelector('#app').textContent = 'Error — дивись консоль';
});