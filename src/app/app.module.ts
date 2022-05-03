import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { NavbarComponent } from './componentes/cabecera/navbar/navbar.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SkillsComponent } from './componentes/body/skills/skills.component';
import { FormacionComponent } from './componentes/body/formacion/formacion.component';
import { ProyectosComponent } from './componentes/body/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/body/contacto/contacto.component';
import { CardSkillComponent } from './componentes/body/skills/card-skill/card-skill.component';
import { AcordeonComponent } from './componentes/body/formacion/acordeon/acordeon.component';
import { CardArrastrableComponent } from './componentes/body/proyectos/card-arrastrable/card-arrastrable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { HeroComponent } from './componentes/cabecera/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    SkillsComponent,
    FormacionComponent,
    ProyectosComponent,
    ContactoComponent,
    CardSkillComponent,
    AcordeonComponent,
    CardArrastrableComponent,
    LoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
