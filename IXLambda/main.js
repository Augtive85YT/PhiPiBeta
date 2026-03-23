// Cat on keyboard, sorrtargshrsgwya.
var cloudflareCDN = atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .cdn.cloudflare.net/
var beanwebCloudflare = atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .beanweb.qzz.io.cdn.cloudflare.net/
var bunnyCDN = atob("LmItY2RuLm5ldC8="); // .b-cdn.net/
var northKazCloudflare = atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv"); // .info.north-kazakhstan.su.cdn.cloudflare.net/
var amazonAWS = atob("czMuYW1hem9uYXdzLmNvbS8="); // s3.amazonaws.com/
var googleAPI = atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS8=" ); // storage.googleapis.com/

// Some stuff I think?
var links = {
    // Main links.
    overcloaked: `overunder1${bunnyCDN}`,
    fern: `${googleAPI}fernisbest/index.html`, // Block this and I'll sell your soul.
    infamous: `${atob("c2Nob29sb2d5LmNvbS5uYXJiYWhhZHVyY2hhdWRoYXJ5LmNvbS5ucC8=")}`,
    gnmath: `prageru-server.${amazonAWS}mathematics.html`,
    endis: `ac371r8r.ajh.quest${cloudflareCDN}`,
    space: `BLOCKED_FIND_NEW`,
    dogeub: `canvas-lms.${googleAPI}index.html`,
    frogiesarcade: `${atob("cGhpLmJ6")}`,
    daydreamx: `${googleAPI}daydreaming/dist/index.html`,

    // Backup links
    overcloaked_1: `mzn8q00b${beanwebCloudflare}`,
    overcloaked_2: `overunder2${bunnyCDN}`,
    overcloaked_3: `overunder3${bunnyCDN}`,
    fern_01: `${atob("aGVscC5yZXNlYXJjaC5saWdodHNwZWUuZC50cmlidW1hdGVybmF0ZS5jbC8=")}`,
    daydreamx_01: `trigonometery.is-a.software${cloudflareCDN}`,
    daydreamx_02: `space${northKazCloudflare}`
};

// Developer stuff! :3
var bypassUAF = false;
var devTools = false;
var ixlambdaVersion = "v3.5.1";

