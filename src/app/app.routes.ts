import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard.guard';
import { AccountComponent } from './pages/admin/account/account.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { FavoriteComponent } from './pages/admin/favorite/favorite.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { OriginalProductsComponent } from './pages/admin/original-products/original-products.component';
import { SecurityComponent } from './pages/admin/security/security.component';
import { TransportComponent } from './pages/admin/transport/transport.component';
import { PerfumeGridComponent } from './pages/perfume-grid/perfume-grid.component';
import { AboutUsComponent } from './pages/website/about-us/about-us.component';
import { BenefitsComponent } from './pages/website/benefits/benefits.component';
import { GdprComponent } from './pages/website/gdpr/gdpr.component';
import { LanguageComponent } from './pages/website/language/language.component';
import { MainPageComponent } from './pages/website/main-page/main-page.component';
import { PersonalLiftComponent } from './pages/website/personal-lift/personal-lift.component';
import { NavBarComponent } from './pages/website/nav-bar/nav-bar.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },

  { path: 'language', component: LanguageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'gdpr', component: GdprComponent },
  { path: 'personal-lift', component: PersonalLiftComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'account', component: AccountComponent },
  { path: 'order', component: OrderComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'perfume/:sex/:perfumeType', component: PerfumeGridComponent },
  { path: 'original-products', component: OriginalProductsComponent },
  { path: 'transport', component: TransportComponent },
];

/* { path: 'perfume/:perfumeType', component: PerfumeGridComponent, }, */
