function convertToUpperCase() {
    const fileInput = document.getElementById("fileInput");
    const output = document.getElementById("output");
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const fileContent = e.target.result;
        const convertedContent = fileContent.toUpperCase();
        output.value = convertedContent;
      };
  
      reader.readAsText(file);
    }
  }
  
  function convertToLowerCase() {
    const fileInput = document.getElementById("fileInput");
    const output = document.getElementById("output");
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const fileContent = e.target.result;
        const convertedContent = fileContent.toLowerCase();
        output.value = convertedContent;
      };
  
      reader.readAsText(file);
    }
  }
  