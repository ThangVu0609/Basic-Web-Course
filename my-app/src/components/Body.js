import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
class Body extends React.Component {
    render () {
        return (
            <div className="body">
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
        );
    }
}
export default Body;