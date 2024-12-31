function filterProjects(type) {
    var allProjects = document.querySelectorAll('.project-card');
    
    allProjects.forEach(function(project) {
      if (type === 'all') {
        project.style.display = 'block';
      } else if (type === 'app' && project.classList.contains('app')) {
        project.style.display = 'block';
      } else if (type === 'web' && project.classList.contains('web')) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
  