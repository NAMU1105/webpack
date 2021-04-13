import React, { useState, useEffect, ReactNode } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

import {
  SignupSchema,
  LoginSchema,
  ConfirmSignupCodeSchema,
  ResetPasswordSchema,
} from "../utils/validator";
import Logo from "../components/UI/logo";
import { Input, Radio, RadioBlockTypeWrapper } from "../components/form/input";
import Button from "../components/form/button";
import Loading from "../components/UI/loading";
import Card from "../components/UI/card";

const Captch = styled.div`
  & > div {
    width: 100% !important;

    iframe {
      width: 100%;
    }
  }
`;

type AuthPaths = {
  authType: "/login" | "/signup" | "/password" | "/confirm";
};

interface IF {}

const Auth: React.FC<IF> = (props: IF) => {
  // url파싱해서 어떤 로그인 모드인지 확인하여 엘레멘트를 반환
  // const history = useHistory();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // const [isLoginMode, setLoginMode] = useState<boolean>(false);
  // 어떤 목적의 페이지인지 보여준다(회원가입/로그인/비밀번호리셋/이메일인증).
  const [authMode, setAuthMode] = useState<string>();
  const [element, setElement] = useState<ReactNode>();
  const [title, setTitle] = useState<string>("Admin login");
  // const [validation, setTitle] = useState<string>("Admin login");

  // function onChange(value: string) {
  //   console.log("Captcha value:", value);
  // }

  const onEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    setFieldValue("testtest", "testtest");
  };

  useEffect(() => {
    console.log(authMode);
    setAuthMode(location.pathname);
    // console.log(history);
    // console.log(location);

    switch (authMode) {
      // case "/login":
      //   // console.log("auth!!!");
      //   break;

      case "/signup":
        setTitle("Admin signup");
        setElement(
          <>
            <Input
              type="text"
              name="firstName"
              label="firstName"
              placeholder="firstName"
            />
            <Input
              type="text"
              name="lastName"
              label="lastName"
              placeholder="lastName"
            />

            <Input
              type="email"
              name="email"
              label="email"
              placeholder="email"
            />
            <Input
              type="password"
              name="password"
              label="password"
              placeholder="password"
            />

            <div className="flex justify-between items-center mt-4">
              <Button size="sm" type="submit" bgColor="white" color="black">
                signup
              </Button>
              <NavLink
                to="/password"
                className="capitalize text-gray-500 underline hover:text-black"
              >
                reset password
              </NavLink>
            </div>
          </>
        );
        break;

      case "/password":
        setTitle("reset password");

        setElement(
          <>
            <Input
              type="text"
              name="firstName"
              label="firstName"
              placeholder="firstName"
            />
            <Input
              type="text"
              name="lastName"
              label="lastName"
              placeholder="lastName"
            />

            <Input
              type="email"
              name="email"
              label="email"
              placeholder="email"
            />

            <div className="flex justify-between items-center mt-4">
              <Button size="sm" type="submit" bgColor="white" color="black">
                reset
              </Button>
            </div>
          </>
        );

        break;

      // 회원가입 시 이메일을 통한 코드 인증
      case "/confirm":
        setTitle("confirm signup code");

        setElement(
          <>
            <Input
              type="text"
              name="confirm code"
              label="confirm code"
              placeholder="confirm code"
            />

            <Button
              customstyle="mt-4"
              size="sm"
              type="submit"
              bgColor="white"
              color="black"
            >
              submit
            </Button>
          </>
        );
        break;

      // 디폴트는 로그인
      default:
        setTitle("admin login");

        setElement(
          <>
            <Input
              type="email"
              name="email"
              label="email"
              placeholder="email"
              fieldsize="full"
            />
            <Input
              type="password"
              name="password"
              label="password"
              placeholder="password"
              fieldsize="full"
            />

            <div className="flex justify-between items-center mt-4">
              <Button size="sm" type="submit" bgColor="white" color="black">
                login
              </Button>
              <NavLink
                to="/password"
                className="capitalize text-gray-500 underline hover:text-black"
              >
                reset password
              </NavLink>
            </div>
          </>
        );

        break;
    }
  }, [authMode, location.pathname]);

  return (
    <section className="w-full flex justify-center items-center min-h-content">
      <div className="w-9/10 lg:w-1/3  bg-white shadow-xl rounded-md flex flex-col overflow-hidden">
        <h1 className="capitalize w-full p-4 bg-black text-white flex justify-between items-center">
          {title}
          <Logo type="LogoHorizontalDark" />
        </h1>
        <div className="p-4 ">
          <Formik
            initialValues={{
              searchType: "",
              email: "",
              testtest: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

                /**
                 TODO: 
                 1. 회원가입: 성공 시 이메일 인증 페이지
                 2. 로그인: 성공 시 메인 페이지(/)
                 3. 비밀번호 리셋: 
                 4. 이메일 인증: 성공 시 로그인 페이지
                 * **/
              }, 300);
            }}

            //  handleChange={e => console.log("bluuuuurr", { e })}
          >
            {({
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              handleChange,
              setFieldValue,
            }) => (
              <Form
                className="w-full"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                {/* <Form className="mt-8 w-full md:w-1/2 " onSubmit={handleSubmit}> */}
                {isSubmitting && <Loading />}
                {element}
                {/* <Card /> */}
                {/* <Input
                  inputtype="searchBar"
                  type="text"
                  label="search"
                  name="search"
                /> */}
                {/* <input
                  type="email"
                  name="testtest"
                  id="testtest"
                  onChange={(e) => {
                    setFieldValue("testtest", "~!!");
                    onEmailChange(e, setFieldValue);

                    // setFieldValue("search", "");
                    // console.log(e.target.value);
                  }}
                  // onBlur={(e) => {
                  //   setFieldValue("testtest", "~!!");
                  // }}

                  // onBlur={(e) => {
                  //   setFieldValue("search", "null");
                  //   // console.log(e.target.value);
                  // }}
                /> */}
              </Form>
            )}
          </Formik>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={"6Lc0uJ8aAAAAAOCIJEm1YlQzfRiYLb7k-mRyk72h"}
              // onChange={onChange}
              //ref={this._reCaptchaRef}
              //asyncScriptOnLoad={this.asyncScriptOnLoad}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Auth;
