import {light, dark} from './theme';

let active = light;
// let availableThemes = [light, dark];

// let getAvailableThemes = () => {
//     return availableThemes;
// }

export let getActiveTheme = () => {
    return new Promise(function(resolve) {
        chrome.storage.local.get(['isDark'], (result) => {
            resolve(result.isDark);
        })
    })
}

export let isDarkTheme = () => {
    return active.name === dark.name;
}

export let setDarkTheme = () => {
    setActiveTheme(dark);
    chrome.storage.local.set({isDark: true})
}
export let setLightTheme = () => {
    setActiveTheme(light);
    chrome.storage.local.set({isDark: false})
}

let setActiveTheme = (theme) => {
    active = theme;

    Object.keys(active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        active.properties[property]
      );
    });
    
  }