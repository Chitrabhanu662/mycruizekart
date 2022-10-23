import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

// import { LandingPageService } from '../services/landingpage.service';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  title = 'Cruize';
  locations: any[] = [];
  cruiseLines: any[] = [];
  place: string = "";
  cruiseLine: any = '';
  cruiseAvailability: {};
  exclusiveDeals: any[] = [];
  sailMonths: any[] = [];
  sailDate: any = "";
  duration: any = "";

  constructor(
    private router: Router) {
  }
  // constructor(private landingPageService: LandingPageService, private toastr: ToastrService,
  //   private router: Router) {
  // }

  ngOnInit() {
    this.getCruiseLines();
    this.getSailMonths();
  }
//   makeItBlank(event) {
//     jQuery(event.target).val("");
// }
//   getLocations(event) {
//     this.place = event.target.value;
//     if (this.place.length > 2)
//     this.landingPageService.getLocations(this.place).subscribe(
//       data => {
//         let resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
//         if (resp.locations) {
//           this.locations = resp.locations;
//         }
//       },
//       error => {
//         console.log(error);
//       }
//     )
//   }

  getCruiseLines() {
    // this.landingPageService.getCruiseLines().subscribe(
    //   data => {
    //     let resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
    //     if (resp.cruiseLine) {
    //       this.cruiseLines = resp.cruiseLine;
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

  getCruiseAvailability() {
    // Added one more index for the Cruise
  //   if (!this.cruiseLine && !this.place) {
  //     this.toastr.warning("Please Select At Least Cuiseline or Destination...!")
  //     return false;
  // }
    var data = ""; var qstring = "";
    if (this.sailDate) {
      data = this.place + "()" + this.sailDate.month + "()" + this.duration + "()";
      qstring = this.place + "---" + this.sailDate.month + "---" + this.duration;
    } else {
      data = this.place + "()()" + this.duration + "()";
      qstring = this.place + "---" + "" + "---" + this.duration;
    }
    if (this.cruiseLine != '') {
      data = data + this.cruiseLine.CruiseLine + "()";
      qstring = qstring + "---" + this.cruiseLine.CruiseLine.split(' ').join('-');
    } else { qstring = qstring + "---"; }

    // This last index for Cruise Code
    qstring = qstring + "---";

    this.router.navigate(["availbility/" + qstring]);
  }

  getSailMonths() {
    // this.landingPageService.getSailMonths().subscribe(
    //   data => {
    //     let resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
    //     if (resp.status == 'success') {
    //       this.sailMonths = resp.months;
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

  // setLocation(loc) {
  //   this.place = loc;
  //   this.locations = [];
  // }

  setSailMonths() {

  }

}

