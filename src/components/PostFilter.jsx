import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By body" },
        ]}
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
        defaultValue="Sort by"
      />{" "}
    </>
  );
};

export default PostFilter;
