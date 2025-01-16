import { useEffect, useReducer } from 'react'
import { ColorPickerGradient, ColorType, FontType, Options, RangeSlider } from '../../../client/src/Web-Development/W'
import { AdminContext, AdminCssContext, AdminSettingContext } from '../AdminContext'
import Delete from '../Delete/Delete'
import { fonts, solidColors } from '../ElementMap'
import { Resource } from '../FetchData'
import Background from './Background'
import Font from './Font'
import FontColor from './FontColor'
import FontSize from './FontSize'
import reducer from './Reducer'
import SavePDF from './SavePDF'

interface Props {
  data: {
    [key: string]: string
  },
  css: {
    [key: string]: string
  },
  resource: Resource
}

const Setting = ({data, css, resource}: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    background: false,
    font: false,
    fontSize: false,
    fontColor: false
  })

  useEffect(() => {
    document.addEventListener('click', e => {
      const ele = e.target as HTMLElement
      if(document.querySelector(".background")?.contains(ele) || document.querySelector("#W_colorPicker")?.contains(ele) || document.querySelector("#colorOptionsInBackground")?.contains(ele)) {
        dispatch({type: 'background', value: true})
      }
      else if (document.querySelector(".font")?.contains(ele) || document.querySelector("#fontOptions")?.contains(ele)) {
        dispatch({type: 'font', value: true})
      }
      else if (document.querySelector(".fontSize")?.contains(ele) || document.querySelector("#W_rangeSlider")?.contains(ele)) {
        dispatch({type: 'fontSize', value: true})
      }
      else if (document.querySelector(".fontColor")?.contains(ele) || document.querySelector("#colorOptions")?.contains(ele)) {
        dispatch({type: 'fontColor', value: true})
      }
      else {
        dispatch({type: 'background', value: false})
      }
    })
  }, [])

  return (
    <AdminContext.Provider value={data}>
      <AdminCssContext.Provider value={css}>
        <AdminSettingContext.Provider value={[state, dispatch]}>
          <div className='flex flex-col'>
            <div id="setting_board" className='flex gap-1'>
              {state.background && (
                <>
                  <ColorPickerGradient keyValue="W_colorPicker" defaultColor={css.background} cb={color => {
                    css.background = color as string
                    $("#template__background").css({
                      background: color
                    })
                  }} />
                  <Options keyValue="colorOptionsInBackground" Face={ColorType} list={solidColors} cb={color => {
                    css.fontColor = color as string
                    $("#template__background").css({
                      background: color
                    })
                  }}/>
                </>
              )}
             {state.font && <Options keyValue="fontOptions" Face={FontType} face="A" list={fonts} cb={font => {
              css.font = font as string
              $(".template__font").css({
                fontFamily: font
              })
             }}/>}
             {state.fontSize && <RangeSlider keyValue="W_rangeSlider" range={{min: 0, max: 25}} defaultValue={parseInt(css.fontSize.replace("px", ''))} cb={value => {
                css.fontSize = value + "px"
                $(".template__font").css('font-size', value)
                $(".template_name").css('font-size', (value + 15))
             }}/>}
             {state.fontColor && <Options keyValue="colorOptions" Face={ColorType} list={solidColors} cb={color => {
              css.fontColor = color as string
              $(".template__font").css({
                color
              })
             }}/>}

            </div>
            <div id="setting_bar" className='flex flex-row gap-[10px] p-[10px] items-center overflow-auto' style={{scrollbarWidth: 'none'}}>
              <Background />
              <Font />
              <FontSize />
              <FontColor />
              <SavePDF />

              <div className="h-auto flex-shrink-0">
                <Delete message={resource.deleteWarning}/>
              </div>
            </div>
          </div>
        </AdminSettingContext.Provider>
      </AdminCssContext.Provider>
    </AdminContext.Provider>
  )
}

export default Setting