// HTML body data to inject.
var htmlData = `
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
<style>
#ixlambda-gui {
    --ixlm-bg: rgba(49, 50, 68, 0.9);
    --ixlm-header: rgba(30, 30, 46, 0.9);
    --ixlm-control-bg: #181825;
    --ixlm-text: #cdd6f4;
    --ixlm-accent: #89b4fa;
    --ixlm-accent-hover: #b4befe;
    --ixlm-btn-text: #11111b;
    --ixlm-border: #585b70;
    --ixlm-contrast: #585b70;
    --ixlm-min: #f9e2af;
    --ixlm-min-active: #a6e3a1;
    --ixlm-close: #f38ba8;
    --ixlm-radius: 6px;
    --ixlm-round-radius: 100px;
    --ixlm-circle-radius: 50%;
    --ixlm-blur: 16px;
    --ixlm-anim-time: 0.3s;
    --ixlm-font: JetBrains Mono, monospace;

    width: 500px;
    position: fixed;
    max-width: 1000px;
    top: 100px;
    left: 100px;
    z-index: 9999999999;

    font-family: var(--ixlm-font);
    color: var(--ixlm-text);
    box-shadow: 0 0 0 1px var(--ixlm-border);
    border-radius: var(--ixlm-radius);
    transform: translateZ(0);
}

#ixlambda-gui.ixlm-minimized {
    max-width: 300px;
    transition: max-width var(--ixlm-anim-time) ease;
}

#ixlambda-header {
    display: flex;
    max-width: 1000px;
    font-size: 18px;
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

    padding: 8px;
    border-radius: var(--ixlm-round-radius);
    background: var(--ixlm-control-bg);
}

#ixlambda-header button {
    width: 12px;
    height: 12px;
    border: none;
    padding: 0;
    border-radius: var(--ixlm-circle-radius);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: transparent;
}

#ixlambda-header button:hover {
    filter: brightness(1.1);
}

#ixlambda-header svg {
    padding-left: 8px;
}

#ixlambda-gui.ixlm-minimized #ixlambda-header {
    border-radius: var(--ixlm-radius);
    max-width: 300px;
    transition: max-width var(--ixlm-anim-time) ease;
}

#ixlambda-minimize {
    background: var(--ixlm-min);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlambda-close {
    background: var(--ixlm-close);
    transition: background var(--ixlm-anim-time);
}

#ixlambda-gui.ixlm-minimized #ixlambda-minimize {
    background: var(--ixlm-min-active);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlambda-layout {
    display: flex;
    overflow: hidden;
    height: 300px;
    border-radius: 0 0 var(--ixlm-radius) var(--ixlm-radius);
    
    background: var(--ixlm-bg);
    backdrop-filter: blur(var(--ixlm-blur));
}

#ixlambda-gui.ixlm-minimized #ixlambda-layout {
    height: 0;
    transition: height var(--ixlm-anim-time) ease;
}

#ixlambda-sidebar {
    display: flex;
    flex-direction: column;
    background: var(--ixlm-header);
    outline: 1px solid var(--ixlm-border);
    padding: 8px;
    gap: 8px;
}

.ixlambda-nav-item {
    display: flex;
    align-items: center;
    justify-content: left;
    color: var(--ixlm-text);
    font: var(--ixlm-font);
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: var(--ixlm-radius);
    padding-left: 4px;
    padding-right: 4px;
    transition: background 0.2s
}

.ixlambda-nav-item:hover {
    background: var(--ixlm-contrast);
}

.ixlambda-nav-item.active {
    color: var(--ixlm-btn-text);
    background: var(--ixlm-accent);
}

#ixlambda-content {
    position: relative;
    padding: 8px;
    width: 100%;
}

.ixlambda-panel {
    width: 100%;
    height: 100%;
    opacity: 1;
}

.ixlambda-panel.hidden {
    display: none;
}

.ixlambda-panel iframe {
    border: none;
}

.ixlambda-surface {
    background: var(--ixlm-surface);
    border-radius: var(--ixlm-radius);
    padding: 8px;
}

#ixlambda-layout span {
    display: block;
    margin: 8px 0;
}

.ixlambda-description {
    font-size: 14px;
}

.ixlambda-parallel {
    display: flex;
    gap: 6px;
    align-items: center;
}

.ixlambda-btn, .ixlambda-selector, .ixlambda-input {
    width: 100%;
    height: 40px;
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

.ixlambda-input {
    height: 20px;
}

.ixlambda-input::placeholder {
  color: var(--ixlm-btn-text);
  opacity: 1;
}

.ixlambda-footer {
    display: flex;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: space-between;
}

.ixlambda-footer span {
    font-size: 12px;
}

#ixlambda-gui hr {
    height: 2px;
    margin: 8px 0;

    border: none;
    border-top: 2px solid var(--ixlm-border);
}

.ixlm-modal {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  opacity: 1;
  transition: opacity 0.15s ease;
}

.ixlm-modal.hidden {
  opacity: 0;
  pointer-events: none;
}

.ixlm-modal-box {
  background: var(--ixlm-bg);
  box-shadow: 0 0 0 1px var(--ixlm-border);
  border-radius: var(--ixlm-radius);
  padding: 16px;
  width: 260px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.15s ease;
}

.ixlm-modal.hidden .ixlm-modal-box {
  transform: scale(0.9);
}

.ixlm-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}

.ixlm-modal-actions input[type="text"] {
  flex: 1;
  padding: 6px 8px;
  border-radius: var(--ixlm-radius);
  box-shadow: 0 0 0 1px var(--ixlm-border);
}
</style>
<div id="ixlambda-gui">
    <div id="ixlambda-header">
        <div class="ixlambda-parallel">
            <div id="ixlambda-controls">
                <button id="ixlambda-close"></button>
                <button id="ixlambda-minimize"></button>
            </div>
            <i data-lucide="server-cog" width="18" height="18"></i>
            <b>IXLambda Loader</b>
        </div>
    </div>
    <div id="ixlambda-layout">
        <div id="ixlambda-sidebar">
            <button id="ixlambda-nav-home" class="ixlambda-nav-item active" value="home">
                <i data-lucide="house" width="20" height="20"></i>
                <span>Home</span>
            </button>
            <button id="ixlambda-nav-proxies" class="ixlambda-nav-item" value="proxies">
                <i data-lucide="globe-lock" width="20" height="20"></i>
                <span>Proxies</span>
            </button>
            <button id="ixlambda-nav-settings" class="ixlambda-nav-item" value="settings">
                <i data-lucide="cog" width="20" height="20"></i>
                <span>Settings</span>
            </button>
        </div>
        <div id="ixlambda-content">
            <div id="ixlambda-home-page" class="ixlambda-panel">
                <div class="ixlambda-surface">
                    <!--<iframe src="https://augtive85yt-github-io.translate.goog/phipibeta/ixlambda-iframe.html?_x_tr_sl=en&_x_tr_tl=de&t=${Date.now()}" width="100%" height="100%"></iframe>-->
                    <!--<iframe id="ixlambda-news-iframe" srcdoc="" width="100%" height="100%"></iframe>-->
                    <span style="font-size: 24px">Sorry about a few bugs here and there, I had to implement a huge overhaul in 2 days. :sob:</span>
                    <br>
                    <span>P.S. (It looks bad right now, but I swear I will fix it! :< )</span>
                </div>
            </div>
            <div id="ixlambda-proxies-page" class="ixlambda-panel hidden">
                <span class="ixlambda-description">Freedom is a universal right.</span>
                <hr>
                <span class="ixlambda-description">Proxy Loader</span>
                <div class="ixlambda-parallel">
                    <select id="ixlambda-proxy-selector" class="ixlambda-selector">
                        <option value="overcloaked">OverCloaked</option>
                        <option value="fern">Fern</option>
                        <option value="infamous">Infamous</option>
                        <option value="gnmath">GN-Math</option>
                        <option value="dogeub">DogeUB</option>
                        <option value="frogiesarcade">Frogie's Arcade</option>
                        <option disabled value="space">Space</option>
                        <option value="daydreamx">DayDreamX</option>
                    </select>
                    <button id="ixlambda-proxy-launch" class="ixlambda-btn ixlambda-half">Launch</button>
                </div>
                <hr>
                <span class="ixlambda-description">Javascript Loader</span>
                <button id="ixlambda-scriptix-launch" class="ixlambda-btn">Launch Scriptix</button>
            </div>
            <div id="ixlambda-settings-page" class="ixlambda-panel hidden">
                <span class="ixlambda-description">Settings</span>
                <hr>
                <span class="ixlambda-description">Themes</span>
                <select id="ixlambda-theme-selector" class="ixlambda-selector">
                    <option value="mocha">Catppuccin Mocha</option>
                    <option value="latte">Catppuccin Latte</option>
                    <option value="macchiato">Catppuccin Macchiato</option>
                    <option value="frappe">Catppuccin Frappé</option>
                    <option value="hacker">Pro Haxxor</option>
                    <option value="ai">AI Generated</option>
                </select>
                <hr>
                <span class="ixlambda-description">Data [CURRENTLY UNFINISHED]</span>
		    	<div class="ixlambda-parallel">
		    	    <button id="ixlambda-export-data" class="ixlambda-btn">Export Data</button>
		    	    <button id="ixlambda-import-data" class="ixlambda-btn">Import Data</button>
		    	    <button id="ixlambda-import-data" class="ixlambda-btn">Clear Data</button>
		    	</div>
		    	<hr>
                <span class="ixlambda-description">Developer [CURRENTLY UNFINISHED]</span>
		    	<div class="ixlambda-parallel">
		    		<input id="ixlambda-dev-input" class="ixlambda-input" placeholder="Dev Code...">
		    		<button id="ixlambda-dev-enter" class="ixlambda-btn ixlambda-half">Enter</button>
		    	</div>
            </div>
        </div>
    </div>
</div>
<div id="ixlambda-modal" class="ixlambda-modal hidden">
  <div class="ixlambda-modal-box">
    <div id="ixlambda-modal-content"></div>
    <div id="ixlambda-modal-actions" class="ixlambda-modal-actions"></div>
  </div>
</div>
`;

