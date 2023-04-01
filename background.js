const platziClases = 'https://platzi.com/clases/'
const platziBlog = 'https://platzi.com/blog/'
const platziComments = 'https://platzi.com/comentario/'

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(platziClases)) {
        
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === 'ON') {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.insertCSS({
                files: ['hideComments.css'],
                target: { tabId: tab.id }
            });
        } else if (nextState === 'OFF') {
            // Remove the CSS file when the user turns the extension off
            await chrome.scripting.removeCSS({
                files: ['hideComments.css'],
                target: { tabId: tab.id }
            });
        }
    }


    if (tab.url.startsWith(platziBlog)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === 'ON') {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.insertCSS({
                files: ['darkmodeBlog.css'],
                target: { tabId: tab.id }
            });
        } else if (nextState === 'OFF') {
            // Remove the CSS file when the user turns the extension off
            await chrome.scripting.removeCSS({
                files: ['darkmodeBlog.css'],
                target: { tabId: tab.id }
            });
        }
    }

    if (tab.url.startsWith(platziComments)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === 'ON') {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.insertCSS({
                files: ['darkmodeComments.css'],
                target: { tabId: tab.id }
            });
        } else if (nextState === 'OFF') {
            // Remove the CSS file when the user turns the extension off
            await chrome.scripting.removeCSS({
                files: ['darkmodeComments.css'],
                target: { tabId: tab.id }
            });
        }
    }



});

