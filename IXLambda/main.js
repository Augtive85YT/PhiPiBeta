// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var links = {
    overcloaked: `figswriu${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    fern: `${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`,
    infamous: `secure-mathclass${atob("LmItY2RuLm5ldC8=")}`,
    space: `planets.is-a.software${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    gnmath: `nowayway${atob("LmItY2RuLm5ldC8=")}`,
    daydreamx: `com${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`
}

// Developer stuff! :3
var bypassUAF = true;
var devTools = false;
var ixlambdaVersion = "v3.BETA.1";

// Stylesheet to be imported.
var htmlStyles = `
<style>
#ixlambda-gui {
    all: revert;
    --ixlm-bg: rgba(49, 50, 68, 0.6);
    --ixlm-header: rgba(30, 30, 46, 0.8); 
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
    --ixlm-blur: 16px;
    --ixlm-font: "JetBrains Mono", monospace;
    
    width: 300px;
    position: fixed;
    top: 100px;
    left: 100px;
    z-index: 9999999999;

    font-family: var(--ixlm-font);
    color: var(--ixlm-text);
}

#ixlambda-header {
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    align-items: center;
    
    padding: 8px;
    background: var(--ixlm-header);
    border-radius: var(--ixlm-radius) var(--ixlm-radius) 0 0;
    backdrop-filter: blur(var(--ixlm-blur));
}

#ixlambda-controls {
    display: flex;
    gap: 12px;
    
    padding: 8px 8px;
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
    padding: 0 10px 10px;
    background: var(--ixlm-bg);
    max-height: 500px;
    transition: max-height 0.3s ease;
    border-radius: 0 0 var(--ixlm-radius) var(--ixlm-radius);
    
    backdrop-filter: blur(var(--ixlm-blur));
}

#ixlambda-content span {
    font-size: 12px;
    display: flex;
    margin: 8px auto;
}

#ixlambda-gui.minimized #ixlambda-content {
    max-height: 0;
}

/*#ixlambda-gui.minimized #ixlambda-header {
    border-radius: var(--ixlm-radius);
    transition: border-radius 0.3s steps(1, end);
}*/

.ixlambda-btn, .ixlambda-selector {
    width: 100%;
    font-size: 14px;
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

#ixlambda-content .ixlambda-description {
    font-size: 14px;
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
<div id="ixlambda-gui">
    ${htmlStyles}
    <link href="https://fonts.googleapis.com/css?family=JetBrains+Mono" rel="stylesheet">
    <div id="ixlambda-header">
        <div class="ixlambda-sidebyside">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" fill="none" width="20" stroke-width="2.5"><path d="m10.852 14.772-.383.923"/><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.148 9.228.383-.923"/><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"/><path d="m14.772 10.852.923-.383"/><path d="m14.772 13.148.923.383"/><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"/><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"/><path d="M6 18h.01"/><path d="M6 6h.01"/><path d="m9.228 10.852-.923-.383"/><path d="m9.228 13.148-.923.383"/></svg>
            <b>IXLambda Loader</b>
        </div>
        <div id="ixlambda-controls">
            <button id="ixlambda-minimize"></button>
            <button id="ixlambda-close"></button>
        </div>
    </div>
    <div id="ixlambda-content">
        <span>Freedom is a universal right.</span>
        <hr>
        <span class="ixlambda-description">Proxy Loader</span>
        <div class="ixlambda-sidebyside">
            <select id="ixlambda-proxy-selector" class="ixlambda-selector">
                <option value="overcloaked">OverCloaked</option>
                <option value="fern">Fern</option>
                <option value="infamous">Infamous</option>
                <option value="space">Space</option>
                <option value="gnmath">GN-Math</option>
                <option value="daydreamx">DayDreamX</option>
            </select>
            <button id="ixlambda-launch" class="ixlambda-btn" style="width: 50%;">Launch</button>
        </div>
        <hr>
        <span class="ixlambda-description">Javascript Loader</span>
        <button id="mstaums-launch" class="ixlambda-btn">MSTaums</button>
        <hr>
        <span style="display: table;">Made by SUDO :3 ${ixlambdaVersion}</span>
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
        if (devTools) { eruda.destroy(); }
        gui.remove();
    });

    // Launch as about:blank.
    function openLink(link) {
        var aboutblank = window.open("about:blank", "_blank");
        if (!aboutblank) {
            alert("Pop-up blocked!");
            return;
        }
        aboutblank.document.write(`
        <title>IXLambda</title>
        ${devTools ? "" : `<script>
            if (window.eruda) { eruda.destroy(); }
            Object.defineProperty(window,"eruda",{set(v){v&&(v.init=()=>{});this._e=v},get(){return this._e}});
        </script>`}
        <style>
            html,body{margin:0;height:100%}
            iframe{position:fixed;width:100%;height:100%;border:none;inset:0;}
        </style>
        <iframe src="${link}"></iframe>`);
        aboutblank.document.close();
    }

    // Loading code.
    document.getElementById("ixlambda-launch").addEventListener("click", () => {
        openLink("https://" + links[document.getElementById("ixlambda-proxy-selector").value]);
    });
    document.getElementById("mstaums-launch").addEventListener("click", () => {
        var script = document.createElement("script");
        script.src = "https://raw-githack-com.translate.goog/MohanIShim47/MSTaums/main/Bookmarklet%20Manager/main.js";
        document.head.appendChild(script);

    });

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
        erudaScript.className = "ixlambda-destroy";
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
    alert("Another instance of IXLambda exists, please use the current instance.")
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
}
