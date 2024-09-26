const selectElm = (elm) => document.querySelector(elm);

const setStyle = (elm, style) => Object.assign(elm.style, style);

const setText = (elm, text) => (elm.textContent = text);

export { selectElm, setStyle, setText };
