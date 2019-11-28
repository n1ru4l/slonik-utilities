import { assignmentList } from "./assignment-list";
import { sql } from "slonik";

it("does its thing", () => {
  const query = sql`
    UPDATE "users"
    SET ${assignmentList({
      email: "newemail@localhost",
      otherColumn: 10
    })}
    WHERE "id" = 1;
  `;
  expect(query).toMatchInlineSnapshot(`
    Object {
      "sql": "
        UPDATE \\"users\\"
        SET \\"email\\" = $1, \\"otherColumn\\" = $2
        WHERE \\"id\\" = 1;
      ",
      "type": "SLONIK_TOKEN_SQL",
      "values": Array [
        "newemail@localhost",
        10,
      ],
    }
  `);
});
