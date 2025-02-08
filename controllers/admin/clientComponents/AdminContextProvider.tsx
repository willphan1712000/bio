import { PropsWithChildren, ReactNode } from 'react'
import { AdminContext, AdminCssContext, AdminSettingContext, AdminRegexContext, AdminLabelContext, AdminIconContext } from './AdminContext'

interface Props {
    data: {
        [key: string]: string
    },
    setting: any,
    css: any,
    regex: any,
    label: any,
    children: ReactNode,
    iconMap: {
      [key: string]: string
    }
}

const AdminContextProvider = ({data, css, regex, label, setting, children, iconMap}: Props) => {
  return (
    <AdminContext.Provider value={data}>
      <AdminCssContext.Provider value={css}>
        <AdminSettingContext.Provider value={setting}>
          <AdminRegexContext.Provider value={regex}>
            <AdminLabelContext.Provider value={label}>
              <AdminIconContext.Provider value={iconMap}>
                {children}
              </AdminIconContext.Provider>
            </AdminLabelContext.Provider>
          </AdminRegexContext.Provider>
        </AdminSettingContext.Provider>
      </AdminCssContext.Provider>
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
