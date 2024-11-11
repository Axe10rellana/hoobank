//importaciones
import React from 'react';

//estilos css
import styles from '../style';

//constantes
import { feedback } from "../constants";

//componentes
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Que es lo que <br className="sm:block hidden"/> la gente esta diciendo <br className="sm:block hidden"/> sobre nosotros</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;