// Open as blob URL.
function openLink(link) {
    var linkHtmlData = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>IXLambda</title>
            <link rel="icon" href="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/IXLambda/assets/img/ixlambda-favicon.png">
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
        console.error("Link launching failed:", err);
    }
    if (!newTab) { alert("Popup Failed! 3:"); }
}

// Modal magic!
function showModal(options) {
    var modal = root.getElementById("ixlambda-modal");
    var content = root.getElementById("ixlambda-modal-content");
    var actions = root.getElementById("ixlambda-modal-actions");
    content.innerHTML = "";
    actions.innerHTML = "";
    var inputs = [];

    // Add message.
    var msgSpan = document.createElement("span");
    msgSpan.textContent = options.message || "";
    content.appendChild(msgSpan);

    // Add text inputs.
    if (options.inputs) {
        options.inputs.forEach(opt => {
            var input = document.createElement("input");
            input.type = "text";
            input.placeholder = opt.placeholder || "";
            input.value = opt.value || "";
            content.appendChild(input);
            inputs.push(input);
        });
    }

    // Add buttons.
    options.buttons.forEach(btn => {
        var button = document.createElement("button");
        button.className = "ixlambda-btn";
        button.textContent = btn.text;
        button.addEventListener("click", () => {
            var values = inputs.map(i => i.value);
            if (btn.onClick) btn.onClick(values);
            modal.classList.add("hidden");
        });
        actions.appendChild(button);
    });

    // Show modal.
    modal.classList.remove("hidden");
}

