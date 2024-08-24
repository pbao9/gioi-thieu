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

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4, // Số lượng item hiển thị cùng lúc
    loop: true, // Quay lại vòng
    margin: 10, // Khoảng cách giữa các item
    nav: false, // Hiển thị nút điều hướng
    autoplay: true, // Tự động phát
    autoplayTimeout: 3000, // Thay đổi hình ảnh sau mỗi 3 giây
    autoplayHoverPause: true, // Tạm dừng autoplay khi hover
    dots: false,
    responsive: {
      0: {
        items: 1, // Hiển thị 1 item trên màn hình rất nhỏ (di động)
      },
      600: {
        items: 2, // Hiển thị 2 item trên màn hình nhỏ (tablet)
      },
      1000: {
        items: 3, // Hiển thị 4 item trên màn hình lớn (máy tính để bàn)
      },
    },
  });
});
