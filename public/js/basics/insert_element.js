var parent = document.querySelector('.parent');
var new_element = document.createElement('div');
new_element.textContent = 'this is some text for the new element';
// parent.appendChild(div);
// parent.insertBefore(div, ul);
// parent.insertAdjacentElement("beforebegin", div); // inserts before parent
// parent.insertAdjacentElement("afterbegin", div); // inserts before parent
// parent.insertAdjacentElement("beforeend", div); // inserts before parent
// parent.insertAdjacentElement("afterend", div); // inserts before parent

parent.insertAdjacentHTML("afterend", '<div>a div</div');