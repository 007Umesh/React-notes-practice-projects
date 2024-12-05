import React from "react";
import { Navigate } from "react-router-dom";

function Private({isLoggedIn,children})
    {

        if(isLoggedIn){
            return children;
        }
        else{
          return  <Navigate to ="/login"/>
        }
}

export default Private;