import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    moduleId : module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent {
    pageTitle: string = "Welcome";
    changeTitle():void{
        if(this.pageTitle == "Welcome")
        this.pageTitle ="Changed1";
        else
        this.pageTitle ="Welcome";
    }
 }
