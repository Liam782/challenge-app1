class Form {

  constructor() {
    this.username = createInput("User Name");
    this.SignInbutton = createButton('SIGN IN');
    this.signButton = createButton('DONE!');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.sportName = createInput('Name of sport');
    this.time = createSelect();
    this.intensity = createSelect();
    //this.addFriend = createInput('h2');
    //this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.username.hide();
    this.title.hide();
    this.SignInbutton.hide();
    this.signButton.hide();
    this.sportName.hide();
    this.time.hide();
    this.intensity.hide();
    //this.addFriend.hide();
  }

  display(){

    this.sportName.position(displayWidth/2 - 200,displayHeight - 50);
    this.time.position(displayWidth/2,displayHeight - 50);
    this.intensity.position(displayWidth/2 + 200,displayHeight - 50);

    this.title.html("Challenge App");
    this.title.position(displayWidth/2 - 50, 180);

    this.SignInbutton.position(displayWidth/2 - 10, 240);

    //this.reset.position(displayWidth/2 - 100,20);

    this.SignInbutton.mousePressed(()=>{
      this.signInButton.hide();
      this.username.position(displayWidth/2 - 50,displayHeight/2 - 150);
      this.signInButton.position(displayWidth/2,displayHeight/2 + 100);
      
        this.signButton.mousePressed(()=>{
          this.username.hide();
          this.signUp.hide();

          player.name = this.username.value();
          //playerCount+=1;
          //player.index = playerCount;
          player.update();
          //player.updateCount(playerCount);
          this.greeting.html(player.name + " has succefully logged in!");
          this.greeting.position(displayWidth/2 - 120, displayHeight/2);
        })
    });

  }
}
