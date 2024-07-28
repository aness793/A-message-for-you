import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'message-for-you';
  array = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg']
appear:boolean=false
k:number=0
bg:number=3
  message (){
    this.appear = !this.appear
    console.log(this.appear)
    this.random(0,this.messages.length-1)
    console.log(this.k)
  }
disappear(){
  this.appear = true
  console.log(this.appear)
}
random(min:number,max:number){
  this.k = Math.floor(Math.random()*(max-min)+min)
  return Math.floor(this.k)
}
messages = [
  `never give up`,
  'keep fighting, you are strong ♡',
  'you are almost there',
  'you are strong',
  'i love you',
]

}
