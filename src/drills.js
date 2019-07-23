require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log('connection successful');

function searchShoppingList(searchTerm) {
  knexInstance
    .select('name', 'price', 'category', 'checked', 'date_added')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(res => {
      console.log(res);
    });
}
// searchShoppingList('kale');


function paginateItems(pageNumber) {
  const itemsPerPage = 6;
  const offset = itemsPerPage * (pageNumber - 1);
  knexInstance
    .select('name', 'price', 'category', 'checked', 'date_added')
    .from('shopping_list')
    .limit(itemsPerPage)
    .offset(offset)
    .then(res => {
      console.log(res);
    });
}
// paginateItems(2);


function searchResultsForPointInTime(daysAgo) {
  knexInstance
    .select('name', 'price', 'category', 'checked', 'date_added')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .from('shopping_list')
    .then(result => {
      console.log(result);
    });
}
// searchResultsForPointInTime(2);

function getTotalCostOfColumns() {
  knexInstance
    .select('category')
    .sum('price as total')
    .from('shopping_list')
    .groupBy('category')
    .then(res => {
      console.log(res);
    });
}
getTotalCostOfColumns();