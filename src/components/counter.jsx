import React from 'react';
import { connect } from 'react-redux';
import {inc, dec, rnd} from '../actions'
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

const mapDispatchToProps = (dispatch) => {
    return {
        // Здесь используются actions из импорта (а не из пропсов)
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            const rndValue = Math.floor(Math.random() * 10);
            dispatch(rnd(rndValue));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
