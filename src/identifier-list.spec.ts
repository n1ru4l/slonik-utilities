import { identifierList } from "./identifier-list";
import { sql } from "slonik";

it("does its thing", () => {
  const query = sql`
    SELECT ${identifierList([["users", "id"], "field1"])}
    FROM "users";
  `;
  expect(query).toMatchInlineSnapshot(`
    Object {
      "sql": "
        SELECT \\"users\\".\\"id\\", \\"field1\\"
        FROM \\"users\\";
      ",
      "type": "SLONIK_TOKEN_SQL",
      "values": Array [],
    }
  `);
});
