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

Add additional functions one at a time using branches from Milestone5 on your Github repo.  Check each out to work on them locally and when completed push the code back to the Github repo and merge the feature branch into the Milestone5 branch.  For example, the first feature branch should probably be setting your project up to use a Node.js web server that serves your static pages.  (Follow the example in the book for the Participation Activity 11.3.1.)  Add additional features from there.  See the Milestone5 branch of my Github repo at https://github.com/ssigman/EMS-Drury for more examples.
Modify your app to use a MongoDB database.  The app should be able to read data from the MongoDB database and add new records to the MongoDB database.
*/

/*$(document).ready(function() {
    $("#myModal .btn-default").click(function() {
       $("#noAlert").show();
    });
});

$(document).ready(function() {
    $("#myModal .btn-primary").click(function() {
       $("#yesAlert").show();
    });
});
*/

function validate() {
    var date = $("#date").val();
    var title = $("#title");
    var contents = $("#contents");
    
    if (date == ""){
        var dateCSS = $("#date");
        dateCSS.css("backgroundColor","Orange");
        event.preventDefault();
    }
    if ($(title).val() == ""){
        $(title).css("backgroundColor","Orange");
        event.preventDefault();
    }
    if ($(contents).val() == ""){
        $(contents).css("backgroundColor","Orange");
        event.preventDefault();
    }
}



function send(){var widget = $("#formWidget");
    var send = $("#send");
    validate();
    var diary = {
        date: $("#date").val(),
        title: $("#title").val(),
        contents: $("#contents").val()
    };
    
    $.ajax({
        type: "POST",
        url: "/api/diary",
        data: JSON.stringify(diary),
        contentType: "application/json"
    }).done(function(data) {
        console.log(data);
        // Reset the form after saving the song
        $("form").trigger("reset");
    }).fail(function(jqXHR) {
        console.log("The diary could not be added.");
    });
          }

window.onload = function(){
    $("#send").click(send);
};
    

    


/*var getWidget = document.getElementById("formGet");
    var page2 = "";
    page2 += "<form id = 'formGet' method = 'GET' action = 'http://mcs.drury.edu/ssigman/process.php'>"
    page2 += "<input type = 'text' id = 'title' name = 'title' class = 'input'>"
    page2 += "<input input type = 'text' id = 'title' name = 'title' class = 'input'>"
    page2 += "<textarea id = 'contents' name = 'contents' class = 'input'></textarea>"
    page2 += "</form>"
    page2 += getWidget;
    document.getElementById("page2");*/
