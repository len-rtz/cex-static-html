
## Hugo Phase 1: Hugo Implementation – Setup, Teams, Matches, Contact Page

This phase focused on setting up the Hugo-based static site and rendering dynamic content based on structured data. The implementation followed the shared ontology model for a sports club website.

###  Tasks Completed

- **Project Setup**
  - Initialized Hugo site using `hugo new site`
  - Installed and configured the Ananke theme
  - Verified local development with `hugo server`

- **Folder Structure Created**
  - Set up key directories: `content/`, `data/`, `layouts/`, `static/`

- **Dynamic Data Integration**
  - Created YAML files in `/data/` for:
    - `teams.yaml`: includes team details, coach, and player info
    - `matches.yaml`: includes match details and linked team IDs

- **Pages Implemented**
  - `/teams/`
    - Rendered team names, categories
    - Displayed coach and a list of players dynamically
    - Linked from navigation menu
  - `/matches/`
    - Match schedule list rendered dynamically from YAML
    - Team relationships displayed
  - `/contact/`
    - Contact form UI with basic HTML elements
    - Static form (no submission logic)
    - Page created using `content/contact/index.md` and a custom layout

- **Navigation**
  - Configured main menu in `config.toml`
  - Links added for Teams, Matches, and Contact

- **Templating**
  - Custom templates created in `layouts/_default/` for:
    - `teams.html`
    - `matches.html`
    - `contact.html`
  - Used Hugo's Go Template syntax for loops, data access, and page structure



## Phase 2: Data Modeling and Rendering

In this phase, we focused on connecting the static site generator (Hugo) to ontology-based structured data. YAML files representing teams and training sessions were created and integrated into the project. Using Hugo's templating system, we developed:

- A dynamic `/teams/` page that lists all teams with their players and coaches.
- Individual team detail pages (e.g., `/teams/tigers/`) that pull content from `teams.yaml` based on team ID.
- Display of training sessions filtered per team using relational data from `trainingSessions.yaml`.

This phase emphasized templating logic (`range`, `index`, `where`, `eq`) and data integration through Hugo’s `.Site.Data` structure. Special attention was paid to managing entity relationships and debugging template conditions to ensure clean rendering. This completes the ontology-to-template integration milestone.

