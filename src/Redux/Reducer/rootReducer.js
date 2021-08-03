import {combineReducers} from 'redux'
import gioHangReducer from './gioHang'


const RootReducer = combineReducers({
    giohang: gioHangReducer
})
export default RootReducer