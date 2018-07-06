---
title: Fiskarter
bg: owl.jpg
layout: page
crawlertitle: Why and how this blog was created
permalink: "/fiskar/"
summary: Olika fiskarter
active: fishes
lang: sv
---


{% for fisk in site.fiskar %}

<a href="{{ fisk.url | prepend: site.baseurl }}">
        {{ fisk.title }}
</a>

<p class="post-excerpt">{{ fisk.description | truncate: 160 }}</p>

{% endfor %}      
