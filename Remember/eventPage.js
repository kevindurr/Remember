var contextMenuItem = {
    "id": "rememberThis",
    "title": "Remember",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem)

// chrome.contextMenus.onClicked.addListener(function(clickData){
//     if (clickData.menuItemId == "rememberThis" && clickData.selectionText){
//         chrome.storage.sync.get([], function(){
            
//         })
//     }
// })