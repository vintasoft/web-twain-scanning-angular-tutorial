import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTwainScanningAngularTutorialComponent } from './web-twain-scanning-angular-tutorial.component';

describe('WebTwainScanningAngularTutorialComponent', () => {
  let component: WebTwainScanningAngularTutorialComponent;
  let fixture: ComponentFixture<WebTwainScanningAngularTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTwainScanningAngularTutorialComponent]
    });
    fixture = TestBed.createComponent(WebTwainScanningAngularTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
