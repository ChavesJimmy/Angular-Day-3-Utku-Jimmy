import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  date : any = Date;
  //position : any = navigator.geolocation.getCurrentPosition;
  info = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.nullValidator),
    image: new FormControl('',Validators.nullValidator),
    date: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    place: new FormControl('',Validators.nullValidator),
    review: new FormControl('',Validators.required)
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.info.valid){
      var a:any = this.info.value;
      alert("message sent")
let text : any = document.getElementById("reviews")
text.innerHTML = `<h3>${a.title}</h3><br>
                  <div><a href="${a.image}"></a></div>
                  ${a.review}
                  <br>
                  <div class="signature">Written by ${a.firstName}, in ${a.place}, on ${a.date}</div>`
   }

  }
}
