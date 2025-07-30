interface HandleAsyncType<DataType> {
    error?: string,
    data?: DataType
}

async function handleAsync<DataType>(data: Promise<DataType>): Promise<HandleAsyncType<DataType>> {
    try {
        const dataAsync = await data
        return {
            error: undefined,
            data: dataAsync
        }
    } catch(error:any) {
        return {
            error,
            data: undefined
        }
    }
}

export default handleAsync