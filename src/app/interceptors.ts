import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Interceptores personalizados
export const Interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: '', multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: '', multi: true },
  ];