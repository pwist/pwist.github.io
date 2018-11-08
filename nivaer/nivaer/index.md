---
title: Sjöns nivåer
bg: owl.jpg
layout: page
crawlertitle: Sjöns nivåer
permalink: "/nivaer/nivaer"
summary: Sjöns nivåer
active: levels
exclude: true
lang: sv
---

# Sjöns nivåer
<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">År</th>
        <th scope="col">Område</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.sealevel  %}
     <tr>
        <td scope="row">{{ area.year }}</td>
        <td scope="row">{{ area.name_sv }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Ladda ner</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
