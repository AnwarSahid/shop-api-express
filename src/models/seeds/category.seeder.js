const db = require('../model')

const Category = db.category

exports.categorySeed = () => {
    Category.bulkCreate([
        { name: 'Computer' },
        { name: 'Otomotive' },
        { name: 'building' },
    ])
}