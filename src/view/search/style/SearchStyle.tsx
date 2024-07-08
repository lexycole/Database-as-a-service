/* eslint-disable */

import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
  CONTENT_WIDTH,
  DARK_COLOR,
  MAIN_SEARCH_BORDER_BOTTOM_COLOR_DARK,
  MAIN_SEARCH_BORDER_COLOR,
  MAIN_SEARCH_BORDER_COLOR_DARK,
  MAIN_SEARCH_BORDER_COLOR_DARK_FOCUS,
  MAIN_SEARCH_BORDER_COLOR_DARK_FOCUS_TOP_SEARCH,
  MAIN_SEARCH_BORDER_COLOR_DARK_TOP_SEARCH,
  MAIN_SEARCH_BORDER_COLOR_FOCUS,
  MAIN_SEARCH_BORDER_COLOR_FOCUS_TOP_SEARCH,
  MAIN_SEARCH_BORDER_COLOR_TOP_SEARCH,
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
  TEXT_COLOR_DARK_SECONDARY,
  TEXT_COLOR_SECONDARY,
} from '../../../../styles/BaseStyle';
import { SearchCategories } from '../../../components/search/SearchProps';

export const TILE_MARGIN = `10px`;

export const CategoryNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

export const SearchCategoryContainer = styled.div<{
  t: boolean;
  category: string;
}>`
  margin: 10px 0;
  padding: 10px 3rem;
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ category, t }) => colorByCategory(category, t)};

  h2 {
    font-weight: 800;
    text-align: left;
    margin-left: 0.4rem;
    margin-bottom: 2rem;
  }
`;

export const ShowAllLink = styled.div`
  margin: 2rem 1rem 3rem;
  text-align: left;
`;

export const SearchItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const colorByCategory = (category, theme: boolean) => {
  switch (category) {
    case SearchCategories.firm:
      return theme ? '#FFF7F8' : '#211e1e';
    case SearchCategories.phone:
      return theme ? '#F9FAFF' : '#211e1e';
    case SearchCategories.product:
      return theme ? '#F9FAFF' : '#211e1e';
    default:
      return theme ? '#F00' : '#F00';
  }
};

export const SearchNavContainer = styled.div`
  font-size: 18px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px 30px 0 30px; */
  height: 60px;
  margin-bottom: 2rem;

  nav {
    display: inline-block;
  }

  li {
    font-weight: bold;
  }
`;

export const CategoryCount = styled.span<{ t: boolean }>`
  margin-left: 5px;
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};

  &:hover {
    text-decoration: none;
  }
`;

export const ListStyleSwitchBlock = styled.div<{ t: boolean }>`
  justify-self: flex-end;
  margin-left: auto;
  padding: '0 1rem';
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
`;

export const ListStyleItem = styled.span<{ t: boolean; active: boolean }>`
  cursor: pointer;

  svg {
    font-size: 20px;
    width: 20px;
    height: 20px;
    /* margin: 0 5px; */
    color: ${(props) =>
      props.active ? PRIMARY_COLOR : props.t ? TEXT_COLOR : TEXT_COLOR_DARK};
  }
`;

export const SearchFormContainer = styled.div<{
  t: boolean;
  searchOnTop: boolean;
}>`
  width: 100%;
  flex: 0 1 ${CONTENT_WIDTH};
  display: flex;
  max-height: 200px;
  align-items: center;
  justify-content: center;

  .MuiAutocomplete-root:first-child {
    flex: 1 1 500px;
  }

  .MuiAutocomplete-root {
    flex: 1 1 200px;
    margin: 0 5px;

    svg {
      color: ${(props) => (props.t ? '#6b6b6b' : '#ccc')};
      margin-right: 5px;
    }
  }

  .MuiOutlinedInput-root {
    border-radius: ${BORDER_RADIUS};
  }

  .MuiButton-root {
    margin: 0 5px;
    min-width: 56px;
    border-radius: ${BORDER_RADIUS};

    .MuiButton-startIcon {
      margin: 0;
    }

    svg {
      font-size: 24px;
    }
  }

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const SearchFormInputContainer = styled.div<{
  t: boolean;
  isFocused: boolean;
  searchOnTop: boolean;
}>`
  /* display: flex; */
  padding: 5px;
  /* border-radius: 10px; */
  /* margin-right: 10px; */
  align-items: center;
  flex: 0 1 ${CONTENT_WIDTH};
  transition: border 0.3s ease-in-out;
  /* background: ${(props) =>
    props.t ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'}; */
  /* border: ${(props) => (props.t ? '1px solid #ddd' : '1px solid #333')}; */

  .filters {
    flex: 1;
    display: flex;

    @media (max-width: 940px) {
      width: 100% !important;
      flex-direction: column;
    }
  }

  @media (max-width: 940px) {
    width: 100% !important;
    flex-direction: column;
  }

  .MuiAutocomplete-root:first-child {
    /* flex: 1 1 500px; */
  }

  .MuiAutocomplete-root {
    flex: 1 1 200px;
    margin: 0 5px;

    svg {
      color: ${(props) => (props.t ? '#ccc' : '#6b6b6b')};
      margin-right: 5px;
    }
  }

  .MuiOutlinedInput-root {
    border-radius: ${BORDER_RADIUS};
  }

  .MuiButton-root {
    margin: 0 5px;
    min-width: 56px;
    border-radius: ${BORDER_RADIUS};

    .MuiButton-startIcon {
      margin: 0;
    }

    svg {
      font-size: 24px;
    }
  }
