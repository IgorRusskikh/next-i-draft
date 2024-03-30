import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/ui/Input';
import { setModal } from '@/features/modal/modalSlice';

import Button from '../ui/Button';

const ModalAuth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authVariant, setAuthVariant] = useState("login");

  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal.value);

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

  const register = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toggleVariant = () => {
    setAuthVariant(authVariant === "register" ? "login" : "register");
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center absolute z-20 backdrop-blur-xl bg-[#00000030] ${
        !modal ? " hidden" : ""
      }`}
    >
      <div className={`flex flex-col items-center w-[40%]`}>
        <div className="flex flex-col items-center w-full h-full backdrop-blur-lg px-6 py-10 border border-white shadow-xl rounded-3xl relative">
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => dispatch(setModal(false))}
          >
            <IoCloseCircleOutline size={42} color="white" />
          </div>
          <div className="flex items-center gap-3">
            <CgProfile size={42} color="white" />
            <h1 className="text-3xl text-white font-medium">
              {authVariant === "login" ? "Login" : "Create an account"}
            </h1>
          </div>
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
                    <Input
                      value={email}
                      setValue={setEmail}
                      placeholder="E-mail"
                    />
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
                {authVariant === "login" ? (
                  <h6 className="">
                    {"Don't"} have an account?{" "}
                    <span
                      className="font-semibold cursor-pointer transition-all hover:text-white"
                      onClick={toggleVariant}
                    >
                      Create an account
                    </span>
                  </h6>
                ) : (
                  <h6 className="">
                    Already have an account?{" "}
                    <span
                      className="font-semibold cursor-pointer transition-all hover:text-white"
                      onClick={toggleVariant}
                    >
                      Log in
                    </span>
                  </h6>
                )}
              </div>
            </div>
            <div
              className={authVariant === "login" ? "w-[10rem]" : "w-[18rem]"}
            >
              <Button
                theme="light"
                onClick={authVariant === "login" ? login : register}
              >
                <p className="text-center text-xl w-full">
                  {authVariant === "login" ? "Login" : "Create an account"}
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAuth;
