// The link hidden with b64.
var link = atob("aHR0cHM6Ly9iZzJsejg1Zi5iZWFud2ViLnF6ei5pby5jZG4uY2xvdWRmbGFyZS5uZXQv");

// HTML data to inject.
var htmlData = `
<!DOCTYPE html>
<html>
	<head style="margin: 0; padding: 0; overflow: hidden;">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>IXL | Math, Language Arts, Science, Social Studies, and Spanish</title>
		<link rel="icon" href="https://cdn.jsdelivr.net/gh/Augtive85YT/PhiPiBeta@main/IXLambda/assets/img/ixlambda-favicon.png">
	</head>
	<body>
		<iframe id="mainIframe" src="${link}" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
		<p>If you see this text, the iFrame failed to load or you are in the loading phase.<br>This is only an issue if it persists. I will possibly fix this soon.</p>
	</body>
</html>
`;

// Eradicate entire page for funzies!
document.open(); 
document.write(htmlData);
document.close();

// Add console notes. 
console.log("IXLambda loaded successfully! :3");
console.log("Maintained by ΦΠΒ!")
console.log("Lovingly made by SUDO! UwU");

// Reload iFrame or something. I don't know anymore. 😭
document.getElementById("mainIframe").src = `${link}?cb=${Date.now()}`;
