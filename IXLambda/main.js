// Suffixes
// .cdn.cloudflare.net/ > ${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}
// .beanweb.qzz.io.cdn.cloudflare.net/ > ${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}
// .b-cdn.net/ > ${atob("LmItY2RuLm5ldC8=")}
// .info.north-kazakhstan.su.cdn.cloudflare.net/ > ${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}
//
// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var links = {
    overcloaked: `01-overcloaked${atob("LmItY2RuLm5ldC8=")}`,
    overcloaked_beanweb: `0gykoqai${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    fern: `${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`,
    infamous: `lizard${atob("LmItY2RuLm5ldC8=")}`,
    space: `planets.is-a.software${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    gnmath: `nowayway${atob("LmItY2RuLm5ldC8=")}`,
    selenite: `DISABLED`,
    daydreamx: `pondering.is-a.software${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`
}

// Developer stuff! :3
var bypassUAF = false;
var devTools = false;
var ixlambdaVersion = "v3.0.0";

// Stylesheet to be appended.
var htmlStyles = `
<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap");

#ixlambda-gui {
    --ixlm-bg: rgba(49,50,68,0.7);
    --ixlm-header: rgba(30,30,46,0.9);
    --ixlm-control-bg: #181825;
    --ixlm-text: #cdd6f4;
    --ixlm-accent: #89b4fa;
    --ixlm-accent-hover: #b4befe;
    --ixlm-btn-text: #11111b;
    --ixlm-border: #45475a;

    --ixlm-min: #f9e2af;
    --ixlm-min-active: #a6e3a1;
    --ixlm-close: #f38ba8;

    --ixlm-radius: 6px;
    --ixlm-blur: 16px;
    --ixlm-anim-time: 0.3s;
    --ixlm-font: "JetBrains Mono", monospace;

    width: 300px;
    position: fixed;
    top: 100px;
    left: 100px;
    z-index: 9999999999;

    font-family: var(--ixlm-font);
    color: var(--ixlm-text);
    /*border: 1px solid var(--ixlm-border);*/
    border-radius: var(--ixlm-radius);
    transform: translateZ(0);
}

/* ---------- HEADER ---------- */
#ixlambda-header {
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    background: var(--ixlm-header);
    border-radius: var(--ixlm-radius) var(--ixlm-radius) 0 0;
    backdrop-filter: blur(var(--ixlm-blur));
}

.ixlambda-sidebyside {
    display: flex;
    gap: 6px;
    align-items: center;
}

#ixlambda-controls {
    display: flex;
    gap: 12px;

    padding: 8px;
    border-radius: 100px;
    background: var(--ixlm-control-bg);
}

#ixlambda-header button {
    width: 12px;
    height: 12px;
    border: none;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: transparent;
}

#ixlambda-header button:hover {
    filter: brightness(1.1);
}

#ixlambda-close {
    background: var(--ixlm-close);
    transition: background var(--ixlm-anim-time);
}

#ixlambda-minimize {
    background: var(--ixlm-min);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlambda-gui.ixlm-minimized #ixlambda-minimize {
    background: var(--ixlm-min-active);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlambda-header svg {
    padding-left: 8px;
}

/* ---------- CONTENT ---------- */
#ixlambda-content {
    overflow: hidden;
    padding: 0 8px 8px 8px;
    max-height: 600px;
    border-radius: 0 0 var(--ixlm-radius) var(--ixlm-radius);
    
    background: var(--ixlm-bg);
    backdrop-filter: blur(var(--ixlm-blur));
}

/* ---------- PANELS ---------- */
.ixlambda-panel {
    opacity: 1;
}

.ixlambda-panel.hidden {
    display: none;
}

/* ---------- TEXT ---------- */
#ixlambda-content span {
    display: block;
    margin: 8px 0;
}

.ixlambda-description {
    font-size: 14px;
}

/* ---------- BUTTONS ---------- */
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
    height: 40px;
    transition: background 0.2s, transform 0.1s;
}

.ixlambda-btn:hover {
    background: var(--ixlm-accent-hover);
}

.ixlambda-btn:active {
    transform: translateY(1px);
}

.ixlambda-half {
    width: 50%;
}

.ixlambda-icon-btn {
    width: 40px;
    padding: 10px;
}

/* ---------- FOOTER ---------- */
.ixlambda-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.ixlambda-footer span {
    font-size: 12px;
}

/* ---------- DIVIDER ---------- */
#ixlambda-gui hr {
    height: 2px;
    margin: 8px 0;

    border: none;
    border-top: 2px solid var(--ixlm-border);
}

/* ---------- MINIMIZED ---------- */
#ixlambda-gui.ixlm-minimized #ixlambda-content {
    max-height: 0;
    transition: max-height var(--ixlm-anim-time) ease;
}
</style>
`;

// HTML body data to inject.
var htmlData = `
${htmlStyles}
<div id="ixlambda-gui">
    <div id="ixlambda-header">
        <div class="ixlambda-sidebyside">
            <div id="ixlambda-controls">
                <button id="ixlambda-close"></button>
                <button id="ixlambda-minimize"></button>
            </div>
            <i data-lucide="server-cog" width="18" height="18"></i>
            <b>IXLambda Loader</b>
        </div>
    </div>
    <div id="ixlambda-content">
        <!-- MAIN PANEL -->
        <div id="ixlambda-main-content" class="ixlambda-panel">
            <span class="ixlambda-description">Freedom is a universal right.</span>
            <hr>
            <span class="ixlambda-description">Proxy Loader</span>
            <div class="ixlambda-sidebyside">
                <select id="ixlambda-proxy-selector" class="ixlambda-selector">
                    <option disabled value="overcloaked">OverCloaked</option>
                    <option value="fern">Fern</option>
                    <option value="infamous">Infamous</option>
                    <option disabled value="space">Space</option>
                    <option value="gnmath">GN-Math</option>
                    <option disabled value="selenite">Selenite</option>
                    <option value="daydreamx">DayDreamX</option>
                </select>
                <button id="ixlambda-launch" class="ixlambda-btn ixlambda-half">Launch</button>
            </div>
            <hr>
            <span class="ixlambda-description">Javascript Loader</span>
            <button id="ixlambda-scriptix-launch" class="ixlambda-btn">Launch Scriptix (Made by TEDA)</button>
            <hr>
            <div class="ixlambda-footer">
                <span>Made by SUDO :3 ${ixlambdaVersion}</span>
                <button id="ixlambda-settings" class="ixlambda-btn ixlambda-icon-btn">
                    <i data-lucide="cog" width="20" height="20"></i>
                </button>
            </div>
        </div>

        <!-- SETTINGS PANEL -->
        <div id="ixlambda-settings-content" class="ixlambda-panel hidden">
            <span class="ixlambda-description">Settings</span>
            <hr>
            <span class="ixlambda-description">Themes</span>
            <select id="ixlambda-theme-selector" class="ixlambda-selector">
                <option value="mocha">Catppuccin Mocha (Dark)</option>
                <option value="latte">Catppuccin Latte (Light)</option>
                <option value="hacker">Pro Haxxor</option>
            </select>
            <hr>
            <div class="ixlambda-footer">
                <span>Made by SUDO :3 ${ixlambdaVersion}</span>
                <button id="ixlambda-home" class="ixlambda-btn ixlambda-icon-btn">
                    <i data-lucide="house" width="20" height="20"></i>
                </button>
            </div>            
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
		<p>P.S. if you got here and are a student, you put in the wrong post-validation passcode. Please try again.</p>
	</body>
</html>
`;

// User agent filtration and confirming GUI unexistence.
if ((/Mac/i.test(window.navigator.userAgent) || bypassUAF) && !document.getElementById("ixlambda-host")) {
    // Confirm page existence.
    if (["about:blank", "about:newtab", ""].includes(location.href)) { document.location.href = "https://google.com/"; alert("Please re-run the bookmark here."); }

    // Inject HTML.
    var host = document.createElement("div");
    host.id = "ixlambda-host";
    document.body.appendChild(host);

    // Spooky shadow div!
    var root = host.attachShadow({ mode: "open" })
    root.innerHTML = htmlData;

    // Get GUI elements.
    var gui = root.getElementById("ixlambda-gui");
    var header = root.getElementById("ixlambda-header");
    var mainContent = root.getElementById("ixlambda-main-content");
    var settingsContent = root.getElementById("ixlambda-settings-content");

    // Minimize and close functions.
    root.getElementById("ixlambda-minimize").addEventListener("click", () => {
        gui.classList.toggle("ixlm-minimized");
    });
    root.getElementById("ixlambda-close").addEventListener("click", () => {
        root.querySelectorAll(".ixlambda-destroy").forEach(e => e.remove());
        if (devTools) { eruda.destroy(); }
        document.getElementById("ixlambda-host").remove();
    });

    // Lucide implementation.
    var lucideScript = document.createElement("script");
    lucideScript.src = "https://unpkg.com/lucide@0.577.0/dist/umd/lucide.min.js";
    lucideScript.onload = () => { lucide.createIcons({root: root}); }
    root.appendChild(lucideScript);

    // Animation stuff. (suffering!)
    function switchPanelAnim(showPanel, hidePanel) {
        if (showPanel === hidePanel) return;
        const content = showPanel.closest("#ixlambda-content");
        if (!content) return;
        content.style.height = content.offsetHeight + "px";
        hidePanel.style.transition = "opacity 0.1s ease";
        hidePanel.style.opacity = "0";
        setTimeout(() => {
            hidePanel.classList.add("hidden");
            hidePanel.style.opacity = "";
            showPanel.classList.remove("hidden");
            showPanel.style.opacity = "0";
            const newHeight = showPanel.scrollHeight;
            content.style.transition = "height 0.3s cubic-bezier(.4,0,.2,1)";
            content.style.height = newHeight + "px";
            requestAnimationFrame(() => {
                showPanel.style.transition = "opacity 0.1s ease";
                showPanel.style.opacity = "1";
            });
            setTimeout(() => {
                content.style.height = "";
                showPanel.style.opacity = "";
            }, 300);
        }, 100);
    }

    // Setup switching buttons.
    root.getElementById("ixlambda-settings").addEventListener("click", () => {
        switchPanelAnim(settingsContent, mainContent);
    });
    root.getElementById("ixlambda-home").addEventListener("click", () => {
        switchPanelAnim(mainContent, settingsContent);
    });

    // Theme handling.
    function setTheme(theme) {
        themes = {
            mocha: {
                "--ixlm-bg": "rgba(49, 50, 68, 0.9)", // Surface 0
                "--ixlm-header": "rgba(30, 30, 46, 0.9)", // Base
                "--ixlm-control-bg": "#181825", // Mantle
                "--ixlm-text": "#cdd6f4", // Text
                "--ixlm-accent": "#89b4fa", // Blue
                "--ixlm-accent-hover": "#b4befe", // Lavender
                "--ixlm-btn-text": "#11111b", // Crust
                "--ixlm-border": "#585b70", // Surface 2
                "--ixlm-min": "#f9e2af", // Yellow
                "--ixlm-min-active": "#a6e3a1", // Green
                "--ixlm-close": "#f38ba8", // Red
                "--ixlm-radius": "6px",
                "--ixlm-blur": "16px",
                "--ixlm-anim-time": "0.3s",
                "--ixlm-font": '"JetBrains Mono", monospace'},
        	latte: {
                "--ixlm-bg": "rgba(204, 208, 218, 0.9)",
                "--ixlm-header": "rgba(239, 241, 245, 0.9)",
                "--ixlm-control-bg": "#e6e9ef",
                "--ixlm-text": "#4c4f69",
                "--ixlm-accent": "#1e66f5",
                "--ixlm-accent-hover": "#7287fd",
                "--ixlm-btn-text": "#dce0e8",
                "--ixlm-border": "#acb0be",
                "--ixlm-min": "#df8e1d",
                "--ixlm-min-active": "#40a02b",
                "--ixlm-close": "#d20f39",
                "--ixlm-radius": "6px",
                "--ixlm-blur": "16px",
                "--ixlm-anim-time": "0.3s",
                "--ixlm-font": '"JetBrains Mono", monospace'},
			hacker: {
                "--ixlm-bg": "#000000",
                "--ixlm-header": "#222222",
                "--ixlm-control-bg": "#111111",
                "--ixlm-text": "#00ff00",
                "--ixlm-accent": "#00ff00",
                "--ixlm-accent-hover": "#55ff55",
                "--ixlm-btn-text": "#000000",
                "--ixlm-border": "#00ff00",
                "--ixlm-min": "#ffff00",
                "--ixlm-min-active": "#00ff00",
                "--ixlm-close": "#ff0000",
                "--ixlm-radius": "3px",
                "--ixlm-blur": "0px",
                "--ixlm-anim-time": "0.2s",
                "--ixlm-font": '"JetBrains Mono", monospace'}
        };
        Object.entries(themes[theme]).forEach(([key, value]) => {
            gui.style.setProperty(key, value);
        });
    }

    // Saved theme.
    var themeSelector = root.getElementById("ixlambda-theme-selector");
    themeSelector.onchange = ()=> {
        var theme= themeSelector.value;
        setTheme(theme);
        localStorage.setItem("ixlambda-theme", theme);
    };
    var savedTheme = localStorage.getItem("ixlambda-theme");
    if (savedTheme) { setTheme(savedTheme); themeSelector.value = savedTheme; }

    // Saved proxy.
    var proxySelector = root.getElementById("ixlambda-proxy-selector");
    proxySelector.onchange = ()=> { localStorage.setItem("ixlambda-proxy", proxySelector.value); }
    var savedProxy = localStorage.getItem("ixlambda-proxy");
    if (savedProxy) { proxySelector.value = savedProxy; }

    // Launch as blob URL.
    function openLink(link) {
        var linkHtmlData = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>IXLambda</title>
            ${devTools ? "" : `
            <script>
                if (window.eruda) { eruda.destroy(); }
                Object.defineProperty(window,"eruda",{set(v){v&&(v.init=()=>{});this._e=v},get(){return this._e}});
            </script>`}
            <style>
              body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
              iframe { width: 100vw; height: 100vh; border: none; }
            </style>
          </head>
          <body>
            <iframe src="${link}"></iframe>
          </body>
        </html>`;

        // Main loading code.
        try {
            var newTab = window.open(URL.createObjectURL(new Blob([linkHtmlData], { type: "text/html" })), "_blank");
        } catch (err) {
            console.error("Proxy launching failed:", err);
        }
        if (!newTab) { alert("Popup Failed! 3:"); }
    }

    // Loading code.
    root.getElementById("ixlambda-launch").addEventListener("click", () => {
        openLink("https://" + links[root.getElementById("ixlambda-proxy-selector").value]);
    });
    root.getElementById("ixlambda-scriptix-launch").addEventListener("click", () => {
        var script = document.createElement("script");
        script.src = "https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/Bookmarklet%20Manager/main.js";
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
} else if (!document.getElementById("ixlambda-host")) {
    // Eradicate page evily!
    document.open();
    document.write(htmlDataIT);
    document.close();

    // Add evil console notes. >:3
    console.log("%cGet out of the console, you are not slick.", "color: red; font-size: 24px; font-weight: bold;");
    console.log("%cAlso, I am a few steps ahead of you.", "color: #f38ba8; font-size: 16px; font-weight: bold;")
    console.log("%cPlease, just leave us alone...", "color: #eba0ac; font-size: 16px;");
} else {
    // Complain about duplicates.
    alert("Another instance of IXLambda exists, please use the current instance.")
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
}
