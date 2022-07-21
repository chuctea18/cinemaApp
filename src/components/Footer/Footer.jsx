import React from 'react'
import "../Footer/style.css"
function Footer() {
    const onClickRemove= () =>{
        window.localStorage.clear();
        window.location.href = "/sign-in";
    }
  return (
    <footer>
        <div class="footer">
            <div class="row-footer">
                <div class="col-md-4">
                    {/* <p>CÔNG TY TNHH LOTTO CINEMA</p> */}
                    <p class="rights"><span>©  </span><span class="copyright-year">2022</span><span> </span><span>CÔNG TY TNHH</span><span> LOTTO CINEMA.</span></p>
                    <p class="rights"><span>All Rights Reserved.</span></p>
                </div>
                <div class="col-md-4">
                    <dl class="contact-list">
                        <dt><b>Thông tin nhóm 6:</b></dt>
                        <dd> Nguyễn Hồng Vi - 19522511</dd>
                        <dd>Nguyễn Phương Lan - 19521745</dd>
                        <dd>Trần Thanh Trúc - 19522418 </dd>
                    </dl>
                </div>
                <div class="col-md-4">
                    <dt><b>Địa chỉ:</b></dt>
                    <dd>Ký túc xá khu A, Linh Trung, Thủ Đức</dd>
                    <a type="button" className="logout" onClick={onClickRemove}>đăng xuất</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
