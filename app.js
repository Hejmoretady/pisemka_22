document.addEventListener('DOMContentLoaded', () => {
    
    const beginning = localStorage.getItem('beginning') || '';
    const twist = localStorage.getItem('twist') || '';
    const ending = localStorage.getItem('ending') || '';
  
    
    if (document.getElementById('beginning')) {
      document.getElementById('beginning').textContent = beginning;
      document.getElementById('twist').textContent = twist;
      document.getElementById('ending').textContent = ending;
    }
  
    
    if (document.getElementById('storyForm')) {
      document.getElementById('storyForm').addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('beginning', document.getElementById('beginningInput').value);
        localStorage.setItem('twist', document.getElementById('twistInput').value);
        localStorage.setItem('ending', document.getElementById('endingInput').value);
        alert('Příběh byl uložen!');
      });
    }
  });
  












