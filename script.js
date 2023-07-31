const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const CountValue = document.querySelector(".count-value");
let taskCount=0; 

const displayCount = (taskCount)=>{
    CountValue.innerText = taskCount;
    saveData();
    
}

function addTask(){
    if(inputBox.value=== '')
    {
        alert("you must add some activity first then click on ADD!");
        
        
    }
    else{
        let li = document.createElement("li");//this is creating a list of elements of activities that are being enetered
        li.innerHTML = inputBox.value;// it is storing the activities that are being entered inside the text box
        listContainer.appendChild(li);// it is displaying the activity of the list under list container
        let span = document.createElement("span");// creates a span tag for an added activity
        span.innerHTML = "\u00d7";//will provide a cross alongside the added activity
        li.appendChild(span);//will display the added activity
        taskCount+=1;// it will increment the task counter
        displayCount(taskCount);
        saveData();
    }
    inputBox.value = "";//inputbox value for every new entry will be null
    saveData();// data saved everytime a new task is added
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");// will check the box if activity is present in LI
        
        
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();// will remove the activity if it is already there in the list container and checked
        if(taskCount>=0){
            taskCount-=1;
            }
        else{
             taskCount=0;
            }
        displayCount(taskCount);
        saveData();// data deleted everytime on deleting a task from the list
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("count",CountValue.innerText);
}
//it will call every time this function whenever a new activity task is being created

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    CountValue.innerText = localStorage.getItem("count");
}
showTask(); // it will show the saved data 