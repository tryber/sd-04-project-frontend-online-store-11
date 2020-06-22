import { Component } from 'react';
import React from 'react';
import ReactStars from 'react-stars'

class RateProduct extends Component {
  render() {
    return (
      <section>
        <h3>Avaliações</h3>
        <form>
          <input className="rate-email" name="email" type="email" placeholder="Email" />
          <ReactStars className="react-stars" count={5} size={28} color={'#ffd700'} />
          <textarea className="rate-area" type="text" placeholder="Mensagem(opcional)" />
          <button>Avaliar</button>
        </form>
      </section>
    );
  }
}

export default RateProduct;
