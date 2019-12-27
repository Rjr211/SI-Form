// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('age').addEventListener('blur', validateAge);


function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z ]{2,20}$/;

    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
        name.style.border = "1px solid #FF0000"

    } else {
        name.classList.remove('is-invalid');
        name.style.border = "1px solid #6ae53b";
    }
}

function validateZip() {
    const zipcode = document.getElementById('zipcode');
    const re = /^\d{5}(-?\d{4})?$/;

    if (!re.test(zipcode.value)) {
        zipcode.classList.add('is-invalid');
        zipcode.style.border = "1px solid #FF0000"
    } else {
        zipcode.classList.remove('is-invalid');
        zipcode.style.border = "1px solid #6ae53b";
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        email.style.border = "1px solid #FF0000"
    } else {
        email.classList.remove('is-invalid');
        email.style.border = "1px solid #6ae53b"
    }
}

function validateAge() {
    const age = document.getElementById('age');

    if(age.value < 18) {
        age.classList.add('is-invalid');
        age.style.border = "1px solid #FF0000"
    } else if (age.value >= 18) {
        age.classList.remove('is-invalid');
        age.style.border = "1px solid #6ae53b"
    }
}