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
  `you will not fail until you stop Trying`,
  'keep fighting, you are strong ♡',
  'what if you are almost there?',
  'The regret of failing or the regret of never trying?',
  'i love you',
  `don't stop doing being yourself to impress people that will never be impressed `,
  'enjoy doing things like it is your last time doing them',
  `end the conversation with saying what you won't regret if it was your last time talking to that person`,
  'forgive others, we all make mistakes ♡',
  'do the things you would regret not doing if you were about to die right now',
  `don't stop being yourself because of people that are afraid of being themselves`,
]

}
