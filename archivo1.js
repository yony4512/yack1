<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Aplicación profesional de demostración con JavaScript moderno">
    <title>Demo Profesional | Yack</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1>Yack</h1>
        <p class="tagline">Desarrollo profesional con Git</p>
    </header>

    <main class="container">
        <section id="app">
            <div class="card">
                <h2>Calculadora</h2>
                <div class="input-group">
                    <input type="number" id="num1" placeholder="Número 1">
                    <input type="number" id="num2" placeholder="Número 2">
                </div>
                <div class="buttons">
                    <button id="btn-sum">Sumar</button>
                    <button id="btn-reset">Reset</button>
                </div>
                <div id="result" class="result"></div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>&copy; <span id="year"></span> Yack. Todos los derechos reservados.</p>
    </footer>

    <script type="module" src="archivo1.js"></script>
</body>
</html>
