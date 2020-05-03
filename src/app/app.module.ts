import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TsClassComponent } from './components/ts-class/ts-class.component';
import { BindingComponent } from './components/binding/binding.component';
import { LoopsConditionalsComponent } from './components/loops-conditionals/loops-conditionals.component';

@NgModule({
  declarations: [
    AppComponent,
    TsClassComponent,
    BindingComponent,
    LoopsConditionalsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
