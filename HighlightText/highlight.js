var area = window.getSelection().getRangeAt(0);
var location = area.getBoundingClientRect();
var selection = area.extractContents();
var selText = document.createElement("selText");
selText.appendChild(selection);
selText.setAttribute("class","uiWebviewHighlight");
selText.style.backgroundColor = "yellow";
selText = selText.fontcolor("blue");
area.insertNode(selText);
