const removeElements = document.querySelectorAll(".fn-remove-me");


for (let element of removeElements) {
    element.parentNode.removeChild(element);
}