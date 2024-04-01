import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setModal } from '@/features/modalAuth/modalAuthSlice';

import Modal from '../layout/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ModalAuth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authVariant, setAuthVariant] = useState("login");

  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modalAuth.value);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        username,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }, [username, password]);

  const register = async () => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.status === 200) {
        login();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleVariant = () => {
    setAuthVariant(authVariant === "register" ? "login" : "register");
  };

  const modalBody = (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="flex flex-col my-20">
        <div className="mb-8">
          <Input
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
        </div>
        {authVariant !== "login" && (
          <>
            <div className="mb-8">
              <Input value={email} setValue={setEmail} placeholder="E-mail" />
            </div>
          </>
        )}
        <div className="mb-4">
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex w-full justify-end">
          <h6 className="">
            {authVariant === "login"
              ? `Don't have an account? `
              : `Already have an account? `}
            <span
              className="font-semibold cursor-pointer transition-all hover:text-[#cbcbcb]"
              onClick={toggleVariant}
            >
              {authVariant === "login" ? "Create an account" : "Log in"}
            </span>
          </h6>
        </div>
      </div>
      <div className={authVariant === "login" ? "w-[10rem]" : "w-[18rem]"}>
        <Button onClick={authVariant === "login" ? login : register}>
          <p className="text-center text-xl w-full">
            {authVariant === "login" ? "Login" : "Create an account"}
          </p>
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      title="Create an account"
      body={modalBody}
      onClose={() => dispatch(setModal(false))}
      isOpen={modal}
    />
  );
};

export default ModalAuth;
