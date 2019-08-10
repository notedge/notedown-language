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
                children: [
                    ['/Basic/', '基础简介'],
                    ['/Basic/1.Inline', '行内标识'],
                    ['/Basic/2.Single', '单行标识'],
                    ['/Basic/3.Block', '多行标识'],
                    ['/Basic/4.Recommand', '推荐范式'],
                ]
            },
            {
                title: 'Advance',
                children: [
                    ['/Advance/', '进阶特性'],
                ]
            },
            {
                title: 'Function',
                children: [
                    ['/Function/', '函数特性'],
                ]
            },
        ]
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    }
};
