
document.getElementById('sign_up').addEventListener('submit', sign_up);

function sign_up(event){
    event.preventDefault();

    const name = document.getElementById('userFullName').value;
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPwd').value;
    const confirm = document.getElementById('confirmPwd').value; 

    fetch('https://sims2019api.herokuapp.com/api/register', {

        headers: {'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            full_name: name,
            email: email,
            password: password,
            password_confirmation: confirm,
    })
    }).then((res) => res.json())
    .then((data) => {
            if (data.email){
                document.getElementById('err_email').innerText = data.email;       
            } 
            if(data.password){
                document.getElementById('err_pwd').innerText = data.password;
            }
            if(data.message){
                document.getElementById('success').innerText = data.message;
            }
            if(data.success){
                window.location.replace('verification.html')
            }
            setTimeout( () => {
                document.getElementById('err_email').style.display = 'none';
                document.getElementById('err_pwd').style.display = 'none';
                document.getElementById('success').style.display = 'none';      
            }, 6000)   
        console.log(data)       
    })
    .catch((err) => console.log(err))
}