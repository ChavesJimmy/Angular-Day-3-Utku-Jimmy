import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dateTime : Date = new Date();
  constructor() { }

  ngOnInit(): void {
    timer(0 , 1000).subscribe(()=>{
      this.dateTime = new Date()
    })
  }

}
