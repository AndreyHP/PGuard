const imageArray = [
    './img/food.jpg',
    './img/food.jpg',
    './img/food.jpg'
];

const imageContainer = document.getElementById('image-container');

imageArray.forEach(imageUrl => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = 'item.html';
    img.src = imageUrl;
    img.alt = 'Dog food';
    img.id = 'products';
    img.style.width = '100px';
    img.style.height = '100px';
    a.appendChild(img);
    imageContainer.appendChild(a);
});