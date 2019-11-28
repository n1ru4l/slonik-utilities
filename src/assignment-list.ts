import { ValueExpressionType, sql } from "slonik";

export function assignmentList(items: { [key: string]: ValueExpressionType }) {
  return sql.join(
    Object.entries(items).map(
      ([key, value]) => sql`${sql.identifier([key])} = ${value}`
    ),
    sql`, `
  );
}
