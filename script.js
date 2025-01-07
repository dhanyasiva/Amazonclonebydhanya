

const imgs=document.querySelectorAll('.header-slider ul img')
let prev_btn=document.getElementById("prevbtn")
let next_btn=document.getElementById("nxtbtn")

console.log(prev_btn.textContent)

let n=0;   

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

const scrollcontainer=document.querySelectorAll('.products');
for (const i of scrollcontainer) {
    i.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        i.scrollLeft+=evt.deltaY;
    })
    
}
