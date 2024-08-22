<?php

class Calculadora{
    public function soma($num1, $num2) {
        return $num1 + $num2;
    }

    public function subtrai($num1, $num2) {
        return $num1 - $num2;
    }

    public function multiplica($num1, $num2) {
        return $num1 * $num2;
    }

    public function divide($num1, $num2) {
        if ($num2 === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return $num1 / $num2;
    }

    public function potencia($base, $expoente) {
        return pow($base, $expoente);
    }

    public function raizQuadrada($numero) {
        if ($numero < 0) {
            return "Error: Raiz quadrada de número negativo não é permitida.";
        }
        return sqrt($numero);
    }
    
    
}