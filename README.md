# Stationery

A tool for composing letters in the command line. Inspired by [jrnl](http://jrnl.sh/).

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

## Documentation


### Compositions
Compose letters with the `dear` command, following much in the way that you would write a normal letter.

After `dear`, if the next word contains a `,` at the end, that word will be your subject. For example,
`dear Beatrice,` has the subject: `Beatrice`. If no subject is provided and you want to jump straight into the
body of your letter, the default subject is "so and so". All text that follows will be the body of your letter.
End your letter with `--yours, author` to provide the name of the author, or "truly" if none provided.

Stationery saves new letters at the path: `%USERPROFILE%/stationery/compositions/`. Letters are named with the
format: `<subject>-<timestamp>.txt`.

## Templates

### Built-in Templates

* **basic-letter**


### Custom Templates
You can write your own letter templates and provide them to Dear So & So through the `--tpl` command. Templates
follow the standard `mustache` handlebar syntax with the following keywords:

* **subject** - The subject of the letter
* **body** - The body text of the letter
* **author** - The author of the letter

Here's the default template for letters, `basic-letter.mustache`:

```
Dear {{ subject }},

{{ body }}

Yours,
{{ author }}
```

Create your own template in any directory and pass it in using `--tpl`:

```
dear Beatrice, Then is courtesy a turncoat. --tpl ./templates/basic-letter.mustache
```

## Roadmap
* [x] Basic letter templates and save to file
* [x] Template engine (allow users to provide path to mustache template)
* [ ] Custom signatures
* [ ] Editing utilities
* [ ] Searching utilities
* [ ] Website
* [ ] Notetaking
* [ ] Multiple output formats
* [ ] Copy to clipboard
