//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row
  const tableBody = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  // Append the row to the table
  tableBody.appendChild(row);

  // Clear input fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Delete a book
document.getElementById('book-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to remove this book?')) {
      const row = e.target.parentElement.parentElement;
      row.remove();
    }
  }
});
