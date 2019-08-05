document.getElementById('token_reset').addEventListener('submit', token_reset);

function token_reset(event){
    event.preventDefault();

    const token = document.getElementById('user_token').value;
    const password = document.getElementById('newPwd').value;
    const confirm = document.getElementById('confirmPwd').value; 

    fetch('https://sims2019api.herokuapp.com/api/reset', {

        headers: {'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({
            token: token,
            password: password,
            password_confirmation: confirm,
    })
    }).then((res) => res.json())
    .then((data) => {
            if (data.token){
                document.getElementById('err_token').innerText = data.token;       
            } 
            if(data.password){
                document.getElementById('err_pwd').innerText = data.password;
            }
            if(data.message){
                document.getElementById('success').innerText = data.message;
            }
            if(data.success){
                window.location.replace('Signin.html')
            }
            setTimeout( () => {
                document.getElementById('err_token').style.display = 'none';
                document.getElementById('err_pwd').style.display = 'none';
                document.getElementById('success').style.display = 'none';      
            }, 6000)   
        console.log(data)       
    })
    .catch((err) => console.log(err))
}