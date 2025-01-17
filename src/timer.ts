class Timer {
    private display: HTMLElement;
    private button: HTMLElement;
    private timer: number = 0;
    private running: boolean = true; 
    private seconds: number = 0;

    constructor() {
        this.display = document.getElementById('timer')!;
        this.button = document.getElementById('clickButton')!;
        this.startTimer(); 
        this.initialize();
    }

    private initialize(): void {
        this.button.addEventListener('click', () => {
            if (this.running) {
                this.stopTimer(); 
                this.seconds = 0; 
                this.updateDisplay(); 
            } else {
                this.startTimer(); 
            }
            this.running = !this.running; 
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

document.addEventListener('DOMContentLoaded', () => {
    new Timer();
});
