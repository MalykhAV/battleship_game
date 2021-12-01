var view = {
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
        var cell = document.getElementById(location); //using id we created for the playe's guess to get the correctelement to update
        cell.setAttribute("class", "hit");//we setting the class of that element to "hit"
       
    },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};