// Hash function.
function hashString(str) {
    try {
        let h1 = 0xdeadbeef ^ str.length;
        let h2 = 0x41c6ce57 ^ str.length;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
            Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
            Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return (
            (h2 >>> 0).toString(16).padStart(8, "0") +
            (h1 >>> 0).toString(16).padStart(8, "0")
        );
    } catch {
        return null;
    }
}

// Evil HTML data! >:3
var blockHtmlData = `
<!doctype HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Failure</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&amp;display=swap" rel="stylesheet">
    <link rel="icon" href="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/Libraries/OmegaIota/assets/img/blocked-favicon.png">
    <style>
        body {
            display: grid;
            place-items: center;
            justify-content: center;
            text-align: center;
            background: #1e1e2e;
        color: #cdd6f4;
        font-family: "JetBrains Mono", monospace;
    }
    </style>
</head>
<body>
    <img width="350" alt="BLOCKED" src="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/Libraries/OmegaIota/assets/img/blocked-favicon.png">
    <h1>Hello! You have failed the validation check.</h1>
    <h2>There is a pop-up if you fail the automatic check, and you must use a bypass password.
    <br>
    If you do not have a bypass password, I have likely not approved your usage of IXLambda.
    <hr>
    This is meant to combat blocking from the I.T. department.
    <br>
    P.S. The I.T. department has a major skill issue and acts like they don't. (Yes, you!)
    </h2>
</body>
</html>`;

// Previously verified?
var verified = localStorage.getItem("ixlambda-valid-user") || bypassUAF;

// User agent check.
verified = navigator.userAgent.match(/Mac/i) || verified;

// Password check.
if (!verified) {
    const userInput = prompt("Please enter bypass code:");
    verified = "74834f35843e9eed" === hashString(userInput);
}

// Final result.
if (!verified) {
    document.open();
    document.write(blockHtmlData);
    document.close();
    throw "OMEGAIOTA-BLOCKED";
}
localStorage.setItem("ixlambda-valid-user", "true");

// Confirm page existence.
if (["about:blank", "about:newtab"].includes(location.href)) {
    window.location.href = "https://google.com/";
    alert("Please re-open the bookmark on this page.");
    throw "IXLAMBDA-FORCE-END";
}

// Complain about duplicates.
if (document.getElementById("ixlambda-host")) {
    alert("Another instance of IXLambda exists, please use the current instance.")
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
    throw "IXLAMBDA-FORCE-END";
}

// Create IXLambda div.
var host = document.createElement("div");
host.id = "ixlambda-host";
document.body.appendChild(host);

// Spooky shadow div!
var root = host.attachShadow({ mode: "open" });

// Load HTML data.
root.innerHTML = htmlData;

// Get GUI elements.
var gui = root.getElementById("ixlambda-gui");
var header = root.getElementById("ixlambda-header");

// Minimize and close functions.
root.getElementById("ixlambda-minimize").addEventListener("click", () => {
    gui.classList.toggle("ixlm-minimized");
});
root.getElementById("ixlambda-close").addEventListener("click", () => {
    root.querySelectorAll(".ixlambda-destroy").forEach(e => e.remove());
    if (devTools) { eruda.destroy(); }
    document.getElementById("ixlambda-host").remove();
});

