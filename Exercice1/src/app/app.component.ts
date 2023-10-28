import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['dropdown.component.css'],
})

export class AppComponent implements OnInit {
  User: string = 'No';
  FontsList: string[] = ["Arial", "Verdana", "Tahoma", "Fira Sans"];
  ActualFont: string = "Arial";
  ActualSize: string = "40";

  ngOnInit(){
    //things to define in initialization
    this.enterUserName("walter white");
    this.changeFont(this.ActualFont);
    this.changeSize(this.ActualSize);
  }

  enterUserName(UserName: string){
    this.User = UserName;
    this.User = this.User.toUpperCase();
  }

  changeFont(NewFont: string){
    this.ActualFont = NewFont;
    let TextToModify = document.getElementById("HelloNAME");
    if (TextToModify !=null){
      TextToModify.style.fontFamily = this.ActualFont;
      //console.log(`Font changed to ${this.ActualFont}`);
    }
    else{
      //console.log(`There was an error while changing font to ${this.ActualFont}`);
    }
  }

  changeSize(NewSize: string){
    console.log(NewSize);
    this.ActualSize = NewSize + "px";
    let TextToModify = document.getElementById("HelloNAME");
    if(TextToModify!=null)
    {
      TextToModify.style.fontSize = this.ActualSize;
      //console.log(`Size of the text has been changed to ${this.ActualSize}`);
    }
    else
    {
      //console.log(`failed to change fontSize`);
    }
  }

  changeAlign(NewAlign: number){
    let TextToModify = document.getElementById("HelloNAME");
    if (TextToModify != null)
    {
      
      switch(NewAlign){
        case 1:
          TextToModify.style.textAlign = "right";
          break;
        case 2:
          TextToModify.style.textAlign = "center";
          break;
        case 3:
          TextToModify.style.textAlign = "left";
          console.log(`The text will be aligned on the left`);
          break;
      }
  }
}
}
