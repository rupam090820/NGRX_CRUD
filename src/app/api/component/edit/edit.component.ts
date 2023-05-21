import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ListInterface, StoreInterface } from '../../store/ListInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../API/api.service';
import { Store } from '@ngrx/store';
import { StoreSingleData, UpdateSingleUser } from '../../store/action';
import { ApiSIngleUserList } from '../../store/selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public myForm: any;  // for entier form
  public FormData!: ListInterface;  // for dispatch form value
  public ID!: number | string;
  public Index: any; // for storing IndexNumber

  public url!: string;
  public baseUrl!: boolean;

  public SingleUsersdata!: ListInterface;

  public name!: string;
  public email!: string;

  public IndexNumber!: number;


  constructor(private fb: FormBuilder, private route: Router, private api: ApiService,
    private store: Store<{ ApiReducer: ListInterface }>,
    private activatedroute: ActivatedRoute) {
    this.url = this.route.url;
    this.baseUrl = this.url.includes('/view')

    //for getting ID
    this.activatedroute.params.subscribe(id => {
      this.ID = parseInt(id['id'])
      //console.log(this.ID)
    })

    //for apicall for singledata
    this.api.getSingleList(this.ID).subscribe((SingleData: any) => {
      console.log(SingleData);
      this.store.dispatch(StoreSingleData({ SingleUserData: SingleData }))
    })
  }
  submit(formdata: any) {
    this.FormData = {
      id: this.ID,
      ...formdata.value
    }
   // this.Index = localStorage.getItem('index')
    this.api.index.subscribe(item=>{
      console.log(item)
      this.Index=item
    })

   // console.log(this.FormData)
   // console.log(this.Index)
    this.api.editList(this.ID, this.FormData).subscribe(item => {
      console.log(item)
      this.store.dispatch(UpdateSingleUser({ userdata: this.FormData, index: this.Index }))
    })
    this.route.navigate(['/list'])
  }

  ngOnInit(): void {

    //get Single data from STORE 
    this.store.select(ApiSIngleUserList).subscribe((SingleData:any) => {
      this.SingleUsersdata = SingleData
   //   console.log(this.SingleUsersdata.name)
      this.name = this.SingleUsersdata.name;
      this.email = this.SingleUsersdata.email;
      //   console.log(this.SingleUsersdata.name)
    })
  }
}
