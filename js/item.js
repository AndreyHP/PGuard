const imageContainer = document.getElementById('item-container');

function showItem(){
    const img = document.createElement('img');
    img.src = './img/food.png';
    img.alt = 'Dog food';
    img.id = 'products';
    img.style.width = '300px';
    img.style.height = '300px';
    imageContainer.appendChild(img);
}

showItem();