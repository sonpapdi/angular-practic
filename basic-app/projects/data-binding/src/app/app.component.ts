import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  type='button'
  brd='1px solid red'
  style={
    border:'1px solid red',
    color:'green'
  }
bxBkcl ='white'

whatsDate(){
  return Date.now()
}
onmouseEvent(event :MouseEvent){
  console.log('Entered',event)
  this.bxBkcl=this.randomColor()
}


onMouseLeave(event :MouseEvent){

  console.log('exited',event)
  this.bxBkcl=this.randomColor()
}


onBtnClk(event :MouseEvent){
  this.title=this.title.toUpperCase()
  console.log(`click`,event )

}

randomColor() : string{
  let red=Math.floor(Math.random() *255)
  let green=Math.floor(Math.random() *255)
  let blue=Math.floor(Math.random() *255)
  return `rgb(${red},${green},${blue})`

}
}
