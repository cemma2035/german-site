
document.getElementById('verify').addEventListener('submit', verify);

function verify(e){
    e.preventDefault();

    const verify = document.getElementById('user_Verify').value;

    fetch('https://sims2019api.herokuapp.com/api/verify', {
        headers: {'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            token: verify,
        })
    }).then( response => {
        return response.json()
    })
    .then( data => {
        if(data.token){
            document.getElementById('err_verify').innerText = data.token;
            document.getElementById('err_verify').style.display = 'block';
        }
        if(data.message){
            document.getElementById('success').innerHTML = data.message;
            document.getElementById('success').style.display = 'block';
        }
        if(data.success){
            window.location.replace('signin.html')
        }
        if(data.verified == "true"){
            localStorage.getItem('token', data.token)
        }
        setTimeout( () => {
            document.getElementById('err_verify').style.display = 'none';
            document.getElementById('success').style.display = 'none'; 
        }, 6000)  
       
        console.log(data.token)
    })
    .catch( err => {
        console.log(err)
    })
}