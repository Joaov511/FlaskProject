const form = document.getElementById("form1");
const usernameInput = document.getElementById('username');
const divMessage = document.getElementById('processMessage')

if(form) {
    form.addEventListener('submit', async function(event){
        event.preventDefault();
        postData();
    })
}



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

function see(){
    let input = document.getElementById('password');
    let form = document.getElementById('form');

    form.classList.toggle('see')

    if(form.classList.contains('see')){
        input.type = 'text'
        document.getElementById('senha').name = 'eye-outline'
    }
    else{
        
        input.type = 'password'
        document.getElementById('senha').name = 'eye-off-outline'
    }
}
