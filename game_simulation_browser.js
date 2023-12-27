// Player 1
var game_channel = Game.new_channel("moon", "moon")

// Player 2
var game_channel = Game.new_channel("moon", "diva")

// both
Game.join(game_channel)

// Player 1
Game.new_game(game_channel)

// Both
game_channel.on("player_added", response => {
  console.log("Player Added", response)
})

// Player 2
Game.add_player(game_channel, "diva")

// Player 2
Game.position_island(game_channel, "player2", "atoll", 1, 1)
Game.position_island(game_channel, "player2", "dot", 1, 5)
Game.position_island(game_channel, "player2", "l_shape", 1, 7)
Game.position_island(game_channel, "player2", "s_shape", 5, 1)
Game.position_island(game_channel, "player2", "square", 5, 5)

// player 1
Game.position_island(game_channel, "player1", "dot", 1, 1)

// Both
game_channel.on("player_set_islands", response => {
  console.log("Player Set Islands", response)
})

// Player 2
Game.set_islands(game_channel, "player2")

// Both
game_channel.on("player_guessed_coordinate", response => {
  console.log("Player Guessed Coordinate: ", response.result)
})

// Player 1
Game.guess_coordinate(game_channel, "player1", 10, 1)

// Player 2
Game.guess_coordinate(game_channel, "player2", 1, 1)