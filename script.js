
function replaceText(element) {

  // Check if the element has child nodes
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  }

  // Check if the element contains text
  else if (element.nodeType === Text.TEXT_NODE) {

    // Find the word coronavirus
    if (element.textContent.match(/coronavirus/gi)) {

      // Create a new span element
      const newElement = document.createElement('span');

      // Add the rainbow class to the word
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span class="rainbow">$1</span>'
      );

      // Replace the original text
      element.replaceWith(newElement);
    }
  }
}

// Run the function on the webpage
replaceText(document.body);
