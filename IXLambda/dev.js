// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var cloudflareCDN = atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .cdn.cloudflare.net/
var beanwebCloudflare = atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .beanweb.qzz.io.cdn.cloudflare.net/
var bunnyCDN = atob("LmItY2RuLm5ldC8="); // .b-cdn.net/
var northKazCloudflare = atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv"); // .info.north-kazakhstan.su.cdn.cloudflare.net/
var amazonAWS = atob("czMuYW1hem9uYXdzLmNvbS8="); // s3.amazonaws.com/
var googleAPI = atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS8=" ); // storage.googleapis.com/

// Some stuff I think?
var links = {
    // Main links.
    overcloaked: `mzn8q00b${beanwebCloudflare}`,
    fern: `${googleAPI}fernisbest/index.html`,
    infamous: `lizard${bunnyCDN}`,
    space: `dev.desmos.live${cloudflareCDN}`,
    gnmath: `${amazonAWS}prageru-server/mathematics.html`,
    daydreamx: `${googleAPI}daydreaming/dist/index.html`,

    // Backup links
    fern_01: `${amazonAWS}fernisbest/index.html`,
    infamous_01: `uhhhh${bunnyCDN}`,
    infamous_02: `another-one${bunnyCDN}`,
    daydreamx_01: `trigonometery.is-a.software${cloudflareCDN}`,
    daydreamx_02: `space${northKazCloudflare}`
}

// Developer stuff! :3
var bypassUAF = false;
var devTools = false;
var ixlambdaVersion = "v3.2.ALPHAVER";

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
    box-shadow: 0 0 0 1px var(--ixlm-border);
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
<iframe id="ixlambda-storage-iframe" src="https://augtive85yt-github-io.translate.goog/phipibeta/store.html?_x_tr_sl=de&_x_tr_tl=en" style="display: none;"></iframe>
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
            <hr>
            <span class="ixlambda-description">Themes</span>
            <select id="ixlambda-theme-selector" class="ixlambda-selector">
                <option value="mocha">Catppuccin Mocha (Dark)</option>
                <option value="latte">Catppuccin Latte (Light)</option>
                <option value="hacker">Pro Haxxor</option>
            </select>
			<hr>
            <span class="ixlambda-description">Developer</span>
			<p>IGNORE THIS IM SORRY I DONT HAVE TIME :sob:</p>
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

// Hash function.
async function hashSHA256(input) {
    return Array.from(
        new Uint8Array(
            await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input))
        )
    ).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Open as blob URL.
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

// Storage core handlers.
var iframeGetQueues = new WeakMap();
window.addEventListener("message", (event) => {
    var data = event.data;
    if (!data || !data.status) return;
    var queue = iframeGetQueues.get(event.source);
    if (!queue) return;
    if (data.status === "retrieved" && queue[data.key]) {
        queue[data.key](data.value);
        delete queue[data.key];
    }
});

function createStorage(iframe) {
    // Await iFrame.
    let winMap = new WeakMap();
    let ready = new Promise((resolve) => {
        if (iframe.contentWindow && iframe.contentDocument?.readyState === "complete") { resolve(); }
        else { iframe.onload = () => resolve(); }
    });

    // Listen once globally
    window.addEventListener("message", (event) => {
        let data = event.data;
        if (!data || !data.requestId) return;
        const queue = winMap.get(event.source);
        if (!queue) return;
        if (queue[data.requestId]) {
            queue[data.requestId](data.value);
            delete queue[data.requestId];
        }
    });

    function ensureQueue(win) {
        if (!winMap.has(win)) { winMap.set(win, {}); }
        return winMap.get(win);
    }

    async function send(action, key, value) {
        await ready;
        let win = iframe.contentWindow;
        let queue = ensureQueue(win);
        return new Promise((resolve) => {
            let requestId = Math.random().toString(36).slice(2);
            queue[requestId] = resolve;
            win.postMessage({ action, key, value, requestId }, "*");
        });
    }
    return {
        async get(key) { return await send("get", key); },
        async set(key, value) { await send("store", key, value); },
        async remove(key) { await send("clear", key); }
    };
}

// Booleans.
let isIpad = /Mac/i.test(window.navigator.userAgent);
let noIXLambda = !document.getElementById("ixlambda-host")
let notNewtab = ["about:blank", "about:newtab"].includes(location.href);
let verifiedUser = null;

// Creating temporary storage.
let tempStorage = document.createElement("iframe");
tempStorage.id = "ixlambda-temporary-storage"
tempStorage.src = "https://augtive85yt-github-io.translate.goog/phipibeta/store.html?_x_tr_sl=de&_x_tr_tl=en"
createStorage(tempStorage).get("ixlambda-valid-user").then(valid => { verifiedUser = valid; });

if (!verifiedUser || isIpad) {
    var userString = prompt("Please enter bypass code:");
    if (userString) {
        let hashResult;
        hashSHA256(userString).then(result => { hashResult = result; });
        validUser = (hashResult === "63cece6e54b78d5598bcd231bb7caf49403c47b29878fabeeb43e913b9d9c218");
        tempStorage.setItem("ixlambda-valid-user", validUser);
        if (validUser) { alert("Validation succeeded! Please re-run the bookmark."); }
    }
    
// Main function.
if ((isIpad || verifiedUser) && noIXLambda) {
    // Confirm page existence.
    if (notNewtab) { document.location.href = "https://google.com/"; alert("Please re-run the bookmark here."); }

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
    var storageIframe = root.getElementById("ixlambda-storage-iframe");

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
    function switchPanel(showPanel, hidePanel) {
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
                content.style.transition = "";
                showPanel.style.opacity = "";
                hidePanel.style.transition = "";
            }, 300);
        }, 100);
    }

    // Setup switching buttons.
    root.getElementById("ixlambda-settings").addEventListener("click", () => {
        switchPanel(settingsContent, mainContent);
    });
    root.getElementById("ixlambda-home").addEventListener("click", () => {
        switchPanel(mainContent, settingsContent);
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

        // Find correct theme.
        Object.entries(themes[theme]).forEach(([key, value]) => {
            gui.style.setProperty(key, value);
        });
    }

    // Saved theme.
    var themeSelector = root.getElementById("ixlambda-theme-selector");
    themeSelector.onchange = ()=> {
        var theme = themeSelector.value;
        setTheme(theme);
        setData(storageIframe, "ixlambda-theme", theme);
    };
    getData(storageIframe, "ixlambda-theme", savedTheme => { if (savedTheme) { setTheme(savedTheme); themeSelector.value = savedTheme; } });

    // Saved proxy.
    var proxySelector = root.getElementById("ixlambda-proxy-selector");
    proxySelector.onchange = ()=> {
        var proxy = proxySelector.value;
        setData(storageIframe, "ixlambda-proxy", proxy);
    };
    getData(storageIframe, "ixlambda-proxy", savedProxy => { if (savedProxy) { proxySelector.value = savedProxy; } });

    // Button code.
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
        erudaScript.onload = () => { eruda.init(); }
        document.head.appendChild(erudaScript);
    }

    // Add silly console notes.
    console.log("%cIXLambda loaded successfully! :3", "color: #74c7ec; font-size: 24px; font-weight: bold;");
    console.log("%cMaintained by ΦΠΒ's Owner!", "color: #89b4fa; font-size: 16px;");
    console.log("%cLovingly made by SUDO! UwU", "color: #f38ba8; font-size: 16px; font-weight: bold;");
} else if (!document.getElementById("ixlambda-host")) {

} else {
    // Complain about duplicates.
    alert("Another instance of IXLambda exists, please use the current instance.")
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
}
