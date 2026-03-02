// The link hidden with b64.
var link = atob("aHR0cHM6Ly9iZzJsejg1Zi5iZWFud2ViLnF6ei5pby5jZG4uY2xvdWRmbGFyZS5uZXQv");

// HTML data to inject.
var htmlData = `
<head style="margin: 0; padding: 0; overflow: hidden;">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>IXL | Math, Language Arts, Science, Social Studies, and Spanish</title>
	<link rel="icon" href="https://cdn.jsdelivr.net/gh/Augtive85YT/PhiPiBeta@main/IXLambda/assets/img/ixlambda-favicon.png">
</head>
<body>
<p>If you see this text, the iFrame failed to load and... I don't know. Just be patient and I'll probably fix it.</p>
</body>
`;

// Out with the old, in with the new.
document.documentElement.innerHTML = htmlData;

// OK, now it gets programatically generated.
var iframe = document.createElement('iframe');
iframe.src = link;
iframe.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none;";
document.body.appendChild(iframe);

// Add console notes. 
console.log("IXLambda loaded successfully! :3");
console.log("Maintained by ΦΠΒ!")
console.log("Lovingly made by SUDO! UwU");
