
window.addEventListener('scroll',() =>{
    const scrollable =document.documentElement.scrollHeight-window.innerHeight;
    const scrolled = window.scrollY;
    var opacity = scrolled/600
    
    document.getElementById("FirstL").style.position = 'absolute';
    
    console.log(scrolled);
    
    if (scrolled <= 600){
        document.getElementById("FirstL").style.opacity= 1-(opacity)
        document.getElementById("FirstL").style.top=`${20-(scrolled/22)}%`;
    }else if(scrolled >600){
        document.getElementById("FirstL").style.opacity= 0
    }
    
    var navjs = document.getElementById("navjs")
    if (scrolled>=500){
        navjs.className = "navS"
    } else if(150<=scrolled && scrolled<500){
        navjs.className = "navE"
    } else if(scrolled<=100){
        navjs.className = "container-fluid"
    }
    
    
});
function myAlertFunction(){
    this.render = function(dialog){
        var dialogOverlay = document.getElementById('dialogoverlay')
        dialogOverlay.style.top=0
        document.getElementById('finish').innerHTML= dialog
    }
    
}

function hideAlertFunction(){
    document.getElementById('dialogoverlay').style.top=-100+"%"
}   
var Alert = new myAlertFunction()
