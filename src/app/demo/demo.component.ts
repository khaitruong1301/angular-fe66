import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', //tên thẻ
  templateUrl: './demo.component.html', //đường dẫn đến file chứa giao diện html
  styleUrls: ['./demo.component.scss'] //đường dẫn đến file css
})

export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
