
document.getElementById('Sign_in').addEventListener('submit', Sign_in);

function Sign_in(event){
    event.preventDefault();

    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPwd').value;

    fetch('https://sims2019api.herokuapp.com/api/login', {

        headers: {'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          email,
          password
    })
})
    .then( res => res.json())
    .then( data => {
        if (data.email){
            document.getElementById('err_email').innerText = data.email;       
        } 
        if(data.password){
            document.getElementById('err_pwd').innerText = data.password;
        }
        if(data.message){
            document.getElementById('success').innerText = data.message;
        }
        if(data.token){
            const gaol = data.token;
            localStorage.setItem('token', `${gaol}`);
        }
        if(data.verified){
            window.location.replace('enroll.html')
        }
        setTimeout( () => {
            document.getElementById('err_email').style.display = 'none';
            document.getElementById('err_pwd').style.display = 'none';
            document.getElementById('success').style.display = 'none';      
        }, 6000) 
        console.log(data)
    })
    .catch( err => {

        console.log(err)
    });
}
