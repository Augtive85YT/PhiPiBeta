// I walked on my keyboard. (Get it, because I'm a furry? No? OK. 3:)
var overcloakedLink = `${atob("aHR0cHM6Ly8=")}figswriu${atob("LmJlYW53ZWIucXp6LmlvLmNkbi5jbG91ZGZsYXJlLm5ldC8=")}`;
var fernLink = `${atob("aHR0cHM6Ly8=")}${atob("c3RvcmFnZS5nb29nbGVhcGlzLmNvbS9mZXJuaXNiZXN0L2luZGV4Lmh0bWw=")}`;
var seleniteLink = ``;
var dayDreamXLink = `${atob("aHR0cHM6Ly8=")}com${atob("LmluZm8ubm9ydGgta2F6YWtoc3Rhbi5zdS5jZG4uY2xvdWRmbGFyZS5uZXQv")}`;


// Developer stuff! :3
var bypassUAF = false;
var devTools = false;

// HTML body data to inject.
var htmlData = `
<style class="ixlambda-destroy">
#ixlambda-gui {
    width: 220px;
    background: #313244;
    color: #cdd6f4;
    position: fixed;
    top: 100px;
    left: 100px;
    border-radius: 6px;
    z-index: 99999999;
}

#ixlambda-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0 0;
    padding: 8px;
    background: #1e1e2e;
}

#ixlambda-header button {
    width: 24px;
    height: 24px;
    justify-content: center;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    padding: 0;
}

#ixlambda-header button:hover {
    background: rgba(205, 214, 244, 0.08);
}

#ixlambda-content {
    overflow: hidden;
    transition: max-height 0.3s ease;
    max-height: 500px;
}

#ixlambda-content-inner {
    padding: 0 10px 10px 10px;
}

#ixlambda-gui.minimized #ixlambda-header {
    transition: border-radius 0.3s steps(1, end);
    border-radius: 6px;
}

#ixlambda-minimize {
    color: #f9e2af;
    transition-duration: 0.3s;
}

#ixlambda-gui.minimized #ixlambda-minimize {
    color: #a6e3a1
}

#ixlambda-gui.minimized #ixlambda-content {
  max-height: 0;
  opacity: 0;
}

.ixlambda-btn {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: none;
    border-radius: 6px;
    transition-duration: 0.2s;
    cursor: pointer;
    background: #89b4fa;
    color: #11111b;   
}

.ixlambda-btn:hover {
    background-color: #b4befe
}

.ixlambda-btn:active {
    transform: translateY(1px);
}

#ixlambda-selector {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: #89b4fa;
    color: #11111b;
}

.ixlambda-sidebyside {
    display: flex;
    gap: 6px;
}

#ixlambda-gui hr {
    color: #6c7086;
}
</style>

<div id="ixlambda-gui">
    <div id="ixlambda-header">
        <span><b>IXLambda Loader</b></span>
        <div>
            <button id="ixlambda-minimize">⬤</button>
            <button id="ixlambda-close" style="color: #f38ba8;">⬤</button>
        </div>
    </div>

    <div id="ixlambda-content">
        <div id="ixlambda-content-inner">
            <div class="ixlambda-sidebyside">
                <select id="ixlambda-selector">
                    <option value="overcloaked">OverCloaked</option>
                    <option value="fern">Fern</option>
                    <option value="selenite">Selenite</option>
                    <option value="daydreamx">DayDreamX</option>
                </select>
                <button id="ixlambda-launch" class="ixlambda-btn" style="width: 50%;">Launch</button>
            </div>
            <!--<br>
            <button id="mstaums-launch" class="ixlambda-btn">MSTaums</button>-->
            <hr>
            <span>Made by SUDO UwU</span>
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
		<p>-ΦΠΒ's Owner SUDO UwU</p>
	</body>
</html>
`;

// User agent filtration.
if (/Mac/i.test(window.navigator.userAgent) || bypassUAF) {
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
        document.querySelectorAll('.ixlambda-destroy').forEach(e => e.remove());
        gui.remove();
    });

    // The actual loader code.
    document.getElementById("ixlambda-launch").addEventListener("click", () => {
        var currentText = document.getElementById("ixlambda-selector").value;
        switch (currentText) {
            case "overcloaked":
                window.open(overcloakedLink, "");
                break;
            case "fern":
                window.open(fernLink, "");
                break;
            case "selenite":
                alert("Sorry, Selenite links are really restricted.");
                // window.open(seleniteLink, "");
                break;
            case "daydreamx":
                window.open(dayDreamXLink, "");
                break;
        }
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
    console.log("IXLambda loaded successfully! :3");
    console.log("Maintained by ΦΠΒ's Owner!");
    console.log("Lovingly made by SUDO! UwU");
} else {
    // Eradicate page evily!
    document.open();
    document.write(htmlDataIT);
    document.close();

    // Add evil console notes. >:3
    console.log("Get out of the console, you are not slick.");
    console.log("Also, I am a few steps ahead of you... The original link is encrypted, along with the code being hidden...")
    console.log("Please, just leave us alone...");
}
