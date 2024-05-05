let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let back = document.querySelector(".background");

menu.onclick = () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle("move")
  back.classList.toggle("active")
}





window.onscroll = () => {
  navbar.classList.remove('open-menu')
  menu.classList.remove("move")
  back.classList.remove("active")
}

window.addEventListener('scroll', function () {
  const skills = document.querySelectorAll('.skill-bar');
  const triggerBottom = window.innerHeight * 0.9;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if (skillTop < triggerBottom) {
      skill.classList.add('active');
    } else {
      skill.classList.remove('active');
    }
  });
});





function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else if (!validateEmail(email.value)) {
      invalidEmail();
    } else {
      sendmail(name.value, email.value, msg.value);
      Success();
    }
  });
}

validate();

function sendmail(name, email, msg) {
  emailjs.send("service_5nnrx64", "template_eqyuk2a", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: ":((",
    text: "Lütfen alanları doldurun",
    icon: "error",
  });
}

function invalidEmail() {
  swal({
    title: ":((",
    text: "Lütfen geçerli bir e-posta adresi girin",
    icon: "error",
  });
}

function Success() {
  swal({
    title: "E-posta başarıyla gönderildi :))",
    text: "Birkaç saat içinde geri dönüş sağlayacağım",
    icon: "success",
  });
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}





let header = document.querySelector('header');

window.addEventListener("scroll", () => {
  header.classList.toggle('header-active', window.scrollY > 0);
})

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY > 0);
})






document.body.style.cursor = 'none';
document.addEventListener('mousemove', function(e) {
  var customCursor = document.getElementById('customCursor');
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

function hideCustomCursor() {
  var customCursor = document.getElementById('customCursor');
  customCursor.style.display = 'none';
}

function showCustomCursor() {
  var customCursor = document.getElementById('customCursor');
  customCursor.style.display = 'block';
}



