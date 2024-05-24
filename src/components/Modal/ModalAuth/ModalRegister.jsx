import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ModalLoginButton,
  ModalLoginH1,
  ModalLoginInput,
} from "./ModalLogin.Styled";
import { useForm } from "react-hook-form";
import {
  ModalRegisterDiv,
  ModalRegisterDivTitle,
  ModalRegisterFormDiv,
  ModalRegisterInputDiv,
  ModalRegisterSpan,
} from "./ModalRegister.Styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ModalTrialSpanError } from "../ModalTrialLesson/ModalTrialLesson.Styled";

import { AuthorizationButtonEsc } from "../AuthorizationMessage/AuthorizationMessage.Styled";
import SVGEsc from "../../../images/svg/SVGEsc";
import { useState } from "react";
import IsLoading from "../../IsLoading/IsLoading";

const schema = yup.object({
  name: yup
    .string()
    .max(32, "The name must contain a maximum of 32 characters")
    .required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required("The email is required"),
  password: yup
    .string()
    .min(6, "The password must contain a minimum of 6 characters")
    .required("The password is required"),
});

const ModalRegister = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = ({ email, password, name }) => {
    setIsLoading(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
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
            console.log(user);
            toast.success(`Welcome`);
            navigate("/teachers");
            closeModal();
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to create user: " + error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <>
        {isLoading && (
          <>
            <IsLoading />
          </>
        )}
      </>
      <ModalRegisterFormDiv>
        <AuthorizationButtonEsc onClick={closeModal}>
          <SVGEsc />
        </AuthorizationButtonEsc>
        <ModalRegisterDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalRegisterDivTitle>
              <ModalLoginH1>Registration</ModalLoginH1>
              <ModalRegisterSpan>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information
              </ModalRegisterSpan>
            </ModalRegisterDivTitle>
            <ModalRegisterInputDiv>
              <div>
                <ModalLoginInput
                  {...register("name")}
                  type="name"
                  id="name"
                  placeholder="name"
                />
                <ModalTrialSpanError>
                  {errors.name?.message}
                </ModalTrialSpanError>
              </div>
              <div>
                <ModalLoginInput
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Your email"
                />
                <ModalTrialSpanError>
                  {errors.email?.message}
                </ModalTrialSpanError>
              </div>
              <div>
                <ModalLoginInput
                  {...register("password")}
                  type="password"
                  id="password"
                  placeholder="password"
                />
                <ModalTrialSpanError>
                  {errors.password?.message}
                </ModalTrialSpanError>
              </div>
            </ModalRegisterInputDiv>

            <ModalLoginButton>Sign Up</ModalLoginButton>
          </form>
        </ModalRegisterDiv>
      </ModalRegisterFormDiv>
    </>
  );
};

export default ModalRegister;