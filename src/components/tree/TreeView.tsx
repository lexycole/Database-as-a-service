import * as React from 'react';
import { Dispatch, useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import {
  FilterValues,
  ITreeOption,
} from '../../view/package/props/PackageDataProps';
import {
  faCheckSquare,
  faChevronDown,
  faChevronRight,
  faFile,
  faFolder,
  faFolderOpen,
  faMinusSquare,
  faSquare,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faExpandAlt } from '@fortawesome/pro-solid-svg-icons/faExpandAlt';
import { faCompressAlt } from '@fortawesome/pro-solid-svg-icons/faCompressAlt';

type TreeViewProps = {
  options: ITreeOption[];
  checked: FilterValues;
  setChecked: Dispatch<FilterValues>;
};

export function TreeView(props: TreeViewProps) {
  const [expanded, setExpanded] = useState<FilterValues>([]);

  return (
    <CheckboxTree
      checked={props.checked}
      expanded={expanded}
      onCheck={(checked) => props.setChecked(checked)}
      onExpand={(expanded) => setExpanded(expanded)}
      nodes={props.options}
      showExpandAll
      showNodeIcon={false}
      showNodeTitles
      checkModel="all"
      icons={{
        check: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-check"
            icon={faCheckSquare}
          />
        ),
        uncheck: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-uncheck"
            icon={faSquare}
          />
        ),
        halfCheck: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-half-check"
            icon={faMinusSquare}
          />
        ),
        expandClose: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-expand-close"
            icon={faChevronRight}
          />
        ),
        expandOpen: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-expand-open"
            icon={faChevronDown}
          />
        ),
        expandAll: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-expand-all"
            icon={faExpandAlt}
          />
        ),
        collapseAll: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-collapse-all"
            icon={faCompressAlt}
          />
        ),
        parentClose: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-parent-close"
            icon={faFolder}
          />
        ),
        parentOpen: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-parent-open"
            icon={faFolderOpen}
          />
        ),
        leaf: (
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="rct-icon rct-icon-leaf-close"
            icon={faFile}
          />
        ),
      }}
    />
  );
}
