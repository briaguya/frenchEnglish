classToSet = "";

addFrenchEnglishClass = function(element) {
  var spans = Array.from(element.getElementsByClassName)
  if (element.firstElementChild !== null && element.firstElementChild.localName == "span") {
    //we found a separator with text
    if (element.firstElementChild.firstElementChild !== null && element.firstElementChild.firstElementChild.localName == "b") {
      //it's bold, maybe it's telling us it's Engligh or french, let's check!
      if (element.firstElementChild.firstElementChild.innerText == "EN") {
        classToSet = "english";
      }
      if (element.firstElementChild.firstElementChild.innerText == "FR") {
        classToSet = "french";
      }
    }

    // time to set the class
    element.classList.add(classToSet);
  }
}

window.onload = function() {
  var elements = Array.from(document.getElementsByClassName('separator'));
  elements.forEach(addFrenchEnglishClass);
};

hide = function(element) {
  element.classList.add('hideThisLanguage');
}
show = function(element) {
  element.classList.remove('hideThisLanguage');
}

setLanguage = function(lang) {
  var french = Array.from(document.getElementsByClassName('french'));
  var english = Array.from(document.getElementsByClassName('english'));

  french.forEach(hide);
  english.forEach(hide);

  if (lang == 'FR' || lang == 'BOTH') {
    french.forEach(show);
  }
  if (lang == 'EN' || lang == 'BOTH') {
    english.forEach(show);
  }
}