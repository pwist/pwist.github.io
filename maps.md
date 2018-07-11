---
title: Maps
bg: owl.jpg
layout: page
crawlertitle: Fiskelagens kartor
permalink: "/maps/"
summary: Maps associated with the Fishery
active: maps
lang: en
---

# Maps of the Fishery


<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Area</th>
        <th scope="col">Map</th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.maps  %}  
     <tr>
        <td scope="row">{{ area.name_en }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Download</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>
# To the map service
[Link to service](http://www.maanmittauslaitos.fi/asioi-verkossa/karttapaikka)
