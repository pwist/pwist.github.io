---
title: Plan of action
bg: owl.jpg
layout: page
crawlertitle: Handlingsplan
permalink: "/levels/planofaction"
summary: Handlingsplan
active: planofaction
exclude: true
lang: en
---

## Plan of action
<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Year</th>
        <th scope="col">Title</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for year in site.data.planofaction  %}
     <tr>
        <td scope="row">{{ year.year }}</td>
        <td scope="row">{{ year.name_en }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ year.path }}">Open</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
