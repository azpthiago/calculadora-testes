<?php

// include 'calculadora.php';

function verificarResultado($esperado, $real, $mensagem) {
    if ($esperado === $real) {
        echo "<br>✔️ <strong>OK</strong>: $mensagem<br>";
    } else {
        echo "❌ <strong>Error</strong>: $mensagem";
        echo "Esperado: $esperado<br>";
        echo "Real: $real<br>";
    }
}