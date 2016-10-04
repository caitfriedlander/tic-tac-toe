//JS Models
//put your data logic up here outside of your functions
var turn = 'X';
var board = ['','','','','','','','',''];
var win = false;
var tie = false;

//Draw
function draw() {
  var squares = document.querySelectorAll('.square')
  for (var i=0; i < squares.length; i++) {
    squares[i].textContent = board[i];
  }

  document.querySelector('#turn').textContent = turn;

  if (win) {
    document.querySelector('#result').textContent = win + ' Wins!'
  }
  else if (tie){
    document.querySelector('#result').textContent = "It's a tie!"
    }
  }
draw()

//return 'X' if X wins, 'O' if O wins, tie if tie, false if none
function winCheck () {
  //list of all possible win conditions
  var winCombos = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ]

  //loops through all the win combos to check what's in them
  for (var i=0; i < winCombos.length; i++) {
    //a valid winCombo will be the result of the following equation
    var winCombo = winCombos[i];
    //first square
    var boardA = board[winCombo[0]];
    //second square
    var boardB = board[winCombo[1]];
    //third square
    var boardC = board[winCombo[2]];
    //console logs to check what's going on on the board
    console.log(winCombo);
    console.log(boardA, boardB, boardC);

    //if first square is not empty & is equal to second square & third
    if (boardA !== '' && boardA === boardB && boardB === boardC){
      // set var win to the value of the winner
      win = boardA
      }
    }
    //tie check
    if (!win){
      tie =true;
      for (var i = 0; i < board.length; i++){
        if (board[i] === ''){
          tie = false;
          break;
        }
      }
    }
  }
  winCheck()


//capture user inputs
var squares = document.querySelectorAll(".square")
for (var i=0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    //figure out index of square that was clicked
    var index = 0;
    //lopp through the squares again
    for (var j=0; j < squares.length; j++) {
      //if the current square being looped through
      //is the same as the square that was clicked
      if (squares[j] === e.target) {
        //set the index to j
        index = j;
        }
    }
    // if the box DOES NOT contain an empty string
    //return false and prevent doubleclicking and turn changing
    if (board[index] !== '') {
        return false;
      }

      //use index to update board and change turn
      //Model Updates
      board[index] = turn;

      //check for win
      winCheck()

      if (turn === 'X') {
        turn = 'O'
      }
      else {
        turn = 'X'
      }

      //View Update
      draw()
  })
}
