import org.junit.jupiter.api.*;

public class CalculatorTest {
    CalculatorTDD addCalc = new CalculatorTDD();

    @Test
    @DisplayName("Test de addNumber")
    public void addTest() {

        Assertions.assertEquals(10,addCalc.addNumbers(5, 5),"El resultado debe ser 10 ");
    }

    @Test
    @DisplayName("Test de subtrac")
    public void subtracTest() {

        Assertions.assertEquals(10,addCalc.subtracNumber(20,10),"El resultado debe ser 10");
    }

    @Test
    @DisplayName("Test de multiply")
    public void multiplyTest() {

        Assertions.assertEquals(25,addCalc.multiplyNumbers(5, 5), "El resultado debe ser 25");
    }

    @Test
    @DisplayName("Test de divide")
    public void divideTest() {

        Assertions.assertEquals(5,addCalc.divideNumbers(25, 5), "El resultado debe ser 5");
    }

}