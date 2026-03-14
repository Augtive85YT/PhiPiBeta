// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var links = {
    overcloaked: `${atob("aHR0cHM6Ly8=")}figswriu${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    fern: `${atob("aHR0cHM6Ly8=")}${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`,
    infamous: `${atob("aHR0cHM6Ly8=")}secure-mathclass${atob("LmItY2RuLm5ldC8=")}`,
    space: `${atob("aHR0cHM6Ly8=")}planets.is-a.software${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    daydreamx: `${atob("aHR0cHM6Ly8=")}com${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`
}

// Developer stuff! :3
var bypassUAF = true;
var devTools = false;
var ixlambdaVersion = "v2.1.3";

// Stylesheet to be imported.
var htmlStyles = `
<style>
:root {
    --ixlm-bg: #313244;
    --ixlm-header: #1e1e2e;
    --ixlm-control-bg: #181825;
    --ixlm-text: #cdd6f4;
    --ixlm-accent: #89b4fa;
    --ixlm-accent-hover: #b4befe;
    --ixlm-btn-text: #11111b;
    --ixlm-border: #6c7086;

    --ixlm-min: #f9e2af;
    --ixlm-min-active: #a6e3a1;
    --ixlm-close: #f38ba8;

    --ixlm-radius: 6px;
    --ixlm-font: "JetBrains Mono", monospace;
}

#ixlambda-gui {
    width: 250px;
    position: fixed;
    top: 100px;
    left: 100px;
    z-index: 9999999999;

    font-family: var(--ixlm-font);
    color: var(--ixlm-text);
    background: var(--ixlm-bg);
    border-radius: var(--ixlm-radius);
}

#ixlambda-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    background: var(--ixlm-header);
    border-radius: var(--ixlm-radius) var(--ixlm-radius) 0 0;
}

#ixlambda-controls {
    display: flex;
    gap: 8px;

    padding: 8px 12px;
    border-radius: 100px;
    background: var(--ixlm-control-bg);
}

#ixlambda-header button {
    width: 12px;
    height: 12px;

    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    transition: filter 0.3s, background 0.3s;
}

#ixlambda-header button:hover {
    filter: brightness(0.8);
}

#ixlambda-minimize { background: var(--ixlm-min); }
#ixlambda-close { background: var(--ixlm-close); }

#ixlambda-gui.minimized #ixlambda-minimize {
    background: var(--ixlm-min-active);
}

#ixlambda-content {
    overflow: hidden;
    max-height: 500px;
    transition: max-height 0.3s ease;
}

#ixlambda-content-inner {
    padding: 0 10px 10px;
}

#ixlambda-content-inner span {
    font-size: 12px;
    display: table;
    margin: 8px auto;
}

#ixlambda-gui.minimized #ixlambda-content {
    max-height: 0;
}

#ixlambda-gui.minimized #ixlambda-header {
    border-radius: var(--ixlm-radius);
    transition: border-radius 0.3s steps(1, end);
}

.ixlambda-btn, #ixlambda-selector {
    width: 100%;
    margin-top: 8px;
    padding: 10px;

    font-family: var(--ixlm-font);
    border: none;
    border-radius: var(--ixlm-radius);
    cursor: pointer;

    background: var(--ixlm-accent);
    color: var(--ixlm-btn-text);
}

.ixlambda-btn {
    transition: background 0.2s, transform 0.1s;
}

.ixlambda-btn:hover {
    background: var(--ixlm-accent-hover);
}

.ixlambda-btn:active {
    transform: translateY(1px);
}

.ixlambda-sidebyside {
    display: flex;
    gap: 6px;
}

#ixlambda-gui hr {
    width: 100%;
    height: 2px;
    margin: 8px 0;

    border: none;
    border-top: 1px solid var(--ixlm-border);
}
</style>
`;

// HTML body data to inject.
var htmlData = `
${htmlStyles}
<link style="ixlambda-destroy" href="https://fonts.googleapis.com/css?family=JetBrains+Mono" rel="stylesheet">
<div id="ixlambda-gui">
    <div id="ixlambda-header">
        <div class="ixlambda-sidebyside">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" fill="none" width="16" height="16" stroke-width="2.5"><path d="M17 2v6"></path><path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15"></path><path d="M17 4h2"></path><path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><circle cx="17" cy="10" r="2"></circle></svg>
            <b>IXLambda Loader</b>
        </div>
        <div id="ixlambda-controls">
            <button id="ixlambda-minimize"></button>
            <button id="ixlambda-close"></button>
        </div>
    </div>
    <div id="ixlambda-content">
        <div id="ixlambda-content-inner">
            <span>Freedom is a universal right.</span>
            <hr>
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
