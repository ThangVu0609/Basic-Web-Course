import React from 'react';
class Content extends React.Component {
    render () {
        return (
            <div class="main">
                <section>
                    <p className="heading">Kinh nghiệm làm việc</p>
                    <div className="content">
                        <table className="table-kinh-nghiem" border="1">
                            <thead>
                                <th>STT</th>
                                <th>Thời gian</th>
                                <th>Tên Cty</th>
                                <th>Vị trí</th>
                                <th>Công việc</th>
                            </thead>
                            <tbody id="tableWorkingExp">
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="btn-create-container">
                        <a href="javascript:;" onclick="workingExpOnCreate()">Thêm mới</a>
                    </div>
                </section>

                <section>
                    <p className="heading">Sở thích</p>
                    <div className="content so-thich">
                        <div>Đọc sách</div>
                        <div>Du lịch</div>
                    </div>
                </section>

                <p>Ngày đăng: 26/12/2021</p>
        Name</div>
        );
    }
}
export default Content;