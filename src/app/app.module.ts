import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Post4Component } from './posts/post4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { styleDirective } from './directives/style.directive';
import { MultPipe } from './pipe/multi-by.pipe';
import { ExMarkPipe } from './pipe/ex-mark.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './service/counter/counter.component';
import { OwnFormComponent } from './own-form/own-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MultPipe,
    ExMarkPipe,
    FilterPipe,
    CounterComponent,
    OwnFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
