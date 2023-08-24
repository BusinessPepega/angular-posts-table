import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [    
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    MatTableModule
  ]
})
export class PostListModule { }
