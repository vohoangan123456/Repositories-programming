import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
  messages = [];
  constructor(private http: Http) { }
  getMessages() {
    this.http.get('http://localhost:4000/posts').subscribe(res => {
      this.messages = res.json()
    })
  }
}
