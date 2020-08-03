import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars3.githubusercontent.com/u/11545976?s=460&u=ea0982bb2014a19d43b231dae1f86b6f9d4a331d&v=4" 
          alt="Marcelo Augusto"
        />
        <div>
          <strong>Marcelo Augusto</strong>
          <span>Algoritmos</span>
        </div>
      </header>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        <br /><br />
        Incidunt non officiis sunt commodi explicabo. Laboriosam ad, maxime ut earum tenetur perferendis adipisci placeat nobis tempora deleniti. Porro quas facere sed, repellat quod accusamus quae autem. Autem nihil quos aliquam. Itaque officia earum assumenda harum, dolore iure aliquam fuga exercitationem sequi!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
