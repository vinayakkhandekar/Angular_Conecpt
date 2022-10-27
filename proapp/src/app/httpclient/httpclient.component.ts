import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  constructor(private service:ServiceService) { }
albums
  ngOnInit() {
    this.service.createpost().subscribe(data=>this.albums=data)
  }

}
