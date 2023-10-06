import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemTarefaComponent } from './mantem-tarefa.component';

describe('MantemTarefaComponent', () => {
  let component: MantemTarefaComponent;
  let fixture: ComponentFixture<MantemTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
