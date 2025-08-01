import { Component } from '@angular/core';  

import { Header } from '../../components/header/header';
import { HomeCenter } from '../../components/home-center/home-center';
import { SidePage } from '../../components/side-page/side-page';

@Component({
  selector: 'app-home',
  imports: [Header,HomeCenter,SidePage],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {

}
