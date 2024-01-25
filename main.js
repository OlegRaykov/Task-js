const dropdown = document.getElementById('dropdown');
const inputText = document.getElementById('inputText');
const saveButton = document.getElementById('saveButton');

    dropdown.addEventListener('change', function() {
      inputText.value = dropdown.options[dropdown.selectedIndex].text;
    });
saveButton.addEventListener('click', function() {
dropdown.options[dropdown.selectedIndex].text = inputText.value;
    });