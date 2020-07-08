import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavPracticeComponent } from './nav-practice/nav-practice.component';
import { GameComponent } from './game/game.component';
import { GamepracticeComponent } from './gamepractice/gamepractice.component';
import { ServersAndBlueprintsComponent } from './servers-and-blueprints/servers-and-blueprints.component';
import { ServersComponent } from './servers/servers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { OnlineServicesComponent } from './online-services/online-services.component';
import { AuthGuard } from './auth-guard.service';
import { NoRecipeComponent } from './recipes/no-recipe/no-recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservablesComponent } from './observables/observables.component';

const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecipesComponent, children:[
        { path:'', component:NoRecipeComponent},
        { path:'new', component:RecipeEditComponent},
        { path:':id', component:RecipeDetailsComponent},
        { path:':id/edit', component:RecipeEditComponent},
    ]},
    {path:'shopping-list', component:ShoppingListComponent},
    {path:'employees', canActivate:[AuthGuard], component:EmployeeListComponent},
    {path:'nav/:name/:id', component:NavPracticeComponent},
    {path:'game', component:GameComponent},
    {path:'game2', component:GamepracticeComponent},
    {path:'servers', component:ServersAndBlueprintsComponent},
    {path:'myPractices', component:ServersComponent},
    {path:'accounts', component:AccountsComponent},
    {path:'products', component:ProductsComponent},
    {path:'observables', component:ObservablesComponent},
    {path:'brands', canActivate:[AuthGuard], component:BrandsComponent},
    {path:'online-services', component:OnlineServicesComponent},
    {path:'**', redirectTo:'/'}

  ]
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]

})
export class AppRouterModule {

}