import { MakeService } from './../../services/make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any;

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes => {
      this.makes = makes
      console.log("MAKES", this.makes);      
    });
  }

  //onclick of makes option, change showing models. the better way to do it for this small data set is prob to get all
  //models on init and change which ones show, thus reducing the amount of api calls we need to make

}