// Button code.
root.getElementById("ixlambda-proxy-launch").addEventListener("click", () => {
    openLink("https://" + links[root.getElementById("ixlambda-proxy-selector").value]);
});
root.getElementById("ixlambda-scriptix-launch").addEventListener("click", () => {
    var script = document.createElement("script");
    script.src = "https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/main.js";
    document.head.appendChild(script);
});

// Setup switching buttons.
var sideBarButtons = root.querySelectorAll(".ixlambda-nav-item");
sideBarButtons.forEach((el) => {
    el.onclick = () => {
        sideBarButtons.forEach((button) => button.classList.remove("active"));
        el.classList.add("active");
        root.querySelectorAll(".ixlambda-panel").forEach((panel) => panel.classList.add("hidden"));
        root.getElementById(`ixlambda-${el.value}-page`).classList.remove("hidden");
        localStorage.setItem("ixlambda-page", el.value);
    };
});

// Lucide implementation.
var lucideScript = document.createElement("script");
lucideScript.src = "https://unpkg.com/lucide@0.577.0/dist/umd/lucide.min.js";
lucideScript.onload = () => { lucide.createIcons({root: root}); }
root.appendChild(lucideScript);

// Initialize Eruda dev tools.
if (devTools) {
    var erudaScript = document.createElement("script");
    erudaScript.src = "https://cdn.jsdelivr.net/npm/eruda";
    erudaScript.className = "ixlambda-destroy";
    erudaScript.onload = () => { eruda.init(); }
    document.head.appendChild(erudaScript);
}

// Setup news system.
var newsHTMLData = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="dark">
</head>
<body style="background: transparent;">
    <p>Sorry about a few bugs here and there, I had to implement a huge overhaul in 2 days. :sob:</p>
