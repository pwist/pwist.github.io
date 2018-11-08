---
title: Kalanraportiti
bg: owl.jpg
layout: page
crawlertitle: Kalanraportiti
permalink: "/kalanraportit/"
summary: Kalanraportiti
active: fishreports
lang: fi
---

# Kalanraportiti

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Nimike</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
     {% for area in site.data.fishing_reports  %}
     <tr>
        <td scope="row">{{ area.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ area.path }}">Ladda ner</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
