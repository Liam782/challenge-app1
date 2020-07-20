class App{
    constructor(){
        
    }

    hide(){
        
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
       gameState = data.val();
      })
    }

    update(state){
        database.ref('/').update({
        gameState: state
      });
    }

    //in the start function we need to allow the user to create a challenge, with funtions like time,

    async start(){
        if(gameState === 0){ //wait
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            

            //this.addFriend.position(displayWidth/2 + 200,displayHeight/2 - 400)

            form = new Form();
            form.display();
             

            //new player is created and added to the database 
            //Enter your name (new form object and display the form )
            //enter button
           // player count gets updated. 

            kid1 = createSprite(100 ,100);
            kid1.addImage("kid1",kid1.png);

            kid2 = createSprite(120,100);
            kid2.addImage("kid2",kid2.png);

            kid3 = createSprite(140,100);
            kid3.addImage("kid3",kid3.png);

            kid4 = createSprite(160,100);
            kid4.addImage("kid4",kid4.png);

            kids = [kid1,kid2,kid3,kid4];

            //home page of the user

            //list all your challenges 
            //create challenge 
        }

    }

    play(){
        form.hide();

        player.getPlayerInfo();
    }

    homePage(){

        
        //get challenges of the player 
        //store it in an array 
        //display each element in an array ( challenge ) as a button 
        //display a button 'create new challenge'

        //once you click on any of the challenge button gameState chnages to 2 
         //and app.displayRace(); function is called [to be called in the sketch.js file]

        


    }

    displayRace(){
        
    }
    
}

//0 when you are entering uyour name
//1 home page state you'll challenges 
//2 inside a challlenge 
