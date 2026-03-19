// Portfolio Data Renderer
document.addEventListener('DOMContentLoaded', function () {
  // Load portfolio data from JSON
  fetch('./assets/data/portfolio.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load portfolio data');
      return response.json();
    })
    .then(data => {
      renderAboutMe(data.aboutMe);
      renderExperiences(data.experiences);
      renderProjects(data.projects);
      renderEducation(data.education);
      renderSkills(data.skills);
      renderSocialLinks(data.socialLinks);
    })
    .catch(error => console.error('Error loading portfolio:', error));
});

// Render About Me section
function renderAboutMe(content) {
  const container = document.getElementById('about-me-content');
  if (container) {
    container.innerHTML = `<p>${content}</p>`;
  }
}

// Render Experiences
function renderExperiences(experiences) {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="work-experience">
      <small class="date">${exp.date}</small>
      <h3 class="h5 date-title">${exp.title} - <a href="${exp.companyLink}" title="${exp.companyDescription}">${exp.company}</a></h3>
      ${exp.points.map(point => `<p>• ${point}</p>`).join('')}
    </div>
  `).join('');
}

// Render Projects
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = `<div class="row">
    ${projects.map(proj => `
      <div class="col-md-4">
        <h3 class="h5"><a href="${proj.link}" target="_blank">${proj.title}</a></h3>
        <p>${proj.date}</p>
      </div>
    `).join('')}
  </div>`;
}

// Render Education
function renderEducation(education) {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = `<div class="row">
    ${education.map(edu => `
      <div class="col-md-4">
        <div class="education-experience">
          <h3>${edu.school}</h3>
          <h5 class="h5 date-title">${edu.degree}</h5>
          <small class="date">Major - ${edu.major}</small><br>
          <small class="date">${edu.years}</small>
        </div>
      </div>
    `).join('')}
  </div>`;
}

// Render Skills
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = `<div class="row">
    ${skills.map(skill => `
      <div class="${skill.category === 'Dev Tools' ? 'col-md-6' : 'col-md-4'}">
        <div class="language-experience">
          <h3 class="h5">${skill.category} - </h3>
          <h5 class="smaller-desc">${skill.items}</h5>
        </div>
      </div>
    `).join('')}
  </div>`;
}

// Render Social Links
function renderSocialLinks(links) {
  const container = document.getElementById('social-links-container');
  if (!container) return;

  container.innerHTML = `<div class="row">
    ${links.map(link => `
      <div class="col-md-3">
        <p class="social-buttons">
          <a href="${link.url}" title="${link.platform}" target="_blank">
            <span class="social-round-icon fa-icon"><i class="fa ${link.icon}"></i></span>${link.name}
          </a>
        </p>
      </div>
    `).join('')}
  </div>`;
}

// Scroll Revelation (original function kept for compatibility)
function scrollRevelation(selector) {
  // This function handles scroll reveal animations for elements
  const elements = document.querySelectorAll(selector);

  const revealElement = () => {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Trigger on load and scroll
  window.addEventListener('scroll', revealElement);
  revealElement();
}
