import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contdor.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
       ContadorComponent 
    ],
    imports:[

    ]
})

export class ContadorModule{

}