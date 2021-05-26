export default class Timer {
  public valueTimer: number;
  private minutes: number;
  private seconds: number;
  readonly timerFeild: HTMLDivElement;
  readonly timerHTML: HTMLParagraphElement;
  public startTimerInterval?: NodeJS.Timeout;


  constructor() {
    this.valueTimer = 0;
    this.minutes = 0;
    this.seconds = 0;

    this.timerFeild = document.createElement('div');
    this.timerHTML = document.createElement('p');
  }

  createHTMLElementTimer(): HTMLElement {
    this.timerFeild.className = 'timer';
    this.timerHTML.className = 'timer-text';
    this.showTimerValue(this.minutes, this.seconds);
    this.timerFeild.append(this.timerHTML)
  
    return this.timerFeild
  }

  showTimerValue(minutes: number, seconds: number) {
    const min: string = (minutes < 10)? `0${minutes}` : `${minutes}`;
    const sec: string = (seconds < 10)? `0${seconds}` : `${seconds}`;
    
    this.timerHTML.innerHTML = `${min}:${sec}`
  }

  startTimer() {
    this.valueTimer = 0;
    this.showTimerValue(this.minutes, this.seconds);
    this.startTimerInterval = setInterval(() => {
      this.valueTimer++;
      this.minutes = Math.floor(this.valueTimer / 60);
      this.seconds = this.valueTimer - this.minutes * 60;
      
      this.showTimerValue(this.minutes, this.seconds);
    }, 1000)
  }

  stopTimer() {
    if (this.startTimerInterval) clearInterval(this.startTimerInterval);
  }
}