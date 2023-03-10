var myNodeList=document.getElementByTagName("li");
var i;
for(i=0;i < myNodeList.lenght; i++){
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild=(txt);
    myNodeList[i].appendChild(span);

}

var span =document.getElementsByClassName("close");
var i;
for(i=0;i < close.length; i++){

    close [i].onclick =function(){
     var div = this.parentElement;
     div.style.display = "none"
    }
}

var list = document.querySelector("ul");
list.addEventListener




