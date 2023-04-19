import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Post4Component } from './posts/post4.component';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { styleDirective } from './directives/style.directive';
import { MultPipe } from './pipe/multi-by.pipe';
import { ExMarkPipe } from './pipe/ex-mark.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MultPipe, ExMarkPipe, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
