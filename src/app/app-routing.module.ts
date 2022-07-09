import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddColleagueComponent } from './Dashboard/add-colleague/add-colleague.component';
import { HomecomponentComponent } from './Dashboard/homecomponent/homecomponent.component';
import { ShowColleagueComponent } from './Dashboard/show-colleague/show-colleague.component';
import { UpdateColleagueComponent } from './Dashboard/update-colleague/update-colleague.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', component:HomecomponentComponent  },
  { path: 'addcolleague', component: AddColleagueComponent  },
  { path: 'showcolleague', component: ShowColleagueComponent  },
  { path: 'update', component: UpdateColleagueComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
