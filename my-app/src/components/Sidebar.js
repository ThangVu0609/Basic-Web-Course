import React from 'react';
class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: true,
            name: '. . . .',
            age: '. . . .',
            address: '. . . .',
            gender: '. . . .'
        };
        this.backup = {
            name: '. . . .',
            age: '. . . .',
            address: '. . . .',
            gender: '. . . .'
        }
    }
    
    profileOnEdit = () => {
            this.setState({isEditing:false})
    } 

    profileOnUpdate = () => {
            this.setState({isEditing:true})
            this.backup = {
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                gender: this.state.gender
            }
    }

    profileOnCancel = () => {
            this.setState({
                status:true,
                name: this.backup.name,
                age: this.backup.age,
                address: this.backup.address,
                gender: this.backup.gender
            })
    }
    onChangeValue = (event,fieldName) => {
        this.setState({[fieldName]: event.target.value});
        //console.log(event.target.value);
    }

    render () {
        const eventToogle = this.state.isEditing;
        let stt;
        //let InputTag;
        if (eventToogle) {
            stt = <a href="#" onClick={this.profileOnEdit}>Sửa</a>;
            //InputTag = <input type="text">....</input>;
        }
        else{
           stt = (<>
                    <a href="#" onClick={this.profileOnUpdate}>Cập nhật</a>{"  "}
                    <a href="#" onClick={this.profileOnCancel}>Hủy</a>
                </>);
        }
        return (
            <div className="side">
                <div className="text-center mb-3">
                    <button type="button" class="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Đăng nhập
                    </button>
                </div>
                <p>
                    Thông tin tác giả {"  "}
                    <span>
                        {stt}
                    </span>
                </p>
                <p>- Họ tên: <span>{eventToogle ? this.state.name : (<input type="text" defaultValue={this.state.name} onChange={e => {this.onChangeValue(e,"name")}}></input>)}</span></p>
                <p>- Ngày sinh: <span>{eventToogle ? this.state.age : (<input type="text" defaultValue={this.state.age} onChange={e => {this.onChangeValue(e,"age")}}></input>)}</span></p>
                <p>- Giới tính: <span>{eventToogle ? this.state.gender : (<input type="text" defaultValue={this.state.gender} onChange={e => {this.onChangeValue(e,"gender")}}></input>)}</span></p>
                <p>- Địa chỉ: <span>{eventToogle ? this.state.address : (<input type="text" defaultValue={this.state.address} onChange={e => {this.onChangeValue(e,"address")}}></input>)}</span></p>
                <p><img src="https://webcoban.vn/image/hugo2.jpg" style= {{ filter:"grayscale(50%)"}} /></p>
            </div>
        );
    }
}
export default Sidebar;