import java.util.Scanner;

public class FibonacciCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe um número para verificar se ele pertence à sequência de Fibonacci: ");
        int numero = scanner.nextInt();
        int a = 0, b = 1;
        boolean pertence = false;

        while (a <= numero) {
            if (a == numero) {
                pertence = true;
                break;
            }
            int proximo = a + b;
            a = b;
            b = proximo;
        }
        
        if (pertence) {
            System.out.println("O número " + numero + " pertence à sequência de Fibonacci.");
        } else {
            System.out.println("O número " + numero + " NÃO pertence à sequência de Fibonacci.");
        }

        scanner.close();
    }
}
