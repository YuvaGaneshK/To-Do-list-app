const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// to add new taks
function addtask() {
    if (inputBox.value === ''){
        alert("Add Task ");
    }
    else
    {
       let li =document.createElement("li");
       li.innerHTML=inputBox.value;
       listcontainer.appendChild(li);
       let span=document.createElement("span");
       span.innerHTML=" x ";
       li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}   
// to add the indicator of task done and remove the completed task
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

},false);
//  to saveafter refreshing
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
showtask();
