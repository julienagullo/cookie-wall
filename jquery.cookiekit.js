/**
 * jQuery cookieKit plug-in 1.0.0
 * Copyright (c) Avantage Digital
 * Licensed under the MIT license
 *
 * jQuery plugin to display a consent modal for cookies and to add Google Analytics tag.
 *
 * @author	Avantage Digital
 * @docs	https://github.com/avantage-digital/cookieKit
 */
(function($){

    "use strict";

    $.fn.cookieKit = function(options) {

        const params = $.extend({
            id: '',
            cookie: {
                name: 'cookiekit',
                days: 10,
                path: '/'
            },
            modal: {
                hrColor: '#b3b3b3',
                fontColor: '#3c3c3c',
                backgroundColor: '#e9e9e9'
            },
            button: {
                acceptColor: '#0a9919',
                acceptColorHover: '#076212',
                refuseColor: '#8a0a0a',
                refuseColorHover: '#550505',
            },
            lang: 'fr'
        }, options);

        const content = {
            title: {
                fr: 'Politique de collecte des données',
                en: 'Data collection policy'
            },
            message: {
                fr: '<b>Des fichiers cookies sont utilisés pour analyser le trafic du site via Google Analytics.</b><br><br>Des informations concernant votre navigation et votre utilisation du site nous sont transmises et seront analysées <b>de façon anonyme</b> pour améliorer nos services.',
                en: '<b>Cookie files are used to analyze website traffic by Google Analytics.</b><br><br>Information about your browsing and use of the website is sent to us and will be analyzed <b>anonymous</b> to improve services.'
            },
            list: {
                fr: '<ul><li><b>_ga</b> : Utilisé pour distinguer les utilisateurs (expire au bout de 2 ans)</li><li><b>_gid</b> : Utilisé pour distinguer les utilisateurs (expire au bout de 24 heures)</li><li><b>_gat</b> : Utilisé pour limiter le taux de demande (expire au bout de 1 minute)</li></ul>',
                en: '<ul><li><b>_ga</b>: Used to distinguish users (expires after 2 years)</li><li><b>_gid</b>: Used to distinguish users. (expires after 24 hours)</li><li><b>_gat</b>: Used to throttle request rate (expires after 1 minute)</li></ul>'
            },
            conservation: {
                fr: 'Nous conservons votre choix pendant <b>' + params.cookie.days + ' jour(s)</b>. Vous pouvez réinitialiser votre consentement en supprimant le cookie <b>' + params.cookie.name + '</b> des données de votre navigateur.',
                en: 'We keep your choice for <b>' + params.cookie.days + '</b> day(s). You can reset your consent by deleting the <b>' + params.cookie.name + '</b> cookie from your browser data.'
            },
            accepted: {
                fr: 'Accepter',
                en: 'Accept'
            },
            refused: {
                fr: 'Non merci',
                en: 'No thanks'
            }
        };

        var tag = '<script async src="https://www.googletagmanager.com/gtag/js?id=' + params.id + '"></script>' +
            '<script>' +
            'window.dataLayer = window.dataLayer || [];' +
            'function gtag(){dataLayer.push(arguments);}' +
            'gtag(\'js\', new Date());' +
            'gtag(\'config\', \'' + params.id + '\');' +
            '</script>';

        var modal = '' +
            '<div class="ck-modal">' +
                '<div class="ck-window">' +
                    '<div class="ck-content">' +
                        '<span>' + content.title[params.lang] + '</span>' +
                        '<hr>' +
                        '<p>' + content.message[params.lang] + '</p>' +
                        content.list[params.lang] +
                        '<p>' + content.conservation[params.lang] + '</p>' +
                    '</div> ' +
                    '<div class="ck-choise">' +
                        '<a class="btn-refuse" href="#">' + content.refused[params.lang] + '</a>' +
                        '<a class="btn-accept" href="#">' + content.accepted[params.lang] + '</a>' +
                    '</div> ' +
                '</div> ' +
            '</div>' +
            '<style>' +
            '.ck-modal{display:flex;align-items:center;justify-content:center;position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.7);z-index:999;}' +
            '.ck-window{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;position:absolute;border-radius:5px;background-color:'+ params.modal.backgroundColor +';box-shadow:3px 3px 10px rgba(0,0,0,.3);}' +
            '.ck-content{padding:15px;color:' + params.modal.fontColor + ';}' +
            '.ck-content span{font-weight:500;}' +
            '.ck-content b{font-weight:600;}' +
            '.ck-content p, li{font-weight:300;}' +
            '.ck-content hr{height:1px;margin:15px 0;border:0;border-top:1px solid ' + params.modal.hrColor + ';}' +
            '.ck-choise{display:flex;align-items:stretch;justify-content:center;}' +
            '.btn-refuse, .btn-accept{display:block;width:50%;font-size:1.1em;font-weight:bold;text-transform:uppercase;text-decoration:none;padding:10px 5px;text-align:center;transition:background-color .5s ease;}' +
            '.btn-refuse{color:#fff;background-color:' + params.button.refuseColor + ';border-radius:0 0 0 3px;}' +
            '.btn-refuse:hover, .btn-refuse:focus{color:#fff;background-color:' + params.button.refuseColorHover + ';text-decoration:none;}' +
            '.btn-accept{color:#fff;background-color:' + params.button.acceptColor + ';border-radius:0 0 3px 0;}' +
            '.btn-accept:hover, .btn-accept:focus{color:#fff;background-color:' + params.button.acceptColorHover + ';text-decoration:none;}' +
            '@media (max-width: 576px) { .ck-modal .ck-window{width:90%;}.ck-content p, li{font-size:1em;}.ck-content span{font-size:1.5em;} }' +
            '@media (min-width: 576px) { .ck-modal .ck-window{width:70%;}.ck-content p, li{font-size:1.1em;}.ck-content span{font-size:1.6em;} }' +
            '@media (min-width: 769px) { .ck-modal .ck-window{width:50%;}.ck-content p, li{font-size:1.2em;}.ck-content span{font-size:1.7em;} }' +
            '</style>';

        function init() {
            if (params.id != '') {
                let c = getCookie();
                if (c == null || (c != 0 && c != 1)) {
                    displayModal();
                } else if (c == 1) {
                    addTag();
                }
            } else {
                console.log('No ID defined in cookiekit params.');
            }
        }

        function displayModal() {
            $('body').prepend(modal);
            $('body').on('mousedown', '.ck-modal .ck-choise a', setChoise);
        }

        function setChoise(e) {
            e.preventDefault();
            let r = $(this).attr('class').substring(4, $(this).attr('class').length);
            if (r == 'accept') {
                setCookie(1);
                addTag();
            } else {
                setCookie(0);
            }
            $('body .ck-modal').remove();
        }

        function addTag() {
            $('body').append(tag);
        }

        function getCookie() {
            let t = document.cookie.split('; ');
            let f = t.find(row => row.startsWith(params.cookie.name + '='));
            if (typeof f != 'undefined') {
                return f.split('=')[1];
            }
            return null;
        }

        function setCookie(value) {
            let a = params.cookie.days * 86400;
            document.cookie = params.cookie.name + '=' + value + ';max-age=' + a + ';path=' + params.cookie.path + ';SameSite=None;Secure';
        }

        function removeCookie() {
            document.cookie = params.cookie.name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None;Secure'
        }

        init();

        return this;

    };

})(jQuery);