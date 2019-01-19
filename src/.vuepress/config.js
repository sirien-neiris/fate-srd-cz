const FateCoreToc = {
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
};


const FaeToc = {
    title: 'Fate zrychlená edice',
    collapsable: true,
    children: [
        '/fae/1-zaciname',
        '/fae/2-spolecne-vypraveni-pribehu',
    ]
};

const ToolkitToc = {
    title: 'Fate systémové nástroje',
    collapsable: true,
    children: [
        '/fate-system-toolkit/1-uvod',
        '/fate-system-toolkit/2-aspekty',
    ]
};

module.exports = {

    title: 'Fate SRD Czech',
    description: 'Český překlad fate SRD',

    themeConfig: {
        theme: '@vuepress/theme-default',

        // horní navigace
        nav: [
            {
                text: 'd20.cz',
                link: 'http://www.d20.cz/'
            }
        ],

        // boční menu
        sidebar: {
            '/': [
                FateCoreToc,
                FaeToc,
                ToolkitToc,
            ]
        },

        displayAllHeaders: false,
        sidebarDepth: 2,

        // odkaz na repo
        repo: 'd20cz/fate-srd-cz',
        repoLabel: 'GitHub',

        // odkazy na editaci
        docsRepo: 'd20cz/fate-srd-cz',
        docsDir: 'src',
        docsBranch: 'master',
        editLinks: true,

        // locale
        editLinkText: 'Editace stránky na GitHub',
        lastUpdated: 'Poslední změna',
    },

    configureWebpack: {
        serve: {
            host: '0.0.0.0',
            hot: {
                host: {
                    server: '0.0.0.0',
                    client: 'localhost'
                }
            }
        },
    },
    extendMarkdown: md => {
        md.use(require('markdown-it-deflist'));
        md.use(require('markdown-it-container'), 'card', {

            validate: function (params) {
                const trim = params.trim();
                if (trim === 'card') {
                    return ['card']
                }
                return trim.match(/^card\s+(.*)$/);
            },

            render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^card\s+(.*)$/);
                if (tokens[idx].nesting === 1) {
                    // opening tag
                    var header = m !== null ? '<p  class="custom-block-card-header">' + md.utils.escapeHtml(m[1]) + '</p>\n' : '';
                    return '<div class="custom-block-card">' + header + '\n';

                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        });
    },

    plugins: [
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                // Don't forget to install moment yourself
                const moment = require('moment');
                //moment.locale('cs');
                moment.locale(lang);
                return moment(timestamp).format('LLL');
            }
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/medium-zoom'],
        ['@vuepress/google-analytics', {
            'ga': '' // UA-00000000-0
        }]
    ],
    locales: {
        '/': {
            lang: 'cs',
        }
    }
};

