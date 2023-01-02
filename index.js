// const menu = document.getElementById('menu')


// menu.addEventListener("click", function(myMenu){
//  myMenu.style.display = "block";
// })

const links =document.getElementById('links')
const menuBtn = document.getElementById('menu')

menuBtn.addEventListener('click', function(){
    if (menuBtn.innerHTML === 'X'){
        menuBtn.innerHTML = "O"
    }else{
        menuBtn.innerHTML="X"
    }

    links.classList.toggle("active")
   
})




// element.classList.toggle("mystyle")