import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddColleagueComponent } from '../add-colleague/add-colleague.component';
import { colleague } from '../Model/Colleague';

@Component({
  selector: 'app-update-colleague',
  templateUrl: './update-colleague.component.html',
  styleUrls: ['./update-colleague.component.css']
})
export class UpdateColleagueComponent implements OnInit {

  data:any;
  formData:colleague=new colleague(); 
  index?:any
  addcolleague?:AddColleagueComponent

  constructor(private route:ActivatedRoute,private routers: Router) { }

  localitem=localStorage.getItem("colleague")||"";
  colleague:colleague[] =JSON.parse(this.localitem);

  ngOnInit(): void {
   this.route.queryParams.subscribe(param =>{
       this.data = param;
    }
      )

      this.formData={
        id : this.data.id,
        name:this.data.name,
        city:this.data.city,
        pincode:this.data.pincode,
        mobileNumber:this.data.mobileNumber
      };
  }


  onSubmit(){

   for(let i=0;i<this.colleague.length;i++){
     if( this.colleague[i].id == this.formData.id){
         this.index = i;
         console.log(i)
     }
   }
  
    this.colleague[this.index]=this.formData;
    localStorage.setItem("colleague",JSON.stringify(this.colleague));
   this.routers.navigate(['/showcolleague']);

  }
}
