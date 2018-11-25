---
title: Fångster
bg: owl.jpg
layout: page
crawlertitle: Fångster
permalink: "/fangster/"
summary: Fiskfångster
active: catch
lang: sv
---
# Fiskfångster per år [enhet kg]

{% include fangster_charts.html %}

# Fiskarter
{% for fisk in site.fiskar %}
<p class="post-excerpt">{{ fisk.content | truncate: 260 }}</p><br>
<a href="{{ fisk.url | prepend: site.baseurl }}">
        Läs mera om {{ fisk.title }}
</a>

{% endfor %}