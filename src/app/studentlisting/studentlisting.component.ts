import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ServiceService } from '../service/service.service';



@Component({
  selector: 'app-studentlisting',
  templateUrl: './studentlisting.component.html',
  styleUrls: ['./studentlisting.component.css']
})
export class StudentlistingComponent implements OnInit {

  //declare a vaiable named studentList to store Student details as an array object
  studentList:Student[]= new Array<Student>();

  //declare a variable names filterData to store filtered studentlist data as an array object
  filterData:Student[]= new Array<Student>();

//create a constructor and inject the ServiceService
constructor(private service:ServiceService) { }


//create a onInit() method and call the getStudentList() method from ServiceService and suscribe to it
//and store the response in studentList variable
  ngOnInit(): void {
    this.service.getStudentList().subscribe(data=>{
      this.studentList=data;
      //call nofilter() method
      this.nofilter();
    })
  }

  //createa nofilter()method and assign the studentList to filterData
   nofilter(){
    this.filterData= this.studentList;
  }

  //create a method named averageGrade7() and filter the studentList based on grade greater than 7
 //filterData is the data that is filtered from the studentList using the filter method.

averageGrade7(){
    if(this.studentList.length>0){
        this.filterData=this.studentList.filter(data=>data.average_grade>7);
    }else{
        alert("Student list is empty");
    }
}
  //create a method named nameStartsWithA() and filter the studentList based on name starts with 'A' and 'a' add try catch
  nameStartsWithA(){
    try{
      this.filterData=this.studentList.filter(data => data.name[0]=="A"||data.name[0]=="a");
    }
    catch(err){
      console.log(err);
    }
  }

  //create a method named ageGreaterThan25() and filter the studentList based on age greater than 25
  ageGreaterThan25(){
    this.filterData=this.studentList.filter(data=>data.age>25);
  }





}