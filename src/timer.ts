class Timer {
    private display: HTMLElement;
    private button: HTMLElement;
    private timer: number = 0;
    private running: boolean = true; // Iniciar como 'true' porque queremos que empiece inmediatamente
    private seconds: number = 0;

    constructor() {
        this.display = document.getElementById('timer')!;
        this.button = document.getElementById('clickButton')!;
        this.startTimer(); // Iniciar el temporizador automáticamente al cargar la página
        this.initialize();
    }

    private initialize(): void {
        this.button.addEventListener('click', () => {
            if (this.running) {
                this.stopTimer(); // Detener el temporizador
                this.seconds = 0; // Reiniciar el temporizador a cero
                this.updateDisplay(); // Actualizar la pantalla a "00:00:00"
            } else {
                this.startTimer(); // Iniciar el temporizador
            }
            this.running = !this.running; // Cambiar el estado de 'running' después de iniciar o detener
        });
    }

    private startTimer(): void {
        this.timer = window.setInterval(() => {
            this.seconds++;
            this.updateDisplay();
        }, 1000);
    }

    private stopTimer(): void {
        clearInterval(this.timer);
    }

    private updateDisplay(): void {
        const hours = Math.floor(this.seconds / 3600);
        const minutes = Math.floor((this.seconds % 3600) / 60);
        const secs = this.seconds % 60;

        this.display.textContent = 
            `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(secs)}`;
    }

    private padNumber(num: number): string {
        return num.toString().padStart(2, '0');
    }
}

// Inicializar el temporizador cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new Timer();
});
