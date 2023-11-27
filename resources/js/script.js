//Menu Toggle
let Menu = document.querySelector('#menu')

Menu.style.maxHeight = "0px"

function menutoggle(){
    if(Menu.style.maxHeight === "0px"){
        Menu.style.maxHeight = "200px"
    }else{
        Menu.style.maxHeight = "0px"
    }

}

//Slide in Animation


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            observer.unobserve(entry)
        }
        // }else{
        //     entry.target.classList.remove('show')
        // }
    })  
})

const sections = document.querySelectorAll('.hidden')
sections.forEach((section) => observer.observe(section))





