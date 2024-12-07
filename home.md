<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Unblocked Games Paradise</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
        }

        header h1 {
            margin: 0;
        }

        .content {
            padding: 20px;
        }

        .game-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .game-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 15px;
            text-align: center;
        }

        .game-card h3 {
            margin-top: 10px;
        }

        .game-card button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }

        .game-card button:hover {
            background-color: #218838;
        }

        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            margin-top: 30px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Welcome to Unblocked Games Paradise!</h1>
        <p>Your ultimate destination for free, fun, and unblocked games!</p>
    </header>

    <div class="content">
        <h2>Why Play Here?</h2>
        <ul>
            <li>Completely Unblocked: Play games anywhere, anytime.</li>
            <li>Free to Play: No subscriptions or hidden fees.</li>
            <li>Instant Access: Play directly in your browser, no downloads needed.</li>
            <li>Wide Variety: From action games to puzzles, we've got something for everyone!</li>
        </ul>

        <h2>Featured Games</h2>
        <div class="game-list" id="gameList">
            <!-- Game cards will be populated here dynamically using JavaScript -->
        </div>
    </div>

    <div class="footer">
        <p>Follow us on social media for updates and more!</p>
        <p>&copy; 2024 Unblocked Games Paradise</p>
    </div>

    <script>
        // Define the featured games with name and URL for the play button
        const games = [
            { name: "Retro Racing", link: "https://example.com/retro-racing" },
            { name: "Zombie Survival", link: "https://example.com/zombie-survival" },
            { name: "Tetris Master", link: "https://example.com/tetris-master" },
            { name: "Stickman Combat", link: "https://example.com/stickman-combat" },
            { name: "Block Puzzle", link: "https://example.com/block-puzzle" }
        ];

        // Function to create a game card
        function createGameCard(game) {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            const gameTitle = document.createElement('h3');
            gameTitle.textContent = game.name;

            const playButton = document.createElement('button');
            playButton.textContent = "Play Now";
            playButton.onclick = () => window.open(game.link, '_blank');

            gameCard.appendChild(gameTitle);
            gameCard.appendChild(playButton);

            return gameCard;
        }

        // Function to display the games on the page
        function displayGames() {
            const gameList = document.getElementById('gameList');
            games.forEach(game => {
                const gameCard = createGameCard(game);
                gameList.appendChild(gameCard);
            });
        }

        // Initialize the page with featured games
        displayGames();
    </script>

</body>

</html>
