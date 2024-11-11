//importaciones
import React from 'react';

//estilos css
import styles, { layout } from '../style';

//assets
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Facturación" className="w-[100%] h-[100%] relative z-[5]"/>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Controla facilmente tu <br className="sm:block hidden" /> Facturación y
          cobro
        </h2>
        <p className={`${styles.paragraph} max-m-[470px] mt-5`}>
          Podrás hacer pagos con PayPal y más métodos de pago y también podrás ver las últimas transacciones que hayas hecho.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="Apple Store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="Google Play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};

export default Billing;
