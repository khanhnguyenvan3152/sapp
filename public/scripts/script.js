var buttons = document.querySelectorAll('button[role="toggle"]')
var dropdowns = document.querySelectorAll('.dropdown')
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        e.stopPropagation()
        console.log(dropdowns)
        dropdowns.forEach(dropdown=>{
            if(dropdown.getAttribute('toggle')!==button.getAttribute('data-toggle')){
                if(!dropdown.classList.contains('hidden')) dropdown.classList.add('hidden')
            }
            else{
                dropdown.classList.remove('hidden')
            }
        })
    })
})
document.addEventListener('click',function(e){
    if(e.target.classList.contains('button')==false){
        dropdowns.forEach(dropdown=>{
            if(dropdown.classList.contains('hidden')==false){
                dropdown.classList.add('hidden')
            }
        })
    }
})