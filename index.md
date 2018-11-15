---
bg: "avtappning.jpg"
layout: default
crawlertitle: "Larsmo-Öjasjön"
title: "Larsmo-Öjasjön"
summary: "Larsmo-Öjasjön"
lang: sv
active: index
---
# LARSMO-ÖJASJÖN. Areal: 85 km 2 Medeldjup: 2,3 m (max djup: 9 m i Larsmosjön; 10 m i Öjasjön) Strandlinjen: 403 km

#### Fiskarter: Gädda, abborre, lake, gös, siklöja, braxen, mört, id, sik, nors, löja och ål

Larsmo-Öjasjön finns vid Bottenvikens kust, mellan städerna Karleby och Jakobstad. Sjön byggdes år 1962 för att tillgodose industrierna och staden Jakobstad med råvatten, så att man dämde upp havet genom att valla in Kalvholmsfjärden, Hästöfjärden, Gloskärsfjärden och Korvskärsfjärden. År 1969 byggdes Öjasjön för att trygga råvattenförsörjningen i Karleby och industrierna där. Havsvikarna Jouxfjärden, Träskminneviken och Bredviken invallades.

Larsmosjön och Öjasjön står i förbindelse med varandra via Kronoby å samt via en ca 400 m lång kanal. Vattnet från Larsmo-Öjasjön rinner ut i havet genom dammluckor vid Hästgrundet och Gertruds, samt via de tre fiskvägarna, Storströmmen, Gertruds och Bågast. Till Larsmo-Öjasjön rinner vatten från Kronoby-, Esse-, Purmo- och Kovijoki åar. 

Via reglering hålls sjöns nivå på en nivå som ligger på 10–20 cm över havsvattennivån (N60)  
Sjön utnämndes till Österbottens Landskapssjö år 2011


## Nyheter
{% assign myPosts=site.posts | where:"lang", page.lang %}
{% for post in myPosts limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </article>
{% endfor %}
 
 