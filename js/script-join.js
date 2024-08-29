function direct(web) {

    window.location.href = web;
}

var kostData = [];

document.getElementById('join_form').addEventListener('submit', (e) =>{
    e.preventDefault()
    const foto_kost = document.getElementById('file')
    const nama_kost = document.getElementById('nama_kost').value
    const location = document.getElementById('location').value
    const feature = document.getElementById('feature').value
    const rating = document.getElementById('rating').value
    const availability = document.getElementById('availability').value
    const price = document.getElementById('price').value

    if(nama_kost.length < 8){
        alert('Panjang nama kost minimal 8 karakter')
        return
    }

    if(!location) {
        alert('Lokasi harus diisi')
        return
    }

    if(!feature) {
        alert('Fitur harus diisi')
        return
    }

    if(!isNaN(rating)) {
        alert('Rating harus berisi angka koma')
        return
    }

    if(availability !== 'yes' && availability !== 'no') {
        alert('Availability harus yes atau no')
        return
    }

    if(!isNaN(price)) {
        alert('Harga harus berisi angka')
        return
    }
    
    // kostData.push = [{
    //     img: foto_kost,
    //     nama: nama_kost,
    //     loc: location,
    //     feat: feature,
    //     rate: rating,
    //     avai: availability,
    //     pri: price
    // }]

    kostData.push({
        img: foto_kost,
        nama: nama_kost,
        loc: location,
        feat: feature,
        rate: rating,
        avai: availability,
        pri: price
    })

    localStorage.setItem('kostData', JSON.stringify(kostData))

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