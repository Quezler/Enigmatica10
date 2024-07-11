ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: { mod: 'waystones' },
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        },
        {
            filter: { output: 'minecraft:writable_book' },
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
