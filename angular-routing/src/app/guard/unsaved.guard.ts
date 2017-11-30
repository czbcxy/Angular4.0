///<reference path="../../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {Observable} from "rxjs/Observable";

export class UnsavedGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(component: ProductComponent){
        return window.confirm("你还没有保存，确定要离开吗？");
    }

}