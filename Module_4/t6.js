'use strict';

document.getElementById('search-form').addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.getElementById('search-input').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
  const data = await response.json();

  data.result.forEach(joke => {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = joke.value;
    article.appendChild(p);
    resultsDiv.appendChild(article);
  });
});