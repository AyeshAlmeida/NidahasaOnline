import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';

import { darkGrey } from '../../CommonStyles';

const useStyles = makeStyles(() => ({
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: darkGrey,
    marginTop: '50%',
  },
  icon: {
    width: '5em',
    height: '5em',
  },
}));

export default function NoResults({ type }) {
  const classes = useStyles();
  const searchIcon = (
    <SvgIcon className={classes.icon} viewBox="0 0 512 512">
      <path d="m505.41 144.476-137.886-137.886c-4.25-4.25-9.9-6.59-15.91-6.59s-11.66 2.341-15.909 6.59c-4.25 4.25-6.591 9.9-6.591 15.91s2.341 11.66 6.59 15.91l15.58 15.58-119.957 106.281c-24.641-5.338-50.396-4.701-74.742 1.879-26.421 7.14-50.674 21.201-70.135 40.663-1.407 1.406-2.197 3.314-2.197 5.303s.79 3.897 2.197 5.303l90.156 90.156-159.409 159.408c-11.09 11.09-17.197 25.834-17.197 41.517 0 4.142 3.358 7.5 7.5 7.5 15.683 0 30.427-6.107 41.517-17.197l159.409-159.409 90.156 90.156c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c19.461-19.461 33.521-43.713 40.662-70.135 6.58-24.348 7.217-50.102 1.879-74.742l106.281-119.958 15.579 15.579c4.25 4.25 9.9 6.59 15.91 6.59s11.661-2.341 15.909-6.59c4.25-4.25 6.591-9.9 6.591-15.91-.001-6.008-2.342-11.658-6.591-15.908zm-467 339.721c-6.27 6.27-14.109 10.4-22.632 12.025 1.625-8.523 5.756-16.362 12.025-22.632l159.409-159.409 10.607 10.607zm265.339-74.692-201.254-201.254c34.561-31.19 81.416-43.425 127.142-32.974l107.087 107.088c10.448 45.726-1.786 92.58-32.975 127.14zm191.054-243.816c-1.416 1.417-3.3 2.196-5.303 2.196s-3.887-.78-5.303-2.197l-95.459-95.458c-2.93-2.928-7.678-2.93-10.607 0-2.929 2.929-2.929 7.678 0 10.606l69.254 69.254-104.159 117.563-98.878-98.878 122.846-108.841c1.548-1.372 2.461-3.321 2.522-5.387.063-2.067-.73-4.068-2.192-5.53l-21.214-21.214c-1.416-1.417-2.196-3.3-2.196-5.303s.78-3.886 2.197-5.303c1.416-1.417 3.3-2.197 5.303-2.197s3.887.78 5.303 2.197l137.887 137.886c1.416 1.417 2.196 3.3 2.196 5.303s-.78 3.886-2.197 5.303z"/>
    </SvgIcon>
  );
  let msg;
  let icon;
  if (type === 'search') {
    msg = 'No Search Results';
    icon = (<FindInPageRoundedIcon className={classes.icon} />);
  } else {
    msg = 'No Pinned Songs';
    icon = searchIcon;
  }

  return (
    <div className={classes.centered}>
      {icon}
      <h2>{msg}</h2>
    </div>
  )
}
