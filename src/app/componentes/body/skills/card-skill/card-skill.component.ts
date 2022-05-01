import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.css']
})
export class CardSkillComponent implements OnInit {

  listadoSkills = [{
    title: "Angular",
    imgSrc: "./assets/img/skills/angular-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "BootStrap",
    imgSrc: "./assets/img/skills/bootstrap-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "Angular",
    imgSrc: "./assets/img/skills/angular-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "BootStrap",
    imgSrc: "./assets/img/skills/bootstrap-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "Angular",
    imgSrc: "./assets/img/skills/angular-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "BootStrap",
    imgSrc: "./assets/img/skills/bootstrap-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "Angular",
    imgSrc: "./assets/img/skills/angular-icon.png",
    text: "Framework de desarrollo",
  },{
    title: "BootStrap",
    imgSrc: "./assets/img/skills/bootstrap-icon.png",
    text: "Framework de desarrollo",
  }];



  constructor() {

  }



  ngOnInit(): void {
  }

}
