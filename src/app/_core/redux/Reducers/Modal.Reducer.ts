import { Action } from "@ngrx/store"
import { ModalAction } from "../Actions/Modals.actions";


const stateDefault:SanPham = {
   maSP:'1',
   tenSP:'Iphone',
   gia:1000,
   hinhAnh:'https://picsum.photos/id/1/200/200'
}


export const modalReducer = (state:SanPham = stateDefault,action:any) => {
    switch(action.type) {
        case 'XEM_CHI_TIET': {
            state = action.sanPham;
            return {...state}
        }

        default : return {...state}
    }
}



interface SanPham{
    maSP:string,tenSP:string,gia:number,hinhAnh:string
}