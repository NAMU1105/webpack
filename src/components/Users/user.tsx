import React from "react";

export interface UserProps {
  id?: string;
  name: string;
  profile: string;
  role: string;
  group: "platform" | "server" | "vision";
  company: string;
  level: "super" | "pd" | "viewer";
  status?: "on" | "off";
  approved: boolean;
}

const User: React.FC<UserProps> = (props: UserProps) => {
  const editUser = (id: string) => {
    console.log(id);
  };

  return (
    <div className="box intro-y col-span-12 md:col-span-3">
      <div className="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
        <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
          <img
            alt="profile image"
            className="rounded-full"
            src={props.profile}
          />
        </div>
        <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
          <a href="" className="font-medium">
            {props.name}
          </a>
          <div className="text-gray-600 text-xs mt-0.5">{props.role}</div>
        </div>

        {/*
          <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
            <a
              href=""
              className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in tooltip"
              title="Facebook"
            >
              <i className="w-3 h-3 fill-current" data-feather="facebook"></i>
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in tooltip"
              title="Twitter"
            >
              <i className="w-3 h-3 fill-current" data-feather="twitter"></i>
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in tooltip"
              title="Linked In"
            >
              <i className="w-3 h-3 fill-current" data-feather="linkedin"></i>
            </a>
          </div>
          */}
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
          <div className="flex text-gray-600 text-xs">
            <div className="mr-auto">Progress</div>
            <div>20%</div>
          </div>
          <div className="progress h-1 mt-2">
            <div
              className="progress-bar w-1/4 bg-theme-17"
              role="progressbar"
            ></div>
          </div>
        </div>
        <button className="btn btn-primary py-1 px-2 mr-2">Message</button>
        <button
          className="btn btn-outline-secondary py-1 px-2"
          onClick={() => editUser(props.name)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default User;
