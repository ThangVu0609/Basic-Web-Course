import React from 'react';
class Menu extends React.Component {
    render () {
        return (
            <div className ="menu">
                <a href="./index.html" className ="active">Home</a>
                <a href="./blog.html">Blog</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>      
            </div>
        );
    }
}
export default Menu;