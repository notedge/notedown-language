# Alternative Features

在 pandoc/multi markdown 中的一些特性

## Inline Styles

| 扩展 |     惯用法     |     Notedown     |        效果         | 注释                |
| :--- | :------------: | :--------------: | :-----------------: | :------------------ |
| 上标 |    `21^th^`    |   `21\sup[th]`   |   21<sup>th</sup>   |
| 下标 |    `H~2~0`     |   `H\sub[2]O`    |   H<sub>2</sub>O    | 应该使用 `\ce` 指令 |
| 标记 |  `==marked==`  | `\mark[marked]`  | <mark>marked</mark> | 可以考虑            |
| 插入 | `++inserted++` | `\ins[inserted]` | <ins>inserted</ins> |
| 键位 |   `[[Ctrl]]`   |   `\kbd[ctrl]`   |   <kbd>Ctrl</kbd>   |



- **Markdown**: `*[HTML]: Hyper Text Markup Language`
- **Notedown**: `\abbr[HTML][Hyper Text Markup Language]`
- **Result**: <abbr title="Hyper Text Markup Language">HTML</abbr>


## Auto Conversion

### Emoji

- **Markdown**: `:tada: :100: :-( :") </3 <3 x-) :/ :'( :amphora: :alien: :D ,:( :*`
- **Notedown**: Unsupport!
- **Result**:

Unicode 发明出来干嘛的, 按 `:` 然后自动输入

### Arrow

- **Markdown**: `--> <-- <--> ==> <== <==>`
- **Notedown**: Unsupport!
- **Result**: → ← ↔ ⇒ ⇐ ⇔

与其用这个, 为什么不试试神奇的连字(ligature)呢?

## Reference

### Markdown

```markdown
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.
```

### Notedown

```notedown
Here is a footnote reference, \ref[1] and another. \ref[longnote]

\tag[1]: Here is the footnote.

\tag[longnote]: Here's one with multiple blocks.
```
