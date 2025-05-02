<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Project Grid with Tags</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f4f4f4;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 40px;
    }
    .project {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      position: relative;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .project:hover {
      transform: scale(1.03);
    }
    .tag {
      background: #007BFF;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    /* Modal Styles */
    .modal {
      display: none; 
      position: fixed; 
      z-index: 1000;
      padding-top: 100px; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto;
      background-color: rgba(0,0,0,0.5); 
    }
    .modal-content {
      background-color: #fff;
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      width: 80%;
      max-width: 600px;
      position: relative;
    }
    .close {
      color: #aaa;
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
    .close:hover {
      color: #000;
    }
  </style>
</head>
<body>

<div class="grid">
  <div class="project" data-title="Project One" data-description="Description of Project One.">
    <div class="tag">JavaScript</div>
    <h3>Project One</h3>
    <p>Short summary...</p>
  </div>
  <div class="project" data-title="Project Two" data-description="Description of Project Two.">
    <div class="tag">Python</div>
    <h3>Project Two</h3>
    <p>Short summary...</p>
  </div>
  <div class="project" data-title="Project Three" data-description="Description of Project Three.">
    <div class="tag">React</div>
    <h3>Project Three</h3>
    <p>Short summary...</p>
  </div>
  <!-- Add more projects here -->
</div>

<!-- Modal -->
<div id="projectModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modalTitle"></h2>
    <p id="modalDescription"></p>
  </div>
</div>

<script>
  const projects = document.querySelectorAll('.project');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.querySelector('.close');

  projects.forEach(project => {
    project.addEventListener('click', () => {
      modalTitle.textContent = project.getAttribute('data-title');
      modalDescription.textContent = project.getAttribute('data-description');
      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
</script>

</body>
</html>

