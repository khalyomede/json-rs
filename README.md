# RS/JSON

![](https://img.shields.io/github/tag/khalyomede/rs-json.svg)
![](https://img.shields.io/github/license/khalyomede/rs-json.svg)


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
- [References](#references)

## Goals

RS/JSON, or Relational Schema over JSON, is a file format to help build storage schema for relational storages.

1. Providing a unified API across ORMs and database softwares.
2. Extracting the business schema out of the code. 
3. Facilitate the migrations from an ORM to another.
4. To serve as "single source of truth", even for migrations generation.
5. Versionable.
6. Giving application-level guards to increase the database data quality on insert and update.

## Scope

- ORMs for software development
- Single server, single database schemas
- Serving `.json` as a type of export/import for relational database software, besides traditionals `.sql` or `.csv` files

## Specification

In bold, required keys.

- **version**: (string) [semver](https://semver.org/) to version your schema
- **license**: (string) licence name for your schema
- **charset**: (string) one of the supported charset (see [references](#references))
- **schema**: (object) each key is a "table" (or "document")
  - _table or document name_: (object)
    - **identifier**: (array) the "primary keys" of your "table"
    - uniques: (object) each key is the name of the unique constraint
      - _unique constraint name_: (array) a list of column that form a single unique constraint
    - **properties**: (object) each key is a "column" or "field"
      - _property name_: (object)
        - **type**: (string) one of the supported field type (see [references](#references))
        - incremented: (boolean) whether the column is automatically incremented or not
        - required: (boolean) whether the field is needed or not (e.g. nullable)
        - unique: (boolean) whether the field is 
        - length: (integer) used to manually set a maximum of bytes
        - precision: (integer) with a float type, used to define the precision
        - guards: (array) a list of guards that perform application-level validation before actually inserting or updating
        - reference: (string) used with `"type": "relation"` and specify the "table"
        - minimum: (integer) used with `"type": "relation"` to set the cardinality
        - maximum: (integer) used with `"type": "relation"` to set the cardinality
        - through: (string) used with `"type": "relation"` to specify an intermediate table in a many to many relation
        - charset: (string) used to override the charset defined globally

If type is `relation`, keys `minimum`, `maximum` and `reference` are mandatory.

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
  "charset": "utf8-mb4",
  "schema": {
    "book": {
      "identifier": ["id"],
      "uniques": {
        "unique_book_name": ["name"],
        "unique_book_isbn": ["isbn"]
      },
      "properties": {
        "id": {
          "type": "unsigned-int",
          "incremented": true
        },
        "name": {
          "type": "small-string",
          "required": "true",
          "guards": ["filled"]
        },
        "isbn": {
          "type": "string",
          "length": 17,
          "guards": ["isbn-13"]
        },
        "author": {
          "type": "relation",
          "reference": "author",
          "minimum": 1,
          "maximum": 1
        }
      },
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
        },
        "books": {
          "type": "relation",
          "reference": "book",
          "minimum": 0,
          "maximum": "*"
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
- `relation` are annoted by:
  - `minimum` and `maximum`: 1 for both is equivalent to a required "many to one"
  - 0 for `minimum` and 1 for `maximum` is equivalent to a non required "many to one"
  - 0 for `minimum` and `*` for `maximum` means non required "one to many"
  - `many to many` is represented by:

    ```json
    {
      "schema": {
        "book": {
          "properties": {
            "orders": {
              "reference": "order",
              "through": "book_order"
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
  - `RsJson::isValid(string schema): bool`
  - `RsJson::parse(string schema): object`
- Guards should be extendable by the end developer
  - `RsJson::addGuard(string name, callable callback): void`
- Native guards (like `fillable`, ...) should be also extended for a minimum of code legacy and to be overridable by the user
  - `RsJson::editGuard(string name, callable callback): void`
- The `length` attribute or the evaluated length (example: `small-string` is a 255 length string) should basically trigger a `max:<length>` (so `max:255` in this case) guard (without having to add this particular guard)
- Files should be prefixed with `.rs.json`
- charsets supported are listed below, and should be converted to the storage engine encoding name (see [references](#references))
- Follow the specification
- User should be able to add customs types in order to speed up the schema creation using `RsJson::addType(string name, string native_type, dict parameters): void` where the `parameters` are the keys set to the desired values. The library itself should use this method to create the basic types. Here is two examples, one for the library to specify a basic type, and another for the user to specify a custom type (in PHP):

```php
use RsJson\RsJson;

// Setting a default type
RsJson::addType('small-string', 'string', [
  'length' => 255
]);

// Setting a custom type "longitude"
RsJson::addType('longitude', 'float', [
  'length' => 3,
  'precision' => 8,
  'guards' => ['min:-180', 'max:180']
]);
```

## References

- [Types](#types)
- [Charsets](#charsets)

### Types

In bold, the native types.

| integers                | dates     | strings       |
|-------------------------|-----------|---------------|
| small-integer           | time      | small-string  |
| small-unsigned-integer  | date      | **string**    |
| **integer**             | datetime  | medium-string |
| **unsigned-integer**    | timestamp | big-string    |
| medium-integer          |           |               |
| medium-unsigned-integer |           |               |
| big-integer             |           |               |
| big-unsigned-int        |           |               |

### Charsets

| name         |
|--------------|
| utf8         |
| utf8-mb4     |
| iso-8859-1   |
| windows-1256 |