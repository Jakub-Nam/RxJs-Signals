import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockMusicService {

  public mockMusics = of([{
    title: 'Bal wszystkich świetych',
    path: '../../../assets/music/bal-wszystkich-swietych.wav'
  },
  {
    title: '',
    path: '../../../assets/music/bal-wszystkich-swietych.wav'
  }])
  

  constructor() { }


}
