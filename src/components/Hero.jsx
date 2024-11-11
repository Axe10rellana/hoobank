//importaciones
import React from 'react';

//estilos css
import styles from "../style";

//assets
import { discount, robot } from "../assets";

//componentes
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img 
            src={discount} 
            alt="Descuento" 
            className="w-[32px] h-[32px]" 
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> De Descuento Por {" "}
            <span className="text-white">1 Mes</span> De Cuenta
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          El Método De Pago <br className="sm:block hidden" />{" "}
          De La Siguiente {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <span className="text-gradient">Generación.</span>{" "}
        </h1>

        <p className={`${styles.paragraph} max-m-[470px] mt-5`}>
          Nuestro equipo de expertos utiliza una metodología para identificar las tarjetas de crédito que mejor se adaptan a sus necesidades. Examinamos tasas de porcentaje anual, tarifas anuales.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
          src={robot} 
          alt="Facturación"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
