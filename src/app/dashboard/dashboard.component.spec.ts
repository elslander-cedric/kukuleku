import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { KodiService } from '../kodi.service';
import { KodiMockService } from '../kodi-mock.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        MaterialModule
      ],
      providers: [{
        provide: KodiService,
        useClass: KodiMockService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render 13 movies', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('md-grid-tile').length).toBe(13);
  });
});
