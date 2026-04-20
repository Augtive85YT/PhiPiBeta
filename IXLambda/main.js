if (navigator.userAgent.match(/Mac/i)) {
	const result = prompt(
		`Select a Website (Type Number):\n	OverCloaked: 1\n	Fern: 2\n	Infamous: 3\n	DogeUB: 4\n	Space: 5
		`
	);
	function openLink(link) {
        const linkHtmlData = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>IXLambda</title>
            <style>
              body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
              iframe { width: 100vw; height: 100vh; border: none; }
            </style>
          </head>
          <body>
            <iframe src="${link}"></iframe>
          </body>
        </html>`;
        const newTab = window.open(URL.createObjectURL(new Blob([linkHtmlData], { type: "text/html" })), "_blank");
    }
	switch (result) {
		case "1":
			openLink("https://s3.amazonaws.com/elliotslinks-tnjavxyp/grade21246/index.html");
		case "2":
    		openLink("https://s3.amazonaws.com/deaganfern/index.html");
		case "3":
    		openLink("https://freshgrid9000.b-cdn.net");
		case "4":
    		openLink("https://s3.amazonaws.com/educationate/index.html");
		case "5":
    		openLink("https://space-night.b-cdn.net");
		default:
			alert("Type a number?")
	}
} else {
	alert("Sorry, I simplified my code, so computer access is broken I guess.");
}
