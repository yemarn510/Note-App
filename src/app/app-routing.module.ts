import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'', component : AppComponent},
  {path: 'home' , redirectTo:'', pathMatch: 'full'},
  {path: 'notes',redirectTo:'', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }