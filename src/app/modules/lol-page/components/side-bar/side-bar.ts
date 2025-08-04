import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Champion } from '../../interface/champion.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChampionResponse } from '../../interface/champion-response.interface';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar implements OnInit {
  championList: Champion[] = [];
  filteredChampions: Champion[] = [];
  searchText: string = '';
  private url = 'https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchChampions();
  }

  private fetchChampions() {
    this.http.get<ChampionResponse>(this.url).subscribe({
      next: (response) => {
        this.championList = Object.values(response.data);
        this.filteredChampions = this.championList;
        console.log('Dados recebidos:', this.championList);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    });
  }

  filterChampions() {
    if (!this.searchText) {
      this.filteredChampions = this.championList;
      return;
    }

    const searchLower = this.searchText.toLowerCase();
    this.filteredChampions = this.championList.filter(champion => 
      champion.name.toLowerCase().includes(searchLower)
    );
  }

  getChampionImageUrl(imageName: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${imageName}`;
  }
}
