// Portfolio website JavaScript functionality

// Sample project data - replace with your actual projects
const projectsData = {
  planning: [
    {
      id: 1,
      title: "Regeneration Design",
      projectName: "REUNION INSTEAD OF FAREWELL",
      projectSubtitle: "Preservation and Renewal of Area Around Old Railway Station",
      image: "assets/planning/ud_pukou.jpg",
      colorImage: "assets/planning/ud_pukou.jpg",
      modalImage: "assets/planning/gif_pukou.gif",
      description: "Regeneration of abandoned Pukou Railway Station into a public space that transforms farewell into reunion. The project preserves historical architecture while creating an outdoor cultural hub with creative industries, reusing train carriages to celebrate the site's unique railway heritage and provide community gathering spaces.",
      details: {
        location: "Nanjing, CHN",
        year: "2019",
        size: "7 ha",
        team: "Team of 2, collaborated with Yang CHEN"
      }
    },
    {
      id: 2,
      title: "Urban/Architecture Design",
      projectName: "CONNECTION OF HISTORICAL AND MODERN",
      projectSubtitle: "Regeneration of Shikumen Lilong buildings",
      image: "assets/planning/ud_shikumen1.jpg",
      colorImage: "assets/planning/ud_shikumen1.jpg",
      modalImage: "assets/planning/gif_shikumen.gif",
      description: "Regeneration of century-old Shikumen Lilong buildings in Jingan District, Shanghai. The project balances preservation of historic urban fabric with modern development, maintaining traditional high-density walkable lanes while introducing public spaces and affordable housing to revitalize this culturally significant but abandoned area.",
      details: {
        location: "Shanghai, CHN",
        year: "2019",
        size: "3.3 ha",
        team: "Team of 2, collaborated with Ji TONG"
      }
    },
    {
      id: 3,
      title: "Landscape Planning",
      projectName: "'PLAY' THE QUARRY",
      projectSubtitle: "Landscape Planning of the Brownfield Quarries",
      image: "assets/planning/lp_kuang1.jpg",
      colorImage: "assets/planning/lp_kuang1.jpg",
      modalImage: "assets/planning/gif_kuangken.gif",
      description: "Revival of an abandoned industrial brownfield on Xishan Island in Taihu Lake. The project transforms the idle waste gas site into a gaming destination for young people, completing the island's tourist circuit and balancing the demographic of predominantly middle-aged visitors while demonstrating brownfield regeneration potential.",
      details: {
        location: "Jiangsu, CHN",
        year: "2018",
        size: "95.6 ha",
        team: "Team of 2, collaborated with Qian LI"
      }
    },
    {
      id: 4,
      title: "Landscape Planning and Design",
      projectName: "'PLAY' THE QUARRY",
      projectSubtitle: "Resurgence Of The Area Around Historical Heritage",
      image: "assets/planning/lp_hongshanqiao0.jpg",
      colorImage: "assets/planning/lp_hongshanqiao0.jpg",
      modalImage: "assets/planning/gif_hongshanqiao.gif",
      description: "Revival of an abandoned industrial brownfield on Xishan Island in Taihu Lake. The project transforms the idle waste gas site into a gaming destination for young people, completing the island's tourist circuit and balancing the demographic of predominantly middle-aged visitors while demonstrating brownfield regeneration potential.",
      details: {
        location: "Fujian, CHN",
        year: "2020",
        size: "20 ha",
        team: "Team of 4, collaborated with Jingge LI, Yuxiang LIU, Yuheng LIN"
      }
    },
    {
      id: 5,
      title: "Sustainable Landscape Planning",
      projectName: "Jiulong Lake Landscape Planning",
      projectSubtitle: "Sustainable Landscape",
      image: "assets/planning/lp_jiulonghu1.jpg",
      colorImage: "assets/planning/lp_jiulonghu1.jpg",
      modalImage: "assets/planning/gif_jiulonghu.gif",
      details: {
        location: "Nanjing, CHN",
        year: "2018",
        team: "Team of 2, collaborated with Yang CHEN"
      }
    }
  ],
  research: [
    {
      id: 1,
      title: "Urban Mobility Analysis",
      image: "assets/planning/research_UM0.jpg",
      colorImage: "assets/planning/research_UM0.jpg",
      modalImage: "assets/planning/gif_research_UM.gif",
      description: "",
      details: {
        location: "Shenzhen, CHN",
        year: "2025",
        team: "Individual work"
      }
    },
    {
      id: 2,
      title: "Planning for Sustainable Living",
      projectName: "'Park Hill' Holloway Prison Redesign",
      projectSubtitle: "Planning for Sustainable Living",
      image: "assets/planning/research_parkhill.jpg",
      colorImage: "assets/planning/research_parkhill.jpg",
      modalImage: "assets/planning/gif_research_parkhill.gif",
      description: "",
      details: {
        location: "London, UK",
        year: "2019",
        team: "Team of 4, collaborated with Nadezhda Wigglesworth, Sikkharini Cintantyadwisthi, Simon Wasser"
      }
    },
    {
      id: 3,
      title: "Urban Regeneration Planning",
      projectName: "Drummond Street Neighbourhood Plan",
      projectSubtitle: "Strategic Vision to Urban Plan",
      image: "assets/planning/research_dsn.jpg",
      colorImage: "assets/planning/research_dsn.jpg",
      modalImage: "assets/planning/gif_research_dsn.gif",
      description: "",
      details: {
        location: "London, UK",
        year: "2019",
        team: "Team of 4, collaborated with Xingshuo LIU, Guannan REN, Yinuo ZHENG, Jordana FOURNILLIER"
      }
    },
    {
      id: 4,
      title: "Urban Design Strategies",
      projectName: "City Museum: Poplar Plugged-in",
      projectSubtitle: "Urban Design: Place Making",
      image: "assets/planning/research_citymuseum.jpg",
      colorImage: "assets/planning/research_citymuseum.jpg",
      modalImage: "assets/planning/gif_research_citymuseum.gif",
      description: "",
      details: {
        location: "London, UK",
        year: "2019",
        team: "Team of 4, collaborated with Xingshuo LIU, Yinuo ZHENG, Yige LIU, Jordana FOURNILLIER"
      }
    },
    {
      id: 5,
      title: "Planning Strategies",
      projectName: " Charlton Riverside 2020 Supplementary Planning",
      projectSubtitle: "Guidance, Incentive and Control",
      image: "assets/planning/research_charlton.jpg",
      colorImage: "assets/planning/research_charlton.jpg",
      modalImage: "assets/planning/gif_research_charlton.gif",
      description: "",
      details: {
        location: "London, UK",
        year: "2020",
        team: "Team of 5, collaborated with Ahmed GELE, Sara ZUBAIR, Bernard TOUZET, Nikola BABIC"
      }
    }
  ],
};

// DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
  loadGalleries();
  createPlaceholderImages();

  // Set initial background for home section
  document.body.style.backgroundColor = 'transparent';
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      showSection(targetSection);

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Close mobile menu
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Show specific section
function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Change body background based on section
  if (sectionId === 'home') {
    document.body.style.backgroundColor = 'transparent';
  } else {
    document.body.style.backgroundColor = '#F5F5F5'; // var(--light-gray)
  }

  // Change navigation colors based on section
  const header = document.querySelector('.header');
  const logo = document.querySelector('.nav h1');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sectionId === 'home') {
    // Home page - white text
    if (logo) logo.style.color = 'white';
    navLinks.forEach(link => {
      link.style.color = 'white';
    });
    header.classList.remove('dark-nav');
  } else {
    // Other pages - dark gray text
    if (logo) logo.style.color = '#2C2C2C';
    navLinks.forEach(link => {
      link.style.color = '#2C2C2C';
    });
    header.classList.add('dark-nav');
  }
}

// Load gallery content
function loadGalleries() {
  loadGallery('planning', 'planning-gallery');
  loadGallery('research', 'research-gallery');
  loadGallery('photography', 'photography-gallery');
}

function loadGallery(type, containerId) {
  const container = document.getElementById(containerId);
  const projects = projectsData[type];

  if (!container || !projects) return;

  container.innerHTML = '';

  projects.forEach(project => {
    const projectElement = createProjectElement(project);
    container.appendChild(projectElement);
  });
}

