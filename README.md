# AVA

<img src="logo-ava.svg" style="width: 400px">

## Jak się wymawia nazwę tej biblioteki?

Zgodnie z https://github.com/avajs/ava/#how-is-the-name-written-and-pronounced

* poprawna nazwa: `AVA`, nie `Ava` ani `ava`
* poprawna wymowa: `/ˈeɪvə/`

## Jak włączyć użycie ES Modules w AVA v3.x?

W pliku `package.json` dodać:

```json
  "ava": {
    "require": [
      "esm"
    ]
  }
```

W wersji 4.0.0 dodano wsparcie do ES Modules:
https://github.com/avajs/ava/releases/tag/v4.0.0
