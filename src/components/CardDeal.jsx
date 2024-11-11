//importaciones
import React from 'react';

//estilos css
import styles, { layout } from '../style';

//assets
import { card } from "../assets";

//componentes
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Encuentre una mejor oferta de tarjeta <br className="sm:block hidden" /> en unos sencillos pasos.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Podrás ver todos los métodos de pago disponibles. El escaneo de tarjetas de crédito solo dura 4 minutos. También podrás ver un análisis online de los ingresos y los gastos que hayas hecho.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Facturación" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;