const FateCoreToc = {
    title: 'Fate základní pravidla',
    collapsable: true,
    children: [
        '/fate-core-system/1-zaklady',
        '/fate-core-system/2-tvorba-hry',
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
        displayAllHeaders: true,
        nav: [
            /*
            {
                text: 'Fate základní pravidla',
                link: FateCoreToc.children[0]
            },
            {
                text: 'Fate zrychlená edice',
                link: FaeToc.children[0]
            },
            {
                text: 'Fate systémové nástroje',
                link: ToolkitToc.children[0]
            },
            */
        ],
        sidebar: {
            /*
            '/fate-core-system/': [
                FateCoreToc,
            ],
            '/fae/': [
                FaeToc,
            ],
            '/fate-system-toolkit/': [
                ToolkitToc,
            ],
            */
            '/': [
                FateCoreToc,
                FaeToc,
                ToolkitToc,
            ]
        },
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        footer: 'Copyright © 2018-present d20.cz Team',
        markdown: {
            toc: {
                includeLevel: [2, 3]
            }
        }
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
    }
};

