// action constants
import { LayoutActionTypes, LayoutStateTypes } from "./constants";

// app constants
import {
  LayoutTypes,
  LayoutWidth,
  MenuPositions,
  SideBarTheme,
  SideBarTypes,
  TopbarTheme,
} from "../../constants/layout";

// actions
import { LayoutActionType } from "./actions";

// utils
import { getLayoutConfigs } from "../../utils";

const INIT_STATE = {
  layoutType: LayoutTypes.LAYOUT_VERTICAL,
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
  menuPosition: MenuPositions.MENU_POSITION_FIXED,
  leftSideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_DARK,
  leftSideBarType: SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT,
  showSidebarUserInfo: true,
  topbarTheme: TopbarTheme.TOPBAR_THEME_DARK,
  isOpenRightSideBar: false,
};

const Layout = (
  state: LayoutStateTypes = INIT_STATE,
  action: LayoutActionType<string | boolean | null>,
) => {
  switch (action.type) {
    case LayoutActionTypes.CHANGE_LAYOUT:
      console.log("State => ", state);
      console.log("Layout Type => ", action.payload);
      return {
        ...state,
        layoutType: action.payload,
      };
    case LayoutActionTypes.CHANGE_LAYOUT_WIDTH:
      const layoutConfig = getLayoutConfigs(action.payload! && action.payload);
      console.log("State => ", state);
      console.log("Layout Width => ", action.payload);
      console.log("Layout Config => ", layoutConfig);
      return {
        ...state,
        layoutWidth: action.payload,
        ...layoutConfig,
      };
    case LayoutActionTypes.CHANGE_MENU_POSITIONS:
      console.log("State => ", state);
      console.log("Menu Position => ", action.payload);
      return {
        ...state,
        menuPosition: action.payload,
      };
    case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
      console.log("State => ", state);
      console.log("Left Side Bar Theme => ", action.payload);
      return {
        ...state,
        leftSideBarTheme: action.payload,
      };
    case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
      console.log("State => ", state);
      console.log("Left Side Bar Type => ", action.payload);
      return {
        ...state,
        leftSideBarType: action.payload,
      };
    case LayoutActionTypes.TOGGLE_SIDEBAR_USER_INFO:
      console.log("State => ", state);
      console.log("Show Sidebar User Info => ", action.payload);
      return {
        ...state,
        showSidebarUserInfo: action.payload,
      };
    case LayoutActionTypes.CHANGE_TOPBAR_THEME:
      console.log("State => ", state);
      console.log("Topbar Theme => ", action.payload);
      return {
        ...state,
        topbarTheme: action.payload,
      };
    case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: true,
      };
    case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: false,
      };
    default:
      return state;
  }
};

export default Layout;
