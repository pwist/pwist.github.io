---
title: Production
bg: owl.jpg
layout: page
crawlertitle: Production
permalink: "/production/"
summary: Production
active: catch
lang: en
---

# Fisheries production per year

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Year</th>
        <th scope="col">Link</th>
      </tr>
    </thead>

    <tbody>
     {% for year in site.data.fisheries_production  %}  
     <tr>
        <td scope="row">{{ year.name_en }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ year.path }}">Open</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>