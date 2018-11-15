---
bg: "avtappning.jpg"
layout: default
crawlertitle: "Luodon-Öjanjärvi"
title: "Luodon-Öjanjärvi"
summary: "Luodon-Öjanjärvi"
lang: fi
active: index
---
# Luodon-Öjanjärvi

## Pinta-ala: 85 km2. Keskisyvyys: 2,3 m (maksimi syvyys: 9 m Luodonjärvi, 10 m Öjanjärvi), Rantaviiva: 403 km

### Kalalajit: Hauki, ahven, made, kuha, siika, lahna, särki, säyne, siika, kuore, salakka ja ankerias
Luodon-Öjanjärvi on merenlahdista pengertämällä muodostettu tekojärvi Kokkolan ja Pietarsaaren välissä. Niiden lisäksi järvi ulottuu Pedersören, Kruunupyyn ja Luodon kuntien alueille.
Luodonjärvi muodostettiin vuonna 196o raakaveden saannin turvaamiseksi. Sen vettä käyttävät UPM-Kymmene ja Pietarsaaren kaupunki.

Luodonjärveen laskevat Kruunupyynjoki, Ähtävänjoki, Purmonjoki ja Kovjoki.  Luodonjärvi on yhteydessä vuonna 1969 rakennettuun, pienempään Öjanjärveen Kruunupyynjoen ja 400 metriä pitkän kanavan kautta.

Luodon-Öjanjärvestä vesi laskee mereen Hästgrundetin sekä Getrudsin patoluukkujen kautta, sekä myös kolmen kalateiden, - Storströmmen Getruds ja Bågast, - kautta.
Säännöstelyllä järvien pinta pidetään 10–20 cm merenpinnan N60-tason yläpuolella. 
Järvi on valittu Pohjanmaan maakunnan maakuntajärveksi Suomen ympäristökeskuksen ja Ylen Suomi Expressin kilpailussa vuonna 2011 

## Uutiset 

{% assign myPosts=site.posts | where:"lang", page.lang %}
{% for post in myPosts limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </article>
{% endfor %}
