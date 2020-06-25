import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { CockpitComponent } from './servers-and-blueprints/cockpit/cockpit.component';
import { ServerElementComponent } from './servers-and-blueprints/server-element/server-element.component';
import { ServersAndBlueprintsComponent } from './servers-and-blueprints/servers-and-blueprints.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee-list/employee/employee.component';
import { AddEditEmployeeComponent } from './employee-list/add-edit-employee/add-edit-employee.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { GamepracticeComponent } from './gamepractice/gamepractice.component';
import { GpcontrolComponent } from './gamepractice/gpcontrol/gpcontrol.component';
import { OddgpComponent } from './gamepractice/oddgp/oddgp.component';
import { EvengpComponent } from './gamepractice/evengp/evengp.component';
import { basicDirectinve } from './basicDirective/basic.directive';
import { BasicPlusDirective } from './dirtectives/basic-plus.directive';
import { UnlessDirective } from './dirtectives/unless.directive';
import { IfNotTrueDirective } from './dirtectives/if-not-true.directive';
import { DropdownDirective } from './dirtectives/dropdown.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountCockpitComponent } from './accounts/account-cockpit/account-cockpit.component';
import { AccountComponent } from './accounts/account/account.component';
import { ProductsComponent } from './products/products.component';
import { ProductCokpitComponent } from './products/product-cokpit/product-cokpit.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoggingService } from './Services/logging.service';
import { AccountsService } from './accounts/accounts.service';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    CockpitComponent,
    ServerElementComponent,
    ServersAndBlueprintsComponent,
    EmployeeListComponent,
    EmployeeComponent,
    AddEditEmployeeComponent,
    GameComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GamepracticeComponent,
    GpcontrolComponent,
    OddgpComponent,
    EvengpComponent,
    basicDirectinve,
    BasicPlusDirective,
    UnlessDirective,
    IfNotTrueDirective,
    DropdownDirective,
    AccountsComponent,
    AccountCockpitComponent,
    AccountComponent,
    ProductsComponent,
    ProductCokpitComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, AccountsService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
