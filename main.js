 let bar1=document.getElementById('bar1');
const close=document.getElementById('close');
const nav =document.getElementById('navbar');
 if(bar1){
    bar1.addEventListener('click',() =>{
        nav.classList.add('active');
    })
 }
 if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
        
    })
 }