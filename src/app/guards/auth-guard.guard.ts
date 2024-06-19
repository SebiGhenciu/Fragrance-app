import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';




export const authGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserService);
  let router = inject(Router);
  let isUserLogged = (!userService.isLoginExpired() && userService?.loggedUser !== null);

  return isUserLogged ? true : router.navigate(['login']);
};
