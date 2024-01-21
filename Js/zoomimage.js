function zoomImage(element) {
    const container = document.createElement('div');
    container.classList.add('zoomed-container');
    const clonedImage = element.cloneNode(true);
    clonedImage.classList.add('zoomed-image');
    container.appendChild(clonedImage);
    document.body.appendChild(container);
    container.addEventListener('click', function () {
      document.body.removeChild(container);
    });
  }
  const hotelImages = document.querySelectorAll('.hotel-img');
  hotelImages.forEach(function (image) {
    image.addEventListener('click', function () {
      zoomImage(image);
    });
  });