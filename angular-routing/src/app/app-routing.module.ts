import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Router404Component} from "./router404/router404.component";
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},//重定向
    {path: 'home', component: HomeComponent},
    {path: 'chat', component: ChatComponent, outlet: "aux"},
    //子路由
    {
        path: 'product/:id', component: ProductComponent, children: [
            {path: '', component: ProductDescComponent},
            {path: 'seller/:id', component: SellerInfoComponent}
        ], canActivate: [LoginGuard], //canActivate守卫只有满足条件才能打开loginGuard-->在guard中
        canDeactivate: [UnsavedGuard] //canActivate守卫是否保存提示
    },
    {path: '**', component: Router404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [LoginGuard, UnsavedGuard]    //实例化loginGuard类
})

export class AppRoutingModule {


}
