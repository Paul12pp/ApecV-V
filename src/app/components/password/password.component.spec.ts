import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComponent } from './password.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ROUTES } from '../../app.route';
import { BodyComponent } from '../body/body.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Pruebas de PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordComponent, BodyComponent],
      imports: [
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        RouterTestingModule.withRoutes(ROUTES)
      ]
    })
      .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el PasswordComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debe redireccionar al loging', async () => {
    fixture = TestBed.createComponent(PasswordComponent);
    fixture.detectChanges();
    const navigateSpy = spyOn(router, 'navigate');
    fixture.componentInstance.loging();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
});
