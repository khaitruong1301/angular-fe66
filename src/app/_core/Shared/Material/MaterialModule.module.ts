import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';

//Module này chứa tất cả module của material và export tất cả module đó ra
@NgModule({
    imports: [MatIconModule,MatButtonModule,BrowserAnimationsModule,MatAutocompleteModule,MatBadgeModule],
    exports: [MatIconModule,MatButtonModule,BrowserAnimationsModule,MatAutocompleteModule,MatBadgeModule],

})
export class MaterialModule { }
