/*Define-se como elemento minimax de uma matriz o menor elemento da linha onde se encontra o maior elemento da matriz. 
Escreva um algoritmo que leia uma matriz 3 X 3 de números e encontre seu
elemento minimax, mostrando também sua posição.*/

let M = [[1, 2, 3,],
         [7, 8, 9],
         [4, 51, 6]];

let maior = 0; minimax = 0; linha = 0; pos = 0;

for (let i = 0; i < M.length; i++){
    for (let j = 0; j < M.length; j++){
        
        if (M[i][j] > maior){
            maior = M[i][j];
            minimax = M[i][j];
            linha = [i];
        }  
    for (let L = 0; L < M[linha].length; L++){
           if (M[linha][L] < minimax){
            minimax = M[linha][L];
            pos = L;
        }
    }
}}
console.table(M);
console.log(maior);
console.log(minimax);
console.log(pos);