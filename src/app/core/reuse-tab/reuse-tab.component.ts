import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.scss']
})
export class ReuseTabComponent implements OnInit {
  tabs: Array<any>;
  selectedIndex: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.tabs = [];
  }

  ngOnInit() {
    const currentUrl = this.activatedRoute.firstChild.snapshot.url[0].path;
    this.tabs.push(
      {
        name: currentUrl,
        url: '/' + currentUrl,
      }
    );
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(
      (event: NavigationEnd) => {
        if (!this.tabs.some(tab => event.url.indexOf(tab.name) > 0)) {
          this.tabs.push(
            {
              name: event.url.replace('/', ''),
              url: event.url
            }
          );
          this.selectedIndex = this.tabs.length - 1;
        } else {
          this.selectedIndex = this.tabs.findIndex(tab => tab.url === event.url);
        }
      }
    );
  }

  selectedIndexChange(event) {
    const url = this.tabs[event].url;
    this.router.navigateByUrl(url);
  }

}
