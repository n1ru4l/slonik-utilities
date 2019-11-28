import { valuesList } from "./values-list";
import { sql } from "slonik";

it("does its thing", () => {
  const users = [
    {
      id: 1,
      login: "peter",
      email: "peter@localhost"
    },
    {
      id: 2,
      login: "lukas",
      email: "lukas@localhost"
    }
  ];

  const query = sql`
    INSERT INTO "users" (
      "id",
      "login",
      "email"
    ) VALUES (${valuesList(users, user => [user.id, user.login, user.email])});
  `;

  expect(query).toMatchInlineSnapshot(`
    Object {
      "sql": "
        INSERT INTO \\"users\\" (
          \\"id\\",
          \\"login\\",
          \\"email\\"
        ) VALUES ($1, $2, $3), ($4, $5, $6);
      ",
      "type": "SLONIK_TOKEN_SQL",
      "values": Array [
        1,
        "peter",
        "peter@localhost",
        2,
        "lukas",
        "lukas@localhost",
      ],
    }
  `);
});
