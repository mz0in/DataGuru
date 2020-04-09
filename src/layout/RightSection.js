import React from 'react';
import { connect } from 'react-redux';

import '../css/sections.css'
import ButtonTodo from '../components/ButtonTodo'

const mapStateToProps = state => ({
  

});
const RightSection = ({dispatch}) => (
  <div className="rightSection">
    <ButtonTodo onClick={() => dispatch({ type: 'TODO' })} />
  </div>
);

export default connect(mapStateToProps)(RightSection);
