import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ROUTES } from '../../app.route';
import { PasswordComponent } from '../password/password.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Pruebas de BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent, PasswordComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        RouterTestingModule.withRoutes(ROUTES)
      ]
    })
      .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el BodyComponent', async () => {
    expect(component).toBeTruthy();
  });

  it('debe ser falso', async () => {
    fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.invalid).toBe(false);
  });

  it('debe redireccionar a cambio de password', async () => {
    fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const navigateSpy = spyOn(router, 'navigate');
    fixture.componentInstance.changePassword();
    expect(navigateSpy).toHaveBeenCalledWith(['/change']);
  });

  // it('debe entrar al form', async () => {
  //   fixture = TestBed.createComponent(BodyComponent);
  //   fixture.detectChanges();
  //   component.form.controls.usuario.setValue('name');
  //   component.form.controls.password.setValue('name');
  //   expect(component.form.valid).toBeFalsy();
  // });

});
