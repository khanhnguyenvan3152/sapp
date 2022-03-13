window.onload = function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            alert(position)
        })
    }
    var buttons = document.querySelectorAll('button[role="toggle"]')
    var dropdowns = document.querySelectorAll('.dropdown')
    
    var newPost = document.getElementById("newPost")
    var modal = document.getElementById("modal");
    var close = document.getElementById("close")
    var btnNewPost = document.getElementById("btnNewPost")
    newPost.addEventListener('click',function(e){
        modal.classList.toggle("hidden")
    })
    btnNewPost.addEventListener('click',function(e){
        modal.classList.toggle("hidden")
    })
    close.addEventListener('click',function(e){
        modal.classList.toggle('hidden')
    })
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation()
            dropdowns.forEach(dropdown => {
                if (dropdown.getAttribute('toggle') !== button.getAttribute('data-toggle')) {
                    if (!dropdown.classList.contains('hidden')) dropdown.classList.add('hidden')
                }
                else {
                    dropdown.classList.remove('hidden')
                }
            })
        })
    })
    document.addEventListener('click', function (e) {
        if (!Array.from(dropdowns).includes(e.target)) {
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('hidden') == false) {
                    dropdown.classList.add('hidden')
                }
            })
        }
        if(e.target == modal){
            modal.classList.toggle('hidden')
        }
        if(!e.target.matches('button[role="toggle"]')){
            dropdowns.forEach(dropdown=>{
                if(!dropdown.classList.contains('hidden')){
                    dropdown.classList.add('hidden')
                }
            })
        }
    })
    //Modal
  
    document.querySelector('#emojiPicker').addEventListener('click',function(e){
        e.stopPropagation()
        console.log(e.target)
       document.querySelector('emoji-picker').classList.toggle('hidden')
    })
    document.querySelector('emoji-picker')
    .addEventListener('emoji-click', event =>{ 
        console.log(event.detail)
        document.querySelector('#newPostContent').append(event.detail.emoji.unicode)
    });
}