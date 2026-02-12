const music = document.getElementById('bgMusic');

function startExperience() {
    music.play();
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('contexto').classList.remove('hidden');
    startTypingCarta();
    spawnFloatingImages();
}

// SECCIÓN 2: ESCRITURA CON TÍTULO
function startTypingCarta() {
    const titulo = "CARTITA PARA ARLETH…";
    const cuerpo = "\n\nHola, flaquita. Fuera del mundo que nos persigue y a veces nos aflige, encontré este espacio: aquí solo estamos tú y yo, y todo lo que solo nosotros sabemos. Aquí viven nuestros recuerdos у todos los momentos bonitos que hemos compartido. Hoy quiero agradecerte. Gracias por tus detalles, por tus atenciones, por tu cariño, por tu esfuerzo y por todo tu amor. Gracias por hacerme sentir este amor tan grande que me llena de motivación y energía; pero, sobre todo, gracias por hacerme sentir amado y por haberte cruzado en mi camino...";
    
    let i = 0;
    let j = 0;
    const target = document.getElementById('typed-text');
    target.innerHTML = '<span class="titulo-carta" id="inner-title"></span><span class="cuerpo-carta" id="inner-body"></span>';
    
    const titleSpan = document.getElementById('inner-title');
    const bodySpan = document.getElementById('inner-body');

    function typeTitle() {
        if (i < titulo.length) {
            titleSpan.innerHTML += titulo.charAt(i);
            i++;
            setTimeout(typeTitle, 100); 
        } else {
            typeBody();
        }
    }

    function typeBody() {
        if (j < cuerpo.length) {
            bodySpan.innerHTML += (cuerpo.charAt(j) === "\n") ? "<br>" : cuerpo.charAt(j);
            j++;
            setTimeout(typeBody, 100); 
        } else {
            document.getElementById('btn-next-2').classList.remove('hidden');
        }
    }
    typeTitle();
}

function spawnFloatingImages() {
    const container = document.getElementById('bg-floating-container');
    const fotos = ["f1.jpeg", "f2.jpeg", "f3.jpeg", "f4.jpeg", "f5.jpeg","f6.jpeg", "f7.jpeg", "f8.jpeg", "f9.jpeg", "f10.jpeg", "f11.jpeg", "f12.jpeg", "f13.jpeg", "f14.jpeg"]; // Tus fotos
    let count = 0;
    setInterval(() => {
        if(document.getElementById('contexto').classList.contains('hidden')) return;
        const img = document.createElement('img');
        img.src = fotos[count % fotos.length];
        img.className = 'fade-bg-img';
        img.style.left = (Math.random() < 0.5 ? Math.random() * 15 : 75 + Math.random() * 5) + '%';
        img.style.top = Math.random() * 50 + '%';
        container.appendChild(img);
        setTimeout(() => img.style.opacity = '0.4', 100);
        setTimeout(() => { img.style.opacity = '0'; setTimeout(() => img.remove(), 2000); }, 5000);
        count++;
    }, 4000);
}

// SECCIÓN 3: CONTADOR
function goSection3() {
    // 1. Ocultar la sección anterior y mostrar la nueva
    document.getElementById('contexto').classList.add('hidden');
    const section3 = document.getElementById('tendedero-section');
    section3.classList.remove('hidden');
    section3.style.display = 'flex'; // Forzamos el display para que el centrado de CSS funcione

    const startDate = new Date("October 04, 2024 00:00:00").getTime();
    
    // 2. Actualizar el contador cada segundo
    setInterval(() => {
        const now = new Date().getTime();
        const diff = now - startDate;

        // Validamos que los elementos existan antes de escribir para evitar errores en consola
        if(document.getElementById('days')) {
            document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
        }
    }, 1000);
}

