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


{% for fish in site.fishes %}

<a href="{{ fish.url | prepend: site.baseurl }}">
        {{ fish.title }}
</a>

<p class="post-excerpt">{{ fish.description | truncate: 160 }}</p>

{% endfor %}      
