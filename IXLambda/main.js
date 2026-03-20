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
    overcloaked: `mzn8q00b${beanwebCloudflare}`,
    fern: `${googleAPI}fernisbest/index.html`,
    infamous: `BLOCKED_FIND_NEW`,
    gnmath: `${amazonAWS}prageru-server/mathematics.html`,
    dogeub: `BLOCKED_FIND_NEW`,
    space: `BLOCKED_FIND_NEW`,
    daydreamx: `${googleAPI}daydreaming/dist/index.html`,

    // Backup links
    fern_01: `${amazonAWS}fernisbest/index.html`,
    daydreamx_01: `trigonometery.is-a.software${cloudflareCDN}`,
    daydreamx_02: `space${northKazCloudflare}`
};

// Developer stuff! :3
var bypassUAF = false;
var devTools = false;
var ixlambdaVersion = "v3.2.0";

// Stylesheet to be appended.
var htmlStyles = `
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
    --ixlm-min: #f9e2af;
    --ixlm-min-active: #a6e3a1;
    --ixlm-close: #f38ba8;
    --ixlm-radius: 6px;
    --ixlm-round-radius: 100px;
    --ixlm-circle-radius: 50%;
    --ixlm-blur: 16px;
    --ixlm-anim-time: 0.3s;
    --ixlm-font: JetBrains Mono, monospace;

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
.ixlambda-btn, .ixlambda-selector, .ixlambda-input {
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

.ixlambda-input {
    width: calc(100% - 20px);
}

.ixlambda-input::placeholder {
  color: var(--ixlm-text);
  opacity: 1;
}

/* ---------- MODALS ---------- */
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
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
${htmlStyles}
<!--<iframe id="ixlambda-block-checker" src="" style="display: none;"></iframe>-->
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
                    <option value="overcloaked">OverCloaked SORRY DOES NOT WORK</option>
                    <option value="fern">Fern</option>
                    <option disabled value="infamous">Infamous</option>
                    <option value="gnmath">GN-Math</option>
                    <option disabled value="dogeub">DogeUB</option>
                    <option disabled value="space">Space</option>
                    <option value="daydreamx">DayDreamX</option>
                </select>
                <button id="ixlambda-launch" class="ixlambda-btn ixlambda-half">Launch</button>
            </div>
            <hr>
            <span class="ixlambda-description">Javascript Loader</span>
            <button id="ixlambda-scriptix-launch" class="ixlambda-btn">Launch Scriptix</button>
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
                <option value="mocha">Catppuccin Mocha</option>
                <option value="latte">Catppuccin Latte</option>
                <option value="macchiato">Catppuccin Macchiato</option>
                <option value="frappe">Catppuccin Frappé</option>
                <option value="hacker">Pro Haxxor</option>
                <option value="ai">AI Generated</option>
            </select>
			<hr>
            <span class="ixlambda-description">Developer</span>
			<div class="ixlambda-sidebyside">
				<input id="ixlambda-dev-input" class="ixlambda-input" placeholder="Dev Code...">
				<button id="ixlambda-dev-enter" class="ixlambda-btn ixlambda-half">Enter</button>
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
<div id="ixlambda-modal" class="ixlambda-modal hidden">
  <div class="ixlambda-modal-box">
    <div id="ixlambda-modal-content"></div>
    <div id="ixlambda-modal-actions" class="ixlambda-modal-actions"></div>
  </div>
</div>
`;

