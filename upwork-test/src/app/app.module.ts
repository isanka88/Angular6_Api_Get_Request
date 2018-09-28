import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./shared/services";
import { AppComponent } from "./app.component";
import { EmpListComponent } from "./emp-list/emp-list.component";

const routes: Routes = [{ path: "", component: EmpListComponent }];

@NgModule({
  declarations: [AppComponent, EmpListComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
