import React, { ReactChildren } from "react";
import { useField } from "formik";
import styled from "styled-components";
import tw from "twin.macro";

import { classNames } from "../../utils/utils";
import {
  FIELD_SIZE_VARIANT_MAPS,
  FONT_SIZE_VARIANT_MAPS,
  TEXT_TRANSFORM_VARIANT_MAPS,
  ROUND_VARIANT_MAPS,
  COLOR_VARIANT_MAPS,
  BGCOLOR_VARIANT_MAPS,
  RING_COLOR_VARIANT_MAPS,
  RING_WIDTH_VARIANT_MAPS,
  BORDER_COLOR_VARIANT_MAPS,
  BORDER_WIDTH_VARIANT_MAPS,
  DISABLED_VARIANT_MAPS,
  BOX_SIZE_VARIANT_MAPS,
} from "../../assets/styles/tailwindCommon";

// TODO: 반복되는 코드 줄이기
// 1. maps 통일
// 2. ringwidth같은 공통 적인 속성 따로 만든 다음에 상속하기

// TODO: 디자인이 너무 많아지니 인풋 타입별로 파일 나눠서 관리하는 거 고려해보기
// TODO: error div도 스타일드컴포넌트로 CSS만들어두기
// //////////////////////////////////////////////////////////////
///////////////////////
//// common props starts
///////////////////////

interface InputProps {
  name: string;
  id?: string;
  label: string;
  nolabel?: boolean;
  align?: "inline-flex" | "";
  // design?: "filled" | "outlined"; //dashed, dotted..
  disabled?: boolean;
  color?: "white" | "black" | "gray" | "primary" | "secondary" | "danger";
  bgcolor?: "white" | "black" | "gray" | "primary" | "secondary" | "danger";
  ringcolor?:
    | "white"
    | "black"
    | "gray"
    | "primary"
    | "secondary"
    | "danger"
    | "transparent"
    | "current";
  bordercolor?:
    | "white"
    | "black"
    | "gray"
    | "primary"
    | "secondary"
    | "danger"
    | "transparent"
    | "current";
  ringwidth?: "sm" | "md" | "lg";
  texttransform?: "uppercase" | "capitalize" | "lowercase";
  fieldsize?: "sm" | "md" | "lg" | "full" | "auto";
  rounded?: "sm" | "md" | "lg" | "full";
  textsize?: "sm" | "base" | "lg" | "xl";
  customstyle?: string;
  labelcustomstyle?: string;
  borderwidth?: "sm" | "base" | "lg" | "xl";
  // borderStyle?:"rectangle"|"round-all"|"round-"
}

///////////////////////
//// common props end
///////////////////////

/* styled components starts */
// 서치바 관련 css
const InputTextSearchBar = styled.div`
  /* flex  items-center border border-gray-200 rounded-2xl px-4  origin-top-left transition duration-200 ease-out transform focus-within:scale-x-150  */
  position: relative;
  display: flex;
  align-items: center;
  border: 1px gainsboro solid;
  border-radius: 1rem;
  padding: 0 1rem;
  transform-origin: top left;
  transition: all 0.2s ease-out;
  width: 10rem;
  height: 2.2rem;

  &:focus-within {
    width: 20rem;

    & > .autoComplete {
      display: block;
    }
  }

  /* & > button > svg:focus-within { */
  /* .searchIcon:focus-within {
    transform: scaleX(0.7);
  } */
`;

type InputTextWrapperProps = {
  rounded?: "sm" | "md" | "lg" | "full";
  borderwidth?: "sm" | "base" | "lg" | "xl";
};

