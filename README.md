# Aspiring AI Engineer & Data Scientist Portfolio

This portfolio is a modern, dark-first personal site for an aspiring AI Engineer and Data Scientist. It is designed to be easy to personalize as skills, projects, learning milestones, and social links evolve.

## Features

- Responsive single-page portfolio layout
- Dark mode default with light mode toggle
- Animated hero with rotating role text
- Skills dashboard and project showcase
- Project filters and modal details
- Learning journey timeline
- Contact section with form validation and email copy action
- Honest empty-state handling for future projects and no backend-connected form

## Run locally

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Customize the content

Edit the configuration in `config.js` to update:

- Personal identity and social links
- Role text rotation
- Skills, projects, philosophy, and learning journey
- Contact email
- Resume toggle and file path

Example configuration entries:

```js
socialLinks: {
  linkedin: 'https://www.linkedin.com/in/yourname',
  github: 'https://github.com/yourusername',
  email: 'your.email@example.com',
},
resume: {
  enabled: false,
  path: './resume.pdf',
},
```

## Form behavior

The contact form is intentionally designed to avoid claiming that messages were sent when no backend or form service is configured. The form validates fields and then shows a clear status message for configuration. To enable real submissions, connect the form to a service such as Formspree, Netlify Forms, or a backend endpoint.

## Deploy

This project is static and ready to deploy on most modern hosting providers such as:

- Vercel
- Netlify
- GitHub Pages

For deployment, upload the project files as-is and ensure the root page loads correctly.

## Files included

- `index.html` — page structure
- `styles.css` — design system and responsive layout
- `config.js` — centralized portfolio data
- `script.js` — interactivity and rendering logic
- `404.html` — fallback page
- `favicon.svg` — branding icon
- `robots.txt` — search engine guidance
- `sitemap.xml` — sitemap for crawlers
