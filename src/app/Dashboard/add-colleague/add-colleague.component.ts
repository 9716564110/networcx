import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { colleague } from '../Model/Colleague';

@Component({
  selector: 'app-add-colleague',
  templateUrl: './add-colleague.component.html',
  styleUrls: ['./add-colleague.component.css']
})
export class AddColleagueComponent implements OnInit {

  constructor(private routers:Router ) { }

  colleaguearray:colleague[] =[] ;
  id:any;
  name?:string;
  city?:string;
  pincode:any;
  mobilenumber:any;

  ngOnInit(): void {
    let localitem=localStorage.getItem("colleague")||"";
    this.colleaguearray=JSON.parse(localitem);
  }

  
  onSubmit(){

    let newcolleague:colleague = {
     id: this.id,
     name: this.name,
     city: this.city,
     pincode: this.pincode,
     mobileNumber: this.mobilenumber,
   } ;
 
       this.addColleague(newcolleague);

    this.routers.navigate(['/showcolleague']);
     }
   
     addColleague(newcust:colleague){
   
       this.colleaguearray.push(newcust);
   
       localStorage.setItem("colleague",JSON.stringify(this.colleaguearray));
     }
     
   
}
   

