const mensajes = [
"💙 1. Gracias por llegar a mi vida.",
"🌎 2. Aunque la distancia exista, siempre te siento cerca.",
"😊 3. Tu sonrisa ilumina mis días.",
"🤗 4. Amo nuestras pláticas.",
"🌙 5. Gracias por cada noche compartida.",
"✨ 6. Eres una persona increíble.",
"💫 7. Nunca dejes de perseguir tus sueños.",
"🌸 8. El escuchar tu voz me hace feliz.",
"💖 9. Estoy orgullosa de ti.",
"🎵 10. Cada recuerdo contigo vale oro.",
"🌹 11. Admiro tu fuerza.",
"💙 12. Amo tu forma de ser.",
"🫂 13. Siempre tendrás un lugar en mi corazón.",
"🌠 14. Gracias por hacerme feliz.",
"☀️ 15. Espero darte muchos abrazos pronto.",
"🥰 16. Eres mi persona favorita.",
"🎂 17. Hoy celebro tu vida.",
"🎁 18. Deseo que todos tus sueños se cumplan.",
"🌈 19. Nunca olvides lo especial que eres.",
"💕 20. Gracias por existir.",
"🌹 21. Eres mi paz.",
"⭐ 22. Mi mejor regalo eres tú.",
"💌 23. Siempre creeré en nosotros.",
"🦋 24. Que este año esté lleno de felicidad.",
"💙 25. Te amo muchísimo.",
"🎉 26. ¡Feliz cumpleaños, mi bebé! ❤️"
];

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("abrir");

    if (boton) {
        boton.addEventListener("click", () => {

    const regalo = document.getElementById("regalo");

    regalo.style.display = "block";
    
const duracion = 3000;
const fin = Date.now() + duracion;

(function lanzarConfeti() {
    confetti({
        particleCount: 8,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 8,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });

    if (Date.now() < fin) {
        requestAnimationFrame(lanzarConfeti);
    }
})();

mensajes.forEach(mensaje => {
    const p = document.createElement("p");
    p.className = "mensaje";
    p.textContent = mensaje;
    regalo.appendChild(p);
});

});
    } else {
        alert("No encontré el botón");
    }

});
