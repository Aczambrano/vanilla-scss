// Obtener referencias a los elementos
const colorCard = document.getElementById("colorCard") as HTMLElement;
const colorCanvas = document.getElementById("colorCanvas") as HTMLCanvasElement;
const ctx = colorCanvas.getContext("2d")!;

// Configurar el tamaño del canvas
const size = 300; // Tamaño del canvas (ancho y alto)
colorCanvas.width = size;
colorCanvas.height = size;

// Dibujar el gradiente circular
function drawColorWheel() {
  const radius = size / 2;

  for (let i = 0; i < 360; i++) {
    const startAngle = (i * Math.PI) / 180;
    const endAngle = ((i + 1) * Math.PI) / 180;

    const gradient = ctx.createRadialGradient(
      radius,
      radius,
      0,
      radius,
      radius,
      radius
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, `hsl(${i}, 100%, 50%)`);

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  // Dibujar el círculo blanco en el centro
  ctx.beginPath();
  ctx.arc(radius, radius, radius * 0.25, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
}

// Detectar el color clicado
colorCanvas.addEventListener("click", (event: MouseEvent) => {
  const rect = colorCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Obtener el color en las coordenadas clicadas
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  const [r, g, b, a] = pixel;

  // Solo cambiar el color si el píxel no es completamente transparente
  if (a > 0) {
    const color = `rgb(${r}, ${g}, ${b})`;
    colorCard.style.backgroundColor = color;
  }
});

// Dibujar la rueda de colores al cargar la página
drawColorWheel();
