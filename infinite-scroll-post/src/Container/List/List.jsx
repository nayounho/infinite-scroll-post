import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import { createAPageAction, createBPageAction } from "../../redux/reducers/renderState";
import { setSearchAListAction, setSearchBListAction } from "../../redux/reducers/renderList";
import StyledListItem from "../../Components/ListItem/ListItem.styled";

const List = ({ className }) => {
  const { aList, bList } = useSelector(state => state.renderList);
  const { postType, aPage, bPage } = useSelector(state => state.renderState);
  const searchWord = useSelector(state => state.searchWord);
  const dispatch = useDispatch();

  const addList = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;

    if (scrollTop !== 0 && clientHeight + scrollTop === scrollHeight) {
      postType === "a" ? dispatch(createAPageAction()) : dispatch(createBPageAction());
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", addList);

    return () => {
      document.removeEventListener("scroll", addList);
    };
  });

  useEffect(() => {
    const getList = async () => {
      const newList = [];
      const page = postType === "a" ? aPage : bPage;
      for (let i = 0; i <= page; i++) {
        const res = await api.getList(postType, i);
        const list = await res.json();
        newList.push(...list);
      }
      postType === "a" ? dispatch(setSearchAListAction(newList)) : dispatch(setSearchBListAction(newList));
    };
    const getSearch = async () => {
      const res = await api.getSearched(postType, searchWord);
      const list = await res.json();
      postType === "a" ? dispatch(setSearchAListAction(list)) : dispatch(setSearchBListAction(list));
    };
    if (searchWord) getSearch();
    else getList();
  }, [aPage, bPage, postType]);

  return (
    <ul className={className}>
      {postType === "a"
        ? aList.map(item => {
            return <StyledListItem key={item.id} item={item} />;
          })
        : bList.map(item => {
            return <StyledListItem key={item.id} item={item} />;
          })}
    </ul>
  );
};

export default List;
