import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  dangerousVideoUrl: string;
  videoUrl: any;


  ngOnInit() {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/ZmWBrN7QV6Y';
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
