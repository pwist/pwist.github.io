---
title: Fångster
bg: owl.jpg
layout: page
crawlertitle: Fångster
permalink: "/fangster/"
summary: Fiskfångster
active: catch
lang: sv
---

# Fiskfångster per år

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">År</th>
        <th scope="col">Länk</th>
      </tr>
    </thead>

    <tbody>
     {% for year in site.data.fisheries_production  %}  
     <tr>
        <td scope="row">{{ year.name_sv }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ year.path }}">Öppna</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>
