---
title: Kalatiet
bg: owl.jpg
layout: page
crawlertitle: Kalatiet
permalink: "/kalatiet/"
summary: Kalatiet
active: fishtrails
lang: fi
---

# Kalatiet

## Selvitykset

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Vuosi</th>
        <th scope="col">Nimike</th>
        <th scope="col"></th>

      </tr>
    </thead>

    <tbody>
     {% for utredning in site.data.fiskvag_utredningar  %}
     <tr>
        <td scope="row">{{ utredning.year }}</td>
        <td scope="row">{{ utredning.name_fi }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ utredning.path }}">Ladda ner</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
