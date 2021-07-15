import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profielData="How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?";
  like = 20;
  chat = 24;
  view = 30;
  profilePera ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente, dolorum consectetur est accusamus quis? Quae enim, aperiam aut asperiores dolores"
  constructor() { }

  ngOnInit(): void {
  }



}