const InputTextWrapper = styled.div.attrs((props: InputTextWrapperProps) => ({
  className: classNames`focus-within:border-red-700 px-4 py-2 border-red-500 relative ml-16
   ${ROUND_VARIANT_MAPS[props.rounded]}
   ${BORDER_WIDTH_VARIANT_MAPS[props.borderwidth]}
   `,
}))<InputTextWrapperProps>`
  > input {
    ${tw`appearance-none border-2 border-transparent rounded w-full py-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-white  `}
    &:focus + label {
      margin: -1rem 0.3rem;
      background-color: white;
      font-size: 1rem;
      color: rgba(185, 28, 28, 1);
    }
  }
  > input + label {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0.7rem 0.3rem;
    padding: 0 0.3rem;
    background-color: transparent;
    color: red;
    font-size: 1.2rem;
    transition: all ease 0.2s;
  }
`;

//////////////////////////////
// slider
//////////////////////////////
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  text-align: center;

  input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 15px;
    width: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border-radius: 0; /* iOS */
    background: gainsboro;
    overflow: hidden;
    cursor: pointer;
    -webkit-appearance: none;
    /* height: 18px; */
    height: 10px;
  }

  input[type="range"]::-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    outline: 0;
    //

    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    box-shadow: -100vw 0 0 100vw palevioletred;
    border: 0.1px solid palevioletred;
    cursor: pointer;
  }

  input:last-of-type::-webkit-slider-thumb {
    box-shadow: -100vw 0 0 100vw gainsboro;
  }

  input::-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -moz-appearance: none;
    width: 9px;
  }

  // slider 색상 나오는 곳
  input::-moz-range-track,
  input::-ms-track {
    position: relative;
    z-index: -1;
    background-color: transparent;
    border: 0;
  }
  /* input:last-of-type::-moz-range-track,
  input:last-of-type::-ms-track {
    -moz-appearance: none;
    background-color: transparent;
    border: 0;
  } */
  input[type="range"]::-moz-focus-outer,
  input[type="range"]:focus {
    border: 0;
    outline: none;
  }

  ////
