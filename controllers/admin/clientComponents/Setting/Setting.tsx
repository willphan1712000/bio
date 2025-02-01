import { useEffect, useReducer } from 'react'
import { ColorPickerGradient, ColorType, FontType, Options, RangeSlider } from '../../../client/src/Web-Development/W'
import { AdminElementContext } from '../AdminContext'
import AdminContextProvider from '../AdminContextProvider'
import AvatarTemplate from '../Avatar/AvatarTemplate'
import Delete from '../Delete/Delete'
import { fonts, solidColors } from '../ElementMap'
import { Resource } from '../FetchData'
import SocialTag from '../SocialTag'
import Background from './Background'
import Font from './Font'
import FontColor from './FontColor'
import FontSize from './FontSize'
import reducer, { elementClicked } from './Reducer'
import SavePDF from './SavePDF'
import Save from './Save'
import Reset from './Reset'

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
    fontColor: false,
    input: false,
    inputName: ''
  })

  useEffect(() => {
    // Use Event delegation to pass click event down the DOM tree
    document.addEventListener('click', e => {
      const ele = e.target as HTMLElement
      const elementclicked = elementClicked(data, ele)

      if(document.querySelector(".background")?.contains(ele) || document.querySelector("#W_colorPicker")?.contains(ele) || document.querySelector("#colorOptionsInBackground")?.contains(ele)) {
        dispatch({type: 'background'})
      }
      else if (document.querySelector(".font")?.contains(ele) || document.querySelector("#fontOptions")?.contains(ele)) {
        dispatch({type: 'font'})
      }
      else if (document.querySelector(".fontSize")?.contains(ele) || document.querySelector("#W_rangeSlider")?.contains(ele)) {
        dispatch({type: 'fontSize'})
      }
      else if (document.querySelector(".fontColor")?.contains(ele) || document.querySelector("#colorOptions")?.contains(ele)) {
        dispatch({type: 'fontColor'})
      }
      else if (elementclicked.status) {
        dispatch({type: 'input'})
        dispatch({type: 'inputName', value: elementclicked.element})
      }
      else if (document.querySelector("#inputElement")?.contains(ele)) {
        dispatch({type: 'input'})
      }
      else {
        dispatch({type: 'all'})
      }
    })

    const template = document.querySelector(".card-container") as HTMLElement
    template.addEventListener('input' , e => {
      const target = e.target as HTMLInputElement
      const name = $(target).data('name')
      const $ele = $("[data-name=" + name + "]") as JQuery<HTMLInputElement>

      if(['name', 'position', 'organization'].includes(name)) {
        data[name] = target.value
        $ele.val(target.value)
      } else {
        data['description'] = target.value
      }
    })
  }, [])

  return (
    <AdminContextProvider data={data} css={css} regex={resource.regexMap} label={resource.labelMap} setting={[state, dispatch]}>
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
                css.background = color as string
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
        {state.input && (
          <AdminElementContext.Provider value={state.inputName}>
            <div className='w-full bg-white rounded-[20px] mx-4 p-1' id="inputElement">
              <SocialTag />
            </div>
          </AdminElementContext.Provider>
        )}
        </div>
        <div id="setting_bar" className='[&::-webkit-scrollbar]:hidden flex flex-row gap-[10px] p-[10px] items-center overflow-auto' style={{scrollbarWidth: 'none'}}>
          <Background />
          <Font />
          <FontSize />
          <FontColor />
          <Reset />
          <SavePDF />

          <div className="h-auto flex-shrink-0">
            <Delete message={resource.deleteWarning}/>
          </div>
        </div>
      </div>

      <AvatarTemplate />
      
      <Save />
      
    </AdminContextProvider>
  )
}

export default Setting
