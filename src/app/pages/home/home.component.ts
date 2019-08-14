import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { NewsService } from './news.service';

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  pageSize = 10;

  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
   solarValue: number;


  statusCards: string;

  constructor(private themeService: NbThemeService,
              private newsService: NewsService) {
      }
  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }
  ngOnDestroy() {
  }
}
