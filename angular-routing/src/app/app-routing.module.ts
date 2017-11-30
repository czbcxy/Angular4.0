import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Router404Component} from "./router404/router404.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: '**', component: Router404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {


}
