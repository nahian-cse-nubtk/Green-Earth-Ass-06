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
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayCategories(data.plants))

}

const catchAllTree =()=>{
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
    <h2 class="card-title">${plant.name}</h2>
    <p>${plant.description}</p>

        <div class="flex justify-between items-center">
        <div>
            <button class="btn bg-[#DCFCE7] rounded-3xl">${plant.category}</button>
        </div>
        <div>
            <p class="text-xl font-bold">৳<span>${plant.price}</span></p>
        </div>
        </div>

      <button class="btn btn-primary bg-[#15803D] rounded-3xl">Add to Cart</button>
    </div>
  </div>
    `
    cardCategory.appendChild(div);
    })
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
categoriesLoad();
catchAllTree();