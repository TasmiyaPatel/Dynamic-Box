document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
      box.addEventListener('click', () => {
          const controls = box.querySelector('.controls');
          const isHidden = controls.classList.contains('hidden');
          
          // Hide all controls
          document.querySelectorAll('.controls').forEach(control => control.classList.add('hidden'));
          
          // Toggle the clicked box controls
          controls.classList.toggle('hidden', !isHidden);
      });
  });

  document.querySelectorAll('.color-option').forEach(button => {
      button.addEventListener('click', (event) => {
          const color = event.target.getAttribute('data-color');
          const box = event.target.closest('.box');
          box.style.backgroundColor = color;
      });
  });

  document.querySelectorAll('.size-option').forEach(button => {
      button.addEventListener('click', (event) => {
          const size = event.target.getAttribute('data-size');
          const box = event.target.closest('.box');
          box.style.width = size;
          box.style.height = size;
      });
  });
});
