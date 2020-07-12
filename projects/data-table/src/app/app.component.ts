import { Component } from '@angular/core';
import { TabRow } from './data-domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-table';

data = new Array<TabRow>()

fetchData(){
this.data.push({id : 1,item :"pc",qty :3,price :30000})
this.data.push({id : 2,item :"pc",qty :3,price :30000})
this.data.push({id : 3,item :"pc",qty :3,price :30000})
this.data.push({id : 5,item :"pc",qty :3,price :30000})
this.data.push({id : 6,item :"pc",qty :3,price :30000})
this.data.push({id : 7,item :"pc",qty :3,price :30000})
this.data.push({id : 8,item :"pc",qty :3,price :30000})
this.data.push({id : 9,item :"pc",qty :3,price :30000})
this.data.push({id : 10,item :"pc",qty :3,price :30000})

}

ooo(row:TabRow){
  console.log('Delete Clicked',row)
  this.data.forEach((dt,ind) => {
    if(dt.id === row.id){
    this.data.splice(ind,1)
  }
  })
}

}
