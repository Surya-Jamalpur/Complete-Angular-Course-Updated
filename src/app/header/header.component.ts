import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.scss']
})
export class HeaderComponent {
   @Output() navigated = new EventEmitter<string>();

    onNavigate(selectedRoute:string) {
        this.navigated.emit(selectedRoute);
    }

}