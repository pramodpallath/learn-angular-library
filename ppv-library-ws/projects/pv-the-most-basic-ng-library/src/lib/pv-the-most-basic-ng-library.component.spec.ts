import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvTheMostBasicNgLibraryComponent } from './pv-the-most-basic-ng-library.component';

describe('PvTheMostBasicNgLibraryComponent', () => {
  let component: PvTheMostBasicNgLibraryComponent;
  let fixture: ComponentFixture<PvTheMostBasicNgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvTheMostBasicNgLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvTheMostBasicNgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
