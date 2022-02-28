import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropButtons } from '../../ui-types';

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
        text: this.translate.instant("NAVBAR.MY_COMPANY"),
        type: 'NAVBUTTON',
        trigger: this.String
      },
    },{
      button: {
        text: 'Profile',
        type: 'NAVBUTTON',
        trigger: this.String
      },
    },{
      button: {
        text: 'Advanced',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    }
  ]

  public dropWorkButtons: DropButtons[] = [
    {
      button: {
        text: 'My Works',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'Diary',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'Protocols',
        type: 'NAVBUTTON',
        trigger: this.String
      }
    },
    {
      button: {
        text: 'To Do',
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
  }

  ngOnInit(): void {
  }

}
