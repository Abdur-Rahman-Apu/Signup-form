const selectElm = (elm) => document.querySelector(elm);

const setStyle = (elm, style) => Object.assign(elm.style, style);

const setText = (elm, text) => (elm.textContent = text);

const setListener = (elm, event, handler) =>
  elm.addEventListener(event, handler);

export { selectElm, setListener, setStyle, setText };
