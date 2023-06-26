import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup
  eid!: any;
  idetails!: any;
  constructor(private aroute: ActivatedRoute,
    private httpSer: HttpService,
    private route: Router
  ) { }
  ngOnInit(): void {
    this.editForm = new FormGroup({
      item_name: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl('')
    })
    this.aroute.paramMap.subscribe((param) => {
      this.eid = param.get('id')
      console.log('id:', this.eid);

      this.httpSer.singleData(this.eid).subscribe((res) => {
        this.idetails = res;
        console.log("Details:", this.idetails);

        this.editForm = new FormGroup({
          item_name: new FormControl(this.idetails.item_name),
          company: new FormControl(this.idetails.company),
          price: new FormControl(this.idetails.price)
        })
      })
    })
  }
  submitData() {
    alert("Edited Data")
    console.log("Update Data:", this.editForm.value);
    this.httpSer.editData(this.eid, this.editForm.value).subscribe((res) => {
      console.log("Update Successfully:", res);

      //navigation
      if (res) {
        this.route.navigate(['/view'])
      }
    })
  }
}
