# @n1ru4l/slonik-utilities

Utilities for the PostgreSQL Client [Slonik](https://github.com/gajus/slonik#readme).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Motivation](#motivation)
- [API](#api)
  - [`valuesSingle` - Insert a single record](#valuessingle---insert-a-single-record)
  - [`valuesList` - Insert multiple records](#valueslist---insert-multiple-records)
  - [`assignmentList` - Update multiple columns](#assignmentlist---update-multiple-columns)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

Slonik removed some convenient methods in version [19.x.x](https://github.com/gajus/slonik/releases/tag/v19.0.0). The new approach is a bit "too" verbose for my taste. This is why I wrote these helper methods to do common stuff more easily and quicker.

## API

### `valuesSingle` - Insert a single record

```js
import { sql } from "slonik";
import { valuesSingle } from "@n1ru4l/slonik-utilities";

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
```

### `valuesList` - Insert multiple records

```js
import { sql } from "slonik";
import { valuesList } from "@n1ru4l/slonik-utilities";

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
```

### `assignmentList` - Update multiple columns

```js
import { sql } from "slonik";
import { assignmentList } from "@n1ru4l/slonik-utilities";

const query = sql`
  UPDATE "users"
  SET ${assignmentList({
    email: "newemail@localhost",
    otherValue: 10
  })}
  WHERE "id" = 1;
`;
```
