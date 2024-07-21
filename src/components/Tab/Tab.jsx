import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import TabItem from "./TabItem";
import { setIsActive, setIsToggleTheme } from "../../features/tab/tab";
import TabContent from "./TabContent";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

export default function Tab() {
  const dispatch = useDispatch();
  const tabText = useSelector((state) => state.tab.tabText);
  const tabContent = useSelector((state) => state.tab.tabContent);
  const isActive = useSelector((state) => state.tab.isActive);
  const themeIcon = useSelector((state) => state.tab.isToggleTheme);

  const handleSetActive = (index) => {
    dispatch(setIsActive(index));
  };

  const handleToggleTheme = () => {
    dispatch(setIsToggleTheme());
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-black">
          {tabText.map((item, index) => (
            <TabItem
              key={index}
              item={item}
              isActive={isActive}
              index={index}
              handleSetActive={() => handleSetActive(index)}
            />
          ))}
        </ul>
        <button onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={themeIcon ? faSun : faMoon} />
        </button>
      </div>

      <div>
        {tabContent.map((content, index) => (
          <TabContent
            key={content.id}
            content={content.content}
            isActive={isActive}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
