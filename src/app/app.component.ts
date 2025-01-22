import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(){
    
  }
   changeBg (){
    setInterval(()=> {
      this.bg = (this.bg + 1) >= this.array.length ? 0 : (this.bg + 1)
    },5000)
  }
  bg:number=3
  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }
  ngOnDestroy(){
    
  }
  title = 'message-for-you';
  array = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg']
appear:boolean=false
k:number=0
  message (){
    this.appear = !this.appear
    this.random(0,this.messages.length-1)
    this.changeBg()
  }
disappear(){
  this.appear = true
}
random(min:number,max:number){
  this.k = Math.floor(Math.random()*(max-min)+min)
  return Math.floor(this.k)
}
messages = [
  `you will not fail until you stop Trying`,
  'keep fighting, you are strong ♡',
  'what if you are almost there?',
  `the regret of not trying hurts more than the regret of doing or saying the thing you're hesitant about`,
  `say what you want to say and do what you want to do because that's what makes you you ! `,
  `don't stop being yourself to impress people....they will never be impressed and you will never live your life`,
  'enjoy doing things like it is your last time doing them',
  `end the conversation with saying what you won't regret if it was your last time talking to that person`,
  'forgive others, we all make mistakes ♡',
  'do the things you would regret not doing if you were about to die right now',
  `don't stop being yourself because of people that are afraid of being themselves`,
  `great thinkers understand complexities but communicate simply`,
  `be kind ,a wound caused by a word can never be healed`,
  `the best predictor of your future is your current actions `,
  `never prioritize others' wants over your own needs`,
  `is it really your goals or is it someone else's`,
  `if it won't make you happy what's the point in pleasing others ?`,
  `if you don't spend time to know yourself , you will believe whatever others say about you `,
  `tell the people you love that you love them`,
]

}
