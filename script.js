console.log("Welcome to my website!");








document.querySelectorAll('.slider').forEach(slider => {
  let slides = slider.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  slider.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = 0;
    showSlide(currentIndex);
  });

  slider.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) currentIndex = slides.length - 1;
    showSlide(currentIndex);
  });

  // Auto slide
  setInterval(() => {
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = 0;
    showSlide(currentIndex);
  }, 8000);
});










// กดปุ่มแล้วลิงค์ไปหน้าอื่น เช่น home.html
document.getElementById('enterBtn').addEventListener('click', function() {
  window.location.href = "index.html";  // เปลี่ยนเป็นชื่อหน้าเว็บจริงของคุณ
});




