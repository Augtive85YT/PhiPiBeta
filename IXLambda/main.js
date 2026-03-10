// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var link = atob("aHR0cHM6Ly8yeW1tYWxhdi5iZWFud2ViLnF6ei5pby5jZG4uY2xvdWRmbGFyZS5uZXQv");

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
		<p>Waiting for load...<br>This is only an issue if it persists, if so, I fix this soon.</p>
	</body>
</html>
`;

// Why are you here I.T. Department? Get out!
var htmlDataBad = `
<!DOCTYPE html>
<html>
	<head style="margin: 0; padding: 0; overflow: hidden;">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>GET OUT!</title>
		<script>console.log("Get out of the console, you are not slick.");</script>
	</head>
	<body>
		<p>Hello I.T. Department, it is time we have a chat. You went too far blocking CoolMathGames. We only seek freedom.</p>
		<p>-ΦΠΒ's Owner SUDO UwU</p>
	</body>
</html>
`

// Eradicate entire page because I'm silly!
document.open(); 
document.write(navigator.platform.startsWith("Mac") ? htmlData : htmlDataBad);
document.close();
	
// Add silly console notes. 
console.log("IXLambda loaded successfully! :3");
console.log("Maintained by ΦΠΒ's Owner!")
console.log("Lovingly made by SUDO! UwU");
