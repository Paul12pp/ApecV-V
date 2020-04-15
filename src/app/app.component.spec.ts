import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { PasswordComponent } from './components/password/password.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

describe('Pruebas de AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        PasswordComponent,
        FooterComponent
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
      ]
    }).compileComponents();
  }));

  it('Debe crear el appComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
