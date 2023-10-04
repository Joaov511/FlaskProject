const form = document.getElementById("form1");

async function fetchData() {
    userData = {
        username : form[0].value,
        email : form[1].value,
        password : form[2].value
    }
    
    fetch('http://localhost:3085/signup2', {      
    method : 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body : JSON.stringify(userData),
    mode: 'cors',
    cache: 'default',
})
.then(Request => {
        if(Request.status == 201) {
            document.write("Account successfully created")
        }
    })   
}


form.addEventListener('submit', async function(event){
    event.preventDefault();
    fetchData();
})