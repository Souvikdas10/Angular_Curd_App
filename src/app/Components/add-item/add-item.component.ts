import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  formValue!: FormGroup
  constructor(private http: HttpService, private route: Router) { }
  ngOnInit(): void {
    this.formValue = new FormGroup({
      item: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl(''),
    })
  }
  submitData() {
    alert("Submitted Successfully")
    console.log("Forms Data:", this.formValue.value);
    let data = {
      item_name: this.formValue.value.item,
      company: this.formValue.value.company,
      price: this.formValue.value.price
    }
    this.http.PostItems(data).subscribe((res) => {
      console.log('res:', res);
      
      //navigation 
      if (res) {
        this.route.navigate(['/view'])
      }
    })
  }
}
