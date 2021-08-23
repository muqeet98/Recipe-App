import React from 'react';
import {Image} from 'react-native';

import logo from '../assets/Icons/score.png';
import rightArrow from '../assets/Icons/rightArrow.png';
import welcomLogo from '../assets/Icons/welcomLogo.png';
import email from '../assets/Icons/email.png';
import password from '../assets/Icons/password.png';
import checked from '../assets/Icons/checked.png';
import home from '../assets/Icons/home.png';
import search from '../assets/Icons/search.png';
import ribbon from '../assets/Icons/ribbon.png';
import setting from '../assets/Icons/setting.png';
import addRecipe from '../assets/Icons/addRecipe.png';
import down_Arrow from '../assets/Icons/down_Arrow.png';
import stopwatch from '../assets/Icons/stopwatch.png';
import favorite from '../assets/Icons/favorite.png';
import bookmark from '../assets/Icons/bookmark.png';
import leftArrow from '../assets/Icons/leftArrow.png';
import stopwatchLabel from '../assets/Icons/stopwatchLabel.png';
import flame from '../assets/Icons/flame.png';
import circle from '../assets/Icons/circle.png';
import video from '../assets/Icons/video.png';
import cross from '../assets/Icons/cross.png';
import addCover from '../assets/Icons/addCover.png';
import iconrigt from '../assets/Icons/iconrigt.png';
import downArrrow from '../assets/Icons/downArrrow.png';
import crossIcon from '../assets/Icons/crossIcon.png';
import upArrow from '../assets/Icons/upArrow.png';
import modalclose from '../assets/Icons/modalclose.png';
import IconSearch from '../assets/Icons/IconSearch.png';
import add from '../assets/Icons/add.png';
import camera from '../assets/Icons/camera.png';
import upload from '../assets/Icons/upload.png';
import success from '../assets/Icons/success.png';
import location from '../assets/Icons/location.png';
import rightInput from '../assets/Icons/rightInput.png';
import playIcon from '../assets/Icons/playIcon.png';
import filter from '../assets/Icons/filter.png';
import delIcon from '../assets/Icons/delIcon.png';
import arrow from '../assets/Icons/arrow.png';
import rightInput_Icon from '../assets/Icons/rightInput_Icon.png';
import timeIcon from '../assets/Icons/timeIcon.png';
import dotIcon from '../assets/Icons/dotIcon.png';

const Icon = {
  logo: props => <IconComp source={logo} {...props} />,
  rightArrow: props => <IconComp source={rightArrow} {...props} />,
  welcomLogo: props => <IconComp source={welcomLogo} {...props} />,
  email: props => <IconComp source={email} {...props} />,
  password: props => <IconComp source={password} {...props} />,
  checked: props => <IconComp source={checked} {...props} />,
  home: props => <IconComp source={home} {...props} />,
  search: props => <IconComp source={search} {...props} />,
  ribbon: props => <IconComp source={ribbon} {...props} />,
  setting: props => <IconComp source={setting} {...props} />,
  addRecipe: props => <IconComp source={addRecipe} {...props} />,
  down_Arrow: props => <IconComp source={down_Arrow} {...props} />,
  stopwatch: props => <IconComp source={stopwatch} {...props} />,
  favorite: props => <IconComp source={favorite} {...props} />,
  bookmark: props => <IconComp source={bookmark} {...props} />,
  leftArrow: props => <IconComp source={leftArrow} {...props} />,
  stopwatchLabel: props => <IconComp source={stopwatchLabel} {...props} />,
  flame: props => <IconComp source={flame} {...props} />,
  circle: props => <IconComp source={circle} {...props} />,
  video: props => <IconComp source={video} {...props} />,
  cross: props => <IconComp source={cross} {...props} />,
  addCover: props => <IconComp source={addCover} {...props} />,
  iconrigt: props => <IconComp source={iconrigt} {...props} />,
  downArrrow: props => <IconComp source={downArrrow} {...props} />,
  crossIcon: props => <IconComp source={crossIcon} {...props} />,
  upArrow: props => <IconComp source={upArrow} {...props} />,
  modalclose: props => <IconComp source={modalclose} {...props} />,
  IconSearch: props => <IconComp source={IconSearch} {...props} />,
  add: props => <IconComp source={add} {...props} />,
  camera: props => <IconComp source={camera} {...props} />,
  upload: props => <IconComp source={upload} {...props} />,
  success: props => <IconComp source={success} {...props} />,
  location: props => <IconComp source={location} {...props} />,
  rightInput: props => <IconComp source={rightInput} {...props} />,
  playIcon: props => <IconComp source={playIcon} {...props} />,
  filter: props => <IconComp source={filter} {...props} />,
  delIcon: props => <IconComp source={delIcon} {...props} />,
  arrow: props => <IconComp source={arrow} {...props} />,
  rightInput_Icon: props => <IconComp source={rightInput_Icon} {...props} />,
  timeIcon: props => <IconComp source={timeIcon} {...props} />,
  dotIcon: props => <IconComp source={dotIcon} {...props} />,
};

const IconComp = ({source, size, color}) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        resizeMode: 'contain',
        tintColor: color,
      }}
    />
  );
};

export default Icon;
