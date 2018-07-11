const FateCoreToc = {
    title: 'Fate základní pravidla',
    collapsable: true,
    children: [
        '/FateCore/1-Zaklady',
        '/FateCore/2-TvorbaHry',
    ]
};


const FaeToc = {
    title: 'Fate zrychlená edice',
    collapsable: true,
    children: [
        '/FAE/1-Zaciname',
        '/FAE/2-SpolecneVypraveniPribehu',
    ]
};

const ToolkitToc = {
    title: 'Fate systémové nástroje',
    collapsable: true,
    children: [
        '/Toolkit/1-Uvod',
        '/Toolkit/2-Aspekty',
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
            '/FateCore/': [
                FateCoreToc,
            ],
            '/FAE/': [
                FaeToc,
            ],
            '/Toolkit/': [
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

