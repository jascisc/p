import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var a=4
    var b=9

    var c=a+b

    console.log(c)
  }

}
