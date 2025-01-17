class PollForm {
    private form: HTMLFormElement;
    private container: HTMLElement;

    constructor() {
        this.form = document.getElementById('pollForm') as HTMLFormElement;
        this.container = document.getElementById('pollContainer') as HTMLElement;
        this.initialize();
    }

    private initialize(): void {
        this.form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            this.showResults();
        });
    }

    private showResults(): void {
        this.container.classList.add('poll--show-results');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PollForm();
});