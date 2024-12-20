import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeListComponent } from './especialidade-list.component';

describe('EspecialidadeListComponent', () => {
  let component: EspecialidadeListComponent;
  let fixture: ComponentFixture<EspecialidadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
