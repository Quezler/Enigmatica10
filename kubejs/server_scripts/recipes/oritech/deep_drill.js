ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/deep_drill/';
    const recipes = [
        // Common
        {
            results: [{ id: 'modern_industrialization:lignite_coal', count: 1 }],
            ingredients: [{ item: 'kubejs:resource_node_lignite' }],
            time: 1,
            id: `${id_prefix}lignite`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_tin' }],
            results: [{ id: 'modern_industrialization:raw_tin', count: 1 }],
            id: `${id_prefix}tin`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_lead' }],
            results: [{ id: 'modern_industrialization:raw_lead', count: 1 }],
            id: `${id_prefix}lead`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_antimony' }],
            results: [{ id: 'modern_industrialization:raw_antimony', count: 1 }],
            id: `${id_prefix}antimony`
        },

        // Other
        {
            ingredients: [{ item: 'kubejs:resource_node_uraninite' }],
            results: [{ id: 'powah:uraninite_raw', count: 1 }],
            id: `${id_prefix}lignite`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_bauxite' }],
            results: [{ id: 'modern_industrialization:bauxite_dust', count: 1 }],
            id: `${id_prefix}bauxite`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_monazite' }],
            results: [{ id: 'modern_industrialization:monazite_dust', count: 1 }],
            id: `${id_prefix}lignite`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_salt' }],
            results: [{ id: 'modern_industrialization:salt_dust', count: 1 }],
            id: `${id_prefix}monazite`
        },

        // Rare
        {
            ingredients: [{ item: 'kubejs:resource_node_tungsten' }],
            results: [{ id: 'modern_industrialization:raw_tungsten', count: 1 }],
            id: `${id_prefix}tungsten`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_osmium' }],
            results: [{ id: 'mekanism:raw_osmium', count: 1 }],
            id: `${id_prefix}osmium`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_mithril' }],
            results: [{ id: 'irons_spellbooks:raw_mithril', count: 1 }],
            id: `${id_prefix}mithril`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_uranium' }],
            results: [{ id: 'modern_industrialization:raw_uranium', count: 1 }],
            id: `${id_prefix}uranium`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_iridium' }],
            results: [{ id: 'modern_industrialization:raw_iridium', count: 1 }],
            id: `${id_prefix}iridium`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_fluorite' }],
            results: [{ id: 'mekanism:fluorite_gem', count: 1 }],
            id: `${id_prefix}fluorite`
        },
        {
            ingredients: [{ item: 'kubejs:resource_node_silver' }],
            results: [{ id: 'modern_industrialization:raw_silver', count: 1 }],
            id: `${id_prefix}silver`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:deep_drill';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});