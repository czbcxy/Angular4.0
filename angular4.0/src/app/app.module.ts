import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StartComponent} from './start/start.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

// 路由配置
const routeConfig: Routes  = [
    {path: '', component: HomeComponent},
    {path: 'product/:productTitle', component: ProductDetailComponent}
]


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CarouselComponent,
        ProductComponent,
        StartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routeConfig),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
