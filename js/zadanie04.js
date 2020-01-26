//*1
let allElementsSampleClass = document.querySelector('*[class="sample_class"]'); 

function getTagsOfElements(elements) {
    var tab = [];
    
    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].tagName);
    }
    return tab;
}

console.log(getTagsOfElements(allElementsSampleClass));


//*3
var allElementsFromList = document.querySelectorAll('*[class="sample_class_2"] > ul li');
function getInnerTextsOfElements(elements) {
    let tab = [];
    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].innerHTML);
    }
    return tab;
}
console.log(getInnerTextsOfElements(allElementsFromList));



//*4
var allLinks = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
    let tab = [];
    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].href);
    }
    return tab;
}
console.log(getAddressesOfElements(allLinks));


//*5
var child = document.getElementsByClassName('sample_class_3')[0].children;
console.log(getTagsOfElements(child));
