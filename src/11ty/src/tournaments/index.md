---
title: Upcoming Tournaments
layout: base.njk
permalink: "/tournaments/"
---

# Upcoming Tournaments

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Tournament</th>
      <th>Location</th>
      <th>Matchups</th>
    </tr>
  </thead>
  <tbody>
    {% for tournament in tournaments %}
      <tr>
        <td>{{ tournament.date }}</td>
        <td>{{ tournament.name }}</td>
        <td>{{ tournament.location }}</td>
        <td>
          <ul>
            {% for teamEntry in tournament.teams %}
              {% set team = teams | selectattr("id", "equalto", teamEntry.id) | first %}
              <li>
                <a href="/teams/{{ team.id }}/">{{ team.name }}</a> vs. {{ teamEntry.opponent }}
             </li>
            {% endfor %}
          </ul>
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>