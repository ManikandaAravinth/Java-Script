let recipe = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    head:"Ingredients",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

// document.getElementById('cardHeading').textContent=recipe.title;
document.getElementById('imgid').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png";
document.getElementById('ingredientsHead').textContent=recipe.head;
let ul=document.getElementById('ulid');

for (let data of recipe.ingredients ) {

let list=document.createElement('li');
list.textContent=data;
ul.appendChild(list);

}