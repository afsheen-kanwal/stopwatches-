var getmin= document.querySelector("#start")
var getsec= document.querySelector("#stop")
var getmsec= document.querySelector("#reset")
   
var jsmin= 0
var jssec= 0 
var jsmsec= 0 
var afsheen;

function start(){  
    if (afsheen !== null) return;

    document.getElementById("start").disabled = true;

    afsheen = setInterval(function(){
        jsmsec++;
        getmsec.innerHTML = jsmsec;

        if(jsmsec >= 100){
            jssec++;
            getsec.innerHTML = jssec;
            jsmsec = 0;
        }

        if (jssec >= 60){
            jsmin++;
            getmin.innerHTML = jsmin;
            jssec = 0;
        }

    }, 10);
}

function stop(){
    clearInterval(afsheen);
    afsheen = null;  // 

    document.getElementById("start").disabled = false;
}



function reset(){
    clearInterval(afsheen);
    afsheen = null;  

    jsmin = 0;
    jssec = 0;
    jsmsec = 0;

    getmin.innerHTML = jsmin;
    getsec.innerHTML = jssec;
    getmsec.innerHTML = jsmsec;

    document.getElementById("start").disabled = false;
}