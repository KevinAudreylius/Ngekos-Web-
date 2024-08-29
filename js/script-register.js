var data;

// if(localStorage.getItem("data") != null) data = JSON.parse(localStorage.getItem("data"))

document.getElementById('registerContent').addEventListener('submit',(e)=> {
    e.preventDefault()

    const nama_depan = document.getElementById('nama_depan').value
    const nama_belakang = document.getElementById('nama_belakang').value
    const email = document.getElementById('email').value
    const nomor_telepon = document.getElementById('nomor_telepon').value
    const password = document.getElementById('password').value
    const repassword = document.getElementById('repassword').value
    const pria = document.getElementById('pria').checked
    const wanita = document.getElementById('wanita').checked
    var gender = 'false'

    if(nama_depan.length < 3) {
        alert('Nama depan setidaknya 3 huruf')
        return
    }

    if(!nama_belakang) {
        alert("Isi '-' jika tidak ada nama belakang")
        return
    }

    if(!email.endsWith('@gmail.com')) {
        alert('Email harus diakhiri @gmail.com')
        return
    }

    for(let i = 0; i < nomor_telepon.length; i++) {
        if(isNaN(nomor_telepon[i])) {
            alert('Nomor telepon harus angka')
            return
        }
    }

    if(!nomor_telepon){
        alert('Nomor telepon tidak boleh kosong')
        return
    }

    if(nomor_telepon.length < 10) {
        alert('Panjang nomor telepon setidaknya 10 angka')
        return
    }

    if(!wanita && !pria) {
        alert('Harus pilih Pria atau Wanita')
        return
    }

    if(password.length < 8){
        alert('Panjang password setidaknya 8 karakter')
        return
    }

    if(!password || !repassword) {
        alert('Password harus diisi')
        return
    }

    if(password !== repassword) {
        alert('Password salah')
        return
    }

    if(pria == true) gender = 'Pria'
    else if(wanita == true) gender = 'Wanita'

    data = [{
        depan: nama_depan, 
        belakang: nama_belakang, 
        emailDat: email, 
        noTelp: nomor_telepon,
        gend: gender
    }]

    localStorage.removeItem('data')
    localStorage.setItem('data', JSON.stringify(data));

    window.location.href = 'home.html'
})

function menuFunction() {

    var menuStatus = document.getElementById('menu-item')

    if(!(menuStatus.classList.contains("active"))) {

        // document.getElementById('menu-item').innerHTML = 'yes'
        menuStatus.classList.add("active")
    }

    else if(menuStatus.classList.contains("active")) {

        menuStatus.classList.remove("active")
    }
}

function direct(web) {

    window.location.href = web;
}