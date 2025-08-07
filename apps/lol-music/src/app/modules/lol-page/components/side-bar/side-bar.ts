import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Champion } from '../../interface/champion.interface';
import { ChampionResponse } from '../../interface/champion-response.interface';
import { ChampionService } from '../../services/champion.service';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar implements OnInit {
  championList: Champion[] = [];
  filteredChampions: Champion[] = [];
  searchText: string = '';
  private url =
    'https://ddragon.leagueoflegends.com/cdn/15.15.1/data/pt_BR/champion.json';

  constructor(
    private http: HttpClient,
    private championService: ChampionService
  ) {}

  ngOnInit() {
    this.fetchChampions();
  }

  private fetchChampions() {
    this.http.get<ChampionResponse>(this.url).subscribe({
      next: (response) => {
        this.championList = Object.values(response.data);
        this.filteredChampions = this.championList;
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      },
    });
  }

  filterChampions() {
    if (!this.searchText) {
      this.filteredChampions = this.championList;
      return;
    }

    const searchLower = this.searchText.toLowerCase();
    this.filteredChampions = this.championList.filter((champion) =>
      champion.name.toLowerCase().includes(searchLower)
    );
  }

  onChampionSelect(champion: Champion) {
    this.championService.setSelectedChampion(champion);
  }

  getChampionImageUrl(imageName: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${imageName}`;
  }
}
