---
title: Kalalajit
bg: owl.jpg
layout: page
crawlertitle: Why and how this blog was created
permalink: "/kalat/"
summary: Eri kalalajit
active: kalat
lang: fi
---


{% for kala in site.kalat %}

<a href="{{ kala.url | prepend: site.baseurl }}">
        {{ kala.title }}
</a>

<p class="post-excerpt">{{ kala.description | truncate: 160 }}</p>

{% endfor %}      
