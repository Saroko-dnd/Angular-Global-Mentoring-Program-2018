import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'learn-portal-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  languageSelectorControl: FormControl = new FormControl('en');

  languages: string[] = this.translate.langs;

  ngOnInit() {
    this.languageSelectorControl.valueChanges.subscribe(selectedLanguage => {
      this.translate.use(selectedLanguage);
    });
  }
}
