// ==UserScript==
// @name         Reddit Place - NG Logo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pour que NG soit aussi dans le game
// @author       Katchan
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://pbs.twimg.com/profile_images/1504429845593440261/R7Jr5lxo_400x400.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://github.com/KatchanNve/reddit-place-ng/raw/main/overlay.png";
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                console.log(i);
                return i;
            })())
        
    }, false);
    
}

//test
