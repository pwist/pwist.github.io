---
title: Fiskvägar
bg: owl.jpg
layout: page
crawlertitle: Fiskvägar
permalink: "/fiskvagar/"
summary: Fiskvägar
active: fishtrails
lang: sv
---

# Fiskvägar

## Utredningar

<table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">År</th>
        <th scope="col">Titel</th>
        <th scope="col"></th>

      </tr>
    </thead>

    <tbody>
     {% for utredning in site.data.fiskvag_utredningar  %}
     <tr>
        <td scope="row">{{ utredning.year }}</td>
        <td scope="row">{{ utredning.name_sv }}</td>
        <td scope="row"><a href="{{ site.content_url }}{{ utredning.path }}">Ladda ner</a></td>
     </tr>
     {% endfor %}
    </tbody>
</table>
