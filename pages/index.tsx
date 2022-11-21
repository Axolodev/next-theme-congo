import { Profile } from "../components";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Profile>
        <div className="mb-9 text-xl lead">
          El sitio cool de la matemaga… kinda.
        </div>
        <p>
          ¡Hola! En redes navego bajo el nombre de “Elaia, la Matemaga”. En este
          momento estoy concluyendo la Licenciatura en Matemáticas, pero también
          me apasionan muchísimo áreas como Informática, Física, Biología y
          Medicina.
        </p>
        <p>
          Llevo casi 4 años haciendo investigación en mi universidad como
          asistente en el Laboratorio de Modelación y Simulación de Sistemas
          Complejos (¡mates pero para la biología!), particularmente analizando
          problemas de Bioinformática en un equipo muy diverso. Además, tengo
          experiencia como practicante en Ciencia de Datos en Hey Banco, la
          banca digital de Banregio.
        </p>
        <p>
          También tengo un canal de{" "}
          <a href="http://www.youtube.com/lamatemaga">YouTube</a> donde de vez
          en vez comparto contenido de matemáticas, y un canal de{" "}
          <a href="http://www.twitch.tv/lamatemaga">Twitch</a> donde te enseño a
          programar en R, un lenguaje de programación que, al igual que Python,
          se utiliza muchísimo en el área de Ciencia de Datos. Este último se
          utiliza particularmente en áreas relacionadas a la biología debido a
          su fácil integración con software como SAS y SPSS que también se
          utilizan en éstas áreas.
        </p>
      </Profile>
    </>
  );
};

export default Home;
