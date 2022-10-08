import classes from "./MyButton.module.css";

const PostList = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default PostList;
