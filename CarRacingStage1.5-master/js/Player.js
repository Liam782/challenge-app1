class Player {
  constructor(){
    this.username = null;
    this.playerCount = 0;
    this.fitScore = 0;
  }

  updatePlayerInfo(){
    database.ref("/").update({
      
    })
  }

  getPlayerInfo(){
    var playerInfoRef = database.ref('players');

    playerInfoRef.on("value",(data) =>{
      allPlayers = data.val();
    })
  }


}
