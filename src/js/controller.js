import * as model from './model.js';
export let recipeContainer = document.querySelector('.recipe');
import recipeView from './views/RecipeView.js'
import searchView from './views/searchViews.js'
import resultsView from './views/ResultsView.js'
import paginationView from './views/paginationView.js';


const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 3000);
  });
};


/*const data = await res.json();

if (!res.ok) throw new Error();*/



/*} catch (err) {

alert(err);*/




async function controlRecipe() {
  try {
 
    recipeView.renderSpinner();


    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);


    //console.log(recipe);

    /*const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await resp.json();
    console.log(data);
    console.log(resp);*/

   


    /*const markup = `<figure class="recipe__fig">
          <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div>
        ${recipe.ingredients
        .map(ingredient => {
          return `
    <li class="recipe__ingredient">
     <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
     </svg>
      <div class="recipe__quantity">${ingredient.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.description}
      </div>
    </li>`}).join("")}

        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`*/

    /*recipeContainer.innerHTML = "";

    recipeContainer.insertAdjacentHTML('afterbegin', markup);*/




  } catch (err) {
    recipeView.renderError();
  }

};

const controlSearchResults = async () => {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  }
  catch (err) {
    console.log(err)
  }
};



const init = function (){
  recipeView.addHandlerRender(controlRecipe)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination);


}
init();





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////