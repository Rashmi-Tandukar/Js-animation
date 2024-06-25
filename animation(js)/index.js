const bodyelement=document.querySelector("body")

bodyelement.addEventListener("mousemove",(event)=>{
    const xPosition =event.offsetX;
    const yPosition=event.offsetY;
    const spanelement=document.createElement("span");
    
    spanelement.style.left = xPosition + "px";
    spanelement.style.top = yPosition + "px";
    
    const size=Math.random()*100;
    spanelement.style.width=size+"px";
    spanelement.style.height=size+"px";
    
    
    

    bodyelement.appendChild(spanelement);
    setTimeout(()=>{
        spanelement.remove();
    },3000);

});