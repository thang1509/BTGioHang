import iphone from '../../Assets/sp_iphoneX.png'
import note7 from '../../Assets/sp_note7.png'
import vsphone from '../../Assets/vsphone.jpg'


const initialState={
    sanPham:[
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": vsphone },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": note7},
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": iphone }  
    ],
    sanPhamChiTiet:{},
    themSP:[],
        
}

function gioHangReducer(state=initialState,action){
    switch(action.type){
        case "SAN_PHAM":{
            return{...state,sanPhamChiTiet:action.payload}
        }
        case "THEM_SP":{
           
            const index = state.themSP.findIndex(item=>item.maSP===action.payload.maSP)
            if(index!==-1){
                state.themSP[index].soLuong+=1
                // state.themSP[index].giaBan=state.themSP[index].soLuong*state.themSP[index].giaBan
            }
            else{
                state.themSP.push(action.payload)
            }
            state.themSP=[...state.themSP]
            
            return{...state}
        }
        case "GIAM_SP":{
            const index = state.themSP.findIndex(item=>item.maSP===action.payload.maSP)
            if(index!==-1){
                state.themSP[index].soLuong-=1
                if(state.themSP[index].soLuong<=0){
                    state.themSP[index].soLuong=0   
                }
            }
            state.themSP=[...state.themSP]
            return {...state}
        }
        case "TANG_SP":{
            const index = state.themSP.findIndex(item=>item.maSP===action.payload.maSP)
            if(index!==-1){
                state.themSP[index].soLuong+=1      
            }
            state.themSP=[...state.themSP]
            return {...state}
        }
        default:
            return {...state}

    }
}

export default gioHangReducer