// SECCIÓN 4: FINAL
function goSection4() {
    document.getElementById('tendedero-section').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
    const textoFinal = "Espero que te guste mucho este detalle, tanto como a mí. Y recuerda que puedes entrar aquí cuantas veces quieras. Te amo mucho, cielito hermoso. Muac, muac. \n\nAh, por cierto, lo olvidaba… \n\n¿Quieres ser mi Valentine?";
    let i = 0;
    const targetFinal = document.getElementById('typed-final');
    function typeFinal() {
        if (i < textoFinal.length) {
            targetFinal.innerHTML += (textoFinal.charAt(i) === "\n") ? "<br>" : textoFinal.charAt(i);
            i++;
            setTimeout(typeFinal, 100);
        } else {
            document.getElementById('val-btns').classList.remove('hidden');
        }
    }
    typeFinal();
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    btn.style.position = 'fixed';
    btn.style.left = Math.random() * 80 + 'vw';
    btn.style.top = Math.random() * 80 + 'vh';
}

function celebrate() {
    const music1 = document.getElementById('bgMusic');
    const music2 = document.getElementById('finalMusic');
    const sec5 = document.getElementById('seccion-5');

    // 1. LLUVIA DE CORAZONES (Versión corregida)
for (let i = 0; i < 60; i++) {
    setTimeout(() => {
        const h = document.createElement('div');
        h.innerHTML = '❤️'; 
        h.className = 'corazon-lluvia';
        
        // Estilos aplicados uno a uno para evitar errores de sintaxis
        h.style.position = 'fixed';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = '-5vh';
        h.style.fontSize = '2rem';
        h.style.transition = '4s linear';
        h.style.zIndex = '10000';
        h.style.pointerEvents = 'none'; // Para que no estorben al dar clic
        
        document.body.appendChild(h);

        // Iniciamos la caída
        setTimeout(() => {
            h.style.transform = 'translateY(115vh)';
        }, 50);

        // Limpiamos el HTML para que no se sature de corazones invisibles
        setTimeout(() => {
            h.remove();
        }, 4000);
    }, i * 60);
}

    // 2. FADE OUT MÚSICA 1
    let fadeOut = setInterval(() => {
        if (music1.volume > 0.05) {
            music1.volume -= 0.05;
        } else {
            music1.pause();
            clearInterval(fadeOut);
        }
    }, 150);

    // 3. TRANSICIÓN A SECCIÓN 5 (Después de los corazones)
    setTimeout(() => {
        document.getElementById('final').classList.add('hidden');
        sec5.style.display = 'flex';
        sec5.classList.remove('hidden');

        // Play música Totoro con Fade In
        music2.volume = 0;
        music2.play();
        let fadeIn = setInterval(() => {
            if (music2.volume < 0.9) music2.volume += 0.05;
            else clearInterval(fadeIn);
        }, 200);

        // 4. ESCRITURA DE FRASE FINAL
        const frase = "Listo amor esto es todo, si te gustó dame mil besitos, bye";
        let k = 0;
        const target = document.getElementById('texto-despedida');
        
        function typeWriter() {
            if (k < frase.length) {
                target.innerHTML += frase.charAt(k);
                k++;
                setTimeout(typeWriter, 100);
            } else {
                // 5. CIERRE FINAL A NEGRO Y SILENCIO
                setTimeout(finalCierre, 3000); // Espera 3 seg después de escribir
            }
        }
        typeWriter();
    }, 2500);
}

function finalCierre() {
    const music2 = document.getElementById('finalMusic');
    const overlay = document.getElementById('overlay-negro');
    const corazon = document.getElementById('corazon-final');

    // 1. Pantalla a negro
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all"; // Bloquea clics al final

    // 2. Fade out música final
    let fadeOutFinal = setInterval(() => {
        if (music2.volume > 0.05) {
            music2.volume -= 0.05;
        } else {
            music2.pause();
            clearInterval(fadeOutFinal);
        }
    }, 300);

    // 3. Aparece el corazón blanco después de 2 segundos de oscuridad
    setTimeout(() => {
        corazon.style.opacity = "1";
        corazon.classList.add('latido');
    }, 2500);
}
