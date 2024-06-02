const extractEntities = require('./src/extractEntities');

const main = async () => {
  const searchTerm = process.argv[2] || "veg pizza at McDonald's in London or Manchester";
  const results = await extractEntities(searchTerm);
  console.log(results);
};

main();
