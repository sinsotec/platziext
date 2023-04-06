const platziClases = 'https://platzi.com/clases/'
const platziBlog = 'https://platzi.com/blog/'
const platziComments = 'https://platzi.com/comentario/'

let state = {};

chrome.runtime.onInstalled.addListener(() => {
    state = {};
});

chrome.tabs.onUpdated.addListener((tabID, change, tab) => {
    if (state[tab.id]) {
        state[tab.id] = {
            url: tab.url,
            state: false
        };
    }
})

const activateExt = async (tab, cssFile) => {

    if (!state[tab.id]) {
        state[tab.id] = {
            url: tab.url,
            state: true
        };
    } else if (state[tab.id].url != tab.url) {
        state[tab.id] = {
            url: tab.url,
            state: true
        };
    } else {
        state[tab.id].state = !state[tab.id].state;
    }

    if (state[tab.id].state) {
        // Insert the CSS file change icon when the user turns the extension on
        await chrome.scripting.insertCSS({
            files: [cssFile],
            target: { tabId: tab.id }
        });
        await chrome.action.setIcon({
            tabId: tab.id,
            path: {
                "32": "images/platzitoolza_blanco-32.png"
            }
        });
    } else {
        // Remove the CSS file and change icon when the user turns the extension off
        await chrome.scripting.removeCSS({
            files: [cssFile],
            target: { tabId: tab.id }
        });
        await chrome.action.setIcon({
            tabId: tab.id,
            path: {
                "32": "images/platzitoolza2_negro-32.png"
            }
        });
    }
}


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(platziClases)) {
        await activateExt(tab, 'hideComments.css')
    }
    if (tab.url.startsWith(platziBlog)) {
        await activateExt(tab, 'darkmodeBlog.css')
    }
    if (tab.url.startsWith(platziComments)) {
        await activateExt(tab, 'darkmodeComments.css')
    }
});

