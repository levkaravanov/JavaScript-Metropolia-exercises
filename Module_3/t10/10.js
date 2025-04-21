const form = document.getElementById('source');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstname = document.querySelector('[name="firstname"]').value;
    const lastname = document.querySelector('[name="lastname"]').value;

    document.querySelector('#target').innerHTML = `Your name is ${firstname} ${lastname}`
});