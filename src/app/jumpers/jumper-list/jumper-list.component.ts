import { Component, OnInit } from '@angular/core';
import { Jumper } from '../../Jumper';
import { JumperService } from '../jumper.service';

@Component({
  selector: 'app-jumper-list',
  templateUrl: './jumper-list.component.html',
  styleUrls: ['./jumper-list.component.scss'],
})
export class JumperListComponent implements OnInit {
  jumpers: Jumper[] = [];

  constructor(private jumperService: JumperService) {}

  ngOnInit(): void {
    this.jumperService
      .getAllJumpers()
      .subscribe((jumpers) => (this.jumpers = jumpers));
  }
}
