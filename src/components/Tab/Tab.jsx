import { useDispatch, useSelector } from "react-redux";
import TabItem from "./TabItem";
import { setIsActive } from "../../features/tab/tab";
import TabContent from "./TabContent";

export default function Tab() {
  const dispatch = useDispatch();
  const tabText = useSelector((state) => state.tab.tabText);
  const tabContent = useSelector((state) => state.tab.tabContent);
  const isActive = useSelector((state) => state.tab.isActive);

  const handleSetActive = (index) => {
    dispatch(setIsActive(index));
  };
  return (
    <div className="flex flex-col">
      <ul className="flex items-center gap-3 p-3 bg-gray-700">
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
