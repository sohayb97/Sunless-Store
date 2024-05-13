import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { expand } from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class orderComponent implements OnInit {

constructor(private router:Router){}
 countdown = 5
  ngOnInit(): void {
  // const interval =  setInterval(()=>{
  //     this.countdown=this.countdown-1
  //     if (this.countdown == 0) {
  //       clearInterval(interval);
  //       this.router.navigateByUrl('')
  //         }
  //   },1000)
  }
}
