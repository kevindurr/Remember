var console = chrome.extension.getBackgroundPage().console;

var app = {
    init: function(){    
        var cell = document.getElementById("cell");
        var cellInput = document.getElementById("useCell");

        chrome.runtime.sendMessage({fn: "getCell"}, function(response){
            cell.value = response;
            // console.log("popup got response", response);
        });

        cellInput.addEventListener("click", function(){
            chrome.runtime.sendMessage({fn: "setCell", cell: cell.value}); 
        });

    }
};
document.addEventListener("DOMContentLoaded", function(){
    app.init();
});