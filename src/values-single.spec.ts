import { valuesSingle } from "./values-single";
import { sql } from "slonik";

it("does its thing", () => {
  const user = {
    id: 1,
    login: "peter",
    email: "peter@localhost"
  };

  const query = sql`
    INSERT INTO "users" (
      "id",
      "login",
      "email"
    ) VALUES (${valuesSingle([user.id, user.login, user.email])});
  `;

  expect(query).toMatchInlineSnapshot(`
    Object {
      "sql": "
        INSERT INTO \\"users\\" (
          \\"id\\",
          \\"login\\",
          \\"email\\"
        ) VALUES ($1, $2, $3);
      ",
      "type": "SLONIK_TOKEN_SQL",
      "values": Array [
        1,
        "peter",
        "peter@localhost",
      ],
    }
  `);
});
