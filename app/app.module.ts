import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';

import { SideDrawerPageComponent } from './shared/side-drawer-page/side-drawer-page.component';
import { BorderlessBtnDirective } from './shared/side-drawer-page/borderless-btn.directive';

import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers';

import { AppComponent } from './app.component';
import { MonumentsService } from './shared/monuments.service';
import { UserDAO } from './shared/user.dao';
import { UserService } from './shared/user.service';
import { routes, navigatableComponents } from './app.routing';
import { ComponentsModule } from './components';
  
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    ComponentsModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.provideStore(reducer)
  ],
  declarations: [
    AppComponent,
    SideDrawerPageComponent,
    BorderlessBtnDirective,
    ...navigatableComponents
  ],
  providers: [ MonumentsService, UserService, UserDAO ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
