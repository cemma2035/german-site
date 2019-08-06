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
    const remenber = document.getElementById('checked').checked;

    console.log(token, dob, address, state, lga, pob, phone, gender, level, occupation, nationality, m_status, remenber)

    if (remenber.checked){
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
            if(data.message){
                localStorage.setItem('user_address', data.data.address);
                localStorage.setItem('user_lga', data.data.lga);
                localStorage.setItem('user_state',  data.data.state);
                localStorage.setItem('user_dob', data.data.dob);
                localStorage.setItem('user_phone', data.data.phone);
                localStorage.setItem('user_ocupation', data.data.occupation);
                localStorage.setItem('user_level', data.data.level);
                localStorage.setItem('user_pob',  data.data.pob);
                localStorage.setItem('user_nationality', data.data.nationality);
                localStorage.setItem('user_gender', data.data.gender);
                localStorage.setItem('user_m_status', data.data.marital_status);
                localStorage.setItem('user_image', data.data.avater);
                localStorage.setItem('user_email', data.data.email);
                localStorage.setItem('user_name', data.data.full_name);
                window.location.replace('dashboard.html')
            }
            
            setTimeout( () => {
            },3000);
            console.log(data)
        }).catch(err => console.log(err));
    }else{
        document.getElementById('err_checked').innerText;
        document.getElementById('err_checked').style.display = 'block';
    }setTimeout( () => {
        document.getElementById('err_checked').style.display = 'none';
    },3000);
}