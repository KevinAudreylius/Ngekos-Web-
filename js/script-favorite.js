if(localStorage.getItem('data') == null) {

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

// Isi List Kos
var favList = [

    {'img': 'kos1.jpg', 'title': 'Kost Apik Binus Melrose', 'loc': 'Palmerah', 'feature': ["K. Mandi Dalam", 'WiFi', 'AC', 'Laundry'], 
        'rating': 5.0, 'availability': 'yes', 'price': '1.800.000,- / bulan'},
    {'img': 'kos2.jpg', 'title': 'Kost Apik Binus Syahdan Tipe C', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC', 'Laundry'], 
        'rating': 5.0, 'availability': 'no', 'price': '1.300.000,- / bulan'},
    {'img': 'kos3.jpg', 'title': 'Kost Rumah Sahabat 3', 'loc': 'Palmerah', 'feature': ['WiFi', 'AC', 'Laundry'], 'rating': 4.5, 
        'availability': 'yes', 'price': '1.500.000,- / bulan'},
    {'img': 'kos4.jpg', 'title': 'Kost Cozy Coliving', 'loc': 'Tanjung Duren', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC', 'Laundry'], 
    'rating': 4.7, 'availability': 'no', 'price': '1.000.000,- / bulan'},
    {'img': 'kos5.jpg', 'title': 'Kost Binus Kemanggisan U Residence 85', 'loc': 'Kemanggisan', 'feature': ['K. Mandi Dalam', 'WiFi', 'AC'], 'rating': 3.9, 
        'availability': 'yes', 'price': '1.200.000,- / bulan'}
]

var htmlStr = ``;

for(var i = 0; i < favList.length; i++) {

    htmlStr += `<a href="kost.html"> <div class="list">
                <div class="kos-img">
                <img src="${favList[i].img}" alt="#" width="100%">
                </div>
                <div class="kos-desc">
                <h3 class="title">${favList[i].title}</h3>
                <p class="location">${favList[i].loc}</p>
                <p class="feature"> 
                <ul class="feature-list">`
    
    for(var j = 0; j < favList[i].feature.length; j++) {
        
        htmlStr += `<li>${favList[i].feature[j]}</li>`
        if(j < favList[i].feature.length - 1) {
            htmlStr += `-`
        }
    }

    htmlStr += `</ul>
                </p>
                <div class="status">
                <div class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                ${favList[i].rating}
                </div>
                <div class="availability ${favList[i].availability}">
                <p>
                </a>`
                
    if(favList[i].availability == 'yes') htmlStr += `Available`;
    else htmlStr += `Full`;

    htmlStr += `</p>
                </div>
                </div>
                <p class="price">
                ${favList[i].price}
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