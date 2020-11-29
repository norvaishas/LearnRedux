import React from 'react';
import { connect } from 'react-redux';
// connect - это HOC который передает значения из store в компонент

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
      <>
          <h2>{counter}</h2>
          <button
            onClick={dec}
            className="btn btn-primary btn-lg">DEC</button>
          <button
            onClick={inc}
            className="btn btn-primary btn-lg">INC</button>
          <button
            onClick={rnd}
            className="btn btn-primary btn-lg">RND</button>
      </>
    )
}

// mapStateToProps получает стейт из провайдера и передает его в Counter (но это не точно)
const mapStateToProps = (state) => {
    // state - текущий стейт из store
    return {
        counter: state // 15
    }
};

export default connect(mapStateToProps)(Counter);
