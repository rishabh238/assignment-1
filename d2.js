var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var ashu = 0

btn.addEventListener("click",function(){
    if(ashu==0){
    bulb.style.backgroundColor="yellow";
console.log("clicked");
ashu=1
    }else{
         bulb.style.backgroundColor="transparent";
console.log("Again clicked");
ashu=0
    }

})