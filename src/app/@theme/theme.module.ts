/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbSpinnerModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { AuthModule } from '../@auth/auth.module';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  MeasureConverterPipe,
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { InitUserService } from './services/init-user.service';

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import {WindowComponentAlarm} from '../pages/dashboard/alarmPopup/alarmPopup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ApiGetService} from '../pages/dashboard/WindowPopupComponent/apiGet.services';

const NB_MODULES = [
  FormsModule,
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbSpinnerModule,
  NbEvaIconsModule,
  NgbModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  WindowComponentAlarm,
];
const PIPES = [
  CapitalizePipe,
  MeasureConverterPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, AuthModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [ApiGetService, DecimalPipe
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
        InitUserService,
      ],
    };
  }
}
