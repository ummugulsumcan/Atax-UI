import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFileComponent } from './analysisFile.component';

describe('AnalysisFileComponent', () => {
  let component: AnalysisFileComponent;
  let fixture: ComponentFixture<AnalysisFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
