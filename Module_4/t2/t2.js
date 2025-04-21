'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', async function(evt){
    evt.preventDefault();

    const query = document.querySelector('input[name="q"]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message)
    }
});