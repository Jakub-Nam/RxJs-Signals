import { Component, effect, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'rxjs-better',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './rxjs-better.component.html',
  styleUrl: './rxjs-better.component.css'
})
export class RxjsBetterComponent {
  public searchControl = new FormControl();
  public searchValue = signal('');
  public debouncedSearchValue = signal(this.searchValue());

  public constructor() {

    // Signals
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    effect((onCleanup) => {
      const search = this.searchValue();

      timeoutId = setTimeout(() => {
        this.debouncedSearchValue.set(search);
      }, 3000);

      onCleanup(() => {
        clearTimeout(timeoutId);
      });
    });

    effect(() => {
      console.log('Signals', this.debouncedSearchValue());
    });


    // RxJs - RED
    this.searchControl.valueChanges.pipe(
      debounceTime(3000),
    ).subscribe(value => {
      console.error('RxJs', value);
    })
    //
  }
}
