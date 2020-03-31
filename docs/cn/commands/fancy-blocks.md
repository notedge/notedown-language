## \quote

- **type**:
- **body**:
- parse_body: 是否解析 body

type: info/success/warning/danger


### 推荐范式

````note
```quote{type = "info"}
这是一条 **普通** 信息!
```
```quote{type = "success"}
这是一条 **成功** 信息!
```
```quote{type = "warning"}
这是一条 **警告** 信息!
```
```quote{type = "danger"}
这是一条 **危险** 信息!
```
````

### 效果

<blockquote class="fancyquote info">
    <p>这是一条<strong>普通</strong>信息!</p>
</blockquote>
<blockquote class="fancyquote success">
    <p>这是一条<strong>成功</strong>信息!</p>
</blockquote>
<blockquote class="fancyquote warning">
    <p>这是一条<strong>警告</strong>信息!</p>
</blockquote>
<blockquote class="fancyquote danger">
    <p>这是一条<strong>危险</strong>信息!</p>
</blockquote>

## \details

- **summary**: 折叠显示的标题
- **body**: 被折叠的内容
- parse_summary: 是否解析 summary
- parse_body: 是否解析 body
- open: 默认情况是否开启

### 推荐范式

````note
```details{summary = "Details"}
Something **small enough** to escape casual notice.
```

\begin{details}
    \push{summary}
    Details
    \push{body}
    Something **small enough** to escape casual notice.
\end{details}
````

### 效果

<details>
    <summary>Details</summary>
    <p>Something <b>small enough</b> to escape casual notice.</p>
</details>

<details>
    <summary>Details</summary>
    <p>Something <b>small enough</b> to escape casual notice.</p>
</details>
