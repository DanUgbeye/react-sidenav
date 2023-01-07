import React, { PropsWithChildren, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export interface protectedRouteProps extends PropsWithChildren {}

export default function ProtectedRoute(props: protectedRouteProps) {
  const authenticated = useMemo(() => true, []);
  const navigate = useNavigate();

  if (!authenticated) {
    const redirectUrl = window.location.pathname;
    const path = `/login${redirectUrl && `?redirect=${redirectUrl}`}`;
    navigate(path, { replace: true });
    return null;
  }

  return <>{props.children}</>;
}
