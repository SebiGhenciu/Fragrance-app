import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LanguageComponent } from './pages/website/language/language.component';
import { MainPageComponent } from './pages/website/main-page/main-page.component';
import { AboutUsComponent } from './pages/website/about-us/about-us.component';
import { BenefitsComponent } from './pages/website/benefits/benefits.component';
import { GdprComponent } from './pages/website/gdpr/gdpr.component';
import { PersonalLiftComponent } from './pages/website/personal-lift/personal-lift.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { FavoriteComponent } from './pages/admin/favorite/favorite.component';
import { AccountComponent } from './pages/admin/account/account.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { SecurityComponent } from './pages/admin/security/security.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { PerfumeGridComponent } from './pages/perfume-grid/perfume-grid.component';

export const routes: Routes = [


    { path: 'language', component: LanguageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'gdpr', component: GdprComponent, },
    { path: 'personal-lift', component: PersonalLiftComponent, },
    { path: 'cart', component: CartComponent, },
    { path: 'favorite', component: FavoriteComponent, },
    { path: 'account', component: AccountComponent, },
    { path: 'order', component: OrderComponent, },
    { path: 'security', component: SecurityComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'perfume', component: PerfumeGridComponent, },

    { path: '', component: MainPageComponent},

    { path: 'contact', component: ContactComponent, }
];
