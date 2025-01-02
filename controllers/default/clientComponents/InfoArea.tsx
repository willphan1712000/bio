import { ChangeEvent, useEffect, useState } from 'react'
import { AdminContext, AdminElementContext, AdminLabelContext, AdminRegexContext, username } from '../../admin/clientComponents/AdminContext'
import Avatar from '../../admin/clientComponents/Avatar/Avatar'
import Input from '../../admin/clientComponents/Input'
import SaveDefault from '../../admin/clientComponents/Save/SaveDefault'
import SocialTag from './SocialTag'


interface Props {
    data: {
      [key: string]: string
    },
    extraData: {
      defaultImgPath: string,
      regexMap: {
        [key: string]: string
      },
      labelMap: {
        [key: string]: string
      }
    }
}

const InfoArea = ({data, extraData}: Props) => {
  const [isLoading, setLoading] = useState(true)
  const [description, setDescription] = useState(data.description)

  function desChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value)
    data.description = e.target.value
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  if(isLoading)
    return <div className='m-3'><p className='text-center'>Loading... Please Wait</p></div>

  return (
    <>
      <AdminContext.Provider value={data}>
        <AdminRegexContext.Provider value={extraData.regexMap}>
          <AdminLabelContext.Provider value={extraData.labelMap}>
            <div className='info'>
              <div className="info__img info__img--ava">
                  <Avatar />
              </div>
              <div className="info__about">
                  <div className="info__name my-[15px]">
                    <AdminElementContext.Provider value={'name'}>
                      <Input inputLabelColor='#fff' name='name'/>
                    </AdminElementContext.Provider>
                  </div>
                  <div className="info__position my-[15px]">
                    <AdminElementContext.Provider value={'position'}>
                      <Input inputLabelColor='#fff' name='position'/>
                    </AdminElementContext.Provider>
                  </div>
                  <div className="info__org my-[15px]">
                    <AdminElementContext.Provider value={'organization'}>
                      <Input inputLabelColor='#fff' name='organization'/>
                    </AdminElementContext.Provider>
                  </div>
                  <div className="info__des admin">
                      <label htmlFor="des">Description</label>
                      <textarea name="des" id="des" value={description ?? ''} onChange={e => desChangeHandler(e)}></textarea>
                  </div>
              </div>
            </div>
            <div id="social-media">
                {Object.keys(data).map(key => !['username', 'name', 'image', 'organization', 'position', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode', 'ViberFlag', 'ViberCode', 'HotLineFlag', 'HotLineCode'].includes(key) && <AdminElementContext.Provider key={key} value={key}><SocialTag key={key} ></SocialTag></AdminElementContext.Provider>)}
            </div>
            <SaveDefault />
          </AdminLabelContext.Provider>
        </AdminRegexContext.Provider>
      </ AdminContext.Provider>
    </>
    
  )
}

export default InfoArea
