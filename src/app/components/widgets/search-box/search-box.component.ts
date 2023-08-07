import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  public searchTerm: string | undefined = undefined;

  constructor(private router: Router) {}

  public search(): void {
    if (this.searchTerm) {
      if (this.searchTerm.startsWith('L')) {
        this.router.navigateByUrl('/account/' + this.searchTerm);
      }
      if(this.searchTerm.length === 64) {
        this.router.navigateByUrl('/transaction/' + this.searchTerm);
      }
    }
  }
}
