import { Component, OnInit } from '@angular/core';
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from "@angular/common";
import {SkillsService} from "../skills.service";
registerLocaleData(localeRu,'ru')
@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent implements OnInit {
  birthday:Date;
  firstName:string;
  lastName:string;
  phoneNumber:number;
  adress:string;
  salary:number;
  skill:string[] = [];
  constructor(public skillsItems:SkillsService) {
    this.firstName = 'Dima';
    this.lastName = 'Shkoda';
    this.birthday = new Date(2000,10,8);
    this.phoneNumber = +380981065321;
    this.adress = 'Ukraine, Kyiv';
    this.salary = 15000;
  }
path = 'https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg';
  items:any = [
    {
      name: 'English tutorial',
    },
    {
      name: 'Copywriter',
    }
    ];

  ngOnInit(): void {
    this.skill = this.skillsItems.getData();
    console.log(this.skill)
  }



}
