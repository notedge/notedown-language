const locale_cn = {
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    sidebar: {
        "/cn/": [
            {
                title: '基本功能',
                collapsable: false,
                children: [
                    ['basic/', '概述'],
                    ['basic/single-line', '单行模式'],
                    ['basic/text-mode', '文本模式'],
                    ['basic/block-mode', '区块模式'],
                    ['basic/recommend', '推荐范式'],
                ]
            },
            {
                title: '进阶功能',
                collapsable: false,
                children: [
                    ['advance/', '概述'],
                    ['advance/style', '格式'],
                    ['advance/alternative', '改进策略'],
                    ['advance/realign', '重对齐策略'],
                    ['advance/shortcomings', '缺陷与改进'],
                ]
            },
            {
                title: '指令一览',
                collapsable: false,
                children: [
                    ['commands/', 'Overview'],
                    ['commands/io', 'IO'],
                    ['commands/media', 'Media'],
                    ['commands/fancy-blocks', 'Fancy Blocks'],
                ]
            },
        ],
    }
}

const locale_en = {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
        }
    },
    sidebar: {
        "/en/": [
            {
                title: 'Commands',
                collapsable: false,
                children: [
                    ['commands/', 'Commands'],
                ]
            },
        ]
    }
}

module.exports = {
    dest: 'docs/.build',
    locales: {
        '/cn/': {
            lang: 'zh-CN',
            title: 'Notedown 语言教程',
            lastUpdated: 'Last Updated',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Notedown Language',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'nyar-lang/Notedown',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        locales: {
            '/cn/': locale_cn,
            '/en/': locale_en,
        },
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    },
    plugins: [
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-nprogress',
        [
            'vuepress-plugin-mathjax',
            {
                target: 'chtml',
                macros: {
                    '*': '\\times',
                },
            },
        ],
        [
            'vuepress-plugin-zooming',
            {
                selector: '.my-wrapper .my-img',
                delay: 1000,
                options: {
                    bgColor: 'black',
                    zIndex: 10000,
                },
            },
        ],
    ],
};
