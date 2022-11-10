import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Column } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firtNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber(prev => "0");
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => {
      var old;
      if (prev.length == 1 && prev == "0") {
        old = "";
      }
      else {
        old = prev;
      }
      return `${old}${number}`;
    });
  }

  const handleOperation = (getOperation) => {
    if (getOperation == "") {
      if (firtNumber != 0) {
        switch (operation) {
          case '+':
            setCurrentNumber(Number(firtNumber) + Number(currentNumber))
            setFirstNumber(0)
            break;
          case '-':
            setCurrentNumber(Number(firtNumber) - Number(currentNumber))
            setFirstNumber(0)
            break;
          case 'x':
            setCurrentNumber(Number(firtNumber) * Number(currentNumber))
            setFirstNumber(0)
            break;
          case '/':
            setCurrentNumber(Number(firtNumber) / Number(currentNumber))
            setFirstNumber(0)
            break;
        }
      }
    } else {
      setFirstNumber(currentNumber)
      handleOnClear()
    }
    switch (getOperation) {
      case '+':
        setOperation("+")
        break;
      case '-':
        setOperation("-")
        break;
      case 'x':
        setOperation("x")
        break;
      case '/':
        setOperation("/")
        break;

      default:
        setOperation("")
    }
  }

  return (
    <Container >
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"x"} onClick={() => handleOperation("x")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"-"} onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"+"} onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={"/"} onClick={() => handleOperation("/")}/>
          <Button label={"c"} onClick={() => handleOnClear()} />
          <Button label={"="} onClick={() => handleOperation("")} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
