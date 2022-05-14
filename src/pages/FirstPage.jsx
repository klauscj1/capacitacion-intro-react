import { Header } from "../components/Header";
import { Contenido } from "../components/Contenido";
import Footer from "../components/Footer";

export const FirstPage = () => {
  return (
    <main className="main_container">
      <Header />
      <Contenido />
      <Footer />
    </main>
  );
};
