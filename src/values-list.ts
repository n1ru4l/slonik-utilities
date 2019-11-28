import { ValueExpressionType, sql, ListSqlTokenType } from "slonik";

export function valuesList<TType extends {}>(
  input: Array<TType>,
  map: (input: TType) => ReadonlyArray<ValueExpressionType>
): ListSqlTokenType {
  return sql.join(
    input.map(item => sql.join(map(item), sql`, `)),
    sql`), (`
  );
}
