const form = document.getElementById("form");
if (form) {
    form.addEventListener('submit', async function(event){
        event.preventDefault();
        fetchData();
    })
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
        if(response.userExists) {
            window.location.href = 'home.html';
        }
    })   
}






