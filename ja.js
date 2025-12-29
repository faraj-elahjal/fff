const btnAlternative = document.getElementById('btn-alternative');
const btnBoycott = document.getElementById('btn-boycott');
const productCards = document.querySelectorAll('.product-card');
const searchBox = document.querySelector('.search-box');

// دالة عامة لتطبيق الفلترة
function filterProducts() {
  const query = searchBox.value.toLowerCase();
  const showAlternative = btnAlternative.classList.contains('active-alternative');
  const showBoycott = btnBoycott.classList.contains('active-boycott');

  productCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    const matchesSearch = productName.includes(query);

    // منطق الفلترة
    if (matchesSearch) {
      if (showAlternative && !card.classList.contains('alternative')) {
        card.style.display = 'none';
      } else if (showBoycott && !card.classList.contains('boycott')) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    } else {
      card.style.display = 'none';
    }
  });
}

// زر البدائل
btnAlternative.addEventListener('click', () => {
  btnAlternative.classList.toggle('active-alternative');
  btnBoycott.classList.remove('active-boycott');
  filterProducts();
});

// زر المقاطعة
btnBoycott.addEventListener('click', () => {
  btnBoycott.classList.toggle('active-boycott');
  btnAlternative.classList.remove('active-alternative');
  filterProducts();
});

// البحث
searchBox.addEventListener('input', filterProducts);