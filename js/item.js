const imageContainer = document.getElementById('item-container');
const storeContainer = document.getElementById('main-store');

function showItem(){
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p_tittle = document.createElement('p');
    const btn = document.createElement('button');
    const aside = document.createElement('aside');
    btn.textContent = 'Add ao carrinho';
    p_tittle.textContent = 'Ração Pedigree';
    p.textContent = 'Price: $80.99';
    p.id = 'p-text';
    img.src = './img/food.png';
    img.alt = 'Dog food';
    img.id = 'products';
    img.style.width = '300px';
    img.style.height = '300px';
    aside.id = 'aside-p';
    aside.appendChild(btn);
    imageContainer.appendChild(p_tittle);
    imageContainer.appendChild(img);
    aside.appendChild(p);
    storeContainer.appendChild(aside);
}

showItem();