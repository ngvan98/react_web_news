import React from 'react';
import PropTypes from 'prop-types';
// import LeftContent from './components/Home/LeftContent';
// import RightContent from './components/Home/RightContent';
// import CenterContent from './components/Home/CenterContent';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            <div class="row">
                
                <div class="col-sm-3">
                    <div>
                        <h1>Đây là bên trái</h1>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div >
                        <h1>Đây là trung tâm</h1>
                    </div>
                </div>
                
                <div class="col-sm-3">
                    <div>
                        <h1>Đây là bên phải</h1>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Home;