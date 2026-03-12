// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var link = `${atob("aHR0cHM6Ly8=")}figswriu${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`;

// HTML data to inject.
var htmlData = `
<!DOCTYPE html>
<html>
	<head style="margin: 0; padding: 0; overflow: hidden;">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>IXL | Math, Language Arts, Science, Social Studies, and Spanish</title>
		<link rel="icon" href="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/IXLambda/assets/img/ixlambda-favicon.png">
	</head>
	<body>
		<iframe id="mainIframe" src="${link}" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
		<p>Waiting for load...<br>This is only an issue if it persists, if so, I fix this soon.</p>
	</body>
</html>
`;

// Why are you here I.T. Department? Get out!
var htmlDataIT = `
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
`;

// HTML changing.
var uafBool = /Mac/.test(navigator.userAgent);

if (uafBool) {
	window.location.href = link;
	window.location.reload(true);
}
else {
	document.open();
	document.write(htmlDataIT);
	document.close();
}

// Add silly console notes. 
console.log("IXLambda loaded successfully! :3");
console.log("Maintained by ΦΠΒ's Owner!");
console.log("Lovingly made by SUDO! UwU");

// Reload iFrame because nothing works. :3
document.getElementById("mainIframe").src = link;
