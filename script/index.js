const loading = (value)=>{
  const spiner = document.querySelector('.spiner');
  if(value===true){
    spiner.classList.remove('hidden');

  }
  else{
    spiner.classList.add('hidden');
  }
}


const categoriesLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(response=> response.json())
    .then(data=>displayCategoriesName(data.categories));
}

const displayCategoriesName = (categories)=>{
    const category = document.getElementById('category');
    category.innerHTML = "";
    categories.forEach(categories=>{
        const div = document.createElement('div');
        div.classList.add('hover:bg-green-400', 'hover:text-white','each-catagory');

        div.innerHTML = `<button onclick=" identifyCategories('${categories.id}'); " class= "" >${categories.category_name}</button>`;

        category.appendChild(div);
    })
    selectedCatagory();
}
const identifyCategories =(id)=>{
 loading(true);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayCategories(data.plants))


}

const catchAllTree =()=>{
   loading(true);
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(response=> response.json())
    .then(allData=>displayCategories(allData.plants))
}
const displayCategories = (plants) =>{
    const cardCategory = document.getElementById('card-category');
    cardCategory.innerHTML = "";
    plants.forEach(plant=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
    <figure class="px-5 pt-5">
    <img
      src="${plant.image}"
      alt="plant image"
      class="rounded-xl h-50 w-100" />
    </figure>
    <div class="card-body ">
    <button class="card-title plant-name " onclick ="identifyDetails(${plant.id})">${plant.name}</button>
    <p>${plant.description}</p>

        <div class="flex justify-between items-center">
        <div>
            <button class="btn bg-[#DCFCE7] rounded-3xl">${plant.category}</button>
        </div>
        <div>
            <p class="text-xl font-bold">৳<span class = "each-card-price">${plant.price}</span></p>
        </div>
        </div>

      <button class=" card-button btn btn-primary bg-[#15803D] rounded-3xl">Add to Cart</button>
    </div>
  </div>
    `
    cardCategory.appendChild(div);
    })
    loading(false);
    selectedCard();
}

const selectedCatagory = ()=>{
   const allCategoriesName = document.querySelectorAll('.each-catagory');

for(let categoriesName of allCategoriesName) {

  categoriesName.addEventListener("click", () =>{
    // remove active style from all
    allCategoriesName.forEach(CategoriesName =>
      CategoriesName.classList.remove('bg-green-400', 'text-white',)
    );

    // add active style to clicked one
    categoriesName.classList.add('bg-green-400', 'text-white',);
  });
}
}

const selectedCard = ()=>{
  const allCardButton = document.querySelectorAll('.card-button');

  for(let cardButton of allCardButton){

    cardButton.addEventListener("click", ()=> {
      const card = cardButton.closest(".card");
      const getPlantName = card.querySelector(".plant-name");
      const getPrice = card.querySelector(".each-card-price");
      const price = parseInt(getPrice.innerText);
      const plantName = getPlantName.innerText;
      alert(`${plantName} is being selected!`)
      displayPriceIncart(price,plantName);
    })
  }
}

const displayPriceIncart = (price,name)=>{
       totalPrice(price);
  const cartElement = document.getElementById('cart-element');

  const div = document.createElement('div');
  div.classList.add('flex', 'justify-between', 'items-center', 'bg-[#F0FDF4]', 'p-3',"icon-element");

  div.innerHTML = `
  <div>
            <h1 class="text-xl font-semibold">${name}</h1>
            <p >৳<span class= "price-every-cart">${price}</span> x 1</p>
        </div>
        <div class = "cross-icon">
            <i class="fa-solid fa-xmark "></i>
        </div>

  `
 cartElement.appendChild(div);
crossIconFunctionality();
}
let total = 0;

const totalPrice = (price)=>{

  total = total + price ;

  const priceTotalShow = document.getElementById('total-price')
  priceTotalShow.innerText = ""
  priceTotalShow.innerText = total ;
}

const crossIconFunctionality = ()=>{
const allCrossIcon = document.querySelectorAll('.cross-icon')

for(let icon of allCrossIcon){

  icon.addEventListener("click", ()=>{
    const iconElement = icon.closest('.icon-element');
    const priceOfCart = iconElement.querySelector('.price-every-cart');
    const eachPrice = parseInt(priceOfCart.innerText);
    decreaseTotal(eachPrice);
    iconElement.innerHTML = "";
    iconElement.classList.remove('flex', 'justify-between', 'items-center', 'bg-[#F0FDF4]', 'p-3');
  })
}
}

const decreaseTotal = (price)=>{
total = total - price ;

  const priceTotalShow = document.getElementById('total-price')
  priceTotalShow.innerText = ""
  priceTotalShow.innerText = total ;
}

const identifyDetails = (id)=>{
  loading(true);
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  .then(response=>response.json())
  .then(details=> displayDetails(details.plants))
}

const displayDetails = (details)=>{
  const showModal = document.getElementById('show-modal');
  showModal.innerHTML = "";
  const div = document.createElement('div');
  div.innerHTML = `
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <figure class="px-5 pt-5">
    <img
      src="${details.image}"
      alt="plant image"
      class="rounded-xl h-50 w-100" />
    </figure>
    <div class="card-body ">
    <h2 class="card-title">${details.name}</h2>
    <p>${details.description}</p>

        <div class="flex justify-between items-center">
        <div>
            <button class="btn bg-[#DCFCE7] rounded-3xl">${details.category}</button>
        </div>
        <div>
            <p class="text-xl font-bold">৳<span>${details.price}</span></p>
        </div>
        </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  `
showModal.appendChild(div);
loading(false);
   my_modal_5.showModal();
}



categoriesLoad();
catchAllTree();