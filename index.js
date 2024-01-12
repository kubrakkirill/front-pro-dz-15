document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('textInput');
  const addButton = document.getElementById('addButton');
  const itemList = document.getElementById('itemList');

  addButton.addEventListener('click', function () {
    const text = input.value.trim();
    if (text !== '') {
      addItem(text);
      input.value = '';
    }
  });

  itemList.addEventListener('click', function (event) {
    if (event.target.classList.contains('button')) {
      event.target.parentNode.remove();
    }
  });

  function addItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('button');

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
  }
});