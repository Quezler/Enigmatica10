ServerEvents.tags('item', (event) => {
    let additions = {
        ferricore: ['justdirethings:raw_ferricore'],
        blazegold: ['justdirethings:raw_blazegold'],
        eclipsealloy: ['justdirethings:raw_eclipsealloy'],
        uranium: ['bigreactors:raw_yellorium'],

        nickel: ['oritech:raw_nickel'],
        platinum: ['oritech:raw_platinum']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:raw_materials/${tag}`).add(additions[tag]);
        event.get('c:raw_materials').add(additions[tag]);
    });
});
