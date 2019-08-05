
document.getElementById('verify').addEventListener('submit', verify);

function verify(e){
    e.preventDefault();

    const verify = document.getElementById('user_Verify').value;

    fetch('https://sims2019api.herokuapp.com/api/verify', {
        headers: {"Content-Type": "application/json" },
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
        }
        if(data.message){
            document.getElementById('success').innerHTML = data.message;
        }
        if(data.success){
            window.location.replace("/completeregistration.html")
        }
        setTimeout( () => {
            document.getElementById('err_verify').style.display = "none";
            document.getElementById('success').style.display = "none"; 
        }, 6000)  
       
        console.log(data)
    })
    .catch( err => {
        console.log(err)
    })
}