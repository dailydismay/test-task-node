export const execWhere = (tableName, column, value) =>
  value ? `WHERE ${tableName}.${column} = ${value}` : '';
