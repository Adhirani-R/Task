function openPopup(src) {
    const popup = document.querySelector('.popup');
    const popupImg = document.getElementById('popup-img');

    popupImg.src = src;
    popup.style.display = 'flex';
  }

  function closePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
  }