---
title: Fiskeriundersökningar
bg: owl.jpg
layout: page
crawlertitle: Fiskeriundersökningar
permalink: "/fiskeriundersokningar/"
summary: Fiskeriundersökningar
active: fishreports
lang: sv
---

# Fiskeriundersökningar

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.fishing_reports  %}
     <tr>
        <td scope="row">{{ area.name_sv }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Ladda ner</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
