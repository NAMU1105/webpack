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
      <div className="cardHeader p-4 flex flex-col bg-black text-white  divide-y-2 divide-white rounded-t-xl ">
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
        <div className="flex justify-center items-center mb-4 ">
          <div className="flex-1 flex justify-center items-center ">
            <Select label="select default" name="select">
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
            </Select>
            {/* <Input
              type="text"
              label="search"
              name="cardSearch"
              nolabel
              customstyle=
            /> */}
            <input type="text" name="" id="" placeholder="test input" />
            <Button type="submit" bgColor="white" color="gray">
              Search
            </Button>
          </div>
          <span className="inline-block ml-auto px-2 bg-gray-500 text-white rounded">
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
    return (
      <div className="px-4 flex justify-center overscroll-x-scroll">
        {props.pagination}
      </div>
    );
  };

  //////////////////////////////////////////////////////////////////////
  ////////////////////////////card//////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="card pb-4 shadow-xl bg-white rounded-xl overflow-x-scroll">
      <CardHeader
        title={"test"}
        subTitle={"sub"}
        menus={
          <RadioBlockTypeWrapper>
            <Radio
              radiotype="blockChild"
              name={"test1"}
              value={"test1"}
              label={"test1"}
            />
            <Radio
              radiotype="blockChild"
              name={"test2"}
              value={"test2"}
              label={"test2"}
            />
            <Radio
              radiotype="blockChild"
              name={"test3"}
              value={"test3"}
              label={"test3"}
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
                    <div>
                      <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest!
                      </div>
                      <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest!
                      </div>
                      <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest!
                      </div>
                    </div>
                  }
                />

                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD value={<div>body</div>} />
                <TD
                  value={
                    <div>
                      bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody
                    </div>
                  }
                />
                <TD
                  value={
                    <div>
                      bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody
                    </div>
                  }
                />
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
