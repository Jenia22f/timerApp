import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {


  public timeNow: number = 0;
  public timer;

  public isStart = true;
  public isStop = false;
  public timerBtnText = 'START';
  private clicks = 0;
  private clickTimeout = null;

  stateChanger(startStatus, stopStatus) {
    this.isStart = startStatus;
    this.isStop = stopStatus;
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  startTimer() {
    if (this.isStart) {
      this.timerBtnText = 'STOP';
      this.timer = setInterval(() => {
        this.timeNow++;
      }, 1000);
      this.stateChanger(false, true);
    } else {
      this.pauseTimer();
      this.stateChanger(true, false);
      this.timerBtnText = 'START';
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.timeNow = 0;
    this.timerBtnText = 'START';
    this.stateChanger(true, false);
  }

  public test(): void {
    this.clicks++;
    if (this.clickTimeout) {
      if (this.clicks === 2) {
        this.setClickTimeout(
          clearInterval(this.timer),
          this.timerBtnText = 'RESUME',
          this.stateChanger(true, false));
      } else {
        this.setClickTimeout(() => {
        });
      }
    } else {
      this.setClickTimeout(this.handleSingleClick);
    }
  }

  public setClickTimeout() {
    this.clickTimeout = setTimeout(() => {
      this.clicks = 0;
    }, 300);
  }
}





