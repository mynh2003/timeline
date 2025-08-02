export default function Switch() {
    const birthday = document.querySelector('.birthday');
    const timeline = document.querySelector('.timeline');
    const toggle = document.querySelector('#toggleSwitch');
  
    if (!toggle || !birthday || !timeline) return;

 
    // Gán sự kiện toggle
    toggle.addEventListener('change', () => {
      const isChecked = toggle.checked;
  
      if (isChecked) {
        birthday.classList.remove('show');
        birthday.classList.add('hidden');
  
        timeline.classList.remove('hidden');
        timeline.classList.add('show');
      } else {
        timeline.classList.remove('show');
        timeline.classList.add('hidden');
  
        birthday.classList.remove('hidden');
        birthday.classList.add('show');
      }
  
      console.log('toggle:', isChecked);
    });
  }
  