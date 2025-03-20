const shoppingList = [];
 
 //  Utility functions for DOM manipulation
 function createAnElement(element) {
 	return document.createElement(element);
 }
 
 function addText(element, text) {
 	return (element.innerText = text);
 }
 
 function appendChild(parentElement, childElement) {
 	return parentElement.appendChild(childElement);
 }
 
 function select(selector) {
 	return document.querySelector(selector);
 }
 
 function listen(element, event, callback) {
 	return element.addEventListener(event, callback);
 }
 
 function addAttribute(element, attribute, content) {
 	return element.setAttribute(attribute, content);
 }
 
 listen(document, 'DOMContentLoaded', displayItems);
 
 const ol = select('ol');
 
 function displayItems() {
    ol.innerHTML = ""
 	shoppingList.forEach(createAListItem)
 }

 function createAListItem(item) {
    const li = createAnElement('li')
    addText(li, item)
    appendChild(ol, li)

    listen(li, 'click',() => toggleChecked(li))

 }


 function toggleChecked(li) {
    li.classList.toggle('checked')
}

// const form = document.querySelector("form")
const form = select('form')

// form.addEventListener("submit", addItem)
listen(form, "submit", addItem)

function addItem(event) {
    event.preventDefault()

    shoppingList.push(event.target[0].value)

    displayItems()

    event.target.reset()
}

// const deleteButton = document.querySelector('delete')
const deleteButton = select('.delete')

// deleteButton.addEventListener("click", clearList )
listen(deleteButton, 'click', clearList)

function clearList (){
    shoppingList.splice(0)
    // shoppingList.length(0)

    console.log(shoppingList);

    displayItems()
}
