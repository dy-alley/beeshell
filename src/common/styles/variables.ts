import * as mtdObj from '@ss/mtd-react-native/lib/common/styles/variables'
import { StyleSheet } from 'react-native'
const px = StyleSheet.hairlineWidth

const mtdVariables = mtdObj.default
const mtdUseTheme = mtdObj.useTheme

// 全局/品牌色
const mtdBrandColors = {
  mtdBrandPrimary: '#FECB2E',
  mtdBrandPrimaryDark: '#FFA000',
  mtdBrandSuccess: '#1CC678',
  mtdBrandWarning: '#FF8C28',
  mtdBrandDanger: '#FF5650',
  mtdBrandInfo: '#4B88EB'
}
// 灰度
const mtdGrayColors = {
  mtdGrayBase: '#111111',
  mtdGrayDarker: '#333333',
  mtdGrayDark: '#555555',
  mtdGray: '#999999',
  mtdGrayLight: '#aaaaaa',
  mtdGrayLighter: '#cccccc',
  mtdGrayLightest: '#eeeeee'
}
// 背景色
const mtdFillColors = {
  mtdFillBase: '#ffffff',
  mtdFillGray: '#F5F5F5',
  mtdFillBody: '#F8F8F8',
  mtdFillMask: 'rgba(0, 0, 0, .3)' // 遮罩背景
}
// 字体尺寸
const mtdFontSize = {
  mtdFontSizeXs: 10,
  mtdFontSizeS: 12,
  mtdFontSizeM: 14,
  mtdFontSizeL: 16,
  mtdFontSizeXl: 18,
  mtdFontSizeXxl: 20,
  mtdFontSizeXxxl: 22,
  mtdFontSizeXxxxl: 24,
  mtdFontSizeXxxxxl: 28
}
// 水平间距
const mtdSpacing = {
  mtdHSpacingS: 4,
  mtdHSpacingM: 8,
  mtdHSpacingL: 12,
  mtdHSpacingXl: 16,
  mtdHSpacingXxL: 20,

  mtdVSpacingXs: 2,
  mtdVSpacingS: 4,
  mtdVSpacingM: 8,
  mtdVSpacingL: 10,
  mtdVSpacingXl: 12,
  mtdVSpacingXxl: 16,
  mtdVSpacingXxxL: 20,
}
// 圆角
const mtdRadius = {
  mtdRadiusXs: 2,
  mtdRadiusS: 4,
  mtdRadiusM: 6,
  mtdRadiusL: 8
}
/**
 * Button 组件
 */
const button = {
  buttonBorderRadius: 0,
  buttonActiveOpacity: 0.3,

  buttonLFontSize: mtdFontSize.mtdFontSizeXl,
  buttonLHSpacing: 50,
  buttonLVSpacing: 14,

  buttonMFontSize: mtdFontSize.mtdFontSizeL,
  buttonMHSpacing: 50,
  buttonMVSpacing: 13,

  buttonSFontSize: mtdFontSize.mtdFontSizeM,
  buttonSHSpacing: mtdSpacing.mtdHSpacingXl,
  buttonSVSpacing: 8
}

// /**
//  * Input组件
//  */
// const input = {
//     // input组件安全区域 高度
//     inputLAreaHeight: 40,
//     inputMAreaHeight: 30,
//     inputSAreaHeight: 20
// }
// /**
//  * Tip 组件
//  */
// const tip = {
//     tipHSpacing: mtdSpacing.mtdHSpacingM,
//     tipVSpacing: mtdSpacing.mtdVSpacingM,
//     tipIconSize: mtdFontSize.mtdFontSizeM
// }
// /**
//  * NavigationBar 组件
//  */
// const navigationBar = {
//     navigationBarIconSizeMd: mtdFontSize.mtdFontSizeXxxl,
//     navigationBarIconSizeSm: mtdFontSize.mtdFontSizeL,
//     navigationBarSearchBarInputHeight: 30,
//     navigationBarSearchBarFill: mtdFillColors.mtdFillBody,
//     navigationBarHSpacingMd: mtdSpacing.mtdHSpacingM
// }
// /**
//  * Loading 组件
//  */
// const loading = {
//     loadingVSpacing: mtdSpacing.mtdVSpacingXl,
//     loadingHSpacing: mtdSpacing.mtdVSpacingXl,
//     loadingFontColor: '#ffffff',
//     loadingFontSize: mtdFontSize.mtdFontSizeM,
//     loadingLineHeight: mtdFontSize.mtdFontSizeM * 1.2
// }
// /**
//  * Toast 组件
//  */
// const toast = {
//     toastFontSizeMd: mtdFontSize.mtdFontSizeXl,
//     toastLineHeight: mtdFontSize.mtdFontSizeXl * 1.2,
//     toastFontColor: '#ffffff',
//     toastMHSpacing: mtdSpacing.mtdHSpacingXL * 2
// }
// /**
//  * Slider 组件
//  */
// const slider = {
//     sliderSlideHeight: 40,
//     sliderSlideHeightForTip: 100,
//     sliderTrackHeight: 5,
//     sliderThumbSize: 34,
//     sliderMarkHeight: 40,
//     sliderMarkLineSize: 10,
//     sliderSlideToolTip: 30,
//     sliderSlideToolTipIconSize: 4
// }
// /**
//  * Checkbox 组件
//  */
// const checkbox = {
//     checkboxIconContainSize: 20,
//     checkboxIconSize: 10
// }
// /**
//  * Popover 组件
//  */
// const popover = {
//     popoverColor: '#fff',
//     popoverBackgroundColor: '#2C2F34',
//     popoverActiveBackgroundColor: '#1C1C1D',
//     popoverBorderColor: '#565859'
// }
// /**
//  * Calender 组件
//  */
// const calender = {
//     calendarSelectedTextColor: '#fff',
//     calendarFontFamily: 'PingFangSC-Medium',
//     calendarDayHight: 65,
//     calendarDayMiddleSelected: '#f3de8b',
//     calendarMiddleSelectedTextColor: '#ff9a14'
// }
// /**
//  * Carousel 组件
//  */
// const carousel = {
//     carouselPaginationVSpacing: mtdSpacing.mtdVSpacingXl,
//     carouselPaginationHSpacing: mtdSpacing.mtdHSpacingL
// }
// const tags = {
//     tagRadius: 4,
//     tagsBrokenHight: 24,
//     tagFontSize: 10
// }

const variables = {
  ...mtdBrandColors,
  ...mtdGrayColors,
  ...mtdFillColors,
  ...mtdFontSize,
  ...mtdSpacing,
  ...mtdRadius,
  ...button
}



function useTheme(args = {}) {
  const tmp = {
    ...variables,
    ...args,
  }
  mtdUseTheme(tmp)
  return mtdVariables
}

export default mtdVariables

export {
    useTheme
}
