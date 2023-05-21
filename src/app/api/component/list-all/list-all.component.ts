import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../API/api.service';
import { Store } from '@ngrx/store';
import { ListInterface } from '../../store/ListInterface';
import { AllListAction, deleteAction } from '../../store/action';
import { ApiListSelector } from '../../store/selector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  public get!: ListInterface;

  public StoreAllList!: ListInterface[];
  constructor(private api: ApiService,
    private store: Store<{ ApiReducer: ListInterface }>
    , private router: Router
  ) { }

  ngOnInit(): void {
    //call Api and send api data to store
    this.api.getAllList().subscribe((items: any) => {
      //  console.log(items)
      this.store.dispatch(AllListAction({ AllList: items }))
    });

    //get AllList from store
    this.store.select(ApiListSelector).subscribe(lists => {
      this.StoreAllList = lists;
      //  console.log(this.StoreAllList)
    })
  }

  sendIndex(i: any) {
    // console.log(i);
     this.api.index.next(i);
   // localStorage.setItem('index', i)
  }


  //delete
  delete(a: any, i: number) {
    let index = i;
    if (confirm("Are You Sure To Delete??")) {
      this.api.deleteList(a).subscribe(deleteId => {
        //console.log(this.StoreAllList, i)
        this.store.dispatch(deleteAction({ index: index }))
      })
    }
  }
}
