import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormControl, FormGroup } from '@angular/forms';
import { ListInterface } from '../../store/ListInterface';
import { Store } from '@ngrx/store';
import { addListInterface } from './addListInterface';
import { AddList } from '../../store/action';
import { ApiService } from '../../API/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  public myForm!: FormGroup;  // for entier form
  public FormData!:ListInterface;  // for dispatch form value



  constructor(private fb: FormBuilder,private store:Store<{ApiReducer:addListInterface}>,
    private api:ApiService,private route:Router
 
    ) {
      
     }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      'name': ['rupam',],
      'email': ['rupams@gmail.com']
    })
  }
  public get name() {
    return this.myForm.get('name') as FormControl
  }
  public get email() {
    return this.myForm.get('email') as FormControl
  }
  
  onSubmit(myForm:object){
    
    this.FormData={
      name:this.myForm.value.name,
      email:this.myForm.value.email,
     
          }
          this.api.addList(this.FormData).subscribe(item=>{
            console.log('success')
            this.store.dispatch(AddList({FormData:this.FormData}))
            this.route.navigate(['/list'])
          },er=>console.log(er))
   // console.log(this.FormData)
     }

     //for URL 
 
}

