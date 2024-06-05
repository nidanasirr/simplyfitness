$(document).ready(function() {
    var apiKey = 'bc25ae8e0e524c10b6469c65a3660c7a';
    var mealTypes = {
        'Appetizer': 'appetizer',
        'Dessert': 'dessert',
        'Main Course': 'main course',
    };

    $.each(mealTypes, function(key, value) {
        var searchQuery = value.replace(/\s/g, '+'); 
        var url = `https://api.spoonacular.com/recipes/complexSearch?query=healthy&number=30&type=${searchQuery}&apiKey=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                var recipesHtml = '';
                $.each(data.results, function(index, recipe) {
                    var recipeDetailsUrl = `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`;

                    recipesHtml += `
                        <div class="recipe-item">
                            <h3><a href="${recipeDetailsUrl}" target="_blank">${recipe.title}</a></h3>
                            <img src="${recipe.image}" alt="${recipe.title}" />
                        </div>
                    `;
                });
                $('#recipes-container').append(`<h2>${key}</h2>` + recipesHtml);
            },
            error: function() {
                console.log('Failed to load recipes for ' + key);
            }
        });
    });
});

