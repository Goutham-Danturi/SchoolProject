import { Injectable } from '@angular/core';
import {  Emp } from '../app/emp';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrvcDataService {
emp1:Emp;
res:object;
loading:boolean;

  constructor(private Clnt:HttpClient) {
    this.emp1= new Emp();
   }

   dosomething(res)
   {
    
    alert(typeof(res));
    console.log(res);
    }
getEmployee():Object
{
 /* this.emp1.EName="Rakesh";
  this.emp1.EDOB= new Date();
  this.emp1.EDOB= new Date();
  this.emp1.EAdress="Mumbai";
*/
this.loading=true;
this.Clnt
    
    .get("http://localhost:4937/api/employee/getName")
    .pipe(map(res => res.toString()))
    .subscribe( 
      data => {
        
      this.dosomething(data);
      this.loading=false;
              }
    )
    
    console.log("from Service");
    var obj = JSON.stringify(this.res);
console.log(obj);
return this.res;

}  

}
