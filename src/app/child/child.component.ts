import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  @Input('parentData') name:any

  @Output() public childEvent = new EventEmitter
 
  ngOnInit(): void {
    console.log(this.name)
  }

  fireEvent(){
    this.childEvent.emit('Hey Sukanya Come Lets Code');
  }

}
