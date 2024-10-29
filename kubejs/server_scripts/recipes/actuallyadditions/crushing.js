ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/crushing/';

    const recipes = [
        {
            ingredient: { tag: `minecraft:smelts_to_glass` },
            result: [
                { result: { id: 'ae2:silicon', count: 1 } },
                {
                    result: { id: 'ae2:silicon', count: 1 },
                    chance: 0.25
                }
            ],
            id: `${id_prefix}silicon`
        }
    ];

    let materials = [
        { primary: 'iron', secondary: 'nickel' },
        { primary: 'copper', secondary: 'gold' },
        { primary: 'gold', secondary: 'copper' },
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
        { primary: 'iridium', secondary: 'osmium' },
        { primary: 'lead', secondary: 'silver' },
        { primary: 'silver', secondary: 'lead' },
        { primary: 'nickel', secondary: 'iron' },
        { primary: 'uranium', secondary: 'lead' }
    ];
    materials.forEach((material) => {
        recipes.push(
            {
                ingredient: { tag: `c:ores/${material.primary}` },
                result: [
                    {
                        result: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        }
                    },
                    {
                        result: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        },
                        chance: 0.75
                    }
                ],
                id: `${id_prefix}${material.primary}_ore`
            },
            {
                ingredient: { tag: `c:raw_materials/${material.primary}` },
                result: [
                    {
                        result: {
                            id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(),
                            count: 2
                        }
                    },
                    {
                        result: {
                            id: AlmostUnified.getTagTargetItem(`c:dusts/${material.secondary}`).getId(),
                            count: 1
                        },
                        chance: 0.15
                    }
                ],
                id: `${id_prefix}raw_${material.primary}`
            },
            {
                ingredient: { tag: `c:ingots/${material.primary}` },
                result: [
                    {
                        result: {
                            id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(),
                            count: 1
                        }
                    },
                    { result: {}, chance: 0.0 }
                ],
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:crushing';
        event.custom(recipe).id(recipe.id);
    });
});