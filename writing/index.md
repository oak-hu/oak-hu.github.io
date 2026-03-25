---
layout: default
title: Writing
full_width: true
---

# Writing

{% assign writing_pages = site.pages | where_exp: "item", "item.path contains 'writing/'" | where_exp: "item", "item.name != 'index.md'" %}
{% assign categories = "Grad Seminar Notes,Philosophy of Math,Philosophy of Language,Strawson Prize Essay,Frege,Knowledge and Reality,Moral Philosophy,2024 Summer Project" | split: "," %}

{% for category in categories %}
  {% assign cat_pages = writing_pages | where_exp: "item", "item.tag contains category" | sort: 'tag' %}
  {% if cat_pages.size > 0 %}
## {{ category }}
<div class="writing-grid">
  {% for post in cat_pages %}
  <a href="{{ post.url | relative_url }}" class="writing-card no-icon">
    <span class="writing-card-title">{{ post.title }}</span>
    {% assign week_label = post.tag | split: "(" | last | remove: ")" | strip %}
    {% unless week_label == category %}
    <span class="writing-card-week">{{ week_label }}</span>
    {% endunless %}
  </a>
  {% endfor %}
</div>
  {% endif %}
{% endfor %}
