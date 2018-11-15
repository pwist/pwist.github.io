---
title: Delägarlagens kartor
bg: owl.jpg
layout: page
crawlertitle: Delägarlagens kartor
permalink: "/kartor/"
summary: Delägarlagens kartor
active: maps
lang: sv
---

# Delägarlagens kartor

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
