---
title: Suunitelma
bg: owl.jpg
layout: page
crawlertitle: Suunitelma
permalink: "/pinta/suunitelma"
summary: Suunitelma
active: planofaction
exclude: true
lang: fi
---

# Suunitelma
<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Vuosi</th>
        <th scope="col">Nimi</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for year in site.data.planofaction  %}
     <tr>
        <td scope="row">{{ year.year }}</td>
        <td scope="row">{{ year.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ year.path }}">Avata</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
