
## Hugo Phase 1: Hugo Implementation – Setup, Teams, Matches, Contact Page

This phase focused on setting up the Hugo-based static site and rendering dynamic content based on structured data. The implementation followed the shared ontology model for a sports club website.

### Tasks Completed

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

## Phase 3 Tasks Completed
- Rendered upcoming tournaments from `data/tournaments.yaml`
- Linked tournament participants dynamically using team IDs from `data/teams.yaml`
- Built a static HTML membership form with semantic form inputs
- Applied consistent layout and styling with **Ananke** theme classes

## Implemented Features
- **Dynamic Tournaments List:** Pulled from YAML and sorted by date
- **Team Linking:** Used `where` and `index` functions to resolve team ID to name and link
- **Fallback Handling:** Shown when team ID isn't found
- **HTML Form:** Membership form located at `/memberships/` with labeled input fields
- **Styling:** `pa4`, `mw7`, `shadow-1`, `bg-white`, and others for layout consistency


## Phase 4 – News, Static Pages & Navigation

### Key Features:
- Created a **news/blog section** using markdown posts.
- Designed `news/list.html` and `news/single.html` for dynamic post listing and detail views.
- Homepage enhanced with:
  - Latest news previews
  - Clear "Join the Club" call to action
- Added static pages:
  - `about.md` and `contacts.md` with custom layouts
- Updated **navigation bar** to include:
  - Home, Teams, News, Tournaments, Memberships, About, Contact

---

##  Phase 5 – GitHub Pages Deployment

### Deployment Highlights:
- Setup GitHub Actions for automatic deployment
- Used Hugo **Extended version** for Ananke SCSS support
- Adjusted `baseURL` in `hugo.toml` to:  
  `https://kishank11.github.io/cex-static-html/`
- Output directory `public/` generated via:
  ```bash

