import React from "react";
import MyInput from "./UI/inputs/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.currentTarget.value })}
      />
      <MySelect
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        value={filter.sort}
        defaultValue="Sort by..."
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By content" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
