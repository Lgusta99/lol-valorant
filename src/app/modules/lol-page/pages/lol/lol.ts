import { Component } from '@angular/core';
import { SideBar } from '../../components/side-bar/side-bar';
import { CenterPage } from '../../components/center-page/center-page';

@Component({
  standalone: true,
  selector: 'app-lol',
  imports: [SideBar, CenterPage],
  templateUrl: './lol.html',
  styleUrl: './lol.scss'
})
export class Lol {}
