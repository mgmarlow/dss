[![npm version](https://badge.fury.io/js/stationery.svg)](https://badge.fury.io/js/stationery)
![build status](https://travis-ci.org/mgmarlow/dss.svg?branch=master)

# Stationery

A tool for composing letters in the command line. Inspired by [jrnl](http://jrnl.sh/).

```
$ dear Beatrice, Then is courtesy a turncoat. But it is certain I am loved of all ladies,
only you excepted; and I would I could find in my heart that I had not a hard heart,
for truly I love none. --yours, Benedick
```

Results in:

```  
Beatrice-12-2-17.txt
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

```
dear <subject>, <body> --yours, <signature>
```

Compositions require that a subject is specified. The subject line **must** end with a comma.

```
dear Beatrice,
dear Don John,
```

The rest of the command will be interpreted as the letter's body, up until any optional arguments.

End your letter with `--yours, signature` to provide your name as a signature. Signatures will
default to "truly" unless otherwise specified in the `.stationeryconfig`.

Stationery saves new letters at the path: `%USERPROFILE%/stationery/compositions/`. Letters are named with the
format: `<subject>-<timestamp>.txt`.

## Configuration
By default, `stationery` will look for configuration at `%USERPROFILE%/.stationeryconfig`.
You can override this behavior with the `--config` argument, supplying your own json file
as the argument.

An example configuration file:

`.stationeryconfig`
```json
{
    "signature": "Holmes: detective, entreprenuer, smart guy."
}
```

With the above configuration, this will be your output from stationery:
```
$ dear Beatrice, Hello.

/usr/stationery/compositions/Beatrice-12-2-17.txt
> Dear Beatrice,
>
> Hello.
>
> Yours,
> Holmes: detective, entreprenuer, smart guy.
```

## Templates

### Built-in Templates

* **basic-letter** (default)

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
* [x] Configuration: default signatures
* [ ] Editing utilities
* [ ] Searching utilities
* [ ] Website
* [ ] Notetaking
* [ ] Multiple output formats
* [ ] Copy to clipboard
