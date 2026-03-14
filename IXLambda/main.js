// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var links = {
    overcloaked: `${atob("aHR0cHM6Ly8=")}figswriu${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    fern: `${atob("aHR0cHM6Ly8=")}${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`,
    infamous: `${atob("aHR0cHM6Ly8=")}secure-mathclass${atob("LmItY2RuLm5ldC8=")}`,
    space: `${atob("aHR0cHM6Ly8=")}planets.is-a.software${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    daydreamx: `${atob("aHR0cHM6Ly8=")}com${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`
}

// Developer stuff! :3
var bypassUAF = false;
var devTools = false;
var ixlambdaVersion = "v2.2";

// HTML body data to inject.
var htmlData = `
<link class="ixlambda-destroy" href="https://raw-githack-com.translate.goog/Augtive85YT/PhiPiBeta/main/IXLambda/assets/css/main.css" rel="stylesheet">
<link class="ixlambda-destroy" href="https://fonts.googleapis.com/css?family=JetBrains+Mono" rel="stylesheet">
<div id="ixlambda-gui">
    <div id="ixlambda-header">
        <span><b>IXLambda Loader</b></span>
        <div id="ixlambda-controls">
            <button id="ixlambda-minimize"></button>
            <button id="ixlambda-close"></button>
        </div>
    </div>

    <div id="ixlambda-content">
        <div id="ixlambda-content-inner">
            <div class="ixlambda-sidebyside">
                <select id="ixlambda-selector">
                    <option value="overcloaked">OverCloaked</option>
                    <option value="fern">Fern</option>
                    <option value="infamous">Infamous</option>
                    <option value="space">Space</option>
                    <option value="daydreamx">DayDreamX</option>
                </select>
                <button id="ixlambda-launch" class="ixlambda-btn" style="width: 50%;">Launch</button>
            </div>
            <!--<br>
            <button id="mstaums-launch" class="ixlambda-btn">MSTaums</button>-->
            <hr>
            <span>Made by SUDO :3 ${ixlambdaVersion}</span>
        </div>
    </div>
</div>
`;

// Evil code switching! >:3
var htmlDataIT = `
<!DOCTYPE html>
<html lang="en">
	<head style="margin: 0; padding: 0; overflow: hidden;">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>UwU :3</title>
	</head>
	<body>
		<p>Hello I.T. Department, it is time we talk. You went too far blocking CoolMathGames. We only seek freedom.</p>
		<p>-ΦΠΒ's Owner SUDO :3</p>
	</body>
</html>
`;

// User agent filtration and confirming GUI unexistence.
if ((/Mac/i.test(window.navigator.userAgent) || bypassUAF) && !document.getElementById("ixlambda-gui")) {
    // Confirm page existence.
    if (location.href === "about:blank") { document.location.href = "https://google.com/"; alert("Please re-run the bookmark here."); }

    // Inject HTML.
    document.body.insertAdjacentHTML("beforeend", htmlData);

    // Get GUI elements.
    var gui = document.getElementById("ixlambda-gui");
    var header = document.getElementById("ixlambda-header");
    var content = document.getElementById("ixlambda-content");

    // Minimize and close functions.
    document.getElementById("ixlambda-minimize").addEventListener("click", () => {
        gui.classList.toggle("minimized");
    });
    document.getElementById("ixlambda-close").addEventListener("click", () => {
        document.querySelectorAll(".ixlambda-destroy").forEach(e => e.remove());
        gui.remove();
    });

    // Launch as about:blank.
    function openLink(link) {
        var aboutblank = window.open("about:blank", "_blank");
        if (aboutblank) {
            var iframe = aboutblank.document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            iframe.style.margin = "0";
            iframe.style.padding = "0";
            iframe.src = link;
            aboutblank.document.body.appendChild(iframe);
            aboutblank.document.body.style.margin = "0";
            var title = aboutblank.document.createElement("title");
            title.textContent = "IXL :3";
            aboutblank.document.head.appendChild(title);
        } else {
            alert('Pop-up blocked! Please allow pop-ups in the Safari settings.');
        }
    }

    // Loading code.
    document.getElementById("ixlambda-launch").addEventListener("click", () => {
        openLink(links[document.getElementById("ixlambda-selector").value]);
    });
    //document.getElementById("mstaums-launch").addEventListener("click", () => {
    //    alert("Sorry, my friend is still working on this.");
    //});

    // Movement variables.
    var dragging = false;
    var offsetX = 0;
    var offsetY = 0;

    // Movement logic.
    header.addEventListener("pointerdown", e => {
        dragging = true;
        offsetX = e.clientX - gui.offsetLeft;
        offsetY = e.clientY - gui.offsetTop;
        header.style.cursor = "move";
    });
    document.addEventListener("pointermove", e => {
        if (!dragging) return;
        gui.style.left = (e.clientX - offsetX) + "px";
        gui.style.top = (e.clientY - offsetY) + "px";
    });
    document.addEventListener("pointerup", () => {
        dragging = false;
        header.style.cursor = "";
    });

    // Initialize Eruda dev tools.
    if (devTools) {
        var erudaScript = document.createElement("script");
        erudaScript.src = "https://cdn.jsdelivr.net/npm/eruda";
        erudaScript.onload = e => { eruda.init(); }
        document.head.appendChild(erudaScript);
    }

    // Add silly console notes.
    console.log("%cIXLambda loaded successfully! :3", "color: #74c7ec; font-size: 24px; font-weight: bold;");
    console.log("%cMaintained by ΦΠΒ's Owner!", "color: #89b4fa; font-size: 16px;");
    console.log("%cLovingly made by SUDO! UwU", "color: #f38ba8; font-size: 16px; font-weight: bold;");
} else if (!document.getElementById("ixlambda-gui")) {
    // Eradicate page evily!
    document.open();
    document.write(htmlDataIT);
    document.close();

    // Add evil console notes. >:3
    console.log("%cGet out of the console, you are not slick.", "color: red; font-size: 24px; font-weight: bold;");
    console.log("%cAlso, I am a few steps ahead of you... The original link is encrypted, along with the code being hidden...", "color: #f38ba8; font-size: 16px; font-weight: bold;")
    console.log("%cPlease, just leave us alone...", "color: #eba0ac; font-size: 16px;");
} else {
	// Complain about duplicates.
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
}
