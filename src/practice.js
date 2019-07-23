require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log('connection successful');

// SELECT product_id, name, price, category
//   FROM amazong_products
// WHERE name = 'Point of view gun';

// knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where({ name: 'Point of view gun'})
//   .first()
//   .toQuery()
//   .then(res => {
//     console.log(res);
//   });


//SEARCHES FOR 'holo' IN amazong_products
// SELECT product_id, name, price, category
// FROM amazong_products
// WHERE name ILIKE '%holo%';
function searchByProduceName(searchTerm) {
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(res => {
      console.log(res);
    });
}
// searchByProduceName('holo');


//LIMIT RESULTS AND FIND PAGE(*want page 4* => page # - 1) * limit # = offset)
// SELECT product_id, name, price, category
// FROM amazong_products
// LIMIT 10
// OFFSET 30;
function paginateProducts(page) {
  const productsPerPage = 10;
  const offest = productsPerPage * (page - 1);
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .limit(productsPerPage)
    .offset(offest)
    .then(res => {
      console.log(res);
    });
}
// paginateProducts(2);


//FILTER CONTENT TO DISPLAY ITEMS WITH IMAGES
// SELECT product_id, name, price, category, image
// FROM amazong_products
// WHERE image IS NOT NULL;
function getProductsWithImages() {
  knexInstance
    .select('product_id', 'name', 'price', 'category', 'image')
    .from('amazong_products')
    .whereNotNull('image')
    .then(result => {
      console.log(result);
    });
}
// getProductsWithImages();


//SEARCH MOST POPULAR VID PAST 30 DAYS
function mostPopularVideosForDays(days) {
  knexInstance
    .select('video_name', 'region')
    .count('date_viewed AS views')
    .where(
      'date_viewed',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
    )
    .from('whopipe_video_views')
    .groupBy('video_name', 'region')
    .orderBy([
      { column: 'region', order: 'ASC' },
      { column: 'views', order: 'DESC' },
    ])
    .then(result => {
      console.log(result);
    });
}

mostPopularVideosForDays(30);