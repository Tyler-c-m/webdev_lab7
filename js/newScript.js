function init(){



// add your javascript code below
// Create a variable to store button object content
    var object = document.getElementById("entrybutton");


    // Create a function for the addEventListener (myFunction) {
    function myFunction() {


    // Create a variable to store what the user types into the textbox
        var textbox = document.getElementById("entryinput");
    // Display in the alert box as your new message.  Watch video.
        alert("Tyler Madourie: " + textbox.value);
        
    // change the value of the h2 below the button to have the text contents of 
    // the textbox
        var h2 = document.getElementById("textoutput");
        h2.textContent = textbox.value;
        }

     object.addEventListener("click", myFunction);
    }
window.addEventListener('load', init);
