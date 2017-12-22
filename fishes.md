---
title: Fish Pages
bg: owl.jpg
layout: page
crawlertitle: Why and how this blog was created
permalink: "/fishes/"
summary: About this blog
active: fishes
lang: en
---


{% for fish in site.fishes %}


<a href="{{ fish.url | prepend: site.baseurl }}">
        {{ fish.title }}
</a>

<p class="post-excerpt">{{ fish.description | truncate: 160 }}</p>

{% endfor %}      
