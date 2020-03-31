---
home: true
actionText: Get Started →
actionLink: /Basic/
footer: MPL2.0 Licensed | Copyright © 2019-2019 Nyar™
---


{{ $page }}

<aplayer :audio="{
name: '东西（Cover：林俊呈）',
artist: '纳豆',
url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
}" :lrcType="3" />


<netease/>

```html
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>

<meting-js
	server="netease"
	type="song"
	id="22785207">
</meting-js>


```
