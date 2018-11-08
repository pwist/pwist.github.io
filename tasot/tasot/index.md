---
title: Järven tasot
bg: owl.jpg
layout: page
crawlertitle: Järven tasot
permalink: "/tasot/tasot"
summary: Järven tasot
active: levels
exclude: true
lang: fi
---

# Järven tasot

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Vuosi</th>
        <th scope="col">Alue</th>
        <th scope="col"></th>

      </tr>
    </thead>

    <tbody>
     {% for area in site.data.sealevel  %}
     <tr>
        <td scope="row">{{ area.year }}</td>
        <td scope="row">{{ area.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Avata</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
