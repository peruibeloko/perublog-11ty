---
layout: main
---

{% for post in collections.post %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}
