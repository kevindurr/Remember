var background = {
    cell: "",

    init: function(){
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            if (request.fn in background) {
                background[request.fn](request,sender,sendResponse);
            }            
        });
        var contextMenuItem = {
            "id": "rememberThis",
            "title": "Remember",
            "contexts": ["selection"]
        };
        
        chrome.contextMenus.create(contextMenuItem);
        chrome.contextMenus.onClicked.addListener(function(clickData){
            if (clickData.menuItemId == "rememberThis" && clickData.selectionText){
                theurl = "http://127.0.0.1:5000/input?q="
                theurl += clickData.selectionText
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
                    // console.log(clickData.selectionText);
            }
        })
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

