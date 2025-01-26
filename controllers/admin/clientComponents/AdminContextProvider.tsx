import { PropsWithChildren, ReactNode } from 'react'
import { AdminContext, AdminCssContext, AdminSettingContext, AdminRegexContext, AdminLabelContext } from './AdminContext'

interface Props {
    data: {
        [key: string]: string
    },
    setting: any,
    css: any,
    regex: any,
    label: any,
    children: ReactNode
}

const AdminContextProvider = ({data, css, regex, label, setting, children}: Props) => {
  return (
    <AdminContext.Provider value={data}>
      <AdminCssContext.Provider value={css}>
        <AdminSettingContext.Provider value={setting}>
          <AdminRegexContext.Provider value={regex}>
            <AdminLabelContext.Provider value={label}>
                {children}
            </AdminLabelContext.Provider>
          </AdminRegexContext.Provider>
        </AdminSettingContext.Provider>
      </AdminCssContext.Provider>
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
