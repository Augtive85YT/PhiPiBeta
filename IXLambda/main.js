(() => {
// Cat on keyboard, sorrtargshrsgwya.
const cloudflareCDN = atob("LmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .cdn.cloudflare.net/
const beanwebCloudflare = atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8="); // .beanweb.qzz.io.cdn.cloudflare.net/
const bunnyCDN = atob("LmItY2RuLm5ldC8="); // .b-cdn.net/
const northKazCloudflare = atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv"); // .info.north-kazakhstan.su.cdn.cloudflare.net/
const amazonAWS = atob("czMuYW1hem9uYXdzLmNvbS8="); // s3.amazonaws.com/
const googleAPI = atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS8=" ); // storage.googleapis.com/

// Some stuff I think?
const links = {
    // Main links.
    overcloaked: `overunder2${bunnyCDN}`,
    fern: `${googleAPI}fernisbest/index.html`, // Block this and I'll sell your soul.
    infamous: `${atob("c2Nob29sb2d5LmNvbS5uYXJiYWhhZHVyY2hhdWRoYXJ5LmNvbS5ucC8=")}`,
    gnmath: `prageru-server.${amazonAWS}mathematics.html`,
    endis: `BLOCKED`,
    dogeub: `canvas-lms.${googleAPI}index.html`,
    space: `BLOCKED`,
    frogiesarcade: `BLOCKED`,
    daydreamx: `${googleAPI}daydreaming/dist/index.html`,

    // Backup links
    overcloaked_1: `mzn8q00b${beanwebCloudflare}`,
    overcloaked_2: `overunder3${bunnyCDN}`,
    overcloaked_3: `overunder4${bunnyCDN}`,
    fern_01: `${atob("aGVscC5yZXNlYXJjaC5saWdodHNwZWUuZC50cmlidW1hdGVybmF0ZS5jbC8=")}`,
    daydreamx_01: `trigonometery.is-a.software${cloudflareCDN}`,
    daydreamx_02: `space${northKazCloudflare}`
};

// Developer stuff! :3
const bypassUAF = false;
const devTools = false;
const ixlmVersion = "v3.5.1";

const themeBase = {
    "--ixlm-radius": "6px",
    "--ixlm-round-radius": "100px",
    "--ixlm-circle-radius": "50%",
    "--ixlm-blur": "16px",
    "--ixlm-anim-time": "0.3s",
    "--ixlm-font": '"JetBrains Mono", monospace'
};

const themes = {
    mocha: {
        ...themeBase,
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
        "--ixlm-close": "#f38ba8" // Red
    },
    latte: {
        ...themeBase,
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
        "--ixlm-close": "#d20f39"
    },
    macchiato: {
        ...themeBase,
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
        "--ixlm-close": "#ed8796"
    },
    frappe: {
        ...themeBase,
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
        "--ixlm-close": "#e78284"
    },
    hacker: {
        ...themeBase,
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
        "--ixlm-anim-time": "0.1s"
    },
    ai: {
        ...themeBase,
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
        "--ixlm-close": "#fb7185"
    }
};

// HTML body data to inject.
const htmlData = `
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
<style>
#ixlm-gui {
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

#ixlm-gui.ixlm-minimized {
    max-width: 300px;
    transition: max-width var(--ixlm-anim-time) ease;
}

#ixlm-header {
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

#ixlm-controls {
    display: flex;
    gap: 12px;

    padding: 8px;
    border-radius: var(--ixlm-round-radius);
    background: var(--ixlm-control-bg);
}

#ixlm-header button {
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

#ixlm-header button:hover {
    filter: brightness(1.1);
}

#ixlm-header svg {
    padding-left: 8px;
}

#ixlm-gui.ixlm-minimized #ixlm-header {
    border-radius: var(--ixlm-radius);
    max-width: 300px;
    transition: max-width var(--ixlm-anim-time) ease;
}

#ixlm-minimize {
    background: var(--ixlm-min);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlm-close {
    background: var(--ixlm-close);
    transition: background var(--ixlm-anim-time);
}

#ixlm-gui.ixlm-minimized #ixlm-minimize {
    background: var(--ixlm-min-active);
    transition: filter 0.2s, background var(--ixlm-anim-time);
}

#ixlm-layout {
    display: flex;
    overflow: hidden;
    height: 300px;
    border-radius: 0 0 var(--ixlm-radius) var(--ixlm-radius);
    
    background: var(--ixlm-bg);
    backdrop-filter: blur(var(--ixlm-blur));
}

#ixlm-gui.ixlm-minimized #ixlm-layout {
    height: 0;
    transition: height var(--ixlm-anim-time) ease;
}

#ixlm-sidebar {
    display: flex;
    flex-direction: column;
    background: var(--ixlm-header);
    outline: 1px solid var(--ixlm-border);
    padding: 8px;
    gap: 8px;
}

.ixlm-nav-item {
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

.ixlm-nav-item:hover {
    background: var(--ixlm-contrast);
}

.ixlm-nav-item.active {
    color: var(--ixlm-btn-text);
    background: var(--ixlm-accent);
}

#ixlm-content {
    position: relative;
    padding: 8px;
    width: 100%;
}

.ixlm-panel {
    width: 100%;
    height: 100%;
    opacity: 1;
}

.ixlm-panel.hidden {
    display: none;
}

.ixlm-panel iframe {
    border: none;
}

.ixlm-surface {
    background: var(--ixlm-surface);
    border-radius: var(--ixlm-radius);
    padding: 8px;
}

#ixlm-layout span {
    display: block;
    margin: 8px 0;
}

.ixlm-description {
    font-size: 14px;
}

.ixlm-parallel {
    display: flex;
    gap: 6px;
    align-items: center;
}

.ixlm-btn, .ixlm-selector, .ixlm-input {
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

.ixlm-btn {
    height: 40px;
    transition: background 0.2s, transform 0.1s;
}

.ixlm-btn:hover {
    background: var(--ixlm-accent-hover);
}

.ixlm-btn:active {
    transform: translateY(1px);
}

.ixlm-half {
    width: 50%;
}

.ixlm-icon-btn {
    width: 40px;
    padding: 10px;
}

.ixlm-input {
    height: 20px;
}

.ixlm-input::placeholder {
  color: var(--ixlm-btn-text);
  opacity: 1;
}

.ixlm-footer {
    display: flex;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: space-between;
}

.ixlm-footer span {
    font-size: 12px;
}

#ixlm-gui hr {
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
<div id="ixlm-gui">
    <div id="ixlm-header">
        <div class="ixlm-parallel">
            <div id="ixlm-controls">
                <button id="ixlm-close"></button>
                <button id="ixlm-minimize"></button>
            </div>
            <i data-lucide="server-cog" width="18" height="18"></i>
            <b>IXLambda Loader</b>
        </div>
    </div>
    <div id="ixlm-layout">
        <div id="ixlm-sidebar">
            <button id="ixlm-nav-home" class="ixlm-nav-item active" value="home">
                <i data-lucide="house" width="20" height="20"></i>
                <span>Home</span>
            </button>
            <button id="ixlm-nav-proxies" class="ixlm-nav-item" value="proxies">
                <i data-lucide="globe-lock" width="20" height="20"></i>
                <span>Proxies</span>
            </button>
            <button id="ixlm-nav-settings" class="ixlm-nav-item" value="settings">
                <i data-lucide="cog" width="20" height="20"></i>
                <span>Settings</span>
            </button>
            <div class="ixlm-footer">
                <span>${ixlmVersion}</span>
            </div>
        </div>
        <div id="ixlm-content">
            <div id="ixlm-home-page" class="ixlm-panel">
                <div class="ixlm-surface">
                    <span style="font-size: 24px">Sorry about a few bugs here and there, I had to implement a huge overhaul in 2 days. :sob:</span>
                    <br>
                    <span>P.S. (It looks bad right now, but I swear I will fix it! :< )</span>
                </div>
            </div>
            <div id="ixlm-proxies-page" class="ixlm-panel hidden">
                <span class="ixlm-description">Freedom is a universal right.</span>
                <hr>
                <span class="ixlm-description">Proxy Loader</span>
                <div class="ixlm-parallel">
                    <select id="ixlm-proxy-selector" class="ixlm-selector">
                        <option value="overcloaked">OverCloaked</option>
                        <option value="fern">Fern</option>
                        <option value="infamous">Infamous</option>
                        <option value="gnmath">GN-Math</option>
                        <option value="endis">Endis</option>
                        <option value="dogeub">DogeUB</option>
                        <option value="space">Space</option>
                        <option value="frogiesarcade">Frogie's Arcade</option>
                        <option value="daydreamx">DayDreamX</option>
                    </select>
                    <button id="ixlm-proxy-launch" class="ixlm-btn ixlm-half">Launch</button>
                </div>
                <hr>
                <span class="ixlm-description">Javascript Loader</span>
                <button id="ixlm-scriptix-launch" class="ixlm-btn">Launch Scriptix</button>
            </div>
            <div id="ixlm-settings-page" class="ixlm-panel hidden">
                <span class="ixlm-description">Settings</span>
                <hr>
                <span class="ixlm-description">Themes</span>
                <select id="ixlm-theme-selector" class="ixlm-selector">
                    <option value="mocha">Catppuccin Mocha</option>
                    <option value="latte">Catppuccin Latte</option>
                    <option value="macchiato">Catppuccin Macchiato</option>
                    <option value="frappe">Catppuccin FrappÃ©</option>
                    <option value="hacker">Pro Haxxor</option>
                    <option value="ai">AI Generated</option>
                </select>
                <hr>
                <span class="ixlm-description">Data [CURRENTLY UNFINISHED]</span>
		    	<div class="ixlm-parallel">
		    	    <button id="ixlm-export-data" class="ixlm-btn">Export Data</button>
		    	    <button id="ixlm-import-data" class="ixlm-btn">Import Data</button>
		    	    <button id="ixlm-import-data" class="ixlm-btn">Clear Data</button>
		    	</div>
		    	<hr>
                <span class="ixlm-description">Developer [CURRENTLY UNFINISHED]</span>
		    	<div class="ixlm-parallel">
		    		<input id="ixlm-dev-input" class="ixlm-input" placeholder="Dev Code...">
		    		<button id="ixlm-dev-enter" class="ixlm-btn ixlm-half">Enter</button>
		    	</div>
            </div>
        </div>
    </div>
</div>
<div id="ixlm-modal" class="ixlm-modal hidden">
  <div class="ixlm-modal-box">
    <div id="ixlm-modal-content"></div>
    <div id="ixlm-modal-actions" class="ixlm-modal-actions"></div>
  </div>
</div>
`;

// Open as blob URL.
function openLink(link) {
    const linkHtmlData = `
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
        const newTab = window.open(URL.createObjectURL(new Blob([linkHtmlData], { type: "text/html" })), "_blank");
        if (!newTab) { alert("Popup Failed! 3:"); }
    } catch (err) {
        console.error("Link launching failed:", err);
    }
}

// Modal magic!
function showModal(options) {
    const modal = root.getElementById("ixlm-modal");
    const content = root.getElementById("ixlm-modal-content");
    const actions = root.getElementById("ixlm-modal-actions");
    const inputs = [];

    content.innerHTML = "";
    actions.innerHTML = "";

    // Add message.
    const msgSpan = document.createElement("span");
    msgSpan.textContent = options.message || "";
    content.appendChild(msgSpan);

    // Add text inputs.
    if (options.inputs) {
        options.inputs.forEach((opt) => {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = opt.placeholder || "";
            input.value = opt.value || "";
            content.appendChild(input);
            inputs.push(input);
        });
    }

    // Add buttons.
    options.buttons.forEach((btn) => {
        const button = document.createElement("button");
        button.className = "ixlm-btn";
        button.textContent = btn.text;
        button.addEventListener("click", () => {
            const values = inputs.map((input) => input.value);
            if (btn.onClick) { btn.onClick(values); }
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
        for (let i = 0; i < str.length; i += 1) {
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
const blockHtmlData = `
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
let verified = localStorage.getItem("ixlm-valid-user") || bypassUAF;

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
localStorage.setItem("ixlm-valid-user", "true");

// Confirm page existence.
if (["about:blank", "about:newtab"].includes(location.href)) {
    window.location.href = "https://google.com/";
    alert("Please re-open the bookmark on this page.");
    throw "IXLM-FORCE-END";
}

// Complain about duplicates.
if (document.getElementById("ixlm-host")) {
    alert("Another instance of IXLambda exists, please use the current instance.");
    console.log("%cAnother instance of IXLambda exists, please use the current instance.", "color: #89b4fa; font-size: 16px;");
    throw "IXLM-FORCE-END";
}

// Create IXLambda div.
const host = document.createElement("div");
host.id = "ixlm-host";
document.body.appendChild(host);

// Spooky shadow div!
const root = host.attachShadow({ mode: "open" });

// Load HTML data.
root.innerHTML = htmlData;

// Get GUI elements.
const gui = root.getElementById("ixlm-gui");
const header = root.getElementById("ixlm-header");

// Minimize and close functions.
root.getElementById("ixlm-minimize").addEventListener("click", () => {
    gui.classList.toggle("ixlm-minimized");
});
root.getElementById("ixlm-close").addEventListener("click", () => {
    root.querySelectorAll(".ixlm-destroy").forEach((element) => element.remove());
    if (devTools && window.eruda) { eruda.destroy(); }
    document.getElementById("ixlm-host").remove();
});

// Button code.
root.getElementById("ixlm-proxy-launch").addEventListener("click", () => {
    openLink(`https://${links[root.getElementById("ixlm-proxy-selector").value]}`);
});
root.getElementById("ixlm-scriptix-launch").addEventListener("click", () => {
    const script = document.createElement("script");
    script.src = "https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/main.js";
    document.head.appendChild(script);
});

// Setup switching buttons.
const sideBarButtons = root.querySelectorAll(".ixlm-nav-item");
sideBarButtons.forEach((el) => {
    el.onclick = () => {
        sideBarButtons.forEach((button) => button.classList.remove("active"));
        el.classList.add("active");
        root.querySelectorAll(".ixlm-panel").forEach((panel) => panel.classList.add("hidden"));
        root.getElementById(`ixlm-${el.value}-page`).classList.remove("hidden");
        localStorage.setItem("ixlm-page", el.value);
    };
});

// Links blocked?
Object.keys(links).forEach((key) => {
    if (links[key] === "BLOCKED") {
        const badLink = root.getElementById("ixlm-proxy-selector").querySelector(`option[value="${key}"]`);
        if (badLink) {
            badLink.disabled = true;
            badLink.selected = false;
        }
    }
});

// Lucide implementation.
const lucideScript = document.createElement("script");
lucideScript.src = "https://unpkg.com/lucide@0.577.0/dist/umd/lucide.min.js";
lucideScript.onload = () => { lucide.createIcons({root: root}); };
root.appendChild(lucideScript);

// Initialize Eruda dev tools.
if (devTools) {
    const erudaScript = document.createElement("script");
    erudaScript.src = "https://cdn.jsdelivr.net/npm/eruda";
    erudaScript.className = "ixlm-destroy";
    erudaScript.onload = () => { eruda.init(); };
    document.head.appendChild(erudaScript);
}

// Theme handling.
function setTheme(theme) {
    if (!themes[theme]) {
        return;
    }

    // Find correct theme.
    Object.entries(themes[theme]).forEach(([key, value]) => {
        gui.style.setProperty(key, value);
    });
}

// Saved theme.
const themeSelector = root.getElementById("ixlm-theme-selector");
themeSelector.onchange = () => {
    const theme = themeSelector.value;
    setTheme(theme);
    localStorage.setItem("ixlm-theme", theme);
};
const savedTheme = localStorage.getItem("ixlm-theme");
if (savedTheme && themes[savedTheme]) { setTheme(savedTheme); themeSelector.value = savedTheme; }

// Saved page.
const savedPage = localStorage.getItem("ixlm-page");
if (savedPage && root.getElementById(`ixlm-nav-${savedPage}`) && root.getElementById(`ixlm-${savedPage}-page`)) {
    sideBarButtons.forEach((button) => button.classList.remove("active"));
    root.getElementById(`ixlm-nav-${savedPage}`).classList.add("active");
    root.querySelectorAll(".ixlm-panel").forEach((panel) => panel.classList.add("hidden"));
    root.getElementById(`ixlm-${savedPage}-page`).classList.remove("hidden");
}

// Saved proxy.
const proxySelector = root.getElementById("ixlm-proxy-selector");
proxySelector.onchange = () => {
    const proxy = proxySelector.value;
    localStorage.setItem("ixlm-proxy", proxy);
};
const savedProxy = localStorage.getItem("ixlm-proxy");
if (savedProxy) { proxySelector.value = savedProxy; }

// Movement variables.
let dragging = false;
let offsetX = 0;
let offsetY = 0;

// Movement logic.
header.addEventListener("pointerdown", (e) => {
    dragging = true;
    offsetX = e.clientX - gui.offsetLeft;
    offsetY = e.clientY - gui.offsetTop;
    header.style.cursor = "move";
});
document.addEventListener("pointermove", (e) => {
    if (!dragging) { return; }
    gui.style.left = `${e.clientX - offsetX}px`;
    gui.style.top = `${e.clientY - offsetY}px`;
});
document.addEventListener("pointerup", () => {
    dragging = false;
    header.style.cursor = "";
});

// Add silly console notes.
console.log("%cIXLambda loaded successfully! :3", "color: #74c7ec; font-size: 24px; font-weight: bold;");
console.log("%cMaintained by ΦΠΒ's Owner!", "color: #89b4fa; font-size: 16px;");
console.log("%cLovingly made by SUDO! UwU", "color: #f38ba8; font-size: 16px; font-weight: bold;");
})();
