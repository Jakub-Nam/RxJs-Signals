import { Component, Signal, computed, signal } from '@angular/core';
import { MockMusicService } from '../servis/mock-music.service';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mock-music',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './mock-music.component.html',
  styleUrl: './mock-music.component.css'
})

export class MockMusicComponent {
  public musicList: any;
  public musicListRefactored: any;
  public selected: any;
  private audio = new Audio();
  public selectedMusicTitle: any;

  public constructor (private mockMusicsService: MockMusicService) {
    //RxJs
    
    // this.mockMusicsService.mockMusics.subscribe({
    //   next: value => this.musicList = value,
    //   error: err => console.error('Observable emitted an error: ' + err),
    //   complete: () => console.log('Observable emitted the complete notification')
    // });
  
    // Signal
    this.musicList = toSignal(this.mockMusicsService.mockMusics);
    //
    
  }

  public onMusic(path: string): void {
    
    if(this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.audio.src = path;
    this.audio.load();
    this.audio.play();
  }

  // public onSelected(music: any): void {
  //   this.selected = music;
  //   console.log(music)
  //   this.selectedMusicTitle = computed(() => this.selectedMusicTitle() ? ` ${this.selectedMusicTitle() ()?.name}` : 'Nieznany wykonawca');
  // }
}
