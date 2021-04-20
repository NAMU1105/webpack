import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import tw from "twin.macro";
import { Formik, Form } from "formik";

// import Chart from "chart.js";
import * as chartjs from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

import {
  faCamera,
  faEnvelope,
  faFile,
  faPlus,
  faCog,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import defaultProfileImage from "../../public/images/preview-12.jpg";
import * as CHART_DATA from "../../src/utils/chartsDummyData";
import Button2 from "../components/form/button2";
import DropDown2, {
  DropdownDepthedList,
  DropdownList,
} from "../components/UI/dropdown2";
import { Toggle } from "../components/form/input";
import ProgressBar from "../components/UI/progressBar";

import { classNames } from "../utils/utils";

interface IF {}

type ViewpagerType = "main" | "latestWork" | "inProgressWork";

type MainViewPager =
  | "mypage_dashboard"
  | "mypage_account"
  | "mypage_activities"
  | "mypage_tasks";

type LatestWorkViewPager = "mypage_latest_new" | "mypage_latest_lastWeek";
type InProgressWorkViewPager =
  | "mypage_progress_new"
  | "mypage_progress_lastWeek";

const Mypage: React.FC<IF> = (props: IF) => {
  // TODO: 나중에는 유저 프로필 사진을 initial state로 넣기
  const [profileImg, setProfileImg] = useState<string>(defaultProfileImage);

  // TODO: 이 state에 따라서 보여주는 컴포넌트 다르게 하기
  const [mainViewPager, setMainViewPager] = useState<MainViewPager>(
    "mypage_dashboard"
  );
  const [
    lastestWorkViewPager,
    setLastestWorkViewPager,
  ] = useState<LatestWorkViewPager>("mypage_latest_new");
  const [
    inProgressWorkViewPager,
    setInProgressWorkViewPager,
  ] = useState<InProgressWorkViewPager>("mypage_progress_new");

  const setViewPagerHandler = (
    id: MainViewPager | LatestWorkViewPager | InProgressWorkViewPager,
    type: ViewpagerType
  ) => {
    let viewPager;

    switch (type) {
      case "latestWork":
        viewPager = document.querySelectorAll(".mypage_viewpager--latest");
        setLastestWorkViewPager(id as typeof lastestWorkViewPager);
        break;

      case "inProgressWork":
        viewPager = document.querySelectorAll(".mypage_viewpager--progress");
        setInProgressWorkViewPager(id as typeof inProgressWorkViewPager);
        break;

      default:
        viewPager = document.querySelectorAll(".mypage_viewpager--main");
        setMainViewPager(id as typeof mainViewPager);
        break;
    }

    for (let i = 0; i < viewPager.length; i++) {
      viewPager[i].classList.remove("active");
    }

    document.querySelector(`#${id}`).classList.add("active");
  };

  const fileOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    document.querySelector("#profile_img").classList.add("fade-in");
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      let csv = reader.result;
      if (typeof csv === "string") {
        setProfileImg(csv);
      } else {
        csv = csv.toString();
        setProfileImg(csv);
      }

      //   this.setState({
      //     file: file,
      //     previewURL: reader.result,
      //   });
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    // console.log("image changed");
    // document.querySelector("#profile_img").classList.remove("fade-in");
    // setTimeout(() => {
    //   document.querySelector("#profile_img").classList.remove("fade-in");
    // }, 0);
    // setTimeout(() => {
    //   removeTransitionClassHandler();
    // }, 0);

    // removeTransitionClassHandler();
    setTimeout(() => {
      document.querySelector("#profile_img").classList.remove("fade-in");
    }, 1000);
  }, [profileImg]);

  return (
    <section className="px-5 pt-5">
      <h1 className="capitalize">my page</h1>
      {/* profile Info starts */}
      <div className="intro-y box px-5 pt-5 mt-5">
        <div className="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5">
          <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
              <img
                id="profile_img"
                alt="profile image"
                className="rounded-full image-fit"
                src={profileImg}
              />
              <label
                htmlFor="profileImg_input"
                className=" cursor-pointer absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-17 rounded-full p-2"
              >
                <input
                  id="profileImg_input"
                  type="file"
                  className="sr-only"
                  onChange={fileOnChangeHandler}
                />

                <FontAwesomeIcon icon={faCamera} inverse />
              </label>
            </div>
            <div className="ml-5">
              <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                John Travolta
              </div>
              <div className="text-gray-600">Software Engineer</div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
            <div className="font-medium text-center lg:text-left lg:mt-3">
              Contact Details
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
              <div className="truncate sm:whitespace-normal flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
                johntravolta@left4code.com
              </div>
              <div className="truncate sm:whitespace-normal flex items-center mt-3">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 mr-2" />
                Instagram John Travolta
              </div>
              <div className="truncate sm:whitespace-normal flex items-center mt-3">
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 mr-2" />
                John Travolta
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0">
            <div className="font-medium text-center lg:text-left lg:mt-5">
              Sales Growth
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-2">
              <div className="mr-2 w-20 flex">
                USP:
                <span className="ml-3 font-medium text-theme-10">+23%</span>
              </div>
              <div className="w-3/4 overflow-auto">
                <chartjs.Line
                  data={CHART_DATA.LINE_DATA}
                  options={{
                    maintainAspectRatio: false,
                    legend: { display: false },
                    scales: {
                      xAxes: [{ display: false }],
                      yAxes: [{ display: false }],
                    },
                    tooltips: {
                      titleFontSize: 7,
                      bodyFontSize: 7,
                    },
                  }}
                  width={200}
                  height={45}
                />
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="mr-2 w-20 flex">
                STP: <span className="ml-3 font-medium text-theme-24">-2%</span>
              </div>
              <div className="w-3/4 overflow-auto">
                <canvas className="simple-line-chart-2" height="50"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start"
          role="tablist"
        >
          <span
            id="mypage_dashboard"
            // href="/"
            className="mypage_viewpager--main cursor-pointer py-4 sm:mr-8 active"
            role="tab"
            aria-selected="false"
            onClick={() => {
              setViewPagerHandler("mypage_dashboard", "main");
            }}
          >
            Dashboard
          </span>
          <span
            id="mypage_account"
            // href="/"
            className="mypage_viewpager--main cursor-pointer py-4 sm:mr-8 "
            role="tab"
            aria-selected="false"
            onClick={() => {
              setViewPagerHandler("mypage_account", "main");
            }}
          >
            Account & Profile
          </span>
          <span
            id="mypage_activities"
            // href="/"
            className="mypage_viewpager--main cursor-pointer py-4 sm:mr-8"
            role="tab"
            aria-selected="false"
            onClick={() => {
              setViewPagerHandler("mypage_activities", "main");
            }}
          >
            Activities
          </span>
          <span
            id="mypage_tasks"
            // href="/"
            className="mypage_viewpager--main cursor-pointer py-4 sm:mr-8"
            role="tab"
            aria-selected="false"
            onClick={() => {
              setViewPagerHandler("mypage_tasks", "main");
            }}
          >
            Tasks
          </span>
        </div>
      </div>

      {/* profile info ends */}
      <div className="intro-y tab-content mt-5">
        {/* DASHBOARD starts */}
        <div
          id="dashboard"
          className="tab-pane active"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- BEGIN: Top Categories --> */}
            <div className="intro-y box col-span-12 lg:col-span-6">
              <div className="flex items-center p-5 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">
                  Top Categories
                </h2>

                <DropDown2
                  label={<FontAwesomeIcon icon={faEllipsisV} />}
                  align="right"
                >
                  <DropdownList>
                    <a
                      href=""
                      className="flex items-center dark:bg-dark-1 dark:hover:bg-dark-2"
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add Category
                    </a>
                  </DropdownList>

                  <DropdownList>
                    <a
                      href=""
                      className="flex items-center dark:bg-dark-1 dark:hover:bg-dark-2"
                    >
                      <FontAwesomeIcon icon={faCog} />
                      Settings
                    </a>
                  </DropdownList>
                </DropDown2>

                {/* <div className="dropdown ml-auto">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="/"
                    aria-expanded="false"
                  >
                    <i
                      data-feather="more-horizontal"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    ></i>
                  </a>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        className="flex items-center  p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FontAwesomeIcon icon={faPlus} /> Add Category
                      </a>
                      <a
                        href=""
                        className="flex items-center  p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FontAwesomeIcon icon={faCog} />
                        Settings
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="p-5">
                <div className="flex flex-col sm:flex-row">
                  <div className="mr-auto">
                    <a href="" className="font-medium">
                      Wordpress Template
                    </a>
                    <div className="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <canvas
                        className="simple-line-chart-1"
                        data-random="true"
                        height="50"
                      ></canvas>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">6.5k</div>
                      <div className="bg-theme-29 text-theme-10 rounded px-2 mt-1.5">
                        +150
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row mt-5">
                  <div className="mr-auto">
                    <a href="" className="font-medium">
                      Bootstrap HTML Template
                    </a>
                    <div className="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <canvas
                        className="simple-line-chart-1"
                        data-random="true"
                        height="50"
                      ></canvas>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">2.5k</div>
                      <div className="bg-theme-30 text-theme-24 rounded px-2 mt-1.5">
                        +150
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row mt-5">
                  <div className="mr-auto">
                    <a href="" className="font-medium">
                      Tailwind HTML Template
                    </a>
                    <div className="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <canvas
                        className="simple-line-chart-1"
                        data-random="true"
                        height="50"
                      ></canvas>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">3.4k</div>
                      <div className="bg-theme-31 text-theme-26 rounded px-2 mt-1.5">
                        +150
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Top Categories --> */}
            {/* <!-- BEGIN: Work In Progress --> */}
            <div className="intro-y box col-span-12 lg:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">
                  Work In Progress
                </h2>

                {/* 모바일 용 */}
                {/* <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="/"
                    aria-expanded="false"
                  >
                    <i
                      data-feather="more-horizontal"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    ></i>
                  </a>
                  <div className="nav nav-tabs dropdown-menu" role="tablist">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span
                        id="work-in-progress-new-tab"
                        className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        role="tab"
                      >
                        New 1
                      </span>
                      <span
                        id="work-in-progress-last-week-tab"
                        className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        role="tab"
                      >
                        Last Week
                      </span>
                    </div>
                  </div>
                </div> */}

                <div
                  className="nav nav-tabs ml-auto flex flex-col shadow-lg sm:shadow-none sm:rounded-none sm:flex-row"
                  role="tablist"
                >
                  <span
                    id="mypage_progress_new"
                    className="mypage_viewpager--progress cursor-pointer p-2 sm:px-0 sm:py-5 sm:ml-6 active  dark:bg-dark-1 hover:bg-gray-200 sm:hover:bg-transparent"
                    role="tab"
                    onClick={() => {
                      setViewPagerHandler(
                        "mypage_progress_new",
                        "inProgressWork"
                      );
                    }}
                  >
                    New
                  </span>
                  <span
                    id="mypage_progress_lastWeek"
                    className="mypage_viewpager--progress cursor-pointer p-2 sm:px-0 sm:py-5 sm:ml-6  dark:bg-dark-1 hover:bg-gray-200 sm:hover:bg-transparent"
                    role="tab"
                    onClick={() => {
                      setViewPagerHandler(
                        "mypage_progress_lastWeek",
                        "inProgressWork"
                      );
                    }}
                  >
                    Last Week
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="tab-content">
                  <div
                    id="work-in-progress-new"
                    className="tab-pane active"
                    role="tabpanel"
                    aria-labelledby="work-in-progress-new-tab"
                  >
                    <div className="w-full">
                      <div className="flex">
                        <div className="mr-auto">Pending Tasks</div>
                        <div>20%</div>
                      </div>
                      <ProgressBar progress={20} />
                    </div>
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Completed Tasks</div>
                        <div>2 / 20</div>
                      </div>
                      <ProgressBar progress={100} />
                    </div>
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Tasks In Progress</div>
                        <div>42</div>
                      </div>
                      <ProgressBar progress={80} />
                    </div>
                    <div className="w-full flex justify-center mt-5">
                      <Button2 color="btn-secondary">view more details</Button2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Work In Progress --> */}
            {/* <!-- BEGIN: Daily Sales --> */}
            <div className="intro-y box col-span-12 lg:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">Daily Sales</h2>
                <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="/"
                    aria-expanded="false"
                  >
                    <i
                      data-feather="more-horizontal"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    ></i>
                  </a>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href="/"
                        className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FontAwesomeIcon
                          icon={faFile}
                          className="w-4 h-4 mr-2"
                        />
                        Download Excel
                      </a>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-secondary hidden sm:flex">
                  <i data-feather="file" className="w-4 h-4 mr-2"></i> Download
                  Excel
                </button>
              </div>
              <div className="p-5">
                <div className="relative flex items-center">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={defaultProfileImage}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      John Travolta
                    </a>
                    <div className="text-gray-600 mr-5 sm:mr-5">
                      Bootstrap 4 HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-gray-700 dark:text-gray-600">
                    +$19
                  </div>
                </div>
                <div className="relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={defaultProfileImage}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      Al Pacino
                    </a>
                    <div className="text-gray-600 mr-5 sm:mr-5">
                      Tailwind HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-gray-700 dark:text-gray-600">
                    +$25
                  </div>
                </div>
                <div className="relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={defaultProfileImage}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      Kevin Spacey
                    </a>
                    <div className="text-gray-600 mr-5 sm:mr-5">
                      Vuejs HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-gray-700 dark:text-gray-600">
                    +$21
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Daily Sales --> */}
            {/* <!-- BEGIN: Latest Tasks --> */}
            <div className="intro-y box col-span-12 lg:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">Latest Tasks</h2>
                {/* <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="/"
                    aria-expanded="false"
                  >
                    <i
                      data-feather="more-horizontal"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    ></i>
                  </a>
                  <div
                    className="nav nav-tabs dropdown-menu w-40"
                    role="tablist"
                  >
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span
                        id="latest-tasks-new-tab"
                        className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        role="tab"
                      >
                        New 3
                      </span>
                      <span
                        id="latest-tasks-last-week-tab"
                        className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        role="tab"
                      >
                        Last Week
                      </span>
                    </div>
                  </div>
                </div> */}
                <div
                  className="nav nav-tabs ml-auto flex flex-col shadow-lg sm:shadow-none sm:rounded-none sm:flex-row"
                  role="tablist"
                >
                  <span
                    id="mypage_latest_new"
                    className="mypage_viewpager--latest cursor-pointer p-2 sm:px-0 sm:py-5 sm:ml-6 active  dark:bg-dark-1 hover:bg-gray-200 sm:hover:bg-transparent"
                    role="tab"
                    onClick={() => {
                      setViewPagerHandler("mypage_latest_new", "latestWork");
                    }}
                  >
                    New
                  </span>
                  <span
                    id="mypage_latest_lastWeek"
                    className="mypage_viewpager--latest cursor-pointer p-2 sm:px-0 sm:py-5 sm:ml-6  dark:bg-dark-1 hover:bg-gray-200 sm:hover:bg-transparent"
                    role="tab"
                    onClick={() => {
                      setViewPagerHandler(
                        "mypage_latest_lastWeek",
                        "latestWork"
                      );
                    }}
                  >
                    Last Week
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="tab-content">
                  <div
                    id="latest-tasks-new"
                    className="tab-pane active"
                    role="tabpanel"
                    aria-labelledby="latest-tasks-new-tab"
                  >
                    <div className="flex items-center">
                      <div className="border-l-2 border-theme-17 dark:border-theme-26 pl-4">
                        <a href="" className="font-medium">
                          Create New Campaign
                        </a>
                        <div className="text-gray-600">10:00 AM</div>
                      </div>

                      <Formik
                        initialValues={{
                          toggle: false,
                        }}
                        validationSchema={null}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 300);
                        }}
                      >
                        {({
                          errors,
                          touched,
                          values,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <Form className="ml-auto" onSubmit={handleSubmit}>
                            <Toggle
                              label="toggle"
                              name="toggle"
                              off=" "
                              on=" "
                              // oncolor="yellow"
                            />
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-theme-17 dark:border-theme-26 pl-4">
                        <a href="" className="font-medium">
                          Meeting With Client
                        </a>
                        <div className="text-gray-600">02:00 PM</div>
                      </div>
                      <Formik
                        initialValues={{
                          toggle: false,
                        }}
                        validationSchema={null}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 300);
                        }}
                      >
                        {({
                          errors,
                          touched,
                          values,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <Form className="ml-auto" onSubmit={handleSubmit}>
                            <Toggle
                              label="toggle"
                              name="toggle"
                              off=" "
                              on=" "
                              // oncolor="yellow"
                            />
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-theme-17 dark:border-theme-26 pl-4">
                        <a href="" className="font-medium">
                          Create New Repository
                        </a>
                        <div className="text-gray-600">04:00 PM</div>
                      </div>
                      <Formik
                        initialValues={{
                          toggle: false,
                        }}
                        validationSchema={null}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 300);
                        }}
                      >
                        {({
                          errors,
                          touched,
                          values,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <Form className="ml-auto" onSubmit={handleSubmit}>
                            <Toggle
                              label="toggle"
                              name="toggle"
                              off=" "
                              on=" "
                              // oncolor="yellow"
                            />
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Latest Tasks --> */}
            {/* <!-- BEGIN: General Statistic --> */}
            <div className="intro-y box col-span-12">
              <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">
                  General Statistics
                </h2>
                <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="/"
                    aria-expanded="false"
                  >
                    <i
                      data-feather="more-horizontal"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    ></i>
                  </a>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href="/"
                        className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <i data-feather="file" className="w-4 h-4 mr-2"></i>
                        Download XML
                      </a>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-secondary hidden sm:flex">
                  <i data-feather="file" className="w-4 h-4 mr-2"></i> Download
                  XML
                </button>
              </div>
              <div className="grid grid-cols-1 xxl:grid-cols-7 gap-6 p-5">
                <div className="xxl:col-span-2">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5">
                      <div className="font-medium">Net Worth</div>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <div className="mr-4 w-20 flex">
                          USP:
                          <span className="ml-3 font-medium text-theme-10">
                            +23%
                          </span>
                        </div>
                        <div className="w-5/6 overflow-auto">
                          <chartjs.Line data={CHART_DATA.LINE_DATA} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5">
                      <div className="font-medium">Sales</div>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <div className="mr-4 w-20 flex">
                          USP:
                          <span className="ml-3 font-medium text-theme-24">
                            -5%
                          </span>
                        </div>
                        <div className="w-5/6 overflow-auto">
                          <chartjs.Line data={CHART_DATA.LINE_DATA} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5">
                      <div className="font-medium">Profit</div>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <div className="mr-4 w-20 flex">
                          USP:
                          <span className="ml-3 font-medium text-theme-24">
                            -10%
                          </span>
                        </div>
                        <div className="w-5/6 overflow-auto">
                          <chartjs.Line data={CHART_DATA.LINE_DATA} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5">
                      <div className="font-medium">Products</div>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <div className="mr-4 w-20 flex">
                          USP:
                          <span className="ml-3 font-medium text-theme-10">
                            +55%
                          </span>
                        </div>
                        <div className="w-5/6 overflow-auto">
                          <chartjs.Line data={CHART_DATA.LINE_DATA} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-5 w-full">
                  <div className="flex justify-center mt-8">
                    <div className="flex items-center mr-5">
                      <div className="w-2 h-2 bg-theme-17 rounded-full mr-3"></div>
                      <span>Product Profit</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span>Author Sales</span>
                    </div>
                  </div>
                  <div className="report-chart mt-8">
                    <chartjs.Bar data={CHART_DATA.LINE_DATA} />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: General Statistic --> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mypage;
