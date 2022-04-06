let a2=document.getElementById("two");
let btn1=document.getElementById("btn");
btn1.addEventListener('click',faktoriyel);

function faktoriyel(){
    let fakt=1;
    let a1=document.getElementById("one");
    
    for(let i=1;i<=a1.value;i++){
        fakt*=i;
    }
    a2.value=fakt;
}

