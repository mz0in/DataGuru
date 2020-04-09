import React from 'react'
import ButtonTodo from '../../components/ButtonTodo'
import { connect } from 'react-redux';
const Corona = () => (
    <ButtonTodo onClick={() => dispatch({ type: 'TODO' })} />
)

export default connect()