import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoIconesComponent } from './botao-icones.component';

describe('BotaoIconesComponent', () => {
  let component: BotaoIconesComponent;
  let fixture: ComponentFixture<BotaoIconesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoIconesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoIconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
