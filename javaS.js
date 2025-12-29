const sponsorsData = {
    "bom.webp": {
      name: "بوم بون",
      logo: "bom.webp",
      location: "مصراتة، الشواهدة، بالقرب من مدرسة التضامن",
      facebook: "https://facebook.com/bombon",
      instagram: "https://instagram.com/bombon",
      phone: "+218-91-1234567",
      menu: "https://bombon.com/menu"
    }
    // أضف باقي الداعمين بنفس التنسيق هنا
  };
  
  // عند الضغط على صورة داعم
  document.querySelectorAll(".sponsor img").forEach(img => {
    img.addEventListener("click", () => {
      const data = sponsorsData[img.getAttribute("src")];
      if (data) {
        document.getElementById("sponsorName").textContent = data.name;
        document.getElementById("sponsorLogo").src = data.logo;
        document.getElementById("sponsorLocation").textContent = data.location;
        document.getElementById("sponsorFacebook").href = data.facebook;
        document.getElementById("sponsorInstagram").href = data.instagram;
        document.getElementById("sponsorPhone").textContent = data.phone;
        document.getElementById("sponsorMenu").href = data.menu;
        document.getElementById("sponsorCard").classList.add("show");
      }
    });
  });
  
  // إغلاق بطاقة الداعم
  function closeCard() {
    document.getElementById("sponsorCard").classList.remove("show");
  }
  
  // تعريف الأزرار والبطاقات مرة واحدة فقط
  const altBtn = document.getElementById("btnAlternatives");
  const boycottBtn = document.getElementById("btnBoycott");
  const cards = document.querySelectorAll(".card");
  
  // عند الضغط على زر البدائل
  altBtn.addEventListener("click", () => {
    altBtn.classList.add("active");
    boycottBtn.classList.remove("active");
  
    cards.forEach(card => {
      if (card.dataset.type === "alternative") {
        card.style.display = "";   // إظهار البدائل
      } else {
        card.style.display = "none";  // إخفاء المقاطعة
      }
    });
  });
  
  // عند الضغط على زر المنتجات المقاطعة
  boycottBtn.addEventListener("click", () => {
    boycottBtn.classList.add("active");
    altBtn.classList.remove("active");
  
    cards.forEach(card => {
      if (card.dataset.type === "boycott") {
        card.style.display = "";   // إظهار المقاطعة
      } else {
        card.style.display = "none";  // إخفاء البدائل
      }
    });
  });