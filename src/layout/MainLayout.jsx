import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { CounterPage } from "../pages/CounterPage";
import { CounterFuncionPropsPage } from "../pages/CounterPageFunctionProps";
import { FirstPage } from "../pages/FirstPage";
import { SecongPage } from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import { UserStatePage } from "../pages/UserStatePage";
import { UserInputStatePage } from "../pages/UserInputStatePage";
import { LoginPage } from "../pages/LoginPage";
import { NotesPage } from "../pages/NotesPage";
import { Calculadora } from "../pages/CalculadoraPage";
import { HomePage } from "../pages/HomePage";

export const MainLayout = () => {
  return (
    <div className="main_layout">
      <Sidebar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecongPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/counter-props" element={<CounterFuncionPropsPage />} />
          <Route path="/user" element={<UserStatePage />} />
          <Route path="/user-input" element={<UserInputStatePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/calculator" element={<Calculadora />} />
        </Routes>
      </div>
    </div>
  );
};
