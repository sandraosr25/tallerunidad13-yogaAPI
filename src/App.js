import './App.css';
import React from 'react';
import {useState} from 'react';
import Head from './components/Header';
import Listado from './components/Listado';
import Details from './components/Details';
import Login from './components/Login';

const DatosPosturas = [
  {
    id: 1,
    name: 'Perro boca abajo',
    sanscrito: 'Adho Mukha Svanasana',
    ingles: 'Downward Facing Dog',
    description: 'Asana clave en las prácticas de yoga, que con el tiempo aprenderás a disfrutarla y utilizarla como transición a otras e incluso como postura para encontrar la calma necesaria. Desde la postura del “gato” se eleva la cadera, llevándola todo lo que puedas hacia arriba y hacia atrás. Se puede entender la postura como una “V” invertida. El cuello se debe relajar y los hombros deben quedar alejados de las orejas. En esta postura se debe buscar la comodidad dentro de la dificultad que pueda plantearnos. Al comenzar a practicar esta asana lo importante es que nuestra espalda se alargue, aunque en un inicio no podamos estirar las piernas ni llegar con los talones a tocar el suelo.',
    benefits: 'Fortalece la espalda',
    musculos: 'La columna debe estar neutra, los gemelos, isquiotibiales y glúteos se encuentran en extensión mientras que dorsales, deltoides y los músculos de la mano y muñeca están en contracción concéntrica.',
    image: require('./images/downwardfacingdog.jpg'),
  },

  {
    id: 2,
    name: 'Tabla',
    sanscrito: 'Phalakasana',
    ingles: 'Plank',
    description: 'Una postura que parte de la fuerza del abdomen y a la que se llega desde la postura del perro boca abajo bajando la cadera. Se mantiene activo el abdome, la espalda recta y los brazos estirados. Las muñecas deben quedar debajo de los hombros y todo el cuerpo debe estar firme. Es importante evitar la flexión de la cadera ya que contraeremos la zona lumbar, para evitarlo nuestro abdomen debe estar firme y hacia arriba.',
    benefits: 'Fortalece músculos abdominales, brazos, muñecas y hombros. Estira y fortalece la espalda.',
    musculos: 'Musculatura abdominal (recto y oblicuos), tríceps, bíceps, pectorales, cuádriceps e isquiotibiales.',
    image: require('./images/tablepose.jpg'),
  },

  {
    id: 3,
    name: 'Triángulo',
    sanscrito: 'Trikonasana',
    ingles: 'Triangle Pose',
    description: 'Desde la postura de pie se lleva el pie izquierdo hacia atrás apoyando el talón, girando el cuerpo hacia el lado largo de la esterilla. Se colocan los brazos en cruz, manteniendo las piernas rectas y sin modificar la postura de los brazos, en una exhalación se baja el cuerpo hacia el lado derecho. En la postura se debe mantener la espalda recta, el pecho abierto y la cadera alineada. El brazo de arriba debe servir para tirar y sujetar el cuerpo evitando que se deje el peso sobre la mano de abajo.  Esta postura se deberá repetir con la otra pierna para lograr un correcto equilibrio en el cuerpo.',
    benefits: 'Estirar y fortalece diversos grupos musculares, tanto de la extremidades inferiores como del tronco.',
    musculos: 'Glúteo, tensor de la fascia lata, oblicuo interno del lado e isquiotibiales de ambas piernas.',
    image: require('./images/trikonasana.jpg'),
  },

  {
    id: 4,
    name: 'Del Árbol',
    sanscrito: 'Vrikshasana',
    ingles: 'Tree Pose',
    description: 'Una postura con la que se mejora la conciencia del equilibrio. Para llegar a la postura se parte de la postura de la montaña, el peso se deja sobre una de las plantas del pie y se levanta ligeramente el otro. Abriendo la pelvis, se coloca el pie en el aire sobre la cara interna de la otra pierna a la altura del abductor. Una vez estables, se elevan los brazos uniendo las palmas y manteniendo los hombros relajados. Para deshacer la postura se sigue el orden inverso intentando no perder el equilibrio mientras se hace.',
    benefits: 'Mejora el equilibrio y la estabilidad. Fortalece la musculatura del pie y tobillo.',
    musculos: 'Tibial anterior, gemelos y sóleos, músculos del pie, tensor de la fascia lata, abductor.',
    image: require('./images/treepose.jpg'),
  },

  {
    id: 5,
    name: 'Guerrero 2',
    sanscrito: 'Virabhadrasana 2',
    ingles: 'Warrior 2',
    description: 'Desde el perro hacia abajo se coloca un pie entre tus manos, se gira el talón del otro pie hacia adentro, se levanta torso y brazos hacia arriba. Ambas caderas se dirigen hacia adelante. Parecida al guerrero uno, pero con los brazos estirados en direcciones opuestas, paralelos al suelo y en línea con los hombros. El pie de atrás debería formar un ángulo de 90 grados y el muslo delantero debería estar paralelo al suelo, con la rodilla directamente sobre el tobillo. Los ojos deben mirar por encima del dedo corazón.',
    benefits: 'Fortalece y estira pecho, hombros, región pélvica y órganos abdominales.',
    musculos: 'Abdominales, bíceps, tríceps, deltoides, cuádriceps, glúteos, psoas, gemelos y sóleo.',
    image: require('./images/warriortwo.jpeg'),
  },

  {
    id: 6,
    name: 'Postura del Niño',
    sanscrito: 'Balasana',
    ingles: 'Child pose',
    description: 'Postura para recuperar la calma y sentir la respiración, abriendo y alargando la espalda. Se realiza plegándose y sentándose sobre los talones. Las costillas deberán quedar sobre los muslos y los brazos relajados al lado del cuerpo. La cabeza puede quedar con la frente en el suelo o sobre las manos.',
    benefits: 'Relaja la musculatura de la espalda y libera presión sobre el nervio ciático.',
    musculos: 'Extensión de los músculos de la columna, de los tibiales y extensores de los dedos, isquiotibiales y glúteos.',
    image: require('./images/childpose.jpg'),
  },

];

function App() {
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const [login, setLogin] = useState(false);

  const handleItemOnClick = (itemId) => {
    const itemSeleccionado = DatosPosturas.find((item) => item.id === itemId);
    setItemSeleccionado(itemSeleccionado);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
    setItemSeleccionado(null);
  };

  return (
    <div className="App">
      <div>
        <Head />
      </div>
      {!login ? (
        <Login onLogin={handleLogin} />
      ):(
          <>
            {!itemSeleccionado ? (
              <h3 className='select-posture-message'>Selecciona una postura para ver los detalles</h3>
            ) : (
              <Details itemSeleccionado={itemSeleccionado} />
            )}
            
            <Listado DatosPosturas={DatosPosturas} onItemClick={handleItemOnClick} />
            <button className="button-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
      )}
    </div>
  );
}

export default App;
