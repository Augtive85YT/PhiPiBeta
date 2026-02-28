// The Link with a Little Obfuscation
var link = atob("aHR0cHM6Ly9iZzJsejg1Zi5iZWFud2ViLnF6ei5pby5jZG4uY2xvdWRmbGFyZS5uZXQv");

// HTML Data to be Injected
var htmlData = `
<head style="margin: 0; padding: 0; overflow: hidden;">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IXL</title>
</head>
<body>
<iframe id="mainIframe" src="${link}" style="position:fixed; top:0; left:0; width: 100%; height: 100%; border:none;"></iframe>
</body>
`;

// Out with the Old, In with the New
var oldHead = document.head.remove();
var oldBody = document.body.remove();
if (oldHead) { oldHead.remove(); }
if (oldBody) { oldBody.remove(); }
document.documentElement.innerHTML = htmlData;

// Ad Annihilation Handle
document.getElementById("frame").addEventListener("load", () => {
  var iframeDoc = iframe.contentDocument;
  
	// Eradicate Ads Because they Cover the Whole Page ! REMOVE ON OVERCLOAKED FIX !
  var adDiv = doc.getElementById("atContainer-39ac7584bc3f027ef654831229d7a5fc");
  var adScript = doc.document.getElementsByClassName("atScript39ac7584bc3f027ef654831229d7a5fc_0")[0];
  if (adDiv) { adDiv.remove(); }
  if (adScript) { adScript.remove(); }
});

// Add Console Notes 
console.log("IXLambda loaded successfully! :3");
console.log("Lovingly made by SUDO! UwU");
