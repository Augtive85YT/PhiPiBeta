// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var links = {
    overcloaked: `ndjdxbv${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    fern: `${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`,
    infamous: `lizard${atob("LmItY2RuLm5ldC8=")}`,
    space: `planets.is-a.software${atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`,
    gnmath: `nowayway${atob("LmItY2RuLm5ldC8=")}`,
    daydreamx: `com${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`
}

// Developer stuff! :3
var bypassUAF = true;
var devTools = false;
var ixlambdaVersion = "v3.BETARELEASE.FIX3";

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

    --ixlm-settings: #74c7ec;
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
    border: 1px solid var(--ixlm-border);
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
    filter: brightness(.9);
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
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.2s ease;
    opacity: 1;
    max-height: 2000px; /* large enough to hold content */
}

.ixlambda-panel.hidden {
    max-height: 0;
    opacity: 0;
    pointer-events: none;
}

/* ---------- TEXT ---------- */
#ixlambda-main-content span {
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
<link href="https://fonts.googleapis.com/css?family=JetBrains+Mono" rel="stylesheet">
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
                    <option value="overcloaked">OverCloaked</option>
                    <option value="fern">Fern</option>
                    <option value="infamous">Infamous</option>
                    <option value="space">Space</option>
                    <option value="gnmath">GN-Math</option>
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
            <div class="ixlambda-sidebyside">
                <p>Will come soon!!!</p>
            </div>
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

// User agent filtration and confirming GUI unexistence.
if ((/Mac/i.test(window.navigator.userAgent) || bypassUAF) && !document.getElementById("ixlambda-host")) {
    if (location.href === "about:blank") { document.location.href = "https://google.com/"; alert("Please re-run the bookmark here."); }

    var host = document.createElement("div");
    host.id = "ixlambda-host";
    document.body.appendChild(host);

    var root = host.attachShadow({ mode: "open" })
    root.innerHTML = htmlData;

    var gui = root.getElementById("ixlambda-gui");
    var header = root.getElementById("ixlambda-header");
    var mainContent = root.getElementById("ixlambda-main-content");
    var settingsContent = root.getElementById("ixlambda-settings-content");

    // I hate animations!!!!!
    function switchPanelAnimated(showPanel, hidePanel) {
        if (showPanel === hidePanel) return;

        hidePanel.style.maxHeight = hidePanel.scrollHeight + "px";
        hidePanel.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
        requestAnimationFrame(() => {
            hidePanel.style.maxHeight = "0";
            hidePanel.style.opacity = "0";
        });
        hidePanel.addEventListener("transitionend", function hideEnd() {
            hidePanel.classList.add("hidden");
            hidePanel.style.maxHeight = null;
            hidePanel.style.opacity = null;
            hidePanel.removeEventListener("transitionend", hideEnd);

            // Show target panel
            showPanel.classList.remove("hidden");
            showPanel.style.maxHeight = "0";
            showPanel.style.opacity = "0";
            requestAnimationFrame(() => {
                showPanel.style.maxHeight = showPanel.scrollHeight + "px";
                showPanel.style.opacity = "1";
            });
            showPanel.addEventListener("transitionend", function showEnd() {
                showPanel.style.maxHeight = null;
                showPanel.style.opacity = null;
                showPanel.removeEventListener("transitionend", showEnd);
            });
        });
    }

    const settingsBtn = root.getElementById("ixlambda-settings");
    settingsBtn.addEventListener("click", () => {
        const isMainVisible = !mainContent.classList.contains("hidden");
        if (isMainVisible) {
            switchPanelAnimated(settingsContent, mainContent);
        } else {
            switchPanelAnimated(mainContent, settingsContent);
        }
    });

    const homeBtn = root.getElementById("ixlambda-home");

    homeBtn.addEventListener("click", () => {
        switchPanelAnimated(mainContent, settingsContent);
    });

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
    document.open();
    document.write(htmlDataIT);
    document.close();

    console.log("%cGet out of the console, you are not slick.", "color: red; font-size: 24px; font-weight: bold;");
    console.log("%cAlso, I am a few steps ahead of you.", "color: #f38ba8; font-size: 16px; font-weight: bold;")
    console.log("%cPlease, just leave us alone...", "color: #eba0ac; font-size: 16px;");
} else {
    alert("Another instance of IXLambda exists, please use the current instance.")
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
}