function getQuery(stringQuery, queryName) {
  const listQuery = stringQuery.substring(1).split("&");
  const queries = listQuery.map(query => {
    let pair = query.split("=");
    if (pair[0] === queryName) return pair[1];
    return undefined;
  });
  return queries.filter(query => query !== undefined);
}
export default getQuery;
