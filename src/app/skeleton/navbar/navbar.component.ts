import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropButtons } from '../../ui-components/ui-types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private String(): string {
    return 'string';
  }

  public dropProfileButtons: DropButtons[] = [
    {
      button: {
        text: 'NAVBAR.PROFILE.MY_COMPANY',
        type: 'NAVBUTTON',
        trigger: this.String
      },
    },{
      button: {
        text: 'NAVBAR.PROFILE.PROFILE',
        type: 'NAVBUTTON',
        trigger: this.String
      },
    },{
      button: {
        text: 'NAVBAR.PROFILE.ADVANCED',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    }
  ]

  public dropWorkButtons: DropButtons[] = [
    {
      button: {
        text: 'NAVBAR.WORK.MY_WORKS',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'NAVBAR.WORK.DIARY',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'NAVBAR.WORK.PROTOCOLS',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'NAVBAR.WORK.TO_DO',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    }
  ]

  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['en']);
    translate.defaultLang = 'en';
    translate.use('en');
  }

  ngOnInit(): void {
  }

}
