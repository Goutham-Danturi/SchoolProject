import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Emp } from '../emp';
import { SrvcDataService} from  '../srvc-data.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name= new FormControl('');
  emp: Emp= new Emp();  
 loading:boolean = false;
 res:Object;
    constructor(private s1:SrvcDataService) {
   
   }

ClearClick()
{
  this.emp.EAdress="";
  this.emp.EName="";
  this.emp.EDOB = new Date();
  this.emp.EDOJ = new Date();
}

SaveToDB()
{

}

Fetch()
{
  
  
  this.loading = this.s1.loading;
  this.res=this.s1.getEmployee();
  this.loading = this.s1.loading;
  
  console.log(this.res);
   
}
  ngOnInit() {
  }

}
