window.onload = function() {
    // Define an array of phone manufacturers
    var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
  
    // Start building the dropdown HTML
    var dropdownHTML = '<select>';
  
    // Loop through each manufacturer and add it as an option
    for (var i = 0; i < phoneManufacturers.length; i++) {
      dropdownHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
    }
  
    // Close the select element
    dropdownHTML += '</select>';
  
    // Write the dropdown HTML to the document
    document.write(dropdownHTML);
  };