const file_path = "../api/items.json";
const storeContainer = document.getElementById('main-store');
const imageContainer = document.getElementById('item-container');
const itname = sessionStorage.getItem("itemname");
const itemimg = sessionStorage.getItem("itemimage");

async function loadPetFoods(jsonPath) {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading JSON:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  }

  // Function to display the pet food data in the console
  async function displayPetFoods() {
    try {
      
        const data = await loadPetFoods(file_path);
        const petFoodItem = data.petFoods[0];
        const brand = petFoodItem.brands[1];
          
        const img = document.createElement('img');
            
        const p_tittle = document.createElement('p');
        
        p_tittle.textContent = itname;
        img.src = itemimg; 
        img.alt = `${brand.name}`;
        img.id = 'products';
        img.style.width = '300px';
        img.style.height = '300px';
       
        imageContainer.appendChild(p_tittle);
        imageContainer.appendChild(img);

      
    } catch (error) {
      console.error('Error displaying pet foods:', error);
    }
  }


async function showItem(){
    
    const p = document.createElement('p');
    const btn = document.createElement('button');
    const aside = document.createElement('aside');
    btn.textContent = 'Add ao carrinho';
   
    aside.id = 'aside-p';
    aside.appendChild(btn);
    aside.appendChild(p);
    storeContainer.appendChild(aside);
}
 // Trigger the display of pet foods when the script loads
displayPetFoods();
showItem();
