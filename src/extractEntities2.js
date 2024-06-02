const supabase = require('./db');

const extractEntities = async (searchTerm) => {
  // Split the search term into tokens
  const tokens = searchTerm.split(' ');

  // Remove the word "in" from the tokens
  const filteredTokens = tokens.filter(token => token.toLowerCase() !== 'in' && token.toLowerCase() !== 'or');

  // Create a single query to fetch all relevant data
  const searchPromises = filteredTokens.map(async token => {
    return supabase.from('entities').select('*').ilike('name', `%${token}%`);
  });

  // Execute search promises in parallel
  const searchResults = await Promise.all(searchPromises);

  // Extract the different types of entities
  const entities = searchResults.flatMap(result => result.data);

  // Group entities by type
  const entityGroups = {};
  entities.forEach(entity => {
    if (!entityGroups[entity.type]) {
      entityGroups[entity.type] = [];
    }
    entityGroups[entity.type].push(entity);
  });

  // Generate combinations of entities
  const combinations = [];

  // Create combinations for each type
  const keys = Object.keys(entityGroups);
  const values = Object.values(entityGroups);
  const combinationsCount = values.reduce((acc, val) => acc * val.length, 1);
  for (let i = 0; i < combinationsCount; i++) {
    const combination = {};
    let index = i;
    for (let j = 0; j < keys.length; j++) {
      const entitiesOfType = values[j];
      const entityIndex = index % entitiesOfType.length;
      index = Math.floor(index / entitiesOfType.length);
      const entity = entitiesOfType[entityIndex];
      const { type, ...entityWithoutType } = entity;
      combination[type] = entityWithoutType;
    }
    combinations.push(combination);
  }

  return combinations;
};

module.exports = extractEntities;
