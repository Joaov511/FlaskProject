const form = document.getElementById("form");
if (form) {
    
}




async function fetchData() {
    userData = {
        email : form[0].value,
        password : form[1].value
    }
    
    fetch('http://localhost:3085/login', {      
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
        console.log(response)
        if(response.UserExists == true) {
            window.location.href = 'home.html';
        }
    })   
}


function see(){
    let input = document.getElementById('senha-input');
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




form.addEventListener('submit', async function(event){
    event.preventDefault();
    fetchData();
})

