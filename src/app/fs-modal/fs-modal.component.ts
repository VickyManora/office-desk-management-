import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fs-modal',
  templateUrl: './fs-modal.component.html',
  styleUrls: ['./fs-modal.component.css']
})
export class FsModalComponent implements OnInit {
  @Input() employeeData:any 
  constructor() { }

  ngOnInit(): void {
  }

}
