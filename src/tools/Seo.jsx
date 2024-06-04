import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}- Guia do Star Wars</title>
        <meta
          name="description"
          content={
            "Site criado para fim de estudo utilizando informações obtida pela  API do Star Wars "
          }
        />
        <meta
          name="keywords"
          content="guia star wars,star wars,react, projeto react, front-end"
        />
        <meta property="og:title" content={"Guia Star Wars"} />
        <meta
          property="og:description"
          content={
            "Site criado para fim de estudo utilizando informações obtida pela  API do Star Wars "
          }
        />
        <meta property="og:image" content="./../../seoImagem.jpg" />
      </Helmet>
    </>
  );
};

export default Seo;
