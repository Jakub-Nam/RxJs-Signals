import { Component, Signal, signal } from '@angular/core';
import { toObservable,toSignal } from '@angular/core/rxjs-interop';
import { Observable, of, } from 'rxjs';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})
export class ConversionComponent {
  private step: Signal<string> = signal('Budka Suflera');
  private step$: Observable<string> | undefined;

  public ngOnInit() {
    this.step$ = toObservable(this.step);
    this.step$.subscribe((step: string) => {
      console.log(step);
    });
  }
 
  users$ = of([{ id: 1, name: 'Krzysztof Cugowski' }]);
  users = toSignal(this.users$);
}
