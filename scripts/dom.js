// DOM Manipulation Library

function appendToDOM(elementId, htmlString) {
    const elem = document.getElementById(elementId);
    elem.innerHTML = htmlString;
}