let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

let right_mover = ()=>{
    l = l + movePer;
    if (product == 1) {l = 0}
    for(const i of product){
        if(l > maxMove) {l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
}

let left_mover = ()=>{
    l = l - movePer;
    if (l <= 0) {l = 0}
    for(const i of product){
        if (product_page > 1)
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}

function direct(web) {

    window.location.href = web;
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