import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  './index.scss'
export default function GioHang() {
    document.title="Gio Hang"
    const {sanPham,sanPhamChiTiet,themSP} = useSelector((state)=>state.giohang)
    const dispatch = useDispatch()
    const handleChangeSP=(item)=>{
        dispatch({type:"SAN_PHAM",payload:item})
    }
    const handleThemSP=(item)=>{
        let spGioHang ={
            maSP:item.maSP,
            tenSP:item.tenSP,
            hinhAnh:item.hinhAnh,
            soLuong:1,
            giaBan:item.giaBan
        }
        dispatch({type:"THEM_SP",payload:spGioHang})
        // localStorage.setItem("themSP",JSON.stringify([spGioHang]));
    }
    return (
        <>
        <div className="container">
        <div className="giohang">
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
    Gio hang <i className="fa fa-shopping-cart"> (<span>{themSP.reduce((tongDon,item,index)=>{
        if(item===false){
            return tongDon = 0
        }
        return tongDon += item.soLuong
    },0).toLocaleString()}</span>)</i>
  </button>
  {/* Modal */}
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Gio Hang</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
            <table className="table">
                <thead>
                    <tr>
                        <th>Ten San Pham</th>
                        <th>Hinh Anh</th>
                        <th>So Luong</th>
                        <th>Gia Ban</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {themSP.map((item,index)=>{
                    const handleMinus = (item)=>{
                        dispatch({type:"GIAM_SP",payload:item})
                    }
                    const handleAdd = (item)=>{
                        dispatch({type:"TANG_SP",payload:item})
                    }
                    let btnDis=""
                    let btnD=""
                    if(item.soLuong===0){
                        btnDis="disabled"
                        btnD=`btnDiss`
                    }
              return(
                <tr key={index}>
                <td>{item.tenSP}</td>
                <td><img className="img-fluid" style={{width:"50px",height:"50px"}} src={item.hinhAnh} alt=""/></td>
                <td>
                    <button className={`btn btn-danger ${btnDis} ${btnD}`} onClick={()=>{handleMinus(item)}} style={{fontSize:"10px"}}><i className="fa fa-minus"></i></button>
                    <span className="mx-1">{item.soLuong}</span>
                    <button className="btn btn-success" onClick={()=>{handleAdd(item)}} style={{fontSize:"10px"}}><i className="fa fa-plus"></i></button>
                </td>
                <td>{item.giaBan*item.soLuong}</td>
                <td><button className="btn btn-danger">Xoa</button></td>
            </tr>
              )
          })}    
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tổng đơn:</td>
                        <td>{themSP.reduce((tongGia,item,index)=>{
                            if(item===false){
                                return tongGia=0
                            }
                            
                            return tongGia += item.giaBan*item.soLuong
                            
                        },0).toLocaleString()}</td>
                        
                       
                    </tr>
                </tfoot>
               
            </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="row">
                {sanPham.map((item,index)=>{
                    return(
                        <div key={index} className="col-4">
                           <div className="card">
                            <img className="img-fluid" style={{height:"348px"}}  src={item.hinhAnh} alt="hinhanh" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.tenSP}</h4>
                                    <p className="card-text">{item.giaBan}</p>
                                </div>
                            </div>
                            <button onClick={()=>{handleChangeSP(item)}} className="btn btn-success mr-5">Xem Chi tiet</button>
                            <button className="btn btn-danger ml-5" onClick={()=>{handleThemSP(item)}}>Them San Pham</button>
                        </div>
                    )
                })}
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid" src={sanPhamChiTiet.hinhAnh} alt=""/>
                    </div>
                    <div className="col-9">
                        <p>{sanPhamChiTiet.tenSP}</p>
                        <p>{sanPhamChiTiet.manHinh}</p>
                        <p>{sanPhamChiTiet.heDieuHanh}</p>
                        <p>{sanPhamChiTiet.cameraTruoc}</p>
                        <p>{sanPhamChiTiet.cameraSau}</p>
                        <p>{sanPhamChiTiet.giaBan}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
