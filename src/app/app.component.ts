import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  originalUrl: string = '';
  shortenedUrl: string = '';

  constructor(private http: HttpClient) {}

  shortenUrl() {
    this.http
      .post<any>('http://localhost:3000/shorten', { url: this.originalUrl })
      .subscribe({
        next: (res: any) => {
          this.shortenedUrl = res.shortUrl;
        },
        error: (err: any) => {
          console.error('Error occurred:', err);
        },
      });
  }
}
