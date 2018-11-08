---
title: Sea level
bg: owl.jpg
layout: page
crawlertitle: Larsmo-ojasjöns nivåer
permalink: "/levels/"
summary: Larsmo-ojasjöns nivåer
active: levelsindex
lang: en
---

# Sea level

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Year</th>
        <th scope="col">Area</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.sealevel  %}
     <tr>
        <td scope="row">{{ area.year }}</td>
        <td scope="row">{{ area.name_en }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Open</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>

[Plan of action](planofaction)
