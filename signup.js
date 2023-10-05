const form = document.getElementById("form1");
const usernameInput = document.getElementById('username');
const divMessage = document.getElementById('processMessage')

form.addEventListener('submit', async function(event){
    event.preventDefault();
    postData();
})

async function postData() {
    userData = {
        username : form[0].value,
        email : form[1].value,
        password : form[2].value
    }
    
    fetch('http://localhost:3085/signup', {      
    method : 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body : JSON.stringify(userData),
    mode: 'cors',
    cache: 'default',
})
.then(response => response.json())
.then(response => {
    if(response.added) {
        successMessage = document.createElement('p')
        document.body.appendChild(successMessage);
        successMessage.innerHTML = "Conta criada com sucesso";
        successMessage.classList.add('signupMessage');
        divMessage.appendChild(successMessage);
        form.reset();
    }
})   
}


