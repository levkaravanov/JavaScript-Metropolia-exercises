'use strict';

const participants = []

const number = Number(prompt(`Type a number of participants`));

for (let i = 1; i <= number; i++) {
    const participant = prompt(`${i}. Type a participant's name`);
    participants.push(participant)
}

participants.sort()

const target = document.querySelector('#target');
for (let p of participants) {
    target.innerHTML += `<li>${p}</li>`; // добавляет к текущему содержимому
}
