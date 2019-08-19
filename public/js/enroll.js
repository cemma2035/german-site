document.getElementById('complete_reg').addEventListener('submit', complete_reg);

function complete_reg(e){
    e.preventDefault()

    let token = localStorage.getItem('token');
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const lga = document.getElementById('lga').value;
    const pob = document.getElementById('pob').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const level = document.getElementById('level').value;
    const occupation = document.getElementById('occupation').value;
    const nationality = document.getElementById('nationality').value;
    const m_status = document.getElementById('m_status').value;
    const remenber = document.getElementById('checked');
 
    console.log(token, dob, address, state, lga, pob, phone, gender, level, occupation, nationality, m_status, remenber)

    if (remenber.checked === true){ 
        fetch('https://sims2019api.herokuapp.com/api/edit',{
            headers: {
                'Authorization': 'Bearer '+token,
                'Content-Type': 'application/json' 
            },
            method: 'PUT',
            body: JSON.stringify({
                dob: dob,
                pob: pob,
                lga: lga,
                state: state,
                occupation: occupation,
                level: level,
                nationality:nationality,
                address:address,
                marital_status: m_status,
                gender:gender,
                phone:phone,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err));
    }else{
        document.getElementById('err_checked').innerText;
        document.getElementById('err_checked').style.display = 'block'; 
    }setTimeout( () => {
        document.getElementById('err_checked').style.display = 'none';
    },3000);

}