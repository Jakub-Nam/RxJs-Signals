import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsBetterComponent } from "./rxjs-better/debounceTime/rxjs-better.component";
import { CounterComponent } from "./signals-better/counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RxjsBetterComponent, CounterComponent]
})
export class AppComponent {

}
