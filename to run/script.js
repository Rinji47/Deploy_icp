  var vapiInstance = null;
  const assistant = "d9a654cc-c107-4042-b00d-c4973c224b6d"; 
  const apiKey = "62923f82-e725-4088-889d-1e19643ab89d"; 
  const buttonConfig = {}; 

  (function (d, t) {
    var g = document.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
      vapiInstance = window.vapiSDK.run({
        apiKey: apiKey, 
        assistant: assistant, 
        config: buttonConfig, 
      });
    };
  })(document, "script");
