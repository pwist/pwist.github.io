---
title: Kartor
bg: owl.jpg
layout: page
crawlertitle: Fiskelagens kartor
permalink: "/kartor/"
summary: Fiskelagens kartor
active: maps
lang: sv
---

# Fiskelagens kartor

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Område</th>
        <th scope="col">Karta</th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.maps  %}  
     <tr>
        <td scope="row">{{ area.name_sv }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Ladda ner</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>

# Till karttjänsten
[Länk till karttjänsten](http://www.maanmittauslaitos.fi/asioi-verkossa/karttapaikka)