// Hash function.
function hashString(str) {
    try {
        var h1 = 0xdeadbeef ^ str.length;
        var h2 = 0x41c6ce57 ^ str.length;
        for (var i = 0; i < str.length; i++) {
            var ch = str.charCodeAt(i);
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
    } catch (e) { return null; }
}

// Check for a block!
//function isPageBlocked(url) {
//    var iframeChecker = root.getElementById("ixlambda-block-checker");
//    iframeChecker.src = url;
//    var iframeDoc = iframeChecker.document;
//    var iterator = iframeDoc.createNodeIterator(
//        iframeDoc.documentElement,
//        NodeFilter.SHOW_COMMENT,
//        null
//    );
//    var node;
//    while (node = iterator.nextNode()) {
//        if (node.nodeValue.includes("com.apple.webcontentfilter.accessrestricted")) {
//            return true;
//        }
//    }
//    return false;
//}

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

// Confirm page existence.
if (["about:blank", "about:newtab"].includes(location.href)) {
    window.location.href = "https://google.com/";
    alert("Please re-open the bookmark on this page.");
    throw "IXLAMBDA-FORCE-END";
}

// Check if verified user.
var verifiedUser = localStorage.getItem("ixlambda-verified-user");

// UAF check.
if (!verifiedUser && !/Mac/i.test(window.navigator.userAgent) && !bypassUAF) {
    var userString = prompt("Please enter bypass code:");
    verifiedUser = (hashString(userString) === "74834f35843e9eed");
    if (verifiedUser) localStorage.setItem("ixlambda-verified-user", verifiedUser);
    if (!verifiedUser) {
        // Evil code to inject! >:3
        var htmlDataIT = `
        <!doctype HTML>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Validation Failure</title>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&amp;display=swap" rel="stylesheet">
            <link rel="icon" href="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/IXLambda/assets/img/blocked-favicon.png">
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
            <img width="350" alt="IXLambda Icon" src="https://raw.githubusercontent.com/Augtive85YT/PhiPiBeta/main/IXLambda/assets/img/blocked-favicon.png">
            <h1>Hello! You have failed the validation check.</h1>
            <h2>There is a pop-up if you fail the automatic check, and you must use a bypass password.<br>If you do not have a bypass password, I have likely not approved your usage of this program.<hr>This is meant to combat blocking from the I.T. department.</h2>
        </body>
        </html>
        `;

        // Eradicate page evilly!
        document.open();
        document.write(htmlDataIT);
        document.close();

        // Add evil console notes. >:3
        console.log("%cGet out of the console, you are not slick.", "color: red; font-size: 24px; font-weight: bold;");
        console.log("%cAlso, I am a few steps ahead of you.", "color: #f38ba8; font-size: 16px; font-weight: bold;");
        console.log("%cPlease, just leave us alone...", "color: #eba0ac; font-size: 16px;");
        throw "IXLAMBDA-FORCE-END";
    }
}

// Main function.
if (verifiedUser && document.getElementById("ixlambda-host")) {
    // Complain about duplicates.
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
    var content = showPanel.closest("#ixlambda-content");
    if (!content) return;
    content.style.height = content.offsetHeight + "px";
    hidePanel.style.transition = "opacity 0.1s ease";
    hidePanel.style.opacity = "0";
    setTimeout(() => {
        hidePanel.classList.add("hidden");
        hidePanel.style.opacity = "";
        showPanel.classList.remove("hidden");
        showPanel.style.opacity = "0";
        var newHeight = showPanel.scrollHeight;
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
    var themes = {
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
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
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
            "--ixlm-round-radius": "100px",
            "--ixlm-circle-radius": "50%",
            "--ixlm-blur": "16px",
            "--ixlm-anim-time": "0.3s",
            "--ixlm-font": '"JetBrains Mono", monospace'},
        macchiato: {
            "--ixlm-bg": "rgba(54, 58, 79, 0.9)",
            "--ixlm-header": "rgba(36, 39, 58, 0.9)",
            "--ixlm-control-bg": "#1e2030",
            "--ixlm-text": "#cad3f5",
            "--ixlm-accent": "#ed8796",
            "--ixlm-accent-hover": "#ee99a0",
            "--ixlm-btn-text": "#181926",
            "--ixlm-border": "#626880",
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
            "--ixlm-bg": "rgba(65, 69, 89, 0.9)",
            "--ixlm-header": "rgba(48, 52, 70, 0.9)",
            "--ixlm-control-bg": "#292c3c",
            "--ixlm-text": "#c6d0f5",
            "--ixlm-accent": "#ca9ee6",
            "--ixlm-accent-hover": "#f4b8e4",
            "--ixlm-btn-text": "#232634",
            "--ixlm-border": "#626880",
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

// Saved proxy.
var proxySelector = root.getElementById("ixlambda-proxy-selector");
proxySelector.onchange = ()=> {
    var proxy = proxySelector.value;
    localStorage.setItem("ixlambda-proxy", proxy);
};
var savedProxy = localStorage.getItem("ixlambda-proxy");
if (savedProxy) { proxySelector.value = savedProxy; }

// Button code.
root.getElementById("ixlambda-launch").addEventListener("click", () => {
    openLink("https://" + links[root.getElementById("ixlambda-proxy-selector").value]);
});
root.getElementById("ixlambda-scriptix-launch").addEventListener("click", () => {
    var script = document.createElement("script");
    script.src = "https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/main.js";
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
