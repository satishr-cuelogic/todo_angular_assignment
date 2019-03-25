import { NgModule } from '@angular/core';
import { MatToolbarModule,MatButtonModule ,MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule} from '@angular/material';

@NgModule({
    imports :[ MatToolbarModule,
        MatButtonModule,MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule

    ],
    exports :[MatToolbarModule,
        MatButtonModule,MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule

    ]
})

export class MaterialModule {

}