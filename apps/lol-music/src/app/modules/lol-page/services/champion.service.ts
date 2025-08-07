import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Champion } from '../interface/champion.interface';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private selectedChampionSource = new BehaviorSubject<Champion | null>(null);
  selectedChampion$ = this.selectedChampionSource.asObservable();

  setSelectedChampion(champion: Champion) {
    this.selectedChampionSource.next(champion);
  }
}
