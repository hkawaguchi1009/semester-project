// Future Diary

/*
Exchange a diary with my self. Allow a user to type a diary, store data (possibly, somewhere online like a server). After 14 diary stored, start to release their diary. 
Inputs are going to be date, text input, and also images. (Skip images for this milestone) 
*/

/*
To do;
Add additional functions one at a time using branches from Milestone5 on your Github repo.  Check each out to work on them locally and when completed push the code back to the Github repo and merge the feature branch into the Milestone5 branch.  For example, the first feature branch should probably be setting your project up to use a Node.js web server that serves your static pages.  (Follow the example in the book for the Participation Activity 11.3.1.)  Add additional features from there.  See the Milestone5 branch of my Github repo at https://github.com/ssigman/EMS-Drury for more examples.
Modify your app to use a MongoDB database.  The app should be able to read data from the MongoDB database and add new records to the MongoDB database.
*/





function getDiary(){
    var html = "";
    var contents = $("#contents");
    var date = $("#date");
    var title = $("#title");
    var contents = $("contents");
   $.get("/api/diary", function(diary) {
      diary.forEach(function(diary) {
          title.html(diary.title);
         contents.html(diary.contents);
          date.html(diary.date);
      });
   });
}


var $list = $("ul");
   $.get("/api/diary", function(diary) {
      diary.forEach(function(diary) {
         $list.append("<li>" + diary.title + " - " + 
            diary.date + "</li>");
      });
   });



window.onload = function(){
        
    
};
    

