document.getElementById('for_got').addEventListener('submit', for_got);

function for_got(e){
    e.preventDefault();

    const email = document.getElementById('userEmail').value;

    console.log(email)

    fetch('https://sims2019api.herokuapp.com/api/recovery', {

        headers: {'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            email: email,
        })
    }).then(response => response.json())
      .then( data => {
            if(data.message){
              document.getElementById('success').innerHTML = data.message;
            }
            if(data.success){
                window.location.replace('resetpassword.html')
            }
            setTimeout( () => {
                    document.getElementById('success').style.display = 'none';      
                }, 6000) 
            console.log(data.message)
        })
      .catch( err => console.log(err))
}    