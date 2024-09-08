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
  const { signOut } = useSingOut();

  const optionsMenu = useMemo(
    () => [
      { path: "/", title: t("home"), show: true, action: null },
      {
        path: "/admin-products",
        title: t("admin_products"),
        show: userState.admin,
        action: null,
      },
      {
        path: "/my-account",
        title: t("my_account"),
        show: userState.isAuthenticated,
        action: null,
      },
      {
        path: "/sign-in",
        title: t("sign_in"),
        show: !userState.isAuthenticated,
        action: null,
      },
      {
        path: "/upload-products",
        title: t("upload_products"),
        show: userState.admin,
        action: null,
      },
      {
        path: "/carrito",
        title: t("shop"),
        show: true,
        action: null,
      },
      {
        title: "Cerrar sesión",
        show: userState.isAuthenticated,
        action: true,
        onAction: signOut,
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
