import React, { ReactNode } from "react";
import { Input, Radio, RadioBlockTypeWrapper, Select } from "../form/input";
import { Table, TH, TR, TD } from "../table/table";
import { TheadWrapper, TbodyWrapper } from "../table/table";
import Pagination from "../navigation/pagination";
import Button from "../form/button";

interface IF {}

const Card: React.FC<IF> = (props: IF) => {
  const setPageHandler = () => {
    console.log("testing");
  };

  //////////////////////////////////
  // 1. 카드 헤더
  //////////////////////////////////
  type CardHeaderType = {
    title: string;
    subTitle?: string;
    menus?: ReactNode;
  };
  const CardHeader = (props: CardHeaderType) => {
    return (
      <div className="cardHeader p-4 flex flex-col bg-black text-white  divide-y-1 divide-white rounded-t-xl ">
        <div className="flex justify-between pb-4">
          <div>{props.title}</div>
          {props.subTitle && <div>{props.subTitle}</div>}
        </div>
        <div className="flex justify-end pt-4">
          {props.menus && props.menus}
        </div>
      </div>
    );
  };

  //////////////////////////////////
  //   2. 카드 바디
  //////////////////////////////////
  type CardBodyType = {
    cardBody: React.ReactNode | React.FC;
  };

  const CardBody: React.FC<CardBodyType> = (props: CardBodyType) => {
    return (
      <div className="cardBody w-full px-4 pt-4 overflow-x-scroll">
        <div className="flex justify-center items-center mb-4">
          <div className="flex-1 flex justify-center items-center ">
            <div className="flex justify-center item rounded w-max border border-gray-400">
              <select className="rounded-inherit" name="" id="">
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
              </select>
              <input
                className="md:w-auto w-12"
                type="text"
                name=""
                id=""
                placeholder="test"
              />
              <Button rounded="none" customstyle="!bg-gray-400">
                search
              </Button>
            </div>

            {/* <Select label="select default" name="select">
              <option>ID</option>
              <option>Author</option>
              <option>Name</option>
            </Select>
            <input type="text" name="" id="" placeholder="test input" />
            <Button type="submit" bgColor="white" color="gray">
              Search
            </Button> */}
          </div>
          <span className="inline-block ml-auto px-2 bg-gray-400 text-white rounded">
            7
          </span>
        </div>

        {props.cardBody}
      </div>
    );
  };

  //////////////////////////////////
  //   3. 카드 푸터(페이지네이션)
  //////////////////////////////////
  type CardFooterType = {
    pagination: React.ReactNode | React.FC;
  };
  const CardFooter: React.FC<CardFooterType> = (props: CardFooterType) => {
    return <div className="px-4 flex justify-center">{props.pagination}</div>;
  };

  //////////////////////////////////////////////////////////////////////
  ////////////////////////////card//////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="card pb-4 shadow-xl bg-white rounded-xl">
      {/* <div className="card pb-4 shadow-xl bg-white rounded-xl overflow-x-scroll"> */}
      <CardHeader
        title={"test"}
        subTitle={"sub"}
        menus={
          <RadioBlockTypeWrapper>
            <Radio
              radiotype="blockChild"
              name={"searchType"}
              value={"Event"}
              label={"Event"}
            />
            <Radio
              radiotype="blockChild"
              name={"searchType"}
              value={"VOD"}
              label={"VOD"}
            />
            <Radio
              radiotype="blockChild"
              name={"searchType"}
              value={"Team"}
              label={"Team"}
            />
            <Radio
              radiotype="blockChild"
              name={"searchType"}
              value={"System"}
              label={"System"}
            />
            <Radio
              radiotype="blockChild"
              name={"searchType"}
              value={"Venue"}
              label={"Venue"}
            />
          </RadioBlockTypeWrapper>
        }
      />
      <CardBody
        cardBody={
          <Table>
            <TheadWrapper>
              <TR>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test</TH>
                <TH>test!</TH>
              </TR>
            </TheadWrapper>
            <TbodyWrapper>
              <TR>
                <TD
                  value={
                    // <div>
                    //   <div>
                    //     testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest!
                    //   </div>
                    //   <div>
                    //     testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest!
                    //   </div>
                    <div>test</div>
                    // </div>
                  }
                />

                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body </div>} />
                <TD value={<div>body</div>} />
              </TR>
            </TbodyWrapper>
          </Table>
        }
      />

      <CardFooter
        pagination={
          <Pagination //props로 안에 들어가는 내용 받아서 넘기기
            totalPage={120}
            itemsPerPage={5} // 이건 직접 카운트 해서 넣어줘야 하는 건가? 기억이 안 난다...확인해보기
            pagesPerBlock={5}
            onClick={setPageHandler}
          />
        }
      />
    </div>
  );
};
export default Card;
