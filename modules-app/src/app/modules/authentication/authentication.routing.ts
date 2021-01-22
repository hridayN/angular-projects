import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HelpComponent } from "src/app/components/help/help.component"
import { LoginComponent } from "src/app/components/login/login.component"
import { RegisterComponent } from "src/app/components/register/register.component"

export const routes: Routes = [
    { path: '', component: LoginComponent }, // default route of the module
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'help', component: HelpComponent },
  ]
  
  export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes)