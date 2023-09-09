import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPortfolioComponent } from './asset-portfolio.component';

describe('AssetPortfolioComponent', () => {
  let component: AssetPortfolioComponent;
  let fixture: ComponentFixture<AssetPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetPortfolioComponent]
    });
    fixture = TestBed.createComponent(AssetPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
