var console = chrome.extension.getBackgroundPage().console;

var app = {
    init: function(){    
        var sku = document.getElementById("sku");
        var skuInput = document.getElementById("useSku");

        chrome.runtime.sendMessage({fn: "getSku"}, function(response){
            sku.value = response;
            // console.log("popup got response", response);
        });

        skuInput.addEventListener("click", function(){
            chrome.runtime.sendMessage({fn: "setSku", sku: sku.value}); 
        });

    }
};
document.addEventListener("DOMContentLoaded", function(){
    app.init();
});