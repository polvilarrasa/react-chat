import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { LoginService } from 'service/login/LoginService'
import { LoginFirebaseService } from '../service/login/LoginFirebaseService'
import Login from 'pages/Login'

type CustomRouteObject = {
    protected?:boolean
}&RouteObject

type ProctectedRouter = {
    routes:CustomRouteObject[]
}

const ProtectedBrowserRoute = (props:ProctectedRouter) => {
    const service = new LoginFirebaseService();
    const protectedRoutes= props.routes.map(route=>{
        let element= route.element;
        if(route.protected &&!service.isLogged()){
            element = <Login/>
        }

        return {
            ...route,

            element
        }
    })
    return createBrowserRouter(protectedRoutes);

}

export default ProtectedBrowserRoute
