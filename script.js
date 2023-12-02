let container = document.createElement("div");
document.body.append(container);
container.setAttribute("class", "container-xl align-content-center");

container.innerHTML = `<div class="calc">
      <div class="child display1">
         <textarea name="" id="display" cols="150" rows="5.5" readonly></textarea>
      </div>
      <button type="button" id="clear" class="child ac" onclick="clearDisplay() ">AC</button><button class="child bg">+/-</button>
      <button class="child bg" onclick="appendSymbol('%')">%</button><button class="child bg" onclick="appendSymbol('/')">/</button
      ><button class="child">7</button><button class="child">8</button
      ><button class="child">9</button><button class="child bg" onclick="appendSymbol('*')">*</button
      ><button class="child">6</button><button class="child">5</button
      ><button class="child">4</button><button class="child bg" id="subtract" onclick="appendSymbol('-')">-</button
      ><button class="child" id="one">1</button><button class="child">2</button
      ><button class="child">3</button><button class="child bg" id="add" onclick="appendSymbol('+')">+</button
      ><button class="child zero">0</button><button class="child bg" onclick="appendSymbol('.')">.</button
      ><button class="child bg" id="equal" onclick="calculate();">=</button>
    </div>`;

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key !== "number") {
    alert("Only numbers are allowed");
  }
});
let appendNumber = (number) => {
  const display = document.getElementById("display");
  display.value += number;
};

let appendSymbol = (symbol) => {
  const display = document.getElementById("display");
  display.value += " " + symbol + " ";
};

let calculate = () => {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

let clearDisplay = () => {
  const display = document.getElementById("display");
  display.value = "";
};
