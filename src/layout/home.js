import React from 'react';
import { connect } from 'react-redux';
import "../css/home.css"
import Header from '../components/header'


const mapStateToProps = state => ({

});

const Home = ({ }) => (

    <div className="home">
        <Header/> 
    </div>
);

export default connect(mapStateToProps)(Home);
