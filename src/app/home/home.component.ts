import {  Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { PlatformLocation, isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "KruiseKart.com your windows to world Cruises";
  private baseURL: any = ''; private fullURL: any = ''; public last_access: Date;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, platformLocation: PlatformLocation, private route: Router, private titleService: Title, private meta: Meta) {

  }

  ngOnInit() {
    this.titleService.setTitle("KruiseKart.com your windows to world Cruises");
    this.meta.addTag({ name: 'author', content: 'http://www.influencetechnolabs.com/' });
    if (isPlatformBrowser(this.platformId)) {
      if (!localStorage.getItem("loginType")) {
        localStorage.setItem("loginType", "B2C");
      }

      // // Check for last access if it is more than 30 mins then expire session
      // if (localStorage.getItem("last_access")) {
      //   this.last_access = new Date(Number(localStorage.getItem("last_access")));
      //   var diff = this.diff_minutes(this.last_access, new Date());
      //   if (diff > 30) {
      //     localStorage.clear();
      //     var d = new Date();
      //     localStorage.setItem("last_access", JSON.stringify(d.getTime()));
      //     this.route.navigate([""]);
      //   }
      // } else {
      //   var d = new Date();
      //   localStorage.setItem("last_access", JSON.stringify(d.getTime()));
      // }
    }
  }

  diff_minutes(dt2: Date, dt1: Date) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
