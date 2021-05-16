# jQuery cookieKit

jQuery plugin to display a consent modal for cookies and to add Google Analytics tag: [Demo page](https://avantage.digital/cookiekit/)

[![license](https://img.shields.io/github/license/avantage-digital/cookieKit.svg)](https://github.com/avantage-digital/cookieKit/LICENSE.md)

## Table of contents

- [Quick start](#quick-start)
- [Contact](#contact)
- [Responsibility](#responsibility)
- [License](#license)


## Quick start

#### Download the release:

- Download [last release](https://github.com/avantage-digital/cookieKit/releases/)
- Or clone the repo: `git clone https://github.com/avantage-digital/cookieKit.git`

#### Import library plugin:

```html
<script src="jquery.js"></script>
<script src="jquery.cookiekit.js"></script>
```

#### Launch cookieKit plugin with your tracking Google Analytics ID:

```javascript
$(document).cookieKit({id:'UA-000000-2'});
```

You can launch `cookitKit` on `$(window)`, `$(document)` or `$('body')` element.


#### Available options:

Default options:

```javascript
$(document).cookieKit({
    id: '',
    cookie: {
        name: 'cookiekit',
        days: 10,
        path: '/'
    },
    website: {
        name: '',
        url: '',
        logo: {
            width: '',
            align: '',
            url: ''
        }
    },
    modal: {
        hrColor: '#b3b3b3',
        fontColor: '#3c3c3c',
        backgroundColor: '#e9e9e9'
    },
    button: {
        acceptColor: '#0a9919',
        acceptColorHover: '#076212',
        refuseColor: '#a40606',
        refuseColorHover: '#7b0505',
    },
    lang: 'fr'
});
```

`id:` (string) tracking ID

`cookie:` (object) set `name`, `days` and `path` for cookie

`website:` (object) set `name`, `url` and `logo` information for modal

`modal:` (object) set `hrColor`, `fontColor` and `backgroundColor` for modal

`button:` (object) set `acceptColor`, `acceptColorHover`, `refuseColor` and `refuseColorHover` for buttons background

`lang:` (string) set `fr` or `en` to display modal in french or english


## Contact

**Avantage Digital**

- Mail: [contact@avantage.digital](contact@avantage.digital)
- Website: <https://avantage.digital>
- Github: <https://github.com/avantage-digital>

## Responsibility

Avantage Digital disclaims any responsibility for the use that is made with this tool.

```text
Al-Nu’man ibn Bashir reported,
The Messenger of Allah (Peace and Blessings be upon Him) said: « Verily, the lawful is clear and the unlawful is clear, and between the two of them they are doubtful matters about which many people don't know. Thus, he who avoids doubtful matters clears himself in regard to his religion and his honor, and he who falls into doubtful matters will fall into the unlawful as the shepherd who pastures near a sanctuary, all but grazing there in. Verily, every king has a sanctum and the sanctum of Allah is his prohibitions. Verily, in the body is a piece of flesh which, if sound, the entire body is sound, and if corrupt, the entire body is corrupt. Truly, it is the heart. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```

```text
D'après Nu'man Ibn Bachir (qu'Allah l'agrée),
Le Messager d'Allah (que La Prière d'Allah et Son Salut soient sur Lui) a dit : « Certes le halal est clair et certes le haram est clair et il y a entre les deux des choses ambiguës que peu de gens connaissent. Celui qui s'écarte des choses ambiguës a préservé sa religion et son honneur. Quant à celui qui tombe dans les choses ambiguës il tombe dans le haram comme le berger qui fait paitre ses bêtes près d'un enclos réservé et qui sont sur le point de rentrer dedans. Certes chaque roi a un domaine réservé et certes le domaine réservé d'Allah est ses interdits. Certes il y a dans le corps un morceau de chair, si il est bon alors l'ensemble du corps est bon tandis que si il est mauvais alors c'est l'ensemble du corps qui est mauvais, certes il s'agit du coeur. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```


## License

Copyright © Avantage Digital

Licensed under the MIT license.