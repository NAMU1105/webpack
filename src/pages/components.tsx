import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import Button from "../components/form/button";
import DropDown2 from "../components/UI/dropdown2";
import { Table, TH, TR, TD } from "../../src/components/table/table";
import { TheadWrapper, TbodyWrapper } from "../../src/components/table/table";

import Pagination from "../../src/components/navigation/pagination";
import { Toggle } from "../components/form/input";

interface IF {}

const Loader = styled.div`
  border-top-color: #3498db;
`;

const Components: React.FC<IF> = (props: IF) => {
  return (
    <section>
      {/* 1. button */}
      <article className="button">
        <h1>buttons</h1>

        <Button size="auto">
          <div className="flex justify-center items-center">
            <Loader className="animate-spin rounded-full border-4 border-t-4 border-gray-200 h-5 w-5 mr-2" />
            <span>Loading button</span>
          </div>
        </Button>
        <Button size="auto" rounded="full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
        </Button>
        <Button textTransform="lowercase" textsize="9xl">
          BIG TEXT SIZE
        </Button>
      </article>
      <article className="dropdowns">
        <h1>dropdowns</h1>
        <DropDown2 />
      </article>
      <article className="tables">
        <h1>Table</h1>
        <Table>
          <TheadWrapper>
            <TR>
              <TH>test1</TH>
              <TH>test2</TH>
              <TH>test3</TH>
            </TR>
            <TR>
              <TH>test1</TH>
              <TH>test2</TH>
              <TH>test3</TH>
            </TR>
            <TR>
              <TH>test1</TH>
              <TH>test2</TH>
              <TH>test3</TH>
            </TR>
          </TheadWrapper>
          <TbodyWrapper>
            <TR>
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
            </TR>
            <TR>
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
            </TR>
            <TR>
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
              <TD value={<div>body</div>} />
            </TR>
          </TbodyWrapper>
        </Table>
      </article>

      <article>
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
          {({ errors, touched, values, handleSubmit, isSubmitting }) => (
            <Form className="w-full" onSubmit={handleSubmit}>
              <Toggle label="toggle" name="toggle" />
            </Form>
          )}
        </Formik>
      </article>
    </section>
  );
};
export default Components;
