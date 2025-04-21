'use strict';

// This task also covers assignment 4: the image is replaced with a placeholder if the show does not have its own image.

const form = document.querySelector('form');
const card = document.querySelector("#result")

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const value_from_input = document.querySelector('input[name="query"]').value;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        const jsonData = await response.json();
        console.log(jsonData);
        const resultsContainer = document.querySelector('#results');
        resultsContainer.innerHTML = '';
        for (let joke of jsonData.result) {
            const article = document.createElement('article');
            resultsContainer.appendChild(article);
            const img = document.createElement('img');
            img.src = joke.icon_url;
            article.appendChild(img)
            const p = document.createElement('p');
            p.textContent = joke.value;
            article.appendChild(p);
        }
    } catch (error) {
        console.log(error.message)
    }
});