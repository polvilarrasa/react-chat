import { ReactNode } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { LoginService } from "../../serviceconfig";


type ProtectedrouteObject = RouteObject&{protected?:boolean}
export type ProtectedBrowserRouteProps = {
    routes: ProtectedrouteObject[],
    redirect: ReactNode
}

const ProtectedBrowserRoute = ({
    routes,
    redirect
}:ProtectedBrowserRouteProps) => {
    const protectedRoutes= routes.map(route=>{
        let element= route.element;
        if(route.protected &&!LoginService.isLogged()){
            element = redirect;
        }

        return {
            ...route,
            element
        }
    })
    return createBrowserRouter(protectedRoutes);

}

export default ProtectedBrowserRoute
