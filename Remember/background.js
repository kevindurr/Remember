var background = {
    cell: "",

    init: function(){
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            if (request.fn in background) {
                background[request.fn](request,sender,sendResponse);
            }            
        });
    },

    setCell: function(request,sender,sendResponse) {
        console.log("setting cell", request.cell);
        this.cell = request.cell;
        theurl = "http://127.0.0.1:5000/input?q="
        theurl += this.cell
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
    getCell: function(request, sender, sendResponse){
        sendResponse(this.cell);
    }
};

background.init();

