import "./Project.scss";

import BtnCustom from "../BtnCustom/BtnCustom";
import React from "react";

function Project({ id, img, descripcion, link }) {
  function classArticle() {
    if (descripcion) {
      return "con-descripcion";
    } else {
      return "sin-descripcion";
    }
  }

  return (
    <article className={`project__article ${classArticle()}`}>
      <img src={img} alt={id} />
      <section className="d-flex flex-column justify-content-between">
        <p className="descripicion__article">{descripcion}</p>
        <div className={`d-flex btn__container-${classArticle()}`}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BtnCustom
              text={"Ver trabajo"}
              fontSize={window.innerWidth > 530 ? "22px" : "18px"}
            />
          </a>
        </div>
      </section>
    </article>
  );
}

export default Project;
