// let accordionElements = document.querySelectorAll('.accordion-content')


// accordionElements.forEach(function(item){
//     const header = item.querySelector('header')
//     header.addEventListener('click',function(){
//         item.classList.toggle('open')
//         const  description = item.querySelector('.description')
        
        
//         if(item.classList.contains('open')){
//             description.style.height = `${description.scrollHeight}px`
//         }
//         else{
//             description.style.height = '0px' 
//         }
        
        
//         console.log(description);
//     })
// });



const btn = document.querySelector('.btn')
btn.addEventListener('click',function(e){
    e.target.classList.add('animat')
    
    setTimeout(function(){
        e.target.classList.remove('animat')
    },500)
})
