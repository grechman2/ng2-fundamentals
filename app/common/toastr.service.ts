import { OpaqueToken } from '@angular/core'

export let TOASTR_TOKEN = new OpaqueToken("toastr");

export interface Toastr{
    success(message: string, title?: string)
    info(message: string, title?: string)
    warning(message: string, title?: string)
    error(message: string, title?: string)
   
}