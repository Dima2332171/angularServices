import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
item:string[] = ['C++','C#','WPF','ASP.NET','HTML','CSS','JS','Node.js'];

getData():string[]{
  return this.item
}



  constructor() {

  }
}
