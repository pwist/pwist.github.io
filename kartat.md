---
title: Kartat
bg: owl.jpg
layout: page
crawlertitle: Kalavedeiden kartat
permalink: "/kartat/"
summary: Kalavedeiden kartat
active: maps
lang: fi
---

# Kalavedeiden kartat
<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Alue</th>
        <th scope="col">Karta</th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.maps  %}  
     <tr>
        <td scope="row">{{ area.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Ladata</a></td>
     </tr>     
     {% endfor %}
    </tbody>
</table>
# Karttapalveluun
[Karttapalvelun kotisivu](http://www.maanmittauslaitos.fi/asioi-verkossa/karttapaikka)
