const colorCard = document.getElementById("colorCard") as HTMLElement;
const colorCanvas = document.getElementById("colorCanvas") as HTMLCanvasElement;
const ctx = colorCanvas.getContext("2d")!;

const size = 300; 
colorCanvas.width = size;
colorCanvas.height = size;

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

  ctx.beginPath();
  ctx.arc(radius, radius, radius * 0.25, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
}

colorCanvas.addEventListener("click", (event: MouseEvent) => {
  const rect = colorCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const pixel = ctx.getImageData(x, y, 1, 1).data;
  const [r, g, b, a] = pixel;

  if (a > 0) {
    const color = `rgb(${r}, ${g}, ${b})`;
    colorCard.style.backgroundColor = color;
  }
});

drawColorWheel();
