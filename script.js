/**
 *
 * [ Happy Birthday Kevin Gimbel ]
 *
 * This gift is for my buddy Kevin for his birthday (27.09.2014):
 * 16 h of my time which he can waste on open-source projects. Hurray!
 *
 * 2014 by @TimPietrusky
 *
 */

/*
 * Inject spans around every character of the given element.
 */
Node.prototype.spanInjection = function () {
    // Handle errors
    try {
      var el = this,
        // Content of the element
        string = el.innerHTML,
        // Result
        result = "";
      // Iterate over all characters of the given string
      for (var i = 0; i < string.length; i++) {
        // Surround each character with a span
        result += "<span>" + string.charAt(i) + "</span>";
      }
  
      // Set the new content for the element
      el.innerHTML = result;
  
      // Return the element itself for chaining
      return el;
    } catch (error) {}
  };
  
  // Inject into .logo
  var logo = document.querySelector(".your-present").spanInjection();
  