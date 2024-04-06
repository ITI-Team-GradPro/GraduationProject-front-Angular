import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {

    // let _Router =   inject(Router);

  // if (localStorage.getItem("Token") != null) {
    return true;
  // } else {
  //   return false
  // }

};
