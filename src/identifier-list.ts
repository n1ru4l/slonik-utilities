import { sql } from "slonik";

export type IdentifierListInput = Array<string | Array<string>>;

export function identifierList(columnNames: IdentifierListInput) {
  return sql.join(
    columnNames.map(column =>
      sql.identifier(Array.isArray(column) ? column : [column])
    ),
    sql`, `
  );
}
