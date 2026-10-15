document.addEventListener('DOMContentLoaded', () => {
    const btnIngresar = document.getElementById('btn-ingresar');
    const ipInput = document.getElementById('ip-input');

    // Lógica para el botón de Ingresar IP
    btnIngresar.addEventListener('click', () => {
        const ipValue = ipInput.value.trim();
        
        if(ipValue !== "") {
            console.log(`Conectando al ESP32 en la IP: ${ipValue}`);
            // Cambiamos el texto del botón temporalmente para dar feedback visual
            btnIngresar.innerText = "Conectando...";
            btnIngresar.style.backgroundColor = "#39ff14"; // Cambia a verde
            
            setTimeout(() => {
                alert(`Simulación: Conexión establecida con ${ipValue}`);
                btnIngresar.innerText = "Ingresar";
                btnIngresar.style.backgroundColor = ""; // Vuelve al color original
            }, 1000);
            
        } else {
            alert('Por favor, ingrese una dirección IP válida.');
            ipInput.focus();
        }
    });

    // Lógica para que los botones de acción se queden marcados (Clase 'active')
    const actionButtons = document.querySelectorAll('.controls-action .btn-cyan, .controls-mode .btn-cyan');
    
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Encuentra los botones hermanos en el mismo contenedor
            const siblingButtons = this.parentElement.querySelectorAll('.btn-cyan');
            siblingButtons.forEach(b => b.classList.remove('active'));
            
            // Añade la clase active al botón clickeado
            this.classList.add('active');
        });
    });
});