const dropdown = document.getElementById('dropdown');
const inputText = document.getElementById('inputText');
const saveButton = document.getElementById('saveButton');

    dropdown.addEventListener('change', function() {
      inputText.value = dropdown.options[dropdown.selectedIndex].text;
    });

saveButton.addEventListener('click', function() {
const selectedIndex = dropdown.selectedIndex;
const inputValue = inputText.value.trim();
if (inputValue !== '' && inputValue !== ' ') {
dropdown.options[selectedIndex].text = inputValue;
}
});