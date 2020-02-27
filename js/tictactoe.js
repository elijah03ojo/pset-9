<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display" rel="stylesheet" />
    <link href="css/styles.css" rel="stylesheet" type="text/css" />
    <script defer src="js/app.js"></script>

    <title>APCSP Tic-Tac-Toe</title>
  </head>
  <body>
    <h1>tic | tac | toe</h1>
    <table id = "table">
      <tr>
        <th class = "wins">X Wins</th>
        <th class = "wins">O Wins</th>
      </tr>
      <tr>
        <td id="x_wins">0</td>
        <td id="o_wins">0</td>
      </tr>
    </table>
    <div class="container column">
      <h2>Turn: X</h2>
      <div class="container wrap" id="board">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    <div id="switch">Switch Who Goes First</div>
    <div id="reset-button">Play Again!</div>
    </div>
  </body>
</html>
