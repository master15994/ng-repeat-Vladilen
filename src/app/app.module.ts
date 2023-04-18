import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Post4Component } from './posts/post4.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { styleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    PostComponent,
    PostFormComponent,
    styleDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
