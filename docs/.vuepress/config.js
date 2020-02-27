module.exports = {
    dest: 'docs/.build',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Notedown',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.png` }]
    ],
    themeConfig: {
        repo: 'nyar-lang/Notedown',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        sidebar: [
            {
                title: 'Basic',
                collapsable: false,
                children: [
                    ['/Basic/', '基础简介'],
                    ['/Basic/TextMode', '行内标识'],
                    ['/Basic/Title', '单行标识'],
                    ['/Basic/3.Block', '多行标识'],
                    ['/Basic/4.Recommand', '推荐范式'],
                ]
            },
            {
                title: 'Advance',
                collapsable: false,
                children: [
                    ['/Advance/', '进阶特性'],
                    ['/Advance/Realign', '重整化对齐'],
                    ['/Advance/Alternative', '备选特性'],
                ]
            },
            {
                title: 'Commands',
                collapsable: false,
                children: [
                    ['/Commands/', '指令'],
                    ['/Commands/TextBlocks', '特殊文本块'],
                    ['/Commands/Media', '富媒体'],
                ]
            },
        ]
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
