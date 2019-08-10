# Introduce Language




扩展 Markdown 是一种灾难, 我三个月以后就记不住, 这么多奇奇怪怪的符号到底什么意思啦.




分为行内(Inline), 单行(Single)和多行表达式(Block).



如果没有接触过 md 语法, 那么可以读下一节

如果已经有 md 使用经验, 那么接下来列出一些不同之处

取消了 HTML 标记

但是注意到 `<` 在 Notedown 中并未分配任何语义, `<` 起始的部分会被视作普通文本, 因此可能最后文本仍然可以被 HTML 正确渲染.

但是这样非常的不安全, 因为可能会有 `<script>` 标签

取消了以下 markdown 语法:

```
[超链接名](超链接地址"超链接title")
<a href="超链接地址" title="超链接title">超链接显示名</a>

![图片alt](图片地址 ''图片title'')
<img src="图片链接" alt="图片alt" title="图片title">
```


取消了以下扩展语法
