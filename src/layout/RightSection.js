import React from 'react';
import { connect } from 'react-redux';
import '../css/sections.css'
import ButtonTodo from '../components/ButtonTodo'
import {
  Switch,
  Route,
} from "react-router-dom";

const mapStateToProps = state => ({


});
const RightSection = ({ dispatch }) => (
    <Switch>
      <Route path="/second">
        <div className="rightSection">
          Hahahahaha
        </div>
      </Route>
      <Route path="/third">
        <div className="rightSection">
          Hello
        </div>
      </Route>
      <Route path="/">
        <div className="rightSection">
          <ButtonTodo onClick={() => dispatch({ type: 'TODO' })} />
        </div>
      </Route>
    </Switch>


);

export default connect(mapStateToProps)(RightSection);
