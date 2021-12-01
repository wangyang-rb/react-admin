
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Index from "../pages/admin/dashboard/Index";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";

export const mainRoutes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/404',
        component:PageNotFound
    }
];

export const adminRoutes=[{
    path:'/admin/dashborad',
    component:Index,
    isShow:true,
    title:"dashboard",
    icon:"area-chart"
},{
    path:'/admin/products',
    component:List,
    exact:true,
    isShow:true,
    title:"products management",
    icon:"shop"
},{
    path:'/admin/products/edit/:id?',
    component:Edit,
    isShow:false
}];