import React, { useEffect, useState, Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";


/* import Direction from '../Router/Direction'; */

function AddNew() {
  const [editorState, setEditorState] = useState("");
  const [editorState2, setEditorState2] = useState("");
  const [editorState3, setEditorState3] = useState("");
  function onEditorStateChange(editorState){
    setEditorState(editorState);
  };
  function onEditorStateChange2(editorState2){
    setEditorState2(editorState2);
  };
  function onEditorStateChange3(editorState3){
    setEditorState3(editorState3);
  };
  return (
    <div>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Trang chủ</a><i className="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item"><a href="#">Quản lý sản phẩm</a><i className="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
        </ol>
      </nav> 
      <Link to="/">AddNew</Link>
      <Link to="/demo">Demo</Link>
      <Direction/>*/}
      <h2 className='mb-3'>Thêm sản phẩm</h2>
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          <div className='card mb-3'>
            <div className="card-body">
              <h3>Thông tin cơ bản</h3>
              <h5>Ảnh sản phẩm</h5>
              <p className="text-black-50">Đây là hình ảnh chính trên trang sản phẩm. Bạn có thể up nhiều hình ảnh cùng lúc và tối đa có thể có 8 hình. Hình ảnh cần có kích thước từ 330x300 px đến 5000x5000px và không dược phép chứa nội dung nhạy cảm. Kích thước tối đa: 2 MB</p>
              <div className="mb-3">
                <form id="frm" method="post" className="needs-validation" noValidate>
                  {/*Image container */}
                  <div className="row" data-type="imagesloader" data-errorformat="Accepted file formats" data-errorsize="Maximum size accepted" data-errorduplicate="File already loaded" data-errormaxfiles="Maximum number of images you can upload" data-errorminfiles="Minimum number of images to upload" data-modifyimagetext="Modify immage">
                    {/* Progress bar */}
                    <div className="col-12 order-1 mt-2">
                      <div data-type="progress" className="progress" style={{height: '25px', display: 'none'}}>
                        <div data-type="progressBar" className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '100%'}}>Load in progress...</div>
                      </div>
                    </div>
                    {/* Model */}
                    <div data-type="image-model" className="col-4 pl-2 pr-2 pt-2" style={{maxWidth: '200px', display: 'none'}}>
                      <div className="ratio-box text-center" data-type="image-ratio-box">
                        <img data-type="noimage" className="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="./img/photo-camera-gray.svg" style={{cursor: 'pointer'}} />
                        <div data-type="loading" className="img-loading" style={{color: '#218838', display: 'none'}}>
                          <span className="fa fa-2x fa-spin fa-spinner" />
                        </div>
                        <img data-type="preview" className="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="" style={{display: 'none', cursor: 'default'}} />
                        <span className="badge badge-pill badge-primary p-2 w-50 main-tag" style={{display: 'none'}}>Main</span>
                      </div>
                      {/* Buttons */}
                      {/* <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        <button data-operation="remove" className="btn btn-outline-danger btn-sm btn-block remove" type="button"><span className="fa fa-times"/>Remove</button>
                      </div> */}
                      <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        <button data-type="add" className="btn btn-outline-primary" type="button"><span className="bi bi-camera-fill m-2" />Add</button>
                        <button data-type="btn-modify" type="button" className="btn btn-outline-primary m-0" data-toggle="popover" data-placement="right" style={{display: 'none'}}>
                          <span className="fa fa-pencil-alt mr-2" />Modify
                        </button>
                      </div>
                      
                      
                    </div>
                    {/* Buttons */}
                    <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        {/* <button data-type="add" className="btn btn-outline-primary" type="button"><span className="bi bi-camera-fill m-2" />Add</button> */}
                        {/* <button data-type="btn-modify" type="button" className="btn btn-outline-primary m-0" data-toggle="popover" data-placement="right" style={{display: 'none'}}>
                          <span className="fa fa-pencil-alt mr-2" />Modify
                        </button> */}
                    </div>
                    {/* Popover operations */}
                    {/* <div data-type="popover-model" style={{display: 'none'}}>
                      <div data-type="popover" className="ml-3 mr-3" style={{minWidth: '150px'}}>
                        <div className="row">
                          <div className="col p-0">
                            <button data-operation="main" className="btn btn-block btn-primary btn-sm rounded-pill" type="button"><span className="fa fa-angle-double-up mr-2" />Main</button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6 p-0 pr-1">
                            <button data-operation="left" className="btn btn-block btn-outline-info btn-sm rounded-pill" type="button"><span className="fa fa-angle-left mr-2" />Left</button>
                          </div>
                          <div className="col-6 p-0 pl-1">
                            <button data-operation="right" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button">Right<span className="fa fa-angle-right ml-2" /></button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6 p-0 pr-1">
                            <button data-operation="rotateanticlockwise" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button"><span className="fas fa-undo-alt mr-2" />Rotate</button>
                          </div>
                          <div className="col-6 p-0 pl-1">
                            <button data-operation="rotateclockwise" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button">Rotate<span className="fas fa-redo-alt ml-2" /></button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <button data-operation="remove" className="btn btn-outline-danger btn-sm btn-block" type="button"><span className="fa fa-times mr-2" />Remove</button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="form-group row">
                    <div className="input-group">
                      {/*Hidden file input for images*/}
                      <input id="files" type="file" name="files[]" data-button multiple accept="image/jpeg, image/png, image/gif," style={{display: 'none'}} />
                    </div>
                  </div>
                </form>
                {/* <div className="row mt-2">
                  <div className="col-md-4 offset-md-8 text-center mb-4">
                    <button id="btnContinue" type="submit" form="frm" className="btn btn-block btn-outline-primary float-right" data-toggle="tooltip" data-trigger="manual" data-placement="top" data-title="Continue">
                      Continue<span id="btnContinueIcon" className="bi bi-arrow-right-circle-fill m-2" /><span id="btnContinueLoading" className="fa fa-spin fa-spinner ml-2" style={{display: 'none'}} />
                    </button>
                  </div>2
                </div> */}
              </div>
              <div className="mb-3">
                <form id="frm2" method="post" className="needs-validation" noValidate>
                  {/*Image container */}
                  <div className="row" data-type="imagesloader2" data-errorformat="Accepted file formats" data-errorsize="Maximum size accepted" data-errorduplicate="File already loaded" data-errormaxfiles="Maximum number of images you can upload" data-errorminfiles="Minimum number of images to upload" data-modifyimagetext="Modify immage">
                    {/* Progress bar */}
                    <div className="col-12 order-1 mt-2">
                      <div data-type="progress" className="progress" style={{height: '25px', display: 'none'}}>
                        <div data-type="progressBar" className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '100%'}}>Load in progress...</div>
                      </div>
                    </div>
                    {/* Model */}
                    <div data-type="image-model" className="col-4 pl-2 pr-2 pt-2" style={{maxWidth: '200px', display: 'none'}}>
                      <div className="ratio-box text-center" data-type="image-ratio-box">
                        <img data-type="noimage" className="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="./img/photo-camera-gray.svg" style={{cursor: 'pointer'}} />
                        <div data-type="loading" className="img-loading" style={{color: '#218838', display: 'none'}}>
                          <span className="fa fa-2x fa-spin fa-spinner" />
                        </div>
                        <img data-type="preview" className="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="" style={{display: 'none', cursor: 'default'}} />
                        <span className="badge badge-pill badge-primary p-2 w-50 main-tag" style={{display: 'none'}}>Main</span>
                      </div>
                      {/* Buttons */}
                      {/* <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        <button data-operation="remove" className="btn btn-outline-danger btn-sm btn-block remove" type="button"><span className="fa fa-times"/>Remove</button>
                      </div> */}
                      
                      <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        <button data-type="add" className="btn btn-outline-primary" type="button"><span className="bi bi-camera-fill m-2" />Add</button>
                        <button data-type="btn-modify" type="button" className="btn btn-outline-primary m-0" data-toggle="popover" data-placement="right" style={{display: 'none'}}>
                          <span className="fa fa-pencil-alt mr-2" />Modify
                        </button>
                      </div>
                      
                    </div>
                    {/* Buttons */}
                    <div data-type="image-buttons" className="row justify-content-center m-0 mt-2">
                        {/* <button data-type="add" className="btn btn-outline-primary" type="button"><span className="bi bi-camera-fill m-2" />Add</button> */}
                        {/* <button data-type="btn-modify" type="button" className="btn btn-outline-primary m-0" data-toggle="popover" data-placement="right" style={{display: 'none'}}>
                          <span className="fa fa-pencil-alt mr-2" />Modify
                        </button> */}
                    </div>
                    {/* Popover operations */}
                    <div data-type="popover-model" style={{display: 'none'}}>
                      <div data-type="popover" className="ml-3 mr-3" style={{minWidth: '150px'}}>
                        <div className="row">
                          <div className="col p-0">
                            <button data-operation="main" className="btn btn-block btn-primary btn-sm rounded-pill" type="button"><span className="fa fa-angle-double-up mr-2" />Main</button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6 p-0 pr-1">
                            <button data-operation="left" className="btn btn-block btn-outline-info btn-sm rounded-pill" type="button"><span className="fa fa-angle-left mr-2" />Left</button>
                          </div>
                          <div className="col-6 p-0 pl-1">
                            <button data-operation="right" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button">Right<span className="fa fa-angle-right ml-2" /></button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6 p-0 pr-1">
                            <button data-operation="rotateanticlockwise" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button"><span className="fas fa-undo-alt mr-2" />Rotate</button>
                          </div>
                          <div className="col-6 p-0 pl-1">
                            <button data-operation="rotateclockwise" className="btn btn-block btn-outline-primary btn-sm rounded-pill" type="button">Rotate<span className="fas fa-redo-alt ml-2" /></button>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <button data-operation="remove" className="btn btn-outline-danger btn-sm btn-block" type="button"><span className="fa fa-times mr-2" />Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="input-group">
                      {/*Hidden file input for images*/}
                      <input id="files" type="file" name="files[]" data-button multiple accept="image/jpeg, image/png, image/gif," style={{display: 'none'}} />
                    </div>
                  </div>
                </form>
                {/* <div className="row mt-2">
                  <div className="col-md-4 offset-md-8 text-center mb-4">
                    <button id="btnContinue" type="submit" form="frm" className="btn btn-block btn-outline-primary float-right" data-toggle="tooltip" data-trigger="manual" data-placement="top" data-title="Continue">
                      Continue<span id="btnContinueIcon" className="bi bi-arrow-right-circle-fill m-2" /><span id="btnContinueLoading" className="fa fa-spin fa-spinner ml-2" style={{display: 'none'}} />
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="mb-3">
                <label className="form-label"><span className='notnull text-danger'>*</span> Tên sản phẩm</label>
                <input type="email" className="form-control" placeholder="Ex. Nikon Coolpix A300 Máy Ảnh Kỹ Thuật Số"/>
              </div>
              <div className='mb-3'>
                <label htmlFor="exampleDataList" className="form-label"><span className='notnull text-danger'>*</span> Danh mục ngành hàng</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Danh mục tìm kiếm" value="Giày dép & Quần áo nữ / Quần áo nữ / Đầm" disabled/>
                {/* <datalist id="datalistOptions">
                  <option value="San Francisco"/>
                  <option value="New York"/>
                  <option value="Seattle"/>
                  <option value="Los Angeles"/>
                  <option value="Chicago"/>
                </datalist> */}
              </div>
              <div className="mb-3">
                <label  className="form-label">Đường dẫn video</label>
                <input type="email" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Ảnh thu nhỏ</label>
                <p className="text-black-50">Ảnh thu nhỏ sẽ được dùng để hiển thị sản phẩm của bạn ở một số nơi như trang kết quả tìm kiếm, trang gợi ý sản phẩm, vv... Ảnh thu nhỏ giúp thu hút người dùng nhấp vào sản phẩm của bạn.</p>
                <p>Tỉ lệ ảnh 1:1 <span className='tooltip'>Xem ví dụ</span></p>
              </div>
            </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
              <h3>Thông số sản phẩm</h3>
              <p className="text-black-50">Thêm thuộc tính để gia tăng khả năng hiển thị</p>
              
              <div className='row'>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label"><span className='notnull text-danger'>*</span> Thương hiệu</label>
                    <input type="text" className="form-control" placeholder="Loại để tìm kiếm thương hiệu .."/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Kiểu váy đầm <span className='badge bg-secondary'>KEY</span></label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Độ dài váy <span className='badge bg-secondary'>KEY</span></label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Chất liệu vải <span className='badge bg-secondary'>KEY</span></label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Mẫu/ Chi tiết</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Phân loại thời trang</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Nhóm kích thước</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Kiểu cổ áo sơ mi</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Tay áo</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Tên tổ chức chịu trách nhiệm hàng hóa</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Dịp</label>
                    <input type="text" className="form-control" placeholder="Xin vui lòng nhập vào hoặc chọn tùy chọn"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Ngày sản xuất</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Hướng dẫn sử dụng</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Địa chỉ tổ chức chịu trách nhiệm hàng hóa</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Thông tin cảnh báo</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
                  <div className='col-md-6 col-sm-12 mb-3'>
                    <label className="form-label">Nước sản xuất</label>
                    <input type="text" className="form-control" placeholder="Đầu vào ở đây"/>
                  </div>
              </div>
              </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
                  <h3>Giá bán, Kho hàng và Biến thể</h3>
                  <p className='mb-3 text-black-50'>Thêm các biến thể khi sản phẩm có các phiên bản khác nhau, chẳng hạn như màu sắc và kích thước</p>
                  <div className='card mb-3'>
                    <div className='card-body'>
                        <h4>Biến thể 1</h4>
                        <div>
                          <label htmlFor="BienThe1" className="form-label"><span className='notnull text-danger'>*</span> Tên biến thể</label>
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
                          <label htmlFor="BienThe2" className="form-label"><span className='notnull text-danger'>*</span> Tên biến thể</label>
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
                    <label htmlFor="GiaBan" className="form-label"><span className='notnull text-danger'>*</span> Giá bán & kho hàng</label>
                    {/* <input type="text" className="form-control mb-3" id="GiaBan" placeholder="Vui lòng chọn hoặc điền"/> */}
                    <div className="row">
                      <div className="col-2">
                        <div className="input-group mb-3">
                          <span className="input-group-text">VND</span>
                          <input type="number" className="form-control" placeholder="Giá" min="0"/>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="input-group mb-3">
                          <span className="input-group-text">VND</span>
                          <input type="number" className="form-control" placeholder="Giá đặc biệt" min="0"/>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="input-group mb-3">
                          <input type="number" className="form-control" placeholder="Kho hàng" min="0"/>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Seller SKU" min="0"/>
                        </div>
                      </div>
                      <div className="col-2">
                        <button type="button" className="btn btn-primary">Áp dụng cho tất cả</button>
                      </div>

                    </div>
                </div>
              </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
                  <h3>Mô tả sản phẩm</h3>
                  <p className='mb-3 text-black-50'>Long Description (Lorikeet)</p>
                  <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" defaultChecked="true"/>
                    <label className="form-check-label">
                      Rich Text
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                    <label className="form-check-label">
                      Lorikeet
                    </label>
                  </div>
                  <div className='card mb-4'>
                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                    />
                  </div>
                  <p className='mb-2'>Mô tả sản phẩm tiếng Anh (tùy chọn)</p>
                  <div className='card mb-4'>
                    <Editor
                      editorState={editorState2}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange2}
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="exampleDataList" className="form-label">Biểu đồ kích thước</label>
                    <select className="form-select" aria-label="Select a size chart">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <p className='mb-2'>Mô tả ngắn</p>
                  <div className='card mb-4'>
                    <Editor
                      editorState={editorState3}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange3}
                      toolbar={{
                        options: ['blockType','list'],
                      }}
                    />
                  </div>
                  <div>
                    <label className="form-label">Bộ sản phẩm đầy đủ</label>
                    <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body'>
                  <h3 className="mb-4">Vận chuyển và Bảo hành</h3>
                  <h5 className='mb-2'>Service</h5>
                  <div className="mb-3 col-3">
                    <label className="form-label">Loại bảo hành</label>
                    <select className="form-select" aria-label="Chọn">
                      <option>Bằng Hóa đơn mua hàng</option>
                      <option value="1">Bằng Tem bảo hành</option>
                      <option value="2">Bằng Phiếu bảo hành và Hóa đơn</option>
                      <option value="3">Bằng Thẻ bảo hành và Hóa đơn</option>
                    </select>
                  </div>
                  <div className="mb-3 col-3">
                    <label className="form-label">Bảo hành</label>
                    <select className="form-select" aria-label="Chọn">
                      <option>1 năm</option>
                      <option value="1">1 tháng</option>
                      <option value="2">2 tháng</option>
                      <option value="3">3 tháng</option>
                    </select>
                  </div>
                  <div className="mb-4 col-3">
                    <label className="form-label">Chính sách bảo hành</label>
                    <input type="text" className="form-control"/>
                  </div>
                  <h5 className="mb-3">Delivery</h5>
                  <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" role="switch"/>
                    <label className="form-check-label">Bật lên nếu biến thể sản phẩm có kích thước và trọng lượng khác nhau</label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><span className='notnull text-danger'>*</span> Khối lượng kiện hàng sau khi đóng gói (đơn vị: kilogram). VD: Nếu gói hàng cân nặng 200 gram thì vui lòng điền 0.2 vào ô bên dưới</label>
                    <input type="number" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><span className='notnull text-danger'>*</span> Kích thước hàng (cm)</label>
                    <div className="d-flex">
                      <input type="number" className="form-control c-30" placeholder="Chiều dài (cm)"/>
                      <span className="text-center c-5 d-print-inline-block">x</span>
                      <input type="number" className="form-control c-30" placeholder="Chiều rộng (cm)"/>
                      <span className="text-center c-5 d-print-inline-block">x</span>
                      <input type="number" className="form-control c-30" placeholder="Chiều cao (cm)"/>
                    </div>
                  </div>
                  <div>
                    <label className="form-label d-block">Chất liệu nguy hiểm</label>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Liquid
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value=""/>
                      <label className="form-check-label">
                        Chất dễ cháy
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value=""/>
                      <label className="form-check-label">
                        Pin
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value=""/>
                      <label className="form-check-label">
                        Không
                      </label>
                    </div>
                  </div>
              </div>
          </div>
          <div className='card mb-3'>
              <div className='card-body text-end'>
                <button type="button" className="btn btn-primary">Gửi đi</button>
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
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