function createProjectElement(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project-item';
  projectDiv.setAttribute('data-project-id', project.id);

  projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-overlay">
            <h3 class="project-title">${project.title}</h3>
        </div>
    `;

  // Add hover effect with color transition
  setupHoverEffect(projectDiv, project);

  // Add click handler for modal
  projectDiv.addEventListener('click', () => {
    openProjectModal(project);
  });

  return projectDiv;
}

function setupHoverEffect(element, project) {
  const image = element.querySelector('.project-image');
  let hoverTimeout;

  element.addEventListener('mouseenter', () => {
    // Change to color image
    image.src = project.colorImage;

    // Set timeout for overlay effect
    hoverTimeout = setTimeout(() => {
      element.querySelector('.project-overlay').style.opacity = '1';
      element.querySelector('.project-title').style.transform = 'translateY(0)';
    }, 800); // Delay for color transition
  });

  element.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
    // Reset to black and white
    image.src = project.image;
    element.querySelector('.project-overlay').style.opacity = '0';
    element.querySelector('.project-title').style.transform = 'translateY(20px)';
  });
}

// Modal functionality
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalLocation = document.getElementById('modal-location');
  const modalYear = document.getElementById('modal-year');
  const modalSize = document.getElementById('modal-size');
  const modalSizeContainer = document.getElementById('modal-size-container');
  const modalTeam = document.getElementById('modal-team');

  // Set modal title - use project name if available, otherwise use title
  if (project.projectName) {
    if (project.projectSubtitle) {
      // For projects with subtitle (like id1), create two-line title
      modalTitle.innerHTML = `${project.projectName}<br><span style="font-size: 0.8em; color: var(--dark-gray); font-weight: normal;">${project.projectSubtitle}</span>`;
    } else {
      modalTitle.textContent = project.projectName;
    }
  } else {
    modalTitle.textContent = project.title;
  }

  modalDescription.textContent = project.description;
  modalLocation.textContent = project.details.location;
  modalYear.textContent = project.details.year;

  // Handle size field - only show if size is available
  if (project.details.size) {
    modalSize.textContent = project.details.size;
    modalSizeContainer.style.display = 'block';
  } else {
    modalSizeContainer.style.display = 'none';
  }

  modalTeam.textContent = project.details.team;

  // Set image - use modalImage if available, otherwise use colorImage
  const imageToShow = project.modalImage || project.colorImage || project.image;

  // Simply set the image source - let the browser handle GIF animation naturally
  modalImage.src = imageToShow;
  modalImage.alt = project.title;

  // Force GIF to loop infinitely by implementing a custom loop mechanism
  if (imageToShow && imageToShow.toLowerCase().includes('.gif')) {
    // Clear any existing interval for this modal
    if (window.gifLoopInterval) {
      clearInterval(window.gifLoopInterval);
    }

    // Reset the image source to ensure fresh loading
    modalImage.src = '';

    // Function to reload gif and ensure continuous looping
    function reloadGif() {
      const gifUrl = new URL(imageToShow, window.location.origin);
      gifUrl.searchParams.set('t', Date.now());
      modalImage.src = gifUrl.toString();
    }

    // Initial load
    reloadGif();

    // Determine reload interval based on project type and file size
    let reloadInterval = 4000; // Default 4 seconds

    // For planning projects, use shorter interval for better loop continuity
    if (projectsData.planning.some(p => p.modalImage === imageToShow)) {
      reloadInterval = 3000; // 3 seconds for planning gifs
    }

    // Set up infinite loop by reloading gif periodically
    // This ensures continuous playback even if the gif has limited loop count
    window.gifLoopInterval = setInterval(() => {
      // Only continue if modal is still open and image is still visible
      if (modal.style.display === 'block' && modalImage.parentNode) {
        reloadGif();
      } else {
        // Clean up interval if modal is closed
        clearInterval(window.gifLoopInterval);
        window.gifLoopInterval = null;
      }
    }, reloadInterval);

    // Ensure gif plays immediately when loaded
    modalImage.addEventListener('load', function ensureGifPlays() {
      // Force redraw to trigger gif animation
      modalImage.style.display = 'none';
      modalImage.offsetHeight; // Trigger reflow
      modalImage.style.display = 'block';

      // For planning projects, add additional measures to ensure infinite loop
      if (projectsData.planning.some(p => p.modalImage === imageToShow)) {
        // Apply CSS animation properties to ensure loop
        modalImage.style.animationPlayState = 'running';
        modalImage.style.animationIterationCount = 'infinite';

        // Force another reload after a short delay to ensure continuous play
        setTimeout(() => {
          if (modal.style.display === 'block' && modalImage.parentNode) {
            const currentSrc = modalImage.src;
            modalImage.src = '';
            modalImage.src = currentSrc;
          }
        }, 1500);
      }

      // Clean up the event listener to avoid multiple bindings
      modalImage.removeEventListener('load', ensureGifPlays);
    }, { once: true });
  }

  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');

  // Clear any existing gif loop interval
  if (window.gifLoopInterval) {
    clearInterval(window.gifLoopInterval);
    window.gifLoopInterval = null;
  }

  // Clear the image source to stop any ongoing gif animation
  if (modalImage) {
    modalImage.src = '';
  }

  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Initialize modal event listeners
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.modal-close');

  // Close modal when clicking close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking outside the modal content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
});

// Create placeholder images (for development purposes)
function createPlaceholderImages() {
  // This function creates placeholder images for development
  // In production, replace with actual image assets

  console.log('Portfolio website initialized successfully!');
  console.log('Please replace placeholder images in the assets folder with your actual project images.');
  console.log('Required image structure:');
  console.log('assets/');
  console.log('  hero-image.jpg');
  console.log('  planning/');
  console.log('    project1-bw.jpg, project1-color.jpg');
  console.log('    project2-bw.jpg, project2-color.jpg');
  console.log('    project3-bw.jpg, project3-color.jpg');
  console.log('    project4-bw.jpg, project4-color.jpg');
  console.log('  photography/');
  console.log('    photo1-bw.jpg, photo1-color.jpg');
  console.log('    photo2-bw.jpg, photo2-color.jpg');
  console.log('    photo3-bw.jpg, photo3-color.jpg');
  console.log('    photo4-bw.jpg, photo4-color.jpg');
}

// Smooth scrolling for internal links
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Utility function to handle image loading errors
function handleImageError(img) {
  img.style.background = 'linear-gradient(45deg, rgba(139, 115, 85, 0.3), rgba(166, 139, 91, 0.3))';
  img.style.display = 'flex';
  img.style.alignItems = 'center';
  img.style.justifyContent = 'center';
  img.innerHTML = '<span style="color: white; font-size: 1rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">Image Loading...</span>';
}

// Add error handling for all images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
  });
});

// Export functions for potential use in other scripts
window.portfolioApp = {
  showSection,
  projectsData
};
