export const makePromisedQuery = pool => (queryString, data = []) =>
  new Promise((resolve, reject) => {
    pool.query(
      {
        sql: queryString,
        nestTables: true,
      },
      data,
      (err, ...data) => {
        if (err) {
          reject(err);
        }
        resolve(...data);
      },
    );
  });
