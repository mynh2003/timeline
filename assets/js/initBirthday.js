function startCardAnimation() {
    const container = document.getElementById('media-card-container');
    const cards = container.querySelectorAll('.card');
  
    let index = 0;
  
    // Gán giá trị rotation và index để tạo hiệu ứng xếp bài
    cards.forEach((card, i) => {
      const rotate = (i % 2 === 0 ? -1 : 1) * (5 + Math.random() * 5); // góc xoay nhẹ
      card.style.setProperty('--rotate', `${rotate}deg`);
      card.style.setProperty('--index', i);
    });
  
    function showNextCard() {
      if (index >= cards.length) {
        // Khi đánh xong tất cả bài → chuyển về dạng lưới
        cards.forEach((card) => {
          card.classList.add('visible');
          card.classList.remove('show');
        });
  
        // Sau 500ms thì gõ chữ
        setTimeout(() => {
          StartTypingEffect();
        }, 500);
  
        return;
      }
  
      const card = cards[index];
      card.classList.add('show');
  
      card.addEventListener('transitionend', () => {
        index++;
        showNextCard();
      }, { once: true });
    }
  
    showNextCard();
  }
  
  

  function typeTextEffect(text, elementId, speed) {
    let i = 0;
    const target = document.getElementById(elementId);
  
    function type() {
      if (i < text.length) {
        // Nếu gặp </br> thì chèn <br> thay vì gõ từng ký tự
        if (text.slice(i, i + 5) === '</br>') {
          target.innerHTML += '<br>';
          i += 5;
        } else {
          target.innerHTML += text[i];
          i++;
        }
        setTimeout(type, speed);
      }
    }
  
    type();
  }

  function StartTypingEffect() {
    const target = document.getElementById("typing-text");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  
    // Reset nội dung nếu muốn chạy lại
    target.innerHTML = "";
  
    const content = "Hellu bé iu! Đây là năm đầu tiên anh được đón sinh nhật cùng em. Anh cũng rất vui vì chúng mình đồng hành cùng nhau được một năm. Anh cảm ơn em iu đã luôn đồng hành cùng anh suốt thời gian vừa qua. Anh mong rằng buổi hẹn hò sắp tới của chúng mình lãng mạn và ấm áp. Cuối cùng anh chúc người yêu anh tuổi mới luôn tràn đầy năng lượng, nhiều sức khỏe và may mắn, gặt hái nhiều thành công và yêu anh nhiều nhiều hơn nữa ^.^ </br> Anh yêu em nhiều lắmmmmmmmmm </br>- 04.08.2025 -";
    
    typeTextEffect(content, "typing-text", 40); // tốc độ 40ms mỗi ký tự
  }
  
  function Start() {
    const birthday = document.querySelector('.birthday');
    if (!birthday) return;

    const title = birthday.querySelector('.title');
    const gif = birthday.querySelector('#sticker');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    title?.classList.add('visible');
                    gif?.classList.add('visible');

                    setTimeout(() => {
                        gif?.classList.remove('visible');
                    }, 3000);

                    // Đợi 3s trước khi ẩn gif và bắt đầu card
                    setTimeout(() => {
                        startCardAnimation(); // Bắt đầu hiệu ứng card sau gif
                    }, 4000);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(birthday);
}


export default function InitBirthday() {
    Start();
}