</body>
</html>
`;
//root.getElementById("ixlambda-news-iframe").srcdoc = newsHTMLData;

// Theme handling.
function setTheme(theme) {
    var themes = {
        mocha: {
            "--ixlm-bg": "rgba(49, 50, 68, 0.6)", // Surface 0
            "--ixlm-header": "rgba(30, 30, 46, 0.6)", // Base
            "--ixlm-control-bg": "#181825", // Mantle
            "--ixlm-text": "#cdd6f4", // Text
            "--ixlm-accent": "#89b4fa", // Blue
            "--ixlm-accent-hover": "#b4befe", // Lavender
            "--ixlm-btn-text": "#11111b", // Crust
            "--ixlm-border": "#585b70", // Surface 2
            "--ixlm-contrast": "#585b70", // Surface 2
            "--ixlm-surface": "rgba(88, 91, 112, 0.4)", // Surface 2
            "--ixlm-min": "#f9e2af", // Yellow
            "--ixlm-min-active": "#a6e3a1", // Green
            "--ixlm-close": "#f38ba8", // Red
            "--ixlm-radius": "6px",
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
            "--ixlm-blur": "16px",
            "--ixlm-anim-time": "0.3s",
            "--ixlm-font": '"JetBrains Mono", monospace'},
        latte: {
            "--ixlm-bg": "rgba(204, 208, 218, 0.6)",
            "--ixlm-header": "rgba(239, 241, 245, 0.6)",
            "--ixlm-control-bg": "#e6e9ef",
            "--ixlm-text": "#4c4f69",
            "--ixlm-accent": "#1e66f5",
            "--ixlm-accent-hover": "#7287fd",
            "--ixlm-btn-text": "#dce0e8",
            "--ixlm-border": "#acb0be",
            "--ixlm-contrast": "#acb0be",
            "--ixlm-surface": "rgba(172, 176, 198, 0.4)",
            "--ixlm-min": "#df8e1d",
            "--ixlm-min-active": "#40a02b",
            "--ixlm-close": "#d20f39",
            "--ixlm-radius": "6px",
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
            "--ixlm-blur": "16px",
            "--ixlm-anim-time": "0.3s",
            "--ixlm-font": '"JetBrains Mono", monospace'},
        macchiato: {
            "--ixlm-bg": "rgba(54, 58, 79, 0.6)",
            "--ixlm-header": "rgba(36, 39, 58, 0.6)",
            "--ixlm-control-bg": "#1e2030",
            "--ixlm-text": "#cad3f5",
            "--ixlm-accent": "#ed8796",
            "--ixlm-accent-hover": "#ee99a0",
            "--ixlm-btn-text": "#181926",
            "--ixlm-border": "#626880",
            "--ixlm-contrast": "#626880",
            "--ixlm-surface": "rgba(98, 104, 128, 0.4)",
            "--ixlm-min": "#eed49f",
            "--ixlm-min-active": "#a6da95",
            "--ixlm-close": "#ed8796",
            "--ixlm-radius": "6px",
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
            "--ixlm-blur": "16px",
            "--ixlm-anim-time": "0.3s",
            "--ixlm-font": '"JetBrains Mono", monospace'},
        frappe: {
            "--ixlm-bg": "rgba(65, 69, 89, 0.6)",
            "--ixlm-header": "rgba(48, 52, 70, 0.6)",
            "--ixlm-control-bg": "#292c3c",
            "--ixlm-text": "#c6d0f5",
            "--ixlm-accent": "#ca9ee6",
            "--ixlm-accent-hover": "#f4b8e4",
            "--ixlm-btn-text": "#232634",
            "--ixlm-border": "#626880",
            "--ixlm-contrast": "#626880",
            "--ixlm-surface": "rgba(98, 104, 128, 0.4)",
            "--ixlm-min": "#e5c890",
            "--ixlm-min-active": "#a6d189",
            "--ixlm-close": "#e78284",
            "--ixlm-radius": "6px",
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
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
            "--ixlm-contrast": "#999999",
            "--ixlm-surface": "rgba(153, 153, 153, 0.4)",
            "--ixlm-min": "#999999",
            "--ixlm-min-active": "#00ff00",
            "--ixlm-close": "#ff0000",
            "--ixlm-radius": "3px",
            "--ixlm-round-radius": "0",
            "--ixlm-circle-radius": "0",
            "--ixlm-blur": "0",
            "--ixlm-anim-time": "0.1s",
            "--ixlm-font": '"JetBrains Mono", monospace'},
        ai: {
            "--ixlm-bg": "rgba(30, 41, 59, 0.85)",
            "--ixlm-header": "rgba(15, 23, 42, 0.9)",
            "--ixlm-control-bg": "#0f172a",
            "--ixlm-text": "#e2e8f0",
            "--ixlm-accent": "#38bdf8",
            "--ixlm-accent-hover": "#7dd3fc",
            "--ixlm-btn-text": "#020617",
            "--ixlm-border": "#334155",
            "--ixlm-contrast": "#334155",
            "--ixlm-surface": "rgba(51, 65, 85, 0.4)",
            "--ixlm-min": "#facc15",
            "--ixlm-min-active": "#4ade80",
            "--ixlm-close": "#fb7185",
            "--ixlm-radius": "6px",
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
            "--ixlm-blur": "16px",
            "--ixlm-anim-time": "0.3s",
            "--ixlm-font": '"JetBrains Mono", monospace'
        }
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
    localStorage.setItem("ixlambda-theme", theme);
};
var savedTheme = localStorage.getItem("ixlambda-theme");
if (savedTheme) { setTheme(savedTheme); themeSelector.value = savedTheme; }

// Saved page.
var savedPage = localStorage.getItem("ixlambda-page");
if (savedPage) {
    sideBarButtons.forEach((button) => button.classList.remove("active"));
    root.getElementById(`ixlambda-nav-${savedPage}`).classList.add("active");
    root.querySelectorAll(".ixlambda-panel").forEach((panel) => panel.classList.add("hidden"));
    root.getElementById(`ixlambda-${savedPage}-page`).classList.remove("hidden");
}

// Saved proxy.
var proxySelector = root.getElementById("ixlambda-proxy-selector");
proxySelector.onchange = ()=> {
    var proxy = proxySelector.value;
    localStorage.setItem("ixlambda-proxy", proxy);
};
var savedProxy = localStorage.getItem("ixlambda-proxy");
if (savedProxy) { proxySelector.value = savedProxy; }

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

// Add silly console notes.
console.log("%cIXLambda loaded successfully! :3", "color: #74c7ec; font-size: 24px; font-weight: bold;");
console.log("%cMaintained by ΦΠΒ's Owner!", "color: #89b4fa; font-size: 16px;");
console.log("%cLovingly made by SUDO! UwU", "color: #f38ba8; font-size: 16px; font-weight: bold;");
