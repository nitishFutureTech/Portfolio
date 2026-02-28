const toggle = document.getElementById("toggle");
      const navLinks = document.querySelector(".nav-links");

      toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });



const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // jitna chhota value utna zyada delay
  posX += (mouseX - posX) * 0.2;
  posY += (mouseY - posY) * 0.2;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});


let boxes = document.querySelectorAll(".box");

boxes.forEach(function(box){

    let img = box.querySelector("img");

    box.addEventListener("mouseenter", function(){
        img.style.opacity = 1;
    });

    box.addEventListener("mouseleave", function(){
        img.style.opacity = 0;
    });

    box.addEventListener("mousemove", function(e){

        let rect = box.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        img.style.left = x + "px";
        img.style.top = y + "px";
    });

});


document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Apna WhatsApp Number yaha dale (Country code ke saath, bina + sign ke)
    const phoneNumber = "7080502006"; 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // WhatsApp Message Format
    const text = `*New Inquiry*%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Message:* ${message}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Nayi window mein open karein
    window.open(whatsappURL, '_blank');
});