const FateCoreToc = {
    title: 'Fate základní pravidla',
    collapsable: true,
    children: [
        '/fate-core-system/1-zaklady',
        '/fate-core-system/2-tvorba-hry',
        '/fate-core-system/3-tvorba-postavy',
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
    //host: "localhost",
    title: 'Fate SRD Czech',
    description: 'Český překlad fate SRD',
    themeConfig: {
        theme: '@vuepress/theme-default',

        displayAllHeaders: false,
        nav: [
            {
                text: 'd20.cz',
                link: 'http://www.d20.cz/'
            }
        ],
        sidebar: {
            '/': [
                FateCoreToc,
                FaeToc,
                ToolkitToc,
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        footer: 'Copyright © 2018-present d20.cz Team',
        markdown: {
            toc: {
                includeLevel: [2,3]
            }
        },

        repo: 'd20cz/fate-srd-cz',
        repoLabel: 'GitHub',


        docsRepo: 'd20cz/fate-srd-cz',
        docsDir: 'src',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Editace stránky'
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
                return trim.match(/^card\s+(.*)$/);
            },

            render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^card\s+(.*)$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    var header = m[1] !== '-' ? '<p  class="custom-block-card-header">' + md.utils.escapeHtml(m[1]) + '</p>\n' : '';
                    return '<div class="custom-block-card">' + header + '\n';

                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        });
    }
};

