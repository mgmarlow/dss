# Stationery

A tool for composing letters in the command line. Inspired by [jrnl](http://jrnl.sh/).

![build status](https://travis-ci.org/mgmarlow/dss.svg?branch=master)

```
$ dear Beatrice, Then is courtesy a turncoat. But it is certain I am loved of all ladies,
only you excepted; and I would I could find in my heart that I had not a hard heart,
for truly I love none. --yours, Benedick
```

Results in:

```  
beatrice-12-2-17.txt
> Dear Beatrice,
> 
> Then is courtesy a turncoat. But it is certain
> I am loved of all ladies, only you excepted; and
> I would I could find in my heart that I had not a
> hard heart, for truly I love none.
> 
> Yours,
> Benedick
```

## Installation
```
npm install -g stationery
```

## Compositions
Compose letters with the `dear` command, following much in the way that you would write a normal letter.

`stationery` compositions require a subject to be specified. Provide a subject by providing
a word that ends in a comma, for example, `dear Beatrice,` or `dear Don John,`. From there,
`stationery` will interpret the rest of the command to be the body of the letter.

End your letter with `--yours, author` to provide the name of the author. This will default
to "truly". You can provide default signatures in a separate configuration file, specified
below.

Stationery saves new letters at the path: `%USERPROFILE%/stationery/compositions/`. Letters are named with the
format: `<subject>-<timestamp>.txt`.

## Configuration
```
// todo
```

## Templates

### Built-in Templates

* **basic-letter**

Use a built-in template with the `--tpl` command:
```
dear Beatrice, Then is courtesy a turncoat. --tpl basic-letter
```


### Custom Templates
You can also write your own letter templates and provide them to Stationery through the
`--tpl` command. To do this, simply make your own template (`.mustache`) and pass the file 
in as the parameter to `--tpl`.

```
dear Beatrice, Then is courtesy a turncoat. --tpl ./love-letters/my-template.mustache
```

Templates follow the standard `mustache` handlebar syntax with the following keywords:

* **subject** - The subject of the letter
* **body** - The body text of the letter
* **author** - The author of the letter

Let's make a more formal letter, say `formal-letter.mustache`.

```
Dearest {{ subject }},

{{ body }}

Sincerely,
{{ author }}
```

Create your own template in any directory and pass it in using `--tpl`:

```
dear Beatrice, Then is courtesy a turncoat. --tpl ./templates/formal-letter.mustache
```

## Roadmap
* [x] Basic letter templates and save to file
* [x] Template engine (allow users to provide path to mustache template)
* [x] Multi-word subjects
* [ ] Configuration: default signatures
* [ ] Editing utilities
* [ ] Searching utilities
* [ ] Website
* [ ] Notetaking
* [ ] Multiple output formats
* [ ] Copy to clipboard
