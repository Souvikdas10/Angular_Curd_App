import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  allItem!: any
  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.http.fatch_item().subscribe(res => {
      console.log("api fatch:", res);
      this.allItem = res;
    })
  }
  
  del(id: number) {
    this.http.deleteHandle(id).subscribe(res => {
      console.log("delete", res);
      alert("Deleted Successfully")
      this.http.fatch_item().subscribe((res)=>{
        this.allItem=res;
      })
    })
  }
}