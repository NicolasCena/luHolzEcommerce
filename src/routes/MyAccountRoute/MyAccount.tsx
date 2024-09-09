import { useState } from "react";
import { useAppSelector } from "src/redux/hooks/useAppSelector";
import { useEmailVerification } from "../../hooks/useEmailVerfication";
import { ModalChangePass } from "./components/ModalChangePass";
import { ModalDeleteUser } from "./components/ModalDeleteUser";

const MyAccount = () => {
  const user = useAppSelector((state) => state.user);
  const [ showChangePass, setShowChangePass ] = useState(false);
  const [ showDeleteAccount, setShowDeleteAccount ] = useState(false);
  const { sendVerificationEmail } = useEmailVerification();

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

          {
            user.media !== 1
              ? user.isVerifiedEmail
                ? <p>Tu email está verificado</p>
                : <button onClick={sendVerificationEmail}>Verificar</button>
              : <p>Tu email está verificado</p>
            
          }
        </div>
        <div>
          {
            user.media !== 1 && <button onClick={() => setShowChangePass(true)}>Cambiar contraseña</button>
          }
        </div>
        <div>
          <button onClick={() => setShowDeleteAccount(true)}>Borrar cuenta</button>
        </div>
      </div>
      
      {
        showChangePass && <ModalChangePass onClose={() => setShowChangePass(false)} show={showChangePass} />
      }

      {
        showDeleteAccount && <ModalDeleteUser onClose={() => setShowDeleteAccount(false)} show={showDeleteAccount} />
      }
      
    </>
  );
};

export { MyAccount };
