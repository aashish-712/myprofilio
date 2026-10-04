const documentReady = () => {
  const skillGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const journeyGrid = document.getElementById('journey-grid');
  const philosophySequence = document.getElementById('philosophy-sequence');
  const exploringGrid = document.getElementById('exploring-grid');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const roleText = document.getElementById('role-text');
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const backToTopButton = document.querySelector('.back-to-top');

  const iconMap = {
    Python: '🐍',
    'Programming Fundamentals': '⌨️',
    'Object-Oriented Programming': '🧩',
    NumPy: '∑',
    'Artificial Intelligence Fundamentals': '🤖',
    'Machine Learning Fundamentals': '📊',
    'Data Science Fundamentals': '🔬',
    'Data Analysis': '📈',
    'Problem Solving': '🧠',
    'Algorithms and Data Structures': '🧮',
    'Git and GitHub': '🗂️',
  };

  const statusLabel = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    planned: 'Planned',
  };

  const renderSkills = () => {
    if (!skillGrid) return;

    skillGrid.innerHTML = siteConfig.skills
      .map(
        (group) => `
          <article class="skill-card reveal">
            <div class="skill-head">
              <h3>${group.category}</h3>
              <span class="skill-icon" aria-hidden="true">${group.items[0] ? iconMap[group.items[0].name] || '✦' : '✦'}</span>
            </div>
            <div class="skill-list">
              ${group.items
                .map(
                  (item) => `
                    <div class="skill-item">
                      <span class="skill-name">${item.name}</span>
                      <span class="skill-tag">${item.level}</span>
                    </div>
                  `
                )
                .join('')}
            </div>
          </article>
        `
      )
      .join('');
  };

  const renderProjects = () => {
    if (!projectsGrid) return;

    const cards = siteConfig.projects
      .map(
        (project) => `
          <article class="project-card reveal" data-status="${project.status}">
            <img src="${project.image}" alt="${project.title} project illustration" />
            <div class="project-body">
              <div class="project-meta">
                <span class="project-category">${project.category}</span>
                <span class="project-status">${statusLabel[project.status]}</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.stack.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
              </div>
              <div class="project-actions">
                <a class="link-btn" href="${project.github === '#' ? '#projects' : project.github}" target="_blank" rel="noreferrer">Repo</a>
                <button class="link-btn project-details-btn" type="button" data-project-id="${project.id}">Details</button>
              </div>
            </div>
          </article>
        `
      )
      .join('');

    projectsGrid.innerHTML = cards || `
      <div class="empty-state">
        <h3>No projects added yet.</h3>
        <p>Add your first project to start building a stronger portfolio story.</p>
      </div>
    `;

    document.querySelectorAll('.project-details-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const project = siteConfig.projects.find((item) => item.id === button.dataset.projectId);
        if (!project) return;
        openProjectModal(project);
      });
    });
  };

  const renderJourney = () => {
    if (!journeyGrid) return;

    journeyGrid.innerHTML = siteConfig.journey
      .map(
        (item) => `
          <article class="journey-step reveal" data-status="${item.status}">
            <span class="journey-badge">${item.status}</span>
            <h3>${item.title}</h3>
          </article>
        `
      )
      .join('');
  };

  const renderPhilosophy = () => {
    if (!philosophySequence) return;

    philosophySequence.innerHTML = siteConfig.philosophy
      .map(
        (step) => `
          <article class="philosophy-step reveal">
            <strong>${step.step}</strong>
            <p>${step.text}</p>
          </article>
        `
      )
      .join('');
  };

  const renderExploring = () => {
    if (!exploringGrid) return;

    exploringGrid.innerHTML = siteConfig.exploring
      .map(
        (item) => `
          <article class="exploring-card reveal">
            <div class="exploring-head">
              <h3>${item.topic}</h3>
              <span class="exploring-badge">${item.status}</span>
            </div>
            <p>${item.note}</p>
            <a href="${item.link}" aria-label="Learn more about ${item.topic}">Resource link</a>
          </article>
        `
      )
      .join('');
  };

  const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' ? '<span class="theme-toggle__icon">☼</span>' : '<span class="theme-toggle__icon">☾</span>';
    }
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  };

  const initRoleCycler = () => {
    if (!roleText) return;

    let index = 0;
    const cycle = () => {
      roleText.textContent = siteConfig.roleTexts[index];
      index = (index + 1) % siteConfig.roleTexts.length;
    };

    cycle();
    setInterval(cycle, 2000);
  };

  const setupResumeButton = () => {
    const button = document.getElementById('resume-button');
    if (!button) return;

    if (siteConfig.resume.enabled && siteConfig.resume.path) {
      button.href = siteConfig.resume.path;
      button.hidden = false;
    }
  };

  const openProjectModal = (project) => {
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-header">
          <div>
            <p class="eyebrow">${project.category}</p>
            <h3 id="modal-title">${project.title}</h3>
          </div>
          <span class="project-status">${statusLabel[project.status]}</span>
        </div>

        <img class="modal-content-image" src="${project.image}" alt="${project.title} project preview" />

        <div class="modal-section">
          <h4>Problem statement</h4>
          <p>${project.problem}</p>
        </div>

        <div class="modal-section">
          <h4>Project description</h4>
          <p>${project.description}</p>
        </div>

        <div class="modal-section">
          <h4>Tech stack</h4>
          <div class="project-tags">
            ${project.stack.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h4>Key features</h4>
          <ul>${project.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
        </div>

        <div class="modal-section">
          <h4>What I learned</h4>
          <ul>${project.learning.map((learningItem) => `<li>${learningItem}</li>`).join('')}</ul>
        </div>

        <div class="modal-section">
          <h4>Challenge and solution</h4>
          <p><strong>Challenge:</strong> ${project.challenge}</p>
          <p><strong>Solution:</strong> ${project.solution}</p>
        </div>

        <div class="project-actions">
          <a class="link-btn" href="${project.github === '#' ? '#projects' : project.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a class="link-btn" href="${project.demo === '#' ? '#projects' : project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  const setupNav = () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section[id]');

    const updateActiveLink = () => {
      let currentId = 'hero';
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const height = section.offsetHeight;
        if (top <= 150 && top + height > 150) {
          currentId = section.id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', isActive);
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav) mainNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  };

  const setupMobileNav = () => {
    if (!navToggle || !mainNav) return;

    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  };

  const setupThemeToggle = () => {
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  };

  const setupFilterButtons = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
        const filter = button.dataset.filter || 'all';
        const cards = document.querySelectorAll('.project-card');

        cards.forEach((card) => {
          const matches = filter === 'all' || card.dataset.status === filter;
          card.style.display = matches ? '' : 'none';
        });
      });
    });
  };

  const setupBackToTop = () => {
    if (!backToTopButton) return;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
  };

  const setupRevealObserver = () => {
    const revealItems = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const validateField = (field) => {
    const input = document.getElementById(field);
    const errorEl = document.querySelector(`[data-error-for="${field}"]`);

    if (!input || !errorEl) return true;

    const value = input.value.trim();
    let message = '';

    if (field === 'name' && !value) message = 'Please enter your name.';
    if (field === 'email') {
      if (!value) message = 'Please enter your email.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please enter a valid email address.';
    }
    if (field === 'subject' && !value) message = 'Please add a subject.';
    if (field === 'message' && !value) message = 'Please write a message.';

    errorEl.textContent = message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  };

  const setupContactForm = () => {
    if (!form) return;

    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach((field) => {
      const input = document.getElementById(field);
      input?.addEventListener('blur', () => validateField(field));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isValid = fields.every((field) => validateField(field));
      if (!isValid) {
        formStatus.textContent = 'Please correct the highlighted fields.';
        formStatus.style.color = '#fca5a5';
        return;
      }

      const emailAddress = siteConfig.socialLinks.email;
      formStatus.textContent = 'This demo form is not connected to a backend yet. Configure a form service or use the email link below.';
      formStatus.style.color = '#67e8f9';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      window.location.href = mailto;
      form.reset();
    });
  };

  const setupEmailCopy = () => {
    const button = document.querySelector('.copy-email');
    if (!button) return;

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(siteConfig.socialLinks.email);
        button.textContent = 'Email copied';
        setTimeout(() => {
          button.textContent = 'Copy email';
        }, 1800);
      } catch (error) {
        button.textContent = 'Copy failed';
        setTimeout(() => {
          button.textContent = 'Copy email';
        }, 1800);
      }
    });
  };

  const setupModalClose = () => {
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

    modal?.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'true') {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
        closeProjectModal();
      }
    });
  };

  renderSkills();
  renderProjects();
  renderJourney();
  renderPhilosophy();
  renderExploring();
  initTheme();
  initRoleCycler();
  setupResumeButton();
  setupNav();
  setupMobileNav();
  setupThemeToggle();
  setupFilterButtons();
  setupBackToTop();
  setupRevealObserver();
  setupContactForm();
  setupEmailCopy();
  setupModalClose();
};

document.addEventListener('DOMContentLoaded', documentReady);
