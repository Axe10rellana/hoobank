//importaciones
import React from 'react';

//estilos css
import styles from '../style';

//componentes
import Button from './Button';

const CTA = () => {
  return (
    <section id="" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          ¡Proba nuestro servicio!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;