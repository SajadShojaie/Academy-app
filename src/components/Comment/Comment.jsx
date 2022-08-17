import React from "react";
import { Switch, Route } from "react-router-dom";
import Description from "./Description";
import OpinionSection from "./OpinionSection";
import style from "./Comment.module.css";

const Comment = ({ commentpage, isDarkMode }) => {
  return (
    <div
      className={` ${style.cover}`}
      style={{ background: isDarkMode ? "#363646" : "#f6f6f6" }}
    >
      <Switch>
        <Route
          path={`/${commentpage}/:id/people-comment`}
          render={(props) => (
            <OpinionSection {...props} isDarkMode={isDarkMode} />
          )}
        />
        <Route
          render={(props) => <Description {...props} isDarkMode={isDarkMode} />}
        />
      </Switch>
    </div>
  );
};

export default Comment;
