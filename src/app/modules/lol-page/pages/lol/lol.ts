import { Component } from '@angular/core';
import { SideBar } from '../../components/side-bar/side-bar';

@Component({
  standalone: true,
  selector: 'app-lol',
  imports: [SideBar],
  templateUrl: './lol.html',
  styleUrl: './lol.scss'
})
export class Lol {

}
