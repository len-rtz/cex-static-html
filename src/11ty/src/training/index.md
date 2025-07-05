---
title: Training Schedule
layout: base.njk
---

# Training Schedule

## Debug Info
- Training data exists: {% if training %}YES{% else %}NO{% endif %}
- Number of sessions: {{ training.length }}

## Training Sessions

{% if training %}
{% for session in training %}
### {{ session.title }}
- **Day:** {{ session.day }}
- **Time:** {{ session.time }}
- **Location:** {{ session.location }}
- **Duration:** {{ session.duration }} minutes

{% endfor %}
{% else %}
No training data found. Check that training.json is in src/_data/
{% endif %}