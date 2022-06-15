import { createContext } from "react";
import Context from "./components/Context";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const testandoFixed: fixed = "Isso";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <h3>Idade: {age}</h3>
        {isWorking && <h4>Está trabalhando!</h4>}
        <h5>{userGreeting(name)}</h5>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          comentsQty={10}
          tags={["TS", "JS"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="outro conteúdo"
          comentsQty={20}
          tags={["Styled Components"]}
          category={Category.JS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <p>{testandoFixed}</p>
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