`;

// 에러 메시지 출력 div
const ErrorDivWrapper = styled.div.attrs({
  className: classNames`ml-1 text-red-500 text-sm	mt-1`,
})``;

/* styled components ends */

interface InputTextProps extends InputProps {
  type: "email" | "text" | "password";
  inputtype?:
    | "normal"
    | "textarea"
    | "searchBar"
    | "outlined"
    | "outlinedWithAnim"
    | "dashed"
    | "filled";
  //multiline일 경우 textarea
  // multiLine?: boolean;
  // search input box
  // searchbar?: "true" | "false";
  placeholder?: string;
  autoComplete?: "on" | "off";
  // $inputTest?: string; // styled-components error test 목적
}

////****************************** */
// inputText
////****************************** */
export const Input: React.FC<InputTextProps> = (props: InputTextProps) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });

  switch (props.inputtype) {
    // 2. textArea일 경우
    case "textarea":
      return (
        // <div className={`w-full`}>
        <textarea
          className={classNames`form-input border border-transparent focus:border-transparent	rounded-md 
          ${COLOR_VARIANT_MAPS[props.color]}
          ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
          ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
          ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
          ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
          ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
          ${FONT_SIZE_VARIANT_MAPS[props.textsize]}
          ${ROUND_VARIANT_MAPS[props.rounded]}
          ${props.customstyle && props.customstyle}
          ${props.disabled && DISABLED_VARIANT_MAPS["text"]}
  
          `}
          {...field}
          {...props}
        ></textarea>
        // </div>
      );
    // 3. 서치바일 경우
    case "searchBar":
      return (
        <div className={classNames` ${props.customstyle && props.customstyle}`}>
          <InputTextSearchBar>
            <button className="searchIcon focus:outline-none transform hover:scale-110">
              <svg
                className="w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <input
              className={classNames`form-input border border-transparent focus:border-transparent
                bg-transparent
              ${COLOR_VARIANT_MAPS[props.color]}
              ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
              ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
              ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
              ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
              ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
              ${FONT_SIZE_VARIANT_MAPS[props.textsize]}
              ${ROUND_VARIANT_MAPS[props.rounded]}
              ${props.disabled && DISABLED_VARIANT_MAPS["text"]}
            
              `}
              {...field}
              {...props}
            />
            {/* 자동완성 텍스트 보여주는 div */}
            {field.value && (
              <div className="autoComplete hidden absolute min-w-full max-w-full top-8 mt-1 -left-0.25 shadow-2xl p-4 rounded-md bg-white z-20">
                {field.value}
              </div>
            )}
            {error && touched && <div className={``}>{error}</div>}
          </InputTextSearchBar>
        </div>
      );
    // 4. 아웃라인 버전일 경우(애니메이션 효과 없이)
    //TODO: 4, 5번도 색깔, 보더 등 바꿀 수 있게 하기
    case "outlined":
      return (
        <div
          className={classNames`px-4 py-2 relative  
          ${props.rounded ? ROUND_VARIANT_MAPS[props.rounded] : `rounded`}
          ${
            props.borderwidth
              ? BORDER_WIDTH_VARIANT_MAPS[props.borderwidth]
              : `border-2`
          }
          ${props.color ? COLOR_VARIANT_MAPS[props.color] : `border-gray-200`}
          ${props.bgcolor ? BGCOLOR_VARIANT_MAPS[props.bgcolor] : `bg-white`}
          ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}

          `}
        >
          <label
            className={classNames`absolute -my-6 -mx-2 px-2 
            ${props.color ? COLOR_VARIANT_MAPS[props.color] : `text-gray-500`}
            ${props.bgcolor ? BGCOLOR_VARIANT_MAPS[props.bgcolor] : `bg-white`}
            `}
          >
            {props.label}
          </label>
          <input
            type={props.type}
            className={classNames`w-full py-2 leading-tight appearance-none rounded
            focus:outline-none focus:bg-white focus:border-white
            ${props.color ? COLOR_VARIANT_MAPS[props.color] : `border-gray-200`}
            ${props.bgcolor ? BGCOLOR_VARIANT_MAPS[props.bgcolor] : `bg-white`}
            `}
            placeholder={props.placeholder ? props.placeholder : ""}
          />
        </div>
      );
    // 5. 아웃라인 버전일 경우(애니메이션 효과 포함)
    case "outlinedWithAnim":
      return (
        <InputTextWrapper
          borderwidth={props.borderwidth ? props.borderwidth : "sm"}
          rounded={props.rounded ? props.rounded : "lg"}
        >
          <input type={props.type} />
          <label>{props.label}</label>
        </InputTextWrapper>
      );

    default:
      return (
        // 일반 인풋일 경우
        // <div className={`w-full`}>
        <div className={classNames`flex flex-col capitalize mb-2`}>
          <label
            className={
              props.nolabel
                ? `sr-only`
                : classNames`mb-2 ml-1 ${props.labelcustomstyle}`
            }
          >
            {props.label}
          </label>
          <input
            className={
              // props.disabled              ? `${DISALBED_INPUT}`              :
              classNames`form-input border
              ${error && touched && `border-red-500 border-4`}
              ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
              ${COLOR_VARIANT_MAPS[props.color]}
              ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
              ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
              ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
              ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
              ${FONT_SIZE_VARIANT_MAPS[props.textsize]}
              ${ROUND_VARIANT_MAPS[props.rounded]}
              ${props.disabled && DISABLED_VARIANT_MAPS["text"]}
              `
            }
            {...field}
            {...props}
          />
          {error && touched && <ErrorDivWrapper>{error}</ErrorDivWrapper>}
        </div>
      );
  }
};

Input.defaultProps = {
  ringcolor: "gray",
  rounded: "lg",
  inputtype: "normal",
  fieldsize: "full",
  bordercolor: "gray",
};

////****************************** */
// checkbox
////****************************** */
// TODO: checkbox icon 도 커스텀
interface CheckboxProps extends InputProps {
  boxSize?: "sm" | "md" | "lg" | "xl";
}
export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <div className={`inline-flex flex-col`}>
      <label htmlFor={props.name} className=" items-center">
        <input
          type="checkbox"
          disabled={props.disabled}
          className={
            // props.disabled              ? `${DISABLED_CHECKBOX}` :
            classNames`form-checkbox mr-2 border border-gray-700 ring-current focus:border-current	
          ${ROUND_VARIANT_MAPS[props.rounded]}
          ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
          ${COLOR_VARIANT_MAPS[props.color]}
          ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
          ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
          ${BOX_SIZE_VARIANT_MAPS[props.boxSize]}
          ${props.customstyle && props.customstyle}
          ${props.disabled && DISABLED_VARIANT_MAPS["checkbox"]}
          `
          }
          {...field}
          {...props}
        />
        <span className={classNames`${FONT_SIZE_VARIANT_MAPS[props.textsize]}`}>
          {props.label}
        </span>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error"></div> : null}
    </div>
  );
};

////****************************** */
// toggle slider(button)
////****************************** */

const ToggleWrapper = styled.input.attrs((props: any) => ({
  className: classNames`appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none bg-red-500`,
}))<any>`
  &:checked {
    ${tw`bg-green-500`}
  }

  &:checked ~ span:last-child {
    ${tw`translate-x-8`}
  }
