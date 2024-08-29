function direct(web) {

    window.location.href = web;
}

const myButton = document.getElementById('myButton');
        myButton.addEventListener('click', function() {
        myButton.classList.toggle('clicked');
        });

        const myButton2 = document.getElementById('myButton2');
        myButton2.addEventListener('click', function() {
        myButton2.classList.toggle('clicked');
    });
    
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