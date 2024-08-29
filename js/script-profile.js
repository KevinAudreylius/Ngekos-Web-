let data;

if(localStorage.getItem("data") != null) {

    data = JSON.parse(localStorage.getItem("data"));

    var namaStr = data[0].depan + ' ' + data[0].belakang;

    document.getElementById('nama-lengkap').innerHTML = namaStr;
    document.getElementById('nama_depan_profile').innerHTML = data[0].depan
    document.getElementById('nama_belakang_profile').innerHTML = data[0].belakang
    document.getElementById('user-email').innerHTML = data[0].emailDat;
    document.getElementById('hp').innerHTML = data[0].noTelp;
    document.getElementById('gend').innerHTML = data[0].gend;
}

else {
    
    window.location.href = 'register.html';
}

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

function logout(web) {

    localStorage.removeItem('data');

    window.location.href = web;
}