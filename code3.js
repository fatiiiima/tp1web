document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addToDo").addEventListener("click", addTask);

    function addTask() {
        var nameText = document.getElementById('name').value;
        var contentText = document.getElementById('Content').value;
        var combinedText = nameText + '  :  ' + contentText + " ";
        
        const listContainer = document.getElementById("list-container");    
        
        let div = document.createElement("div");
        div.classList.add("task-box"); 
        
        let li = document.createElement("li");
        li.innerHTML = combinedText;
        
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        
        li.appendChild(span);
        div.appendChild(li); 
        
        listContainer.appendChild(div);
        
        document.getElementById('name').value = "";
        document.getElementById('Content').value = "";
    }

    document.getElementById("list-container").addEventListener("click", function(e) {
        if(e.target.tagName.toLowerCase() === "i") {
            e.target.parentElement.parentElement.parentElement.remove();
        }
    });
});
