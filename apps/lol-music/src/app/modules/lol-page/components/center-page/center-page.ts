import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Champion } from '../../interface/champion.interface';
import { ChampionService } from '../../services/champion.service';

@Component({
  selector: 'app-center-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './center-page.html',
  styleUrl: './center-page.scss',
})
export class CenterPage implements OnInit {
  champion: Champion | null = null;
  activeTab: 'lore' | 'abilities' | 'theme' = 'lore';

  constructor(private championService: ChampionService) {}

  ngOnInit() {
    this.championService.selectedChampion$.subscribe((champion) => {
      this.champion = champion;
    });
  }

  getChampionImageUrl(imageName: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${imageName}`;
  }

  setActiveTab(tab: 'lore' | 'abilities' | 'theme'): void {
    this.activeTab = tab;
  }
}
