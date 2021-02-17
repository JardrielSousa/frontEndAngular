import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-nacionalization',
  templateUrl: './nacionalization.component.html',
  styleUrls: ['./nacionalization.component.sass']
})
export class NacionalizationComponent implements OnInit {

  langs = ['en', 'pt','es'];
  constructor(private translateService: TranslateService) {
}
public ngOnInit(): void {
  let browserlang = this.translateService.getBrowserLang();
  if (this.langs.indexOf(browserlang) > -1) {
    this.setLanguage(browserlang);
  } else {
    this.setLanguage('en');
  }
}

  setLanguage(browserlang: string) {
    this.translateService.setDefaultLang(browserlang);
  }

}
