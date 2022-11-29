import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { ClassBindingsComponent } from './components/class-bindings/class-bindings.component';
import { StyleBindingsComponent } from './components/style-bindings/style-bindings.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { FileComponent } from './components/file/file.component';
import { FileSizePipe } from './pipes/file-size-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingsComponent,
    ClassBindingsComponent,
    StyleBindingsComponent,
    EventBindingsComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    EmployeeComponent,
    FileComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
