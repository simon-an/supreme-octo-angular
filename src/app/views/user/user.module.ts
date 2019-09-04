import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SafeModule } from 'src/app/safe/safe.module';
import { CoolLayoutModule } from 'src/app/cool-layout/cool-layout.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { MatListModule } from '@angular/material/list';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SafeModule,
    CoolLayoutModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  exports: [SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  entryComponents: [AddSafeItemDialogComponent]
})
export class UserModule { }
