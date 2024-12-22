import { ChangeEvent, useEffect, useState } from 'react'
import { AdminContext, AdminElementContext } from '../../admin/clientComponents/AdminContext'
import SaveDefault from '../../admin/clientComponents/Save/SaveDefault'
import SocialTag from './SocialTag'
import Input from '../../admin/clientComponents/Input'

interface Props {
    data: {
      [key: string]: string
    },
    extraData: {
      [key: string]: string
    }
}

const InfoArea = ({data, extraData}: Props) => {
  const [isLoading, setLoading] = useState(true)
  const [description, setDescription] = useState(data.description)

  const src = (data.image === null || data.image === '') ? extraData.defaultImgPath : '/user/' + data.username + '/' + data.image

  function desChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value)
    data.description = e.target.value
  }

  useEffect(() => {
    setLoading(false)
  })

  if(isLoading)
    return <div className='m-3'><p className='text-center'>Loading... Please Wait</p></div>

  return (
    <>
      <AdminContext.Provider value={data}>
        <div className='info'>
          <div className="info__img info__img--ava">
              <input type="file" className="uploadImg" accept="image/*" name="uploadImg" hidden />
              <div className="info__img--remove"><i className="fa-solid fa-x"></i></div>
              <div className="info__img--location">
                  <img draggable={false} src={src} alt="avatar_admin" />
              </div>
          </div>
          <div className="info__img--modify">
              <div className="info__img--choose">Choose picture</div>
          </div>
          <div className="info__about">
              <div className="info__name my-[15px]">
                  <Input inputLabelColor='#fff' name='name'/>
              </div>
              <div className="info__org my-[15px]">
                <Input inputLabelColor='#fff' name='organization'/>
              </div>
              <div className="info__des admin">
                  <label htmlFor="des">Description</label>
                  <textarea name="des" id="des" value={description} onChange={e => desChangeHandler(e)}></textarea>
              </div>
          </div>
        </div>
        <div id="social-media">
            {Object.keys(data).map(key => !['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode'].includes(key) && <AdminElementContext.Provider key={key} value={key}><SocialTag key={key} ></SocialTag></AdminElementContext.Provider>)}
        </div>
        <SaveDefault />
      </ AdminContext.Provider>
    </>
    
  )
}

export default InfoArea
