import { Component, Input } from '@angular/core';

import { NewsPost } from '../news.service';

@Component({
  selector: 'ngx-noticias',
  templateUrl: 'noticias.component.html',
})
export class NoticiasComponent {

   @Input() post: NewsPost;
}
