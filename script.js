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
    const regalo = document.getElementById("regalo");
    const musica = document.getElementById("musica");

    if (!boton || !regalo) return;

    boton.addEventListener("click", () => {

        regalo.style.display = "block";

        musica.play().catch(() => {});

        if (regalo.querySelector(".mensaje-regalo")) return;

        // Confeti
        const fin = Date.now() + 3000;

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

        // Mensajes
        mensajes.forEach(mensaje => {
            const p = document.createElement("p");
            p.className = "mensaje-regalo";
            p.textContent = mensaje;
            regalo.appendChild(p);
        });

        // Carta
        const carta = document.createElement("div");
        carta.className = "carta";

        carta.innerHTML = `
        <h2>💌 Una última sorpresa para ti...</h2>

        <p><strong>¡Feliz cumpleaños, mi vida! 🎂💙</strong></p>

        <p>Ojalá este sea uno de los últimos cumpleaños que tengamos que pasar lejos la una de la otra. Deseo mucho pasar los días contigo, para convivir, abrazarte, consentirte y darte muchos besos. 🥹❤️</p>

        <p>Nunca olvides lo importante que eres para mí y la gran mujer que eres. No permitas que ningún comentario de personas ajenas te haga dudar de tu valor.</p>

        <p>Deseo de todo corazón que este nuevo año de vida esté lleno de momentos felices, oportunidades y sueños cumplidos.</p>

        <p>Te mando un fuerte abrazo y muchos besos. Espero con muchas ganas el día en que por fin pueda tenerte frente a mí.</p>

        <p>Gracias por formar parte de mi vida y por hacerla más bonita desde que llegaste.</p>

        <p><strong>Te amo mucho, chaparrita. ❤️❤️</strong></p>

        <p style="text-align:center;margin-top:30px;">
        🌙 Sin importar la distancia, cada vez que mires la luna, recuerda que yo también la estaré mirando... y pensando en ti. 💙
        </p>
        `;

        regalo.appendChild(carta);

    });

});