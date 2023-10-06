function see(){
    let input = document.getElementById('senha-input');
    let form = document.getElementById('form');

    form.classList.toggle('see')

    if(form.classList.contains('see')){
        input.type = 'text'
        document.getElementById('senha').name = 'eye-off-outline'
    }
    else{
        
        input.type = 'password'
        document.getElementById('senha').name = 'eye-outline'
    }
}