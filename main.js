// The link hidden with b64.
var link = atob("aHR0cHM6Ly9iZzJsejg1Zi5iZWFud2ViLnF6ei5pby5jZG4uY2xvdWRmbGFyZS5uZXQv");

// HTML data to inject.
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

// Out with the old, in with the new.
var oldHead = document.head.remove();
var oldBody = document.body.remove();
if (oldHead) { oldHead.remove(); }
if (oldBody) { oldBody.remove(); }
document.documentElement.innerHTML = htmlData;

// Link iFrame editor.
document.getElementById("mainIframe").addEventListener("load", () => {
  var doc = document.getElementById("mainIframe").contentDocument;
  
  // Nothing right now.
});

// Add console notes. 
console.log("IXLambda loaded successfully! :3");
console.log("Lovingly made by SUDO! UwU");
