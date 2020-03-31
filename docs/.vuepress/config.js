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
        "/cn/basic/": [
            {
                title: '基本功能',
                collapsable: true,
                children: [
                    ['', '概述'],
                ]
            },
        ],
        "/cn/advance/": [
            {
                title: '进阶功能',
                collapsable: true,
                children: [
                    ['', '概述'],
                ]
            },
        ],
        "/cn/commands/": [
            {
                title: 'Commands',
                collapsable: true,
                children: [
                    ['', 'Commands'],
                ]
            },
        ]
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
        "/en/commands/": [
            {
                title: 'Commands',
                collapsable: true,
                children: [
                    ['', 'Commands'],
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
