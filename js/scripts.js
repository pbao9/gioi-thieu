document.addEventListener("DOMContentLoaded", function () {
  var texts = ["GIỚI THIỆU NHÓM", "Gia", "Thắng", "Phúc"];
  var currentIndex = 0;
  var currentChar = 0;
  var isDeleting = false;
  var typeSpeed = 150; // tốc độ gõ
  var deleteSpeed = 100; // tốc độ xóa
  var pauseBeforeDelete = 1000; // thời gian dừng trước khi xóa
  var pauseBetweenTexts = 1500; // thời gian dừng giữa các chuỗi

  function typeWriter() {
    var currentText = texts[currentIndex];
    var displayText = currentText.substring(0, currentChar);

    document.getElementById("typingEffect").innerHTML = displayText;

    if (!isDeleting && currentChar < currentText.length) {
      currentChar++;
      setTimeout(typeWriter, typeSpeed);
    } else if (isDeleting && currentChar > 0) {
      currentChar--;
      setTimeout(typeWriter, deleteSpeed);
    } else if (!isDeleting && currentChar === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseBeforeDelete);
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(typeWriter, pauseBetweenTexts);
    }
  }

  typeWriter();
});
