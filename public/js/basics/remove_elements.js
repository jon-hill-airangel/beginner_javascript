var parent = document.querySelector('.parent');
var ul = parent.querySelector('ul');
parent.removeChild(ul);

// not used in some older browsers
ul.remove();