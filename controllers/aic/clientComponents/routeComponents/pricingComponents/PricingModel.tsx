import { Button } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { HashLoader } from 'react-spinners'
import AppToaster from '../../../../client/clientComponents/AppToaster'
import useThemeContext from '../../../../client/clientComponents/context/theme'
import handleAsync from '../../../../client/utilities/handleAsync'
import apiPricing from '../../api/pricing'
import useAppEffect from '../../hooks/useAppEffect'
import useAppQuery from '../../hooks/useAppQuery'
import { PricingContext, PricingModel } from './context'
import MultiSelect from './multiSelect/MultiSelect'

const PricingModel = () => {
    const theme = useThemeContext()
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`
    const [pricing, setPricing] = useState<PricingModel[] | undefined>(undefined)

    const { isPending, data: pricingQuery, error } = useAppQuery("pricing", apiPricing.get)
    useAppEffect(error)
    useEffect(() => {
        if(!isPending && pricingQuery) {
            setPricing(pricingQuery)
        }
    }, [pricingQuery])
    

    const handleUpdate = async () => {
        const { error } = await handleAsync(apiPricing.post(pricing))
        if(error) {
            return toast(
                <AppToaster message={error} />
            )
        }

        toast(
            <AppToaster status={true} message="Update successfully" />
        )
    }

    return (
        <>
            <Toaster />
            <PricingContext.Provider value={{
                state: pricing,
                setState: setPricing
            }}>
                <div className={containerClasses}>
                    {isPending ? <HashLoader /> : <MultiSelect />}
                    <div className='my-5 bg-white p-[1px] rounded-full w-fit'>
                        <Button size="3" onClick={handleUpdate}>Update</Button>
                    </div>
                </div>
            </PricingContext.Provider>
        </>
    )
}

export default PricingModel