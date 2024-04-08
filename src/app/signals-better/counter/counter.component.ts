import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  // signal
  // public count = signal(0);
  // public multiple = computed(() => this.count() * 2);

  // RxJs
  public count = new BehaviorSubject(0);
  public multiple = 0;

  public ngOnInit(): void {
    // RxJs
    this.count.subscribe(x => {
      this.multiple = x * 2;
    })
  }

  public increase(): void {
    // Signals
    // this.count.update(x => x + 1);

    // Rxjs
    this.count.next(this.count.getValue() + 1);
  }

}
