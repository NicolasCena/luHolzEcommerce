import { useAppSelector } from "src/redux/hooks/useAppSelector";
import { useEmailVerification } from "../../hooks/useEmailVerfication";
import { useResetPass } from "src/hooks/useResetPass";
import { useDeleteUser } from "src/hooks/useDeleteUser";

const MyAccount = () => {
  const user = useAppSelector((state) => state.user);
  const { sendVerificationEmail } = useEmailVerification();
  const { resetPassProfile } = useResetPass();
  const { deleteUserProfile } = useDeleteUser();

  return (
    <>
      <div>
        <div>
          <img src={user.photo} alt="photo" />
        </div>
        <div>
          <p>Nombre:</p>
          <p>{user.name}</p>
        </div>
        <div>
          <p>Email:</p>
          <p>{user.email}</p>
          {user.isVerifiedEmail ? (
            "Tu email está verificado"
          ) : (
            <button onClick={sendVerificationEmail}>Verificar</button>
          )}
        </div>
        <button onClick={resetPassProfile}>Cambiar contraseña</button>
        <button onClick={deleteUserProfile}>Borrar cuenta</button>
      </div>
    </>
  );
};

export { MyAccount };
