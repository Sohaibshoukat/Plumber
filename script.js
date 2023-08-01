for(let i=0; i<=12239; i++)
{
    setTimeout(() => {
        if(i<=2536){
            let a= document.body.getElementsByClassName("counter")[0];
            a.innerHTML=i;
        }
    }, 800);
    
    setTimeout(() => {
        if(i<=6745){
            let a= document.body.getElementsByClassName("counter")[1];
            a.innerHTML=i;
        }
    }, 800);
    setTimeout(() => {
        if(i<=1059){
            let a= document.body.getElementsByClassName("counter")[2];
            a.innerHTML=i;
        }
    }, 800);
    setTimeout(() => {
        if(i<=12239){
            let a= document.body.getElementsByClassName("counter")[3];
            a.innerHTML=i;
        }
    }, 800);
}