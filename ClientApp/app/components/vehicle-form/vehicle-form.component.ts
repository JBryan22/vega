import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
// import { Make } from '../../../../Models/Make.cs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  vehicle: any = {};
  features: any;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes
    });

    this.vehicleService.getFeatures().subscribe(dataResponse => {
      this.features = dataResponse
    });
      console.log(this.features);
  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make.id);
    this.models = selectedMake ? selectedMake.models : [];
  }

  //onclick of makes option, change showing models. the better way to do it for this small data set is prob to get all
  //models on init and change which ones show, thus reducing the amount of api calls we need to make

}
