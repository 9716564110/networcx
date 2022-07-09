import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { colleague } from '../Model/Colleague';

@Component({
  selector: 'app-show-colleague',
  templateUrl: './show-colleague.component.html',
  styleUrls: ['./show-colleague.component.css']
})
export class ShowColleagueComponent implements OnInit {

 
  constructor(private route:Router ,private router: ActivatedRoute) { }
  
  localitem=localStorage.getItem("colleague")||"";
  colleague:colleague[] =JSON.parse(this.localitem);
  index: any;

  ngOnInit(): void {
  }
  
  onClick(coll:colleague){
    this.route.navigate(['/update'],{ queryParams: coll});
  }
   onDelete(coll:colleague){
    
     for(let i=0;i<this.colleague.length;i++){
       if( this.colleague[i].id == coll.id){
           this.index = i;
           console.log(this.index)
       }
     }
     this.colleague.splice(this.index,1);
     console.log(this.colleague)
     localStorage.setItem("colleague",JSON.stringify(this.colleague));
   }


}
