
import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
// For MDB Angular Pro
import { MatTabsModule, MatToolbarModule,  MatSidenavModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatInputModule,
      MatCarouselModule,
      MatCardModule

    ],
    exports: [
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatInputModule,
      MatCarouselModule,
      MatCardModule
    ],
})

export class UiComponents {
}
