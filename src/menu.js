/*
Zde se vyplnují položky menu

Je potřeba vytvořit záznam v dané skupině pro všechny stránky v pořadím v jakém je chceme mít
 */
const menu = {
    '/': [
        {
            title: 'Fate základní pravidla',
            collapsable: true,
            children: [
                '/fate-core-system/1-zaklady',
                '/fate-core-system/2-tvorba-hry',
                '/fate-core-system/3-tvorba-postavy',
                '/fate-core-system/4-aspekty-a-body-osudu',
                '/fate-core-system/5-dovednosti-a-triky',
                '/fate-core-system/6-akce-a-vysledky',
                '/fate-core-system/7-vyzvy-strety-a-konflikty',
                '/fate-core-system/8-vedeni-hry',
                '/fate-core-system/9-sceny-sezeni-a-scenare',
                '/fate-core-system/10-dlouha-hra',
                '/fate-core-system/11-speciality',
                '/fate-core-system/prehled',
                '/fate-core-system/prirucka-veterana',
                '/fate-core-system/ke-stazeni-a-odkazy',
            ]
        },
        {
            title: 'Fate zrychlená edice',
            collapsable: true,
            children: [
                '/fae/1-zaciname',
                '/fae/2-spolecne-vypraveni-pribehu',
                '/fae/3-kym-chcete-byt',
                '/fae/4-vysledky-akce-pristupy',
                '/fae/5-vyzvy-strety-a-konflikty',
                '/fae/6-hups-poskozeni-stres-a-nasledky',
                '/fae/7-aspekty-a-body-osudu',
                '/fae/8-triky',
                '/fae/9-zlepsovani-schopnosti-vyvoj-postavy',
                '/fae/10-byt-vypravecem',
                '/fae/11-ukazkove-postavy',
                '/fae/rychly-prehled',
                '/fae/ke-stazeni-a-odkazy',
            ]
        },
        {
            title: 'Fate systémové nástroje',
            collapsable: true,
            children: [
                '/fate-system-toolkit/1-uvod',
                '/fate-system-toolkit/2-aspekty',
            ]
        },
    ]
};


module.exports = menu;