import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMostBasicNgLibraryDemoComponent } from './the-most-basic-ng-library-demo.component';

describe('TheMostBasicNgLibraryDemoComponent', () => {
  let component: TheMostBasicNgLibraryDemoComponent;
  let fixture: ComponentFixture<TheMostBasicNgLibraryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheMostBasicNgLibraryDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMostBasicNgLibraryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
