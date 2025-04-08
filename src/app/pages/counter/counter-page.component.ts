import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: 'counter-page.component.html',
    styles: `
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
        height: 30px;
        font-size: 16px;
        border-radius: 5px;
        border: none;
        background-color: black;
        color: white;
    }

    h1 {
        font-size: 30px;
        color: black;
    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;    }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    counter = 10;
    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }
    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

    counterSignal = signal(10);
}