import "bootstrap/dist/css/bootstrap.min.css";
import "../Help/style.css";

import React from 'react'

function Answer1() {
    return (
        <div className="container" style={{margin:'auto',display: 'flow-root'}}>
            <div className="row" style={{left: '0'}}>
                <div className="answer-wrap"  style={{width: 'auto'}}>
                    <div className="answer">
                        <span className="text">Trả lời</span>
                        <div className="answer-detail">
                            <p>HƯỚNG DẪN MUA VÉ ONLINE</p>
                            <p><b><u>Điều kiện</u></b></p>
                            <p>- Bạn phải là thành viên Lotocinema</p>
                            <p>- Nếu không là thành viên vui lòng đăng ký  trên website để
                                được mua vé.         </p>
                            <p><b><u>Bước 1</u></b></p>
                            <p>Đăng nhập</p>
                            <p><b><u>Bước 2:</u></b></p>
                            <p>- Chọn loại vé và số lượng:</p>
                            <p><b><u>Bước 3:</u></b></p>
                            <p>Chọn ghế:</p>
                            <p>Chọn thức ăn:</p>
                            <p><b><u>Bước 4:</u></b></p>
                            <p>- Đồng ý</p>
                            <p>- Đồng ý các điều khoản</p>
                            <p>- Chọn loại thẻ thanh toán.</p>
                            <p>- Thanh toán.</p>
                            <p><b><u>Bước 5:</u></b> Nhập thông tin tài khoản để thanh toán việc mua
                                online.</p>
                            <p><b>HOÀN TẤT</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Answer1;