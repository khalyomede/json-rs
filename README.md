# JSON/RS

![](https://img.shields.io/github/tag/khalyomede/json-rs.svg)
![](https://img.shields.io/github/license/khalyomede/json-rs.svg)


Standard proposal for JSON based ORM relational schema definitions.

```json
{
  "version": "0.1.0",
  "licence": "MIT",
  "book": {
    "properties": {
      "id": {
        "type": "unsigned-int",
        "incremented": true
      },
      "name": {
        "type": "string",
        "length": 255,
        "required": true
      }
    }
  }
}
```

# Summary

- [Goals](#goals)
- [Scope](#scope)
- [Specification](#specification)
- [Guidelines](#guidelines)
- [Example: Book store](#example-book-store)
- [Implementations](#implementations)

## Goals

1. Providing a unified API to ORMs.
2. Extracting the business schema out of the code. 
3. Facilitate the migrations from an ORM to another.
4. Serve as "single source of truth", even for migrations generation.
5. Versionable.
6. Giving application-level guards to increase the database data quality on insert and update.

## Scope

- ORMs for software development
- Serving `.json` as a type of export/import for relational database software, besides traditionals `.sql` or `.csv` files

## Specification

_in progress_

## Guidelines

- Put as least **guards** as possible: they are time-consuming
- Table names should be underscored and lowered
- Field names should be underscored and lowered

## Example: Book store

- A **Book** have a name and an ISBN (format ISBN-13).
- A **Book** have only one **Author**.
- An **Author** have a first name, a last name, and an age.
- An **Author** must be adult (+18).

```json
{
  "version": "0.1.0",
  "license": "MIT",
  "charset": "utf8mb4",
  "schema": {
    "book": {
      "identifier": ["id"],
      "properties": {
        "id": {
          "type": "unsigned-int",
          "incremented": true
        },
        "name": {
          "type": "small-string",
          "required": "true",
          "unique": true,
          "guards": ["filled"]
        },
        "isbn": {
          "type": "string",
          "length": 17,
          "unique": true,
          "guards": ["isbn-13"]
        }
      },
      "relations": {
        "author": {
          "minimum": 1,
          "maximum": 1
        }
      }
    },
    "author": {
      "identifier": ["id"],
      "properties": {
        "id": {
          "type": "unsigned-int",
          "incremented": true
        },
        "firstname": {
          "type": "small-string",
          "required": true,
          "charset": "utf8",
          "guards": ["filled"]
        },
        "lastname": {
          "type": "small-string",
          "requird": true,
          "charset": "utf8",
          "guards": ["filled"]
        },
        "age": {
          "type": "small-int",
          "required": true,
          "guards": ["adult"]
        }
      },
      "relations": {
        "book": {
          "as": "books",
          "minimum": 0,
          "maximum": "infinity"
        }
      }
    }
  }
}
```

Some notes on this schema:

- It supports versioning, to help confront migrations
- In MySQL for example, `small-string` would be converted to `varchar(255)` (if you use `utf8`) or `varchar(191)` (if you use `utf8mb4`)
- **Guards** are application-level validators, they perform before the data is about to be inserted or updated (they should be as quick as possible)
- `relations` are annoted by:
  - `minimum` and `maximum`: 1 for both is equivalent to a required "many to one"
  - 0 for `minimum` and 1 for `maximum` is equivalent to a non required "many to one"
  - 0 for `minimum` and `infinity` for `maximum` means non required "one to many"
  - `many to many` is represented by:

    ```json
    {
      "schema": {
        "book": {
          "relations": {
            "order": {
              "as": "orders",
              "through": ["book_order"]
            }
          }
        }
      }
    }
    ```

    Which means : a book can have many orders, and many orders can have many books in it. It is a join table and it required to be stored in a separate table, thus the `book_order` table.

## Implementations

Implementations should follow some standard recomendations for building an ORM that implements JSON/RS:

- `manytomany` relations must not use a primary key autoincrement, but only the two keys from the related tables
- Providing maximum of constants to help auto completion in code editors and help reduces typos
- Avoid creating an ORM that support many database engine: prefer focus on one engine well rather than trying to generalizing for all database and making concessions
- Exceptions thrown by the database engine should be easy to catch by the end user:
  - Record not found
  - Uniqueness violation (table, column(s))
  - Foreign key violation (table, column)
  - Validation (guard) failed
  - ...
- A parser should be top priority to avoid checks on the actual ORM code, with at least 2 method:
  - `JsonRs::isValid(string schema): bool`
  - `JsonRs::parse(string schema): object`
- Guards should be extendable by the end developer
  - `JsonRs::addGuard(string name, callable callback): void`
- Native guards (like `fillable`, ...) should be also extended for a minimum of code legacy and to be overridable by the user
  - `JsonRs::editGuard(string name, callable callback): void`