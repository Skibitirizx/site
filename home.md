<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Unblocked Games Paradise</title>
    <style>
        /* General Body and Background */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #8a2be2; /* Purple text color */
            overflow: hidden;
        }

        /* Tab Bar (Games, Apps, Settings) */
        .tab-bar {
            display: flex;
            justify-content: center;
            background-color: #333;
            padding: 15px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 10;
        }

        .tab-bar a {
            text-decoration: none;
            color: #fff;
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 18px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .tab-bar a:hover {
            background-color: #8a2be2;
        }

        /* Starry Animated Background */
        .star-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://www.transparenttextures.com/patterns/starry-night.png');
            background-size: cover;
            z-index: -1;
            animation: stars 1s infinite linear;
        }

        /* Header Section */
        header {
            text-align: center;
            padding: 100px 0;
        }

        header h1 {
            margin: 0;
            font-size: 50px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        header p {
            font-size: 20px;
        }

        /* Content Section */
        .content {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            z-index: 1;
        }

        h2 {
            color: #8a2be2;
        }

        .game-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .game-card {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .game-card h3 {
            margin-top: 10px;
            font-size: 22px;
        }

        .game-card button {
            background-color: #8a2be2;
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }

        .game-card button:hover {
            background-color: #6a1b9a;
        }

        /* Footer Section */
        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 15px 0;
            margin-top: 30px;
        }

        /* Animation for Starry Background */
        @keyframes stars {
            0% {
                background-position: 0 0;
            }

            100% {
                background-position: 100% 100%;
            }
        }

        /* Responsive Styles for Mobile */
        @media (max-width: 768px) {
            header h1 {
                font-size: 40px;
            }

            header p {
                font-size: 18px;
            }

            .game-card h3 {
                font-size: 18px;
            }
        }
    </style>
</head>

<body>

    <!-- Tab Bar with Navigation Links (Games, Settings, Apps) -->
    <div class="tab-bar">
        <a href="#games">Games</a>
        <a href="#apps">Apps</a>
        <a href="#settings">Settings</a>
    </div>

    <!-- Starry Animated Background -->
    <div class="star-background"></div>

    <!-- Header Section -->
    <header>
        <h1>Welcome to Unblocked Games Paradise!</h1>
        <p>Your ultimate destination for free, fun, and unblocked games!</p>
    </header>

    <!-- Main Content Section -->
    <div class="content">
        <h2>Why Play Here?</h2>
        <ul>
            <li>Completely Unblocked: Access games without restrictions!</li>
            <li>Free to Play: No subscriptions or hidden fees.</li>
            <li>Instant Access: Play directly in your browser, no downloads needed.</li>
            <li>Wide Variety: From action games to relaxing puzzles, we have it all!</li>
        </ul>

        <h2>Featured Games</h2>
        <div class="game-list" id="gameList">
            <!-- Game Cards with Play Now Button -->
            <div class="game-card">
                <h3>Slope</h3>
                <button onclick="window.open('https://example.com/slope', '_blank')">Play Now</button>
            </div>

            <div class="game-card">
                <h3>Monkey Mart</h3>
                <button onclick="window.open('https://example.com/monkey-mart', '_blank')">Play Now</button>
            </div>

            <div class="game-card">
                <h3>Drift Boss</h3>
                <button onclick="window.open('https://example.com/drift-boss', '_blank')">Play Now</button>
            </div>

            <div class="game-card">
                <h3>Swerve</h3>
                <button onclick="window.open('https://example.com/swerve', '_blank')">Play Now</button>
            </div>

            <div class="game-card">
                <h3>Soundboard</h3>
                <button onclick="window.open('https://example.com/soundboard', '_blank')">Play Now</button>
            </div>
        </div>
    </div>

    <!-- Footer Section -->
    <div class="footer">
        <p>Follow us on social media for updates, new games, and more!</p>
        <p>&copy; 2024 Unblocked Games Paradise</p>
    </div>

    <!-- JavaScript Section -->
    <script>
        // Example of dynamically adding more games (can be expanded with more functionality)
        const games = [
            { name: "Slope", link: "https://example.com/slope" },
            { name: "Monkey Mart", link: "https://example.com/monkey-mart" },
            { name: "Drift Boss", link: "https://example.com/drift-boss" },
            { name: "Swerve", link: "https://example.com/swerve" },
            { name: "Soundboard", link: "https://example.com/soundboard" }
        ];

        // Function to dynamically display games (if needed for future updates)
        function displayGames() {
            const gameList = document.getElementById('gameList');
            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');
                const gameTitle = document.createElement('h3');
                gameTitle.textContent = game.name;
                const playButton = document.createElement('button');
                playButton.textContent = "Play Now";
                playButton.onclick = () => window.open(game.link, '_blank');
                gameCard.appendChild(gameTitle);
                gameCard.appendChild(playButton);
                gameList.appendChild(gameCard);
            });
        }

        // Uncomment this line to enable dynamic game display
        // displayGames();
    </script>

</body>

</html>

