<?php
include 'calculadora.php';
include 'verificarResultado.php';

$calculadora = new Calculadora();

verificarResultado(4, $calculadora->soma(2,2), "01 | Testando a Soma </br>");
verificarResultado(0, $calculadora->subtrai(2,2), "02 | Testando a Subtração </br>");
verificarResultado(9, $calculadora->multiplica(3,3), "03 | Testando a Multiplicação </br>");
verificarResultado(2, $calculadora->divide(4,2), "04 | Testando a Divisão </br>");
verificarResultado("Error: Divisão por zero não é permitida", $calculadora->divide(4,0), "05 | Testando divisão por zero </br>");
verificarResultado(8, $calculadora->potencia(2,3), "06 | Testando a Potenciação </br>");
verificarResultado(4.0, $calculadora->raizQuadrada(16), "07 | Testando a Raiz Quadrada </br>");
verificarResultado("Erro: Raiz quadrada negativa de número negativo nao permitida.", $calculadora->raizQuadrada(-4), "08 | Testando a Raiz Quadrada </br>");