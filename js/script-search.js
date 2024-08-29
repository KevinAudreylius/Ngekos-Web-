function direct(web) {

    window.location.href = web;
}

// Isi List Kos
var list = [

    {'img': 'kos1.jpg', 'title': 'Kost Apik Binus Melrose', 'loc': 'Palmerah', 'feature': ["K. Mandi Dalam", 'WiFi', 'AC', 'Laundry'], 
        'rating': 5.0, 'availability': 'yes', 'price': '1.800.000,- / bulan'},
    {'img': 'kos2.jpg', 'title': 'Kost Apik Binus Syahdan Tipe C', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC', 'Laundry'], 
        'rating': 5.0, 'availability': 'no', 'price': '1.300.000,- / bulan'},
    {'img': 'kos3.jpg', 'title': 'Kost Rumah Sahabat 3', 'loc': 'Palmerah', 'feature': ['WiFi', 'AC', 'Laundry'], 'rating': 4.5, 
        'availability': 'yes', 'price': '1.500.000,- / bulan'},
    {'img': 'kos4.jpg', 'title': 'Kost Cozy Coliving', 'loc': 'Tanjung Duren', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC', 'Laundry'], 
    'rating': 4.7, 'availability': 'no', 'price': '1.000.000,- / bulan'},
    {'img': 'kos5.jpg', 'title': 'Kost Binus Kemanggisan U Residence 85', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC'], 'rating': 3.9, 
        'availability': 'yes', 'price': '1.200.000,- / bulan'},
    {'img': 'kos6.jpg', 'title': 'Kost Cozy Coliving Binus 1 Tipe Eco Palmerah Jakarta Barat', 'loc': 'Pal Merah', 'feature': ['Kloset duduk', 'Kasur', 'Akses 24 Jam'], 'rating': 4.2, 
        'availability': 'yes', 'price': '2.000.000,- / bulan'},
    {'img': 'kos7.jpg', 'title': 'Kost Puri Amalia Tipe A Plus Palmerah Jakarta Barat', 'loc': 'Pal Merah', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC','Akses 24 Jam'], 'rating': 5.0, 
        'availability': 'yes', 'price': '2.250.000,- / bulan'},
    {'img': 'kos8.jpg', 'title': 'Kost Selalu Bahagia Binus Anggrek Tipe A Kebon Jeruk', 'loc': 'Kebon Jeruk', 'feature': ['WiFi', 'Akses 24 Jam','Kasur'], 'rating': 5.0, 
        'availability': 'yes', 'price': '1.400.000,- / bulan'},
    {'img': 'kos9.jpg', 'title': 'Kost Apik BINUS Syahdan Tipe A Pal Merah ', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC', 'Akses 24 Jam'], 'rating': 4.4, 
        'availability': 'yes', 'price': '1.615.000,- / bulan'},
    {'img': 'kos10.jpg', 'title': 'Kost Singgahsini Coteca BINUS Anggrek Tipe A', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC'], 'rating': 4.5, 
        'availability': 'yes', 'price': '1.820.000,- / bulan'}
]

var htmlStr = ``;

for(var i = 0; i < list.length; i++) {

    htmlStr += `<a href="kost.html"> <div class="list">
                <div class="kos-img">
                <img src="${list[i].img}" alt="#" width="100%">
                </div>
                <div class="kos-desc">
                <h3 class="title">${list[i].title}</h3>
                <p class="location">${list[i].loc}</p>
                <p class="feature"> 
                <ul class="feature-list">`
    
    for(var j = 0; j < list[i].feature.length; j++) {
        
        htmlStr += `<li>${list[i].feature[j]}</li>`
        if(j < list[i].feature.length - 1) {
            htmlStr += `-`
        }
    }

    htmlStr += `</ul>
                </p>
                <div class="status">`

    htmlStr += `</div>
                <p class="price">
                ${list[i].price}
                </p>
                </div>
                </div>`
}

document.getElementById('list-cont').innerHTML = htmlStr;

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.list');
    let l = document.getElementsByTagName('h3');

    for(var i = 0; i <= l.length; i++){
        let a = item[i].getElementsByTagName('h3')[0];

        let value = a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display="";
        }else {
            item[i].style.display = "none";
        }
    }
}

var kostListElement = document.getElementById('list-cont')
var copyKostList = list.slice()

let kostData = JSON.parse(localStorage.getItem("kostData"))
let kostDataNew  = ``

for(var i = 0; i < kostData.length; i++) {

    kostDataNew += `<a href="kost.html"> <div class="list">
                <div class="kos-img">
                <img src="${kostData[i].img}" alt="#" width="100%">
                </div>
                <div class="kos-desc">
                <h3 class="title">${kostData[i].nama}</h3>
                <p class="location">${kostData[i].loc}</p>
                <p class="feature"> 
                <ul class="feature-kostData">
                <li>${kostData[i].feat[j]}</li>`

    htmlStr += `</ul>
                </p>
                <div class="status">`

    htmlStr += `</div>
                <p class="price">
                ${kostData[i].pri}
                </p>
                </div>
                </div>`
}

document.getElementById('list-cont-new').innerHTML = kostDataNew;


/*
function addKost() {
    if(localStorage.getItem("kostData") != null) {
        kostData = JSON.parse(localStorage.getItem("kostData"))
        console.log(kostData)
        list[list.length+1].img = kostData[0].img
        list[list.length+1].title = kostData[0].nama 
        list[list.length+1].loc = kostData[0].loc 
        list[list.length+1].feature = kostData[0].feat
        list[list.length+1].rating = kostData[0].rate
        list[list.length+1].availability = kostData[0].avai
        list[list.length+1].price = kostData[0].pri
    }

}
*/





function back() {
    window.history.go(-2)
}