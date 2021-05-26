import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalShow = false;
  modalleft;
  modaltop;
  employee:any;
  occupiedSeat;
  Userinput;
  searchEmployee;
  finalemp;
 

   ngOnInit(){
   this.occupiedSeat= this.EmployeeAPI.employees.map((e)=>{
                   return e.seatIdentifier;
   });
     
   }
   isSeatOccupied(e){
     return this.occupiedSeat.includes(e)?'black':'grey'
    }

   search(){
     if(this.employee&&this.employee.length!=0){
    //    console.log(this.employee)
       document.getElementById(this.employee[0].seatIdentifier).style.backgroundColor = "black";
     }
    this.employee=this.EmployeeAPI.employees.filter((elem)=>{
                    if(elem.name==this.Userinput){
                  this.finalemp=elem;
				  console.log(this.finalemp);
					}
            //    console.log(elem.name.toLowerCase().includes(this.Userinput.toLowerCase()))
           return  elem.name.toLowerCase().includes(this.Userinput.toLowerCase());
        //   return elem.name==this.Userinput;
    })
//    console.log( this.employee)
     


     this.modalShow = true;
    //  console.log(this.employee[0].seatIdentifier);
	 for(let i=0;i< this.employee.length;i++){
		var element=document.getElementById(this.employee[i].seatIdentifier);
		element.style.backgroundColor = "LightSkyBlue"; 
	 }
     
     var rect = element.getBoundingClientRect();
     this.modalleft = rect.left+25;
      this.modaltop = rect.top
      
   }
  addClickEvent(e) {
        
    if (e.type === 'mousemove') {
      this.modalleft = e.clientX
      this.modaltop = e.clientY
    }
    else if (e.type === 'mouseenter') {
      this.modalShow = true;
       var targetId = e.target.attributes.id.nodeValue;
      if(this.employee&&this.employee.length!=0){
    //    console.log(this.employee)
       document.getElementById(this.employee[0].seatIdentifier).style.backgroundColor = "black";
     }
     this.employee=this.EmployeeAPI.employees.filter((elem)=>{
           return elem.seatIdentifier==targetId
    })

    //   console.log(this.employee) 
    }
    else if (e.type === 'mouseleave') {
      this.modalShow = false;
    }
  }
  

 public TableAPI:any= {"tables" : [
		{
			"id": 10001,
			"title": "Table 1",
			"numberOfSeats": 4,
			"seats": [
				{
					"identifier": "SEAT-1000001",
					"title": "Seat 1" 
				},
				{
					"identifier": "SEAT-1000002",
					"title": "Seat 2" 
				},
				{
					"identifier": "SEAT-1000003",
					"title": "Seat 3" 
				},
				{
					"identifier": "SEAT-1000004",
					"title": "Seat 4" 
				},
			]
		},
		{
			"id": 10002,
			"title": "Table 2",
			"numberOfSeats": 4,
			"seats": [
				{
					"identifier": "SEAT-1000005",
					"title": "Seat 5" 
				},
				{
					"identifier": "SEAT-1000006",
					"title": "Seat 6" 
				},
				{
					"identifier": "SEAT-1000007",
					"title": "Seat 7" 
				},
				{
					"identifier": "SEAT-1000008",
					"title": "Seat 8" 
				},
			]
		},
		{
			"id": 10003,
			"title": "Table 3",
			"numberOfSeats": 4,
			"seats": [
				{
					"identifier": "SEAT-1000009",
					"title": "Seat 9" 
				},
				{
					"identifier": "SEAT-1000010",
					"title": "Seat 10" 
				},
				{
					"identifier": "SEAT-1000011",
					"title": "Seat 11" 
				},
				{
					"identifier": "SEAT-1000012",
					"title": "Seat 12" 
				},
			]
		},
		{
			"id": 10004,
			"title": "Table 4",
			"numberOfSeats": 4,
			"seats": [
				{
					"identifier": "SEAT-1000013",
					"title": "Seat 13" 
				},
				{
					"identifier": "SEAT-1000014",
					"title": "Seat 14" 
				},
				{
					"identifier": "SEAT-1000015",
					"title": "Seat 15" 
				},
				{
					"identifier": "SEAT-1000016",
					"title": "Seat 16" 
				},
			]
		},

	]
    

}
 public EmployeeAPI:any={
   
	"employees" : [
		{
			"id" : "EMP-100001",
			"name": "Shilpy Sharma",
			"designation": "Sr. Developer",
			"team": "Mobile Frontend",
			"currentProject": "Risor Mobile App",
			"seatIdentifier": "SEAT-1000001"
		},
		{
			"id" : "EMP-100003",
			"name": "Rakesh Verma",
			"designation": "Jr. Developer",
			"team": "Mobile Frontend",
			"currentProject": "Risor Mobile App",
			"seatIdentifier": "SEAT-1000003"
		},
		{
			"id" : "EMP-100004",
			"name": "Raju Rastogi",
			"designation": "Jr. Developer",
			"team": "Desktop Frontend",
			"currentProject": "Risor WebApp",
			"seatIdentifier": "SEAT-1000005"
		},
		{
			"id" : "EMP-100005",
			"name": "Farhan Qureshi",
			"designation": "Jr. Backend Developer",
			"team": "Desktop Frontend",
			"currentProject": "Risor WebApp",
			"seatIdentifier": "SEAT-1000006"
		},
		{
			"id" : "EMP-100012",
			"name": "Pia V. Sahastrabudhhe",
			"designation": "Sr. Designer",
			"team": "Desktop Frontend",
			"currentProject": "Risor WebApp",
			"seatIdentifier": "SEAT-1000008"
		},
		{
			"id" : "EMP-100017",
			"name": "Chatur Ramalingam",
			"designation": "Jr. Developer",
			"team": "Backend",
			"currentProject": "Risor WebApp",
			"seatIdentifier": "SEAT-1000010"
		},
		{
			"id" : "EMP-1000030",
			"name": "Ranchoddas Shyamaldas Chanchad",
			"designation": "Sr. Manager",
			"team": "Backend",
			"currentProject": "Risor WebApp",
			"seatIdentifier": "SEAT-1000011"
		},
		{
			"id" : "EMP-100072",
			"name": "Viru Sahastrabudhhe",
			"designation": "Director",
			"team": "Risor Team",
			"currentProject": "Risor Backend",
			"seatIdentifier": "SEAT-1000016"
		},
	]
}

  

}