`;

export const SearchInputContainer = styled.div<{
  t: boolean;
  searchOnTop: boolean;
}>`
  width: 100%;
  display: flex;
  position: relative;
  /* align-items: flex-start
  justify-content: center; */
  /* align-items: center; */
  /* border-bottom: ${(props) =>
    props.t ? '1px solid #ddd' : '1px solid #333'}; */

  .search-filter {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .search-button {
    flex: 1 !important;
    border: 0;
    min-height: 60px;
    padding: 150px 30px !important;
    border-radius: 15px;
  }
`;

export const SearchActions = styled.div<{ topSearch: boolean }>`
  padding: 0;
  height: ${(props) => (props.topSearch ? '55px' : '65px')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.topSearch ? '0px' : '10px')};

  * > {
    flex: 1;
  }

  .search-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    border-radius: 10px;
    height: ${(props) => (props.topSearch ? '70px' : '70px')};

    @media (max-width: 940px) {
      width: 190px !important;
      justify-content: center;
    }

    .search-icon {
      font-size: ${(props) => (props.topSearch ? '1.7rem' : '2.22rem')};

      @media (max-width: 940px) {
        font-size: 1.3rem;
        width: 200px !important;
      }
    }
  }

  @media (max-width: 940px) {
    margin-top: 0.5rem;
    height: 100%;
    width: 85px;
    justify-content: center;
    /* flex-direction: column; */
  }
`;

export const MainSearchContainer = styled.div<{ t: boolean; sticky: boolean }>`
  margin-top: 94px;
  max-height: 150px;
  padding: 3vw 3vw 0 3vw;
  background: ${(props) =>
    props.t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};

  img {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 940px) {
    padding: 0;
  }
`;

export const SearchContainer = styled.div<{
  t: boolean;
  searchOnTop: boolean;
  homeSearch: boolean;
}>`
  width: ${({ searchOnTop }) => (searchOnTop ? '100%' : '88%')};
  z-index: 100;
  position: relative;
  margin: ${({ homeSearch }) =>
    homeSearch ? '4.6rem auto auto' : '6px auto auto'};

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AutocompleteItem = styled.div<{ t: boolean }>`
  > * {
    flex: 1;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 20px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => (props.t ? '#333' : '#fff')};
  }
`;

export const InputDivider = styled.div<{ t: boolean }>`
  height: 80%;
  margin: 0 1.3rem;
  border-radius: 5px;
  border-right: ;
  border-right: ${(props) => (props.t ? '2px solid #DDD' : '2px solid #555')};
`;

export const InputFieldCard = styled.div<{
  t: boolean;
  topSearch: boolean;
  focused: boolean;
  searchOnTop: boolean;
}>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.topSearch ? '2.2rem 1rem 2.2rem 0rem' : '2.5rem 1rem 2.5rem 0rem'};
  height: ${(props) => (props.topSearch ? '50px' : '65px')};
  background: ${(props) => (props.t ? '#FFF' : '#111')};
  box-shadow: ${(props) =>
    props.topSearch ? 'none' : '0 1px 15px rgba(0, 0, 0, 0.105)'};
  border: ${(props) =>
    props.focused
      ? `2px solid ${
          props.t ? DARK_COLOR : MAIN_SEARCH_BORDER_COLOR_DARK_FOCUS_TOP_SEARCH
        }`
      : `2px solid ${
          props.t
            ? MAIN_SEARCH_BORDER_COLOR_TOP_SEARCH
            : MAIN_SEARCH_BORDER_COLOR_DARK_TOP_SEARCH
        }`};
  outline: ${(props) =>
    props.focused
      ? `1px solid ${
          props.t ? DARK_COLOR : MAIN_SEARCH_BORDER_COLOR_DARK_FOCUS_TOP_SEARCH
        }`
      : `2px solid transparent`};
  outline-width: 100%;
  border-radius: 13px;
  transition: all 0.1s ease-in-out;
  overflow: hidden;

  .search-field-text-input {
    padding-left: 6px;
    font-size: ${(props) => (props.topSearch ? '1.1rem' : '1.1rem')};
    font-weight: 500;
    outline: none;
  }

  .MuiAutocomplete-endAdornment {
    position: relative;
    display: flex;
    width: 30px;
    height: 30px;
  }

  .MuiInputBase-input,
  .MuiInput-input,
  .MuiAutocomplete-input,
  .MuiAutocomplete-inputFocused,
  .MuiInputBase-inputAdornedStart,
  .MuiInputBase-inputAdornedEnd {
    padding-left: 1rem;
  }

  .MuiButtonBase-root,
  .MuiIconButton-root,
  .MuiAutocomplete-clearIndicator,
  .MuiAutocomplete-clearIndicatorDirty {
    width: 30px;
    height: 30px;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  .MuiSvgIcon-root {
    margin-right: 1rem;
  }

  .MuiAutocomplete-root svg {
    margin-left: 5px;
    color: ${(props) =>
      props.t ? TEXT_COLOR_SECONDARY : TEXT_COLOR_DARK_SECONDARY};
  }
`;
