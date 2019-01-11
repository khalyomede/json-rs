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

Documentation available at this address: [https://khalyomede.github.io/rs-json/](https://khalyomede.github.io/rs-json/)