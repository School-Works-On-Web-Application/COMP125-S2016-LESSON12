/**
 * FileName: app.js
 * 
 * @author Christopher Ritchil 
 * @date August 12, 2016
 * 
 * StudentID: 300702644
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    
    function setActivePage() {
        switch (document.title) {
            case "Home":
                document.getElementById("index").setAttribute("class", "active");
                break;
            case "About Me":
                document.getElementById("about").setAttribute("class", "active");
                break;
            case "Projects":
                document.getElementById("projects").setAttribute("class", "active");
                break;
            case "Contact Me":
                document.getElementById("contact").setAttribute("class", "active");
                break;
        }
    }


    function loadNavBar() {
        $("#mainNav").load("Partials/navbar.html", function () {
            $("#projects").replaceWith("<li id='gallery'><a href='gallery.html'><i class='fa fa-picture-o fa-lg'></i> Gallery</a></li>");
            setActivePage();
        });
    }

    function loadFooter(){
        $("#footer").load("Partials/footer.html",function(){
            var year = document.getElementById("year");
            var date = new Date();
            year.innerText = date.getFullYear();
        })
    }

    function readAddressBook(){
        $.getJSON("Scripts/addressbook.json",
        function(data){
            var addressbook = data;
            var contacts = addressbook.contacts;

            $.each(contacts,function(contact){
                console.log(contacts[contact]);
            })
        })
    }

    // app entry function
    function init() {
        loadNavBar();
        readAddressBook();
        loadFooter();


    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();