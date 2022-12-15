import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { oneOf } from '../../../api/validator';
import { Jumper } from '../../Jumper';

export interface JumperChangeEvent {
  valid: boolean;
  jumper: Omit<Jumper, 'id'>;
}

@Component({
  selector: 'app-jumper-form',
  templateUrl: './jumper-form.component.html',
  styleUrls: ['./jumper-form.component.scss'],
})
export class JumperFormComponent implements OnInit {
  @Output()
  readonly jumperChange = new EventEmitter<JumperChangeEvent>();

  readonly jumperPositions = [
    'Szybki',
    'Wysoko Skacze',
    'Wolny',
    'Nisko skacze',
  ];

  readonly jumperForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dateOfBirth: new FormControl('', Validators.required),

    position: new FormControl(this.jumperPositions[0], [
      Validators.required,
      oneOf(this.jumperPositions),
    ]),
  });

  constructor() {}

  @Input()
  set jumper(jumper: Omit<Jumper, 'id'>) {
    const { firstName, lastName, dateOfBirth, position } = jumper;
    const jumperValue = { firstName, lastName, dateOfBirth, position };
    this.jumperForm.setValue(jumperValue);
    this.onChange();
  }

  ngOnInit(): void {}

  onChange(): void {
    const { valid, value } = this.jumperForm;
    const event: JumperChangeEvent = {
      valid,
      jumper: value as Omit<Jumper, 'id'>,
    };
    this.jumperChange.emit(event);
  }
}
