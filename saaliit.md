---
title: Saalit
bg: owl.jpg
layout: page
crawlertitle: Saalit
permalink: "/saalit/"
summary: Saalit
active: catch
lang: fi
---

# Kalasaalit vuosittain

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Vuosi</th>
        <th scope="col">Linki</th>
      </tr>
    </thead>

    <tbody>
     {% for year in site.data.fisheries_production  %}  
     <tr>
        <td scope="row">{{ year.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ year.path }}">Avaa</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>