'use strict';

// This task also covers assignment 4: the image is replaced with a placeholder if the show does not have its own image.

const form = document.querySelector('form');
const card = document.querySelector("#result")

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const query = document.querySelector('input[name="q"]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
        const resultsContainer = document.querySelector('#results');
        resultsContainer.innerHTML = '';
        for (let result of jsonData) {
            console.log(result);
            const div_col = document.createElement('div');
            div_col.className = 'col-3 mb-3';
            resultsContainer.appendChild(div_col);
            const article = document.createElement('article');
            article.className = 'card';
            div_col.appendChild(article);
            const img = document.createElement('img');
            img.src = result.show.image?.medium || 'https://placehold.co/210x295';
            img.className = 'card-img-top';
            img.alt = result.show.name;
            article.appendChild(img);
            const div = document.createElement('div');
            div.className = 'card-body';
            article.appendChild(div);
            const h2 = document.createElement('h2');
            h2.className = 'card-title';
            h2.textContent = result.show.name;
            div.appendChild(h2);
            const div_sum = document.createElement('div')
            div_sum.className = 'card-text';
            div_sum.innerHTML = result.show.summary;
            div.appendChild(div_sum);
            const a = document.createElement('a');
            a.className = 'btn btn-primary';
            a.textContent = `About ${result.show.name}`;
            a.href = result.show.url;
            a.target = "_blank";
            div.appendChild(a);
        }
    } catch (error) {
        console.log(error.message)
    }
});