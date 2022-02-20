# jQuery cookiesConsent

jQuery plugin to display a consent modal for cookies and to add the Google Analytics tag: [Demo page](https://jagullo.fr/cookies-consent/)

[![license](https://img.shields.io/github/license/julienagullo/cookies-consent.svg)](https://github.com/julienagullo/cookies-consent/LICENSE.md)


## Preview plugin

![image](https://jagullo.fr/cookies-consent/screen_modal.png?raw=true)


## Table of contents

- [Quick start](#quick-start)
- [Contact](#contact)
- [Responsibility](#responsibility)
- [License](#license)


## Quick start

#### Download the release:

- Download [last release](https://github.com/julienagullo/cookies-consent/releases/)
- Or clone the repo: `git clone https://github.com/julienagullo/cookies-consent.git`

#### Import library plugin:

```html

<script src="jquery.js"></script>
<script src="jquery.cookies-consent.js"></script>
```

#### Launch cookiesConsent plugin with your tracking Google Analytics ID:

```javascript
$(document).cookiesConsent({id:'UA-000000-2'});
```

You can launch `cookiesConsent` on `$(window)`, `$(document)` or `$('body')` tag.

#### Available options:

Default options:

```javascript
$(document).cookiesConsent({
    id: '',
    cookie: {
        name: 'cookies-consent',
        days: 10,
        path: '/'
    },
    website: {
        name: '',
        url: ''
    },
    logo: {
        url: '',
        width: '',
        align: 'left',
        margin: '0'
    },
    modal: {
        hrColor: '#b3b3b3',
        fontColor: '#3c3c3c',
        backgroundColor: '#fafafa'
    },
    button: {
        acceptColor: '#0a9919',
        acceptColorHover: '#076212',
        refuseColor: '#a40606',
        refuseColorHover: '#7b0505'
    },
    tag: {
        cookiePrefix: '',
        cookieDomain: '',
        cookieExpires: '',
        cookieUpdate: ''
    },
    lang: 'fr'
});
```

`id:` (string) tracking ID

`cookie:` (object) set `name`, `days` and `path` for the cookies params

`website:` (object) set `name`, `url` information for the modal customization

`logo:` (object) set `url`, `width`, `align` and `margin` information for the modal

`modal:` (object) set `hrColor`, `fontColor` and `backgroundColor` for the modal

`button:` (object) set `acceptColor`, `acceptColorHover`, `refuseColor` and `refuseColorHover` for the consent buttons

`tag:` (object) set `cookiePrefix`, `cookieDomain`, `cookieExpires` and `cookieUpdate` for the tag configuration [more info](https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id)

`lang:` (string) set `fr` or `en` to display the modal in french or english


## Contact

- Mail: [contact@jagullo.fr](contact@jagullo.fr?subject=[GitHub]%20cookiesConsent)
- Website: <https://jagullo.fr>
- Github: <https://github.com/julienagullo>


## Responsibility

Author disclaims any responsibility for the use that is made with this tool.

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

Copyright © jagullo.fr

Licensed under the MIT license.