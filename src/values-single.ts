import { ValueExpressionType, SqlTokenType, sql } from "slonik";

export function valuesSingle(
  data: ReadonlyArray<ValueExpressionType>
): SqlTokenType {
  return sql.join(data, sql`, `);
}
