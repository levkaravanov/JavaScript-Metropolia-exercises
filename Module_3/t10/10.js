const form = document.getElementById('source');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    console.log(firstname, lastname);
});