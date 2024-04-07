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
  // public count = 0;
  count = new BehaviorSubject(0);
 
  // public count = signal(0);

  public multiple = 0;
  // public multiple = computed(() => this.count() * 2);


  // public ngOnInit(): void {
  //   // this.multiple = this.count * 2;
  //   this.count.subscribe(x => {
  //     this.multiple = x * 2;
  //   })
  // }


  // increase() { this.count++ }
  public increase(): void {
    // this.count.update(x => x + 1);

    this.count.next(this.count.getValue() + 1);
  }

}
