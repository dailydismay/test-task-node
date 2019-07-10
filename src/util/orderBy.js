const sorts = {
  asc: 'ASC',
  desc: 'DESC',
};

export const execOrderBy = (tableName, column, allowedColumns, sort = 'asc') =>
  allowedColumns.includes(column)
    ? `ORDER BY ${tableName}.${column} ${sorts[sort] || ''}`
    : '';
