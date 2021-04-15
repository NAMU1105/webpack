import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import Pagination from "../../src/components/navigation/pagination";
import User from "../components/Users/user";
import { DUMMY_USERS } from "../../src/utils/UserDummyData";
import { UserProps } from "../../src/components/Users/user";

let isMonted = false;
const USER_PER_PAGE = 6;

interface IF {}

const Users: React.FC<IF> = (props: IF) => {
  const [users, setUsers] = useState<Array<UserProps> | null>(null);
  // const [csvData, setCsvData] = useState<Array<UserProps>>(DUMMY_USERS);
  const [page, setPage] = useState<number>(1); // current page
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(DUMMY_USERS.length / USER_PER_PAGE)
  );
  // const [checkItems, setCheckItems] = useState<Array<string | number>>([]);

  //  TODO: 반복되는 함수들은 커스텀 훅으로 만들기
  const setPageHandler = (param: number) => {
    // console.log("setPageHandler:", param);
    // 클릭한 페이지가 현재 페이지일 경우 리턴
    if (page === param) return;
    setPage(param);
  };
  // 페이지네이션 아이템 클릭 시 페이지 바꿔주는 함수
  const changePage = async (param: number) => {
    console.log(param);

    // const { data, error } = await apolloClient.query({
    //   query: GET_USER_PAGENATED,
    //   variables: {
    //     page: param,
    //     per_page: USER_PER_PAGE,
    //   },
    // });
    // console.log("paging data: ", data);
    // setUsers(data.userPaginated);
    // setCsvData(data.userPaginated);
    const newUserList = DUMMY_USERS.slice(
      (param - 1) * USER_PER_PAGE,
      param * USER_PER_PAGE
    );
    console.log(newUserList);
    setUsers(newUserList);
  };

  // pagination 페이징
  useEffect(() => {
    if (!isMonted) return;

    console.log("page: ", page);
    changePage(page);
    // 체크박스 체크여부를 모두 해지한다.
    // setCheckItems([]);
  }, [page]);

  // 이 코드가 pagination코드 아래에 있어야 첫 페이지 렌더링 시 불필요한 1페이지 요청을 하지 않는다.
  useEffect(() => {
    if (isMonted === false) {
      // console.log("first");
      // console.log(isMonted);
      isMonted = true;

      const newUserList = DUMMY_USERS.slice(0, USER_PER_PAGE);
      setUsers(newUserList);
    }
    // console.log("second");
    // console.log(isMonted);
    // console.log(users);
  }, []);

  const clicked = () => {
    console.log("clicked");
  };

  return (
    <section>
      {users && (
        <button className="btn btn-dark">
          <CSVLink data={users} filename={"my-file.csv"}>
            Download me
          </CSVLink>
        </button>
      )}

      <div className="grid grid-cols-12 gap-6 mt-5">
        {users &&
          users.map((user, index) => {
            return (
              <User
                key={index}
                name={user.name}
                profile={user.profile}
                role={user.role}
                group={user.group}
                company={user.company}
                level={user.level}
                status={user.status}
                approved={user.approved}
              />
            );
          })}
      </div>
      <Pagination
        totalPage={totalPage}
        itemsPerPage={USER_PER_PAGE}
        pagesPerBlock={5}
        onClick={setPageHandler}
      />
    </section>
  );
};
export default Users;
