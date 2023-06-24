const inputBox= document.getElementById("input-text");
const listContainer= document.getElementById("list-container");
let count=0;

function taskAdd(){
    if(inputBox.value === '')
        alert("Kucch to Add Karo Yaar!");
    else{
        
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        count++;
    }
    
    inputBox.value='';
    keepDataInBrowser();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        keepDataInBrowser();
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        keepDataInBrowser();
    }
},false);

function keepDataInBrowser(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showDataOnReopening(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showDataOnReopening();
