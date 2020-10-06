const searchInput = document.getElementById('search');
const rows = document.querySelectorAll('tbody tr');

searchInput.addEventListener('input', e => {

  const valueInput = e.target.value.toLowerCase();

  rows.forEach( row => {
    row.querySelector('td').textContent.toLowerCase().startsWith(valueInput) ? 
    row.style.display = "table-row" : row.style.display = "none";
  })
})