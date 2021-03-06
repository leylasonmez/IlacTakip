// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    pink: '#ff9cf7'
    mainColor1: '#A167CC', // light purple
    mainColor2: '#AB2134', // cherry
    whiteBlue: '#F5F6FA', // white-ish blue
    borderGrey: '#9CA3B7', // medium grey
    lightGrey: '#CBC9D9', // light grey
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

const auth = {
    background: 'auth/background',
    button: 'auth/button',
    touchableText: 'auth/touchableText',
    inputBackground: 'auth/inputBackground',
    inputBorder: 'auth/inputBorder',
    placeholder: 'auth/placeholder',
};

const home = {
};
const settings = {
};
const header = {
};
export const cn = {
    auth,
    home,
    settings,
    header,
};
export const darkColors = {
    // auth
    [auth.background]: toRGBA(constantColors.mainColor1, 60),
    [auth.button]: constantColors.mainColor2,
    [auth.touchableText]: constantColors.mainColor2,
    [auth.inputBackground]: constantColors.whiteBlue,
    [auth.inputBorder]: constantColors.borderGrey,
    [auth.placeholder]: constantColors.lightGrey,
    // home

    // settings
    //header
};
export const lightColors = {
    // auth
    [auth.background]: toRGBA(constantColors.mainColor1, 60),
    [auth.button]: constantColors.mainColor2,
    [auth.touchableText]: constantColors.mainColor2,
    [auth.inputBackground]: constantColors.whiteBlue,
    [auth.inputBorder]: constantColors.borderGrey,
    [auth.placeholder]: constantColors.lightGrey,
},

export const colorNames = {
    auth: {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText',
    },
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.pink, // ??rnek
};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.pink, // ??rnek
};