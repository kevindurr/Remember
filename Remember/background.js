var background = {
    sku: "",

    init: function(){
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            if (request.fn in background) {
                background[request.fn](request,sender,sendResponse);
            }            
        });
    },

    setSku: function(request,sender,sendResponse) {
        console.log("setting sku", request.sku);
        this.sku = request.sku;
        theurl = "http://127.0.0.1:5000/input?q="
        theurl += this.sku
        $.ajax({
            url: theurl,
            success: function(data){
                console.log(theurl);
                alert(data.txt);
            },
            error: function(e){
                alert(e.message);
            }
        });
    },
    getSku: function(request, sender, sendResponse){
        sendResponse(this.sku);
    }
};

background.init();

