const imageArray = [
    '../img/food.jpg',
    '../img/food.jpg',
    '../img/food.jpg'
];

const recomendados = document.getElementById('recomendados');


imageArray.forEach(imageUrl => {
    
    const a = document.createElement('a');
    const card = document.createElement('div');
    const card_head = document.createElement('div');
    const card_body = document.createElement('div');
    const img = document.createElement('img');
    a.href = 'item.html';
    img.src = imageUrl;
    card.className = 'card';
    card_head.className = 'card-head';
    card_body.className = 'card-body';
    img.alt = 'Dog food';
    img.id = 'products';
    img.style.width = '100px';
    img.style.height = '100px';


    
    card.style = 'max-width: 150px;';
    
    card_head.textContent = 'Pedigree';
    a.appendChild(img);
    card_body.appendChild(a);
    card.appendChild(card_head);
    card.appendChild(card_body);
    recomendados.appendChild(card);
});