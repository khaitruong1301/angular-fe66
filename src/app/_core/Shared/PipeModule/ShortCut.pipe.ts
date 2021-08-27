import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortcut'
})



export class ShortCutPipe implements PipeTransform {

    transform(value: any, limit:number): any {
        
        return value.length >= limit ? value.substr(0,limit) + '...' : value
    }
}

/*
    Ví dụ 
    {{ value | pipeName: params }}

    {{value | shortcut: 50}}

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quaerat veniam fuga, amet quasi id expedita at, asperiores beatae, veritatis repellat qui recusandae pariatur quisquam quia aspernatur? Reiciendis, quo beatae.

*/