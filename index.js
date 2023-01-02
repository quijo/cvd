// const menu = document.getElementById('menu')


// menu.addEventListener("click", function(myMenu){
//  myMenu.style.display = "block";
// })

const links =document.getElementById('links')
const menuBtn = document.getElementById('menu')

menuBtn.addEventListener('click', function(){
    if (menuBtn.innerHTML === 'x'){
        menuBtn.innerHTML = "menu"
    }else{
        menuBtn.innerHTML="x"
    }

    links.classList.toggle("active")
   
})




// element.classList.toggle("mystyle")