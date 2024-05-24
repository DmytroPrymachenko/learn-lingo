import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../../../store/slices/userSlice";

import {
  ModalLoginButton,
  ModalLoginDiv,
  ModalLoginDivInput,
  ModalLoginForm,
  ModalLoginH1,
  ModalLoginInput,
  ModalLoginInputDiv,
  ModalLoginSpan,
} from "./ModalLogin.Styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalTrialSpanError } from "../ModalTrialLesson/ModalTrialLesson.Styled";
import { AuthorizationButtonEsc } from "../AuthorizationMessage/AuthorizationMessage.Styled";
import SVGEsc from "../../../images/svg/SVGEsc";
import IsLoading from "../../IsLoading/IsLoading";
import { useState } from "react";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup
    .string()
    .required("The email is required")
    .email("Please write a valid e-mail")
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      { message: "Please write a valid email" }
    ),
  password: yup
    .string()
    .required("The password is required")
    .min(6, "The password must contain a minimum of 6 characters"),
});

const ModalLogin = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: {
              email: user.email,
              name: user.displayName,
              id: user.uid,
            },
            token: user.accessToken,
          })
        );
        closeModal();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to sign in: " + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      {isLoading && (
        <>
          <IsLoading />
        </>
      )}
      <ModalLoginForm onSubmit={handleSubmit(handleLogin)}>
        <AuthorizationButtonEsc onClick={closeModal}>
          <SVGEsc />
        </AuthorizationButtonEsc>
        <ModalLoginDiv>
          <ModalLoginH1>Log In</ModalLoginH1>
          <ModalLoginSpan>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a teacher.
          </ModalLoginSpan>
          <ModalLoginDivInput>
            <ModalLoginInputDiv>
              <ModalLoginInput
                {...register("email")}
                type="email"
                id="email"
                placeholder="Your email"
              />
              <ModalTrialSpanError>{errors.email?.message}</ModalTrialSpanError>
            </ModalLoginInputDiv>
            <ModalLoginInputDiv>
              <ModalLoginInput
                {...register("password")}
                type="password"
                id="password"
                placeholder="password"
              />
              <ModalTrialSpanError>
                {errors.password?.message}
              </ModalTrialSpanError>
            </ModalLoginInputDiv>
          </ModalLoginDivInput>
          <ModalLoginButton>Log In</ModalLoginButton>
        </ModalLoginDiv>
      </ModalLoginForm>
    </>
  );
};

export default ModalLogin;
