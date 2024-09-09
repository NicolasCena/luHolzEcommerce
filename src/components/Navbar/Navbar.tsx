import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/redux/hooks/useAppSelector";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useSingOut } from "src/hooks/useSingOut";

export const Navbar = () => {
  const { t } = useTranslation();
  const userState = useAppSelector((state) => state.user);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const windowWidth = useWindowWidth();
  const { logOut } = useSingOut();

  const optionsMenu = useMemo(
    () => [
      { path: "/", title: t("home"), show: true, action: null },
      {
        path: "/my-account",
        title: t("my_account"),
        show: userState.isAuthenticated,
      },
      {
        path: "/sign-in",
        title: t("sign_in"),
        show: !userState.isAuthenticated,
      },
      {
        path: "/carrito",
        title: "Carrito",
        show: userState.isAuthenticated,
      },
      {
        path: "/shop",
        title: t("shop"),
        show: true,
      },
      {
        path: "/admin-products",
        title: t("admin_products"),
        show: userState.admin,
        classStyle: 'black',
      },
      {
        path: "/upload-products",
        title: t("upload_products"),
        show: userState.admin,
        classStyle: 'black',
      },
      {
        path: "/infoUser",
        title: 'Comprar',
        show: true,
        classStyle: 'black',
      },
      {
        title: "Cerrar sesión",
        show: userState.isAuthenticated,
        action: true,
        onAction: logOut,
        classStyle: 'red',
      },
    ],
    [t, userState]
  );

  return (
    <>
      {windowWidth < 760 ? (
        <NavbarMobile
          optionsMenu={optionsMenu}
          setShowOffcanvas={setShowOffcanvas}
          showOffcanvas={showOffcanvas}
        />
      ) : (
        <NavbarDesktop optionsMenu={optionsMenu} />
      )}
    </>
  );
};
