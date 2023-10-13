import React from "react";
import ListItem from "./ListItem";
import FormItem from "./FormItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import FrontPage from "./FrontPage";
import { useNavigate } from "react-router-dom";

const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const selectList = useSelector((state) =>
    state.lists.find((list) => list.id === params.listId)
  );
  return (
    <>
      <div className={`card mt-4 ${selectList.color}`}>
        <div className="container mt-2">
          <FrontPage
            title={selectList.name}
            icon={
              <div className="d-flex w-100 text-start">
                {selectList.icon}

                <i
                  onClick={() => navigate("/")}
                  className="bi bi-house-fill text-white fs-2 btn p-0"
                ></i>
              </div>
            }
          />
          <FormItem />
          <ListItem />
        </div>
      </div>
    </>
  );
};

export default List;
