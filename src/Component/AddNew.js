import React from 'react';
import Direction from '../Router/Direction';

function AddNew() {
  return (
    <div className="App container">
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Trang chủ</a><i class="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item"><a href="#">Quản lý sản phẩm</a><i class="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
        </ol>
      </nav> 
      <Link to="/">AddNew</Link>
      <Link to="/demo">Demo</Link>*/}
      <Direction/>
      <h2 className='mb-3'>Thêm sản phẩm</h2>
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          <div className='card mb-3'>
            <div className="card-body">
              <h3>Thông tin cơ bản</h3>
              <h5>Ảnh sản phẩm</h5>
              <p>Đây là hình ảnh chính trên trang sản phẩm. Bạn có thể up nhiều hình ảnh cùng lúc và tối đa có thể có 8 hình. Hình ảnh cần có kích thước từ 330x300 px đến 5000x5000px và không dược phép chứa nội dung nhạy cảm. Kích thước tối đa: 2 MB</p>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"><span className='notnull'>*</span>Tên sản phẩm</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ex. Nikon Coolpix A300 Máy Ảnh Kỹ Thuật Số"/>
              </div>
              <div className='mb-3'>
                <label htmlFor="exampleDataList" className="form-label"><span className='notnull'>*</span>Danh mục ngành hàng</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Danh mục tìm kiếm"/>
                <datalist id="datalistOptions">
                  <option value="San Francisco"/>
                  <option value="New York"/>
                  <option value="Seattle"/>
                  <option value="Los Angeles"/>
                  <option value="Chicago"/>
                </datalist>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">Đường dẫn video</label>
                <input type="email" className="form-control" id="exampleFormControlInput3"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Ảnh thu nhỏ</label>
                <p>Ảnh thu nhỏ sẽ được dùng để hiển thị sản phẩm của bạn ở một số nơi như trang kết quả tìm kiếm, trang gợi ý sản phẩm, vv... Ảnh thu nhỏ giúp thu hút người dùng nhấp vào sản phẩm của bạn.</p>
                <p>Tỉ lệ ảnh 1:1 <span className='tooltip'>Xem ví dụ</span></p>
              </div>
            </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
              <h3>Thông số sản phẩm</h3>
              <p>Thêm thuộc tính để gia tăng khả năng hiển thị</p>
              
              <div className='row'>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput4" className="form-label"><span className='notnull'>*</span>Thương hiệu</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Loại để tìm kiếm thương hiệu .."/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput5" className="form-label">Vật liệu sản phẩm <span className='badge bg-secondary'>KEY</span></label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput6" className="form-label">Họa tiết</label>
                    <input type="text" className="form-control" id="exampleFormControlInput6" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput7" className="form-label">Kiểu dáng</label>
                    <input type="text" className="form-control" id="exampleFormControlInput7" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput8" className="form-label">Hướng dẫn sử dụng</label>
                    <input type="text" className="form-control" id="exampleFormControlInput8" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput9" className="form-label">Thông tin cảnh báo</label>
                    <input type="text" className="form-control" id="exampleFormControlInput9" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput10" className="form-label">Nước sản xuất</label>
                    <input type="text" className="form-control" id="exampleFormControlInput10" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label htmlFor="exampleFormControlInput11" className="form-label">Dòng sản phẩm</label>
                    <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="Đầu vào ở đây"/>
                  </div>
              </div>
              </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
                  <h3>Giá bán, Kho hàng và Biến thể</h3>
                  <p className='mb-3'>Thêm các biến thể khi sản phẩm có các phiên bản khác nhau, chẳng hạn như màu sắc và kích thước</p>
                  <div className='card mb-3'>
                    <div className='card-body'>
                        <h4>Biến thể 1</h4>
                        <div>
                          <label htmlFor="BienThe1" className="form-label"><span className='notnull'>*</span>Tên biến thể</label>
                          <input type="text" className="form-control mb-3" id="BienThe1" placeholder="Vui lòng chọn hoặc điền"/>
                        </div>
                        <p className='mb-3'>Tổng số biến thể</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                            Thêm ảnh <span>Tối đa 8 ảnh cho mỗi biến thể.</span>
                            </label>
                        </div>
                        <div>
                          <input type="text" className="form-control" id="BienThe1a" placeholder="Vui lòng chọn hoặc điền"/>
                        </div>
                    </div>
                </div>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h4>Biến thể 2</h4>
                        <div>
                          <label htmlFor="BienThe2" className="form-label"><span className='notnull'>*</span>Tên biến thể</label>
                          <input type="text" className="form-control mb-3" id="BienThe2" placeholder="Vui lòng chọn hoặc điền"/>
                        </div>
                        <p className='mb-3'>Tổng số biến thể</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                            Thêm ảnh <span>Tối đa 8 ảnh cho mỗi biến thể.</span>
                            </label>
                        </div>
                        <div>
                          <input type="text" className="form-control" id="BienThe1a" placeholder="Vui lòng chọn hoặc điền"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="GiaBan" className="form-label"><span className='notnull'>*</span>Giá bán & kho hàng</label>
                    <input type="text" className="form-control mb-3" id="GiaBan" placeholder="Vui lòng chọn hoặc điền"/>
                </div>
              </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-12'>
          <div className="card mb-3">
            <div className="card-body">
                <h4>Điểm nội dung</h4>
                <label htmlFor="customRange2" className="form-label">Cần cải thiện</label>
                <input type="range" className="form-range" min="0" max="1" id="customRange2"></input>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Thông tin cơ bản
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Thông số sản phẩm
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Giá bán, kho hàng và biến thể
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Mô tả sản phẩm
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Vận chuyển và bảo hành
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
                <h3>Tips</h3>
                <ul>
                  <li>a. Vui lòng tải lên hình ảnh sản phẩm</li>
                  <li>b. Điền tiêu đề</li>
                  <li>c. Chọn danh mục chính xác</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
