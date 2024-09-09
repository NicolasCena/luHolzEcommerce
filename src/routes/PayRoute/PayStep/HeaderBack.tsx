import { HeaderGoBackButton } from "src/routes/PayRoute/components/HeaderGoBackButton";
import { RoutesEnum } from "../RouterEnum";

export function HeaderBack() {
  return <HeaderGoBackButton path={RoutesEnum.infoUser} />;
}
