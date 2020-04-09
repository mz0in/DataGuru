import React from 'react';
import { connect } from 'react-redux';
import '../css/sections.css'
import ButtonTodo from '../components/ButtonTodo'
import { Switch} from "react-router-dom";
import RouteTemplate from '../components/RouteTemplate'
import Corona from './pages/Corona'
const mapStateToProps = state => ({


});
const RightSection = ({ dispatch }) => (
  <Switch>
    <RouteTemplate path="/second">
      Hahahahaha
    </RouteTemplate>
    <RouteTemplate path="/third">
      Hello
    </RouteTemplate>
    <RouteTemplate path="/">
      <Corona/>    
    </RouteTemplate>
    
  </Switch>


);

export default connect(mapStateToProps)(RightSection);