`;

export const Toggle: React.FC<CheckboxProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <div className={`inline-flex flex-col`}>
      <label className="flex items-center relative w-max cursor-pointer select-none">
        <ToggleWrapper type="checkbox" {...field} {...props} />
        <span className="absolute font-medium text-xs uppercase right-1 text-white">
          OFF
        </span>
        <span className="absolute font-medium text-xs uppercase right-8 text-white">
          ON
        </span>
        <span className="w-7 h-7 right-8 absolute rounded-full transform transition-transform bg-gray-200"></span>
      </label>
    </div>
  );
};

////****************************** */
// radio
////****************************** */
interface RadioProps extends InputProps {
  radiotype?: "normal" | "block" | "blockChild";
  radiosize?: "sm" | "md" | "lg" | "xl";
  value: string;
  children?: React.ReactNode | React.FC | ReactChildren;
}

export const RadioBlockTypeWrapper = (props: WithChildren) => {
  return (
    <div role="group" aria-labelledby="my-radio-group">
      {/* className={classNames``} */}
      <ul
        // id="filter1"
        className={classNames`p-1 filter-switch inline-flex items-center relative h-10 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600`}
      >
        {props.children}
      </ul>
    </div>
  );
};

export const Radio: React.FC<RadioProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  switch (props.radiotype) {
    case "blockChild":
      return (
        <li className="filter-switch-item flex relative h-8 shadow-lg rounded-md  ">
          <input
            type="radio"
            disabled={props.disabled}
            id={props.id}
            value={props.value}
            className="sr-only"
            {...field}
            {...props}
          />
          <label
            htmlFor={props.id}
            className="cursor-pointer h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 shadow-none bg-opacity-0 label-checked:text-inherit label-checked:bg-white label-checked:shadow label-checked:rounded"
          >
            {props.label}
          </label>
        </li>
      );

    // block 디자인 타입일 경우
    // children을 받아서 넘기기
    // case "block":
    //   return (
    //     <div role="group" aria-labelledby="my-radio-group">
    //       <ul
    //         id="filter1"
    //         className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4"
    //       >
    //         {children}
    //       </ul>
    //     </div>
    //   );

    // 디폴트는 일반 라디오
    default:
      return (
        <div className={`inline-flex flex-col`}>
          <label htmlFor={props.name} className="items-center">
            <input
              type="radio"
              disabled={props.disabled}
              className={classNames`form-radio mr-2 border border-gray-700 ring-current focus:border-current	
              ${ROUND_VARIANT_MAPS[props.rounded]}
              ${COLOR_VARIANT_MAPS[props.color]}
              ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
              ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
              ${BOX_SIZE_VARIANT_MAPS[props.radiosize]}
              ${props.customstyle && props.customstyle}
              ${props.disabled && DISABLED_VARIANT_MAPS["radio"]}
              `}
              value={props.value}
              // {...props.disabled&&disabled={true}}
              {...field}
              {...props}
            />
            <span
              className={classNames`${FONT_SIZE_VARIANT_MAPS[props.textsize]}`}
            >
              {props.label}
            </span>
            {children}
          </label>
          {meta.touched && meta.error ? (
            <ErrorDivWrapper>{meta.error}</ErrorDivWrapper>
          ) : null}
        </div>
      );
  }
};

////****************************** */
// select
////****************************** */
interface SelectProps extends InputProps {
  multiSelect?: boolean;
}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <>
      <label className={`sr-only`} htmlFor={props.name}></label>
      {/* <span>{props.label}</span> */}
      <select
        disabled={props.disabled}
        className={classNames`form-select mt-1 block rounded-md
        ${COLOR_VARIANT_MAPS[props.color]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        ${BORDER_WIDTH_VARIANT_MAPS[props.borderwidth]}
        ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
        ${BORDER_COLOR_VARIANT_MAPS[props.bordercolor]}
        ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
        ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
        ${props.customstyle && props.customstyle}
        ${props.disabled && DISABLED_VARIANT_MAPS["select"]}
        `}
        {...field}
        {...props}
      >
        {children}
      </select>
      {/* {meta.touched && meta.error ? <div className="error"></div> : null} */}
    </>
  );
};

Select.defaultProps = {
  ringcolor: "gray",
  bordercolor: "gray",
  rounded: "lg",
  borderwidth: "sm",
};

////****************************** */
// slider
////****************************** */
interface SliderProps extends InputProps {
  slidertype?: "normal" | "twoPointsChild";
  step?: number;
  min: number;
  max: number;
  values?: any;
}

interface TwoWaySliderProps {
  label: string;
  children: WithChildren;
}

export const SliderTwoWayTypeWrapper: React.FC<TwoWaySliderProps> = (
  props: TwoWaySliderProps
) => {
  return (
    <div className="bg-white rounded-sm capitalize">
      <label className="font-bold">{props.label}</label>
      <SliderWrapper>{props.children}</SliderWrapper>
      {/* <Slider /> */}
      <span>{/* ${intFirstSliderValue}-${intSecondSliderValue} */}</span>
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  // console.log(field.value);
  // console.log(field.name);
  // console.log(field);
  // if(field.name==="slider1"&&)
  // console.log("values: ", props.values);

  if (props.values.slider1 > props.values.slider2) {
    // if (field.name === "slider1") {
    //   console.log("slider1 moving");
    // } else {
    //   console.log("slider2 moving");
    // }
    // field.value.slider1 = field.value.slider2;
  }
  switch (props.slidertype) {
    case "twoPointsChild":
      return (
        <input
          min={props.min}
          max={props.max}
          step={props.step | 0.5}
          type="range"
          name={props.name}
          id={props.name}
          {...field}
          {...props}
          // value={props.value}
          // onChange={props.onchange}
        />
      );

    default:
      return (
        <>
          <div className="bg-white rounded-sm capitalize">
            <label className="font-bold" htmlFor={props.name}>
              {props.label}
            </label>
            <SliderWrapper>
              <input
                min={props.min}
                max={props.max}
                step={props.step | 0.5}
                type="range"
                name={props.name}
                {...field}
                {...props}
                // value={props.value}
                // onChange={props.onchange}
              />
            </SliderWrapper>
            {/* <Slider /> */}
            <span>{/* ${intFirstSliderValue}-${intSecondSliderValue} */}</span>
          </div>
          {/* {meta.touched && meta.error ? <div className="error"></div> : null} */}
        </>
      );
  }
};
