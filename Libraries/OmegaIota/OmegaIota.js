// Hash function.
export function hashString(str) {
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

// Core blocker.
export function omegaIota(args = {}) {
    // Default values.
    const {
        htmlData = `
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
            <h2>There is a pop-up if you fail the automatic check, and you must use a bypass password.<br>If you do not have a bypass password, The owner has likely not approved your usage of this.<hr>This is meant to combat blocking from the I.T. department.</h2>
        </body>
        </html>`,
        matchUserAgent = /Mac/i,
        blockList = false,
        passwordHash = null,
        passwordPopupText = "Please enter bypass code:",
        passwordStore = null,
        passwordStoreHash = false,
        requireAll = false
    } = args;

    // Logic combination.
    const combine = requireAll
        ? (a, b) => a && b
        : (a, b) => a || b;

    // Starting state.
    let verified = requireAll;

    // User agent check.
    if (matchUserAgent) {
        const ua = navigator.userAgent;
        const matched = blockList
            ? !matchUserAgent.test(ua)
            : matchUserAgent.test(ua);
        verified = combine(verified, matched);
    }

    // Password check.
    if (passwordHash) {
        const userInput = prompt(passwordPopupText);
        const hashedMatch = passwordHash === hashString(userInput);
        let storedValid = false;
        if (passwordStore) {
            const stored = localStorage.getItem(passwordStore);
            storedValid = passwordStoreHash
                ? stored === passwordHash
                : !!stored;
        }
        verified = combine(verified, hashedMatch || storedValid);

        // Save successful authorization.
        if (passwordStore && verified) {
            localStorage.setItem(
                passwordStore,
                passwordStoreHash ? hashString(userInput) : "1"
            );
        }
    }

    // Final result.
    if (verified) { return true; }
    else {
        document.open();
        document.write(htmlData);
        document.close();
        throw "OMEGAIOTA-BLOCKED";
    }
}
