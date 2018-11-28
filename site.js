// console.log("hello World")

(function(){
  // Check to make sure essential features are supported
  if (typeof document.querySelector === "undefined") {
    // No? Then bye!!!
    return;
  }

  document.addEventListener("DOMContentLoaded", function(){
    // Diagnostic...make sure DOMContentLoaded has fired...
    console.log("OMG the DOM has loaded!");

    // Grab the HTML element:
    var html_tag = document.querySelector("html");

    // Go and remove the .nojs class from <html>...
    html_tag.classList.remove("nojs");

    // And then add the .js class to <html>:
    html_tag.classList.add("js");
    var heading_label = "Show Less";
    var heading = document.querySelector(".show-more-section")
    var showButton = document.querySelector(".button")
    showButton.addEventListener("click", function(){
      var content = document.querySelector(".show-more-section");
      var label = document.querySelector(".button")
      content.classList.toggle("hidden");
      content.classList.toggle("showstyle");
      if (label.textContent === heading_label) {
        label.textContent = "Show More";
      }
      else {
        label.textContent = heading_label;
        content.style.display="flex"
      }
    })
  });
})();
//   console.log("Hello from JavaScript! You have querySelector!");
// })();
