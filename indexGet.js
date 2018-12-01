// Future Diary

/*
Exchange a diary with my self. Allow a user to type a diary, store data (possibly, somewhere online like a server). After 14 diary stored, start to release their diary. 
Inputs are going to be date, text input, and also images. (Skip images for this milestone) 
*/

/*
To do;
Use responsive design.
Layout the design of you pages using the Bootstrap grid system to provide for layout on a desktop unit >= 992 p,  768 px <= tablet < 992 px, and phones < 768.
Must use at least 1 bootstrap UI component. (See https://getbootstrap.com/docs/4.1/components/alerts/) for examples.)
Navigate between each page. (Easiest way is to use Bootstrap.)
Use jQuery to validate your data.
Post your data to http://mcs.drury.edu so that you can verify your data input form works.
Use jQuery to hard code your initial example data on summary pages.
When finished merge milestone 4 into the development branch of your repo. Do not delete the Milestone 4 branch.
Merge the development branch into your master branch.  Do not delete the development branch.
*/


function validate(event){
    var date = document.getElementById("date");
    var title = document.getElementById("title");
    var contents = document.getElementById("contents");
    if (date.value == ""){
        date.style.backgroundColor = "Orange";
        event.preventDefault();
    }
    if (title.value.length<=0){
        title.style.backgroundColor = "Orange";
        event.preventDefault();
    }
    if (contents.value.length<=0){
        contents.style.backgroundColor = "Orange";
        event.preventDefault();
    }
}

function getAjax(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://mcs.drury.edu");
    xhr.responseType = 'json';
    xhr.send();
}

/*function getData(response){
    var response = response;
    var date = response.date
    var title = response.title;
    var contents = response.contents;
    var page2 = "";
    page2 += date;
    page2 += title;
    page2 += contents;
    document.getElementById("page1") = page2.innerHTML;
}*/

window.onload = function(){
    var widget = document.getElementById("formWidget");
    
    var xhr = new XMLHttpRequest(); 
    
    xhr.onload = function(){
        
    getAjax();
};
    
}

/*var getWidget = document.getElementById("formGet");
    var page2 = "";
    page2 += "<form id = 'formGet' method = 'GET' action = 'http://mcs.drury.edu/ssigman/process.php'>"
    page2 += "<input type = 'text' id = 'title' name = 'title' class = 'input'>"
    page2 += "<input input type = 'text' id = 'title' name = 'title' class = 'input'>"
    page2 += "<textarea id = 'contents' name = 'contents' class = 'input'></textarea>"
    page2 += "</form>"
    page2 += getWidget;
    document.getElementById("page2");*/