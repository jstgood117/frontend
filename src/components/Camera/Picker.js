import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Layout from 'constants/Layout'
import { Text } from 'react-native-paper'
import SquareIcon from 'assets/svg/camera/Square'
import PortraitIcon from 'assets/svg/camera/Portrait'

import { withTheme } from 'react-native-paper'

const PickerItem = (ref, theme) => ({
  item,
  index,
}) => {
  const styling = styles(theme)

  const onPress = () => {
    item.handleChange()
    ref.current.snapToItem(index, true)    
  }

  return (
    <TouchableOpacity onPress={onPress} style={styling.sliderItemWrapper}>
      <View style={styling.sliderItem}>
        <View style={styling.sliderItemIcon}>
          {item.title === 'Photo' ?
            <PortraitIcon />
          : null}
          {item.title === 'Square' ?
            <SquareIcon />
          : null}
        </View>
        <Text style={styling.sliderItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Picker = ({
  setPhotoSize,
  theme,
}) => {
  const styling = styles(theme)
  const pickerRef = useRef(null)

  return (
    <View style={styling.root}>
      <Carousel
        firstItem={0}
        enableMomentum
        ref={pickerRef}
        data={[
          { title: 'Photo', handleChange: () => setPhotoSize('4:3') },
          { title: 'Square', handleChange: () => setPhotoSize('1:1') },
        ]}
        renderItem={PickerItem(pickerRef, theme)}
        sliderWidth={Layout.window.width - 24}
        sliderHeight={30}
        itemHeight={30}
        itemWidth={100}
        removeClippedSubviews={false}
        contentContainerCustomStyle={{
          height: 30,
        }}
        slideStyle={{
          margin: 0,
          padding: 0,
        }}
        onSnapToItem={(index) => {
          if (index === 1) setPhotoSize('1:1')
          if (index === 0) setPhotoSize('4:3')
        }}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.5}
      />

      <View style={styling.indicatorWrapper}>
        <View style={styling.indicator} />
      </View>
    </View>
  )
}

Picker.propTypes = {
  setPhotoSize: PropTypes.any,
  theme: PropTypes.any,
}

const styles = theme => StyleSheet.create({
  root: {
    height: 30,
    justifyContent: 'center',
    marginBottom: 16,
  },
  indicatorWrapper: {
    position: 'absolute',
    height: 30,
    width: '100%',
    zIndex: -1,
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: '#000000',
    width: 110,
    height: '100%',
    borderRadius: 4,
  },

  sliderItemWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  sliderItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 6,
  },
  sliderItemText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  sliderItemIcon: {
    marginRight: 4,
  },
})

export default withTheme(Picker)
