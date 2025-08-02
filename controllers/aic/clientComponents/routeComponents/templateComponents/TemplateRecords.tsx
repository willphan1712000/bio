import { Flex, Skeleton, Switch, Table } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AppAlertDialog from '../../../../client/clientComponents/AppAlertDialog';
import AppToaster from '../../../../client/clientComponents/AppToaster';
import apiTemplate from '../../api/template';
import { DotLoader } from 'react-spinners';

const TemplateRecords = () => {
    const { isPending, data: templates, error } = useQuery({
        queryKey: ["templates"],
        queryFn: async () => apiTemplate.getTemplateRecords(),
        staleTime: 5 * 60 * 1000, // 5 minutes,
        retry: 1
    })

    const { data: url } = useQuery({
        queryKey: ['template_server_url'],
        queryFn: async () => apiTemplate.getTemplateServerURL(),
        staleTime: 5 * 60 * 1000, // 5 minutes,
        retry: 1
    })

    const queryClient = useQueryClient()
    const { mutateAsync: deleteTemplate } = useMutation({
        mutationFn: apiTemplate.deleteTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] })
        }
    })

    const handleDeleteTemplate = async (id: number) => {
        const res = await deleteTemplate(id)
        if(!res) {
            toast(
                <AppToaster message='Delete unsuccessfully' />
            )
        } else {
            toast(
                <AppToaster status={true} message='Delete successfully' />
            )
        }
    }

    useEffect(() => {
        if(error) {
            toast(
                <AppToaster message={error.message} />
            )
        }
    }, [error])

    if(isPending) return <DotLoader />
    
    return (
      <Flex py="9" height="fit-content" direction="column">
        <Toaster />
        <Table.Root variant='surface'>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Template</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Thumbnail</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Unit price</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Recurring price</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Active</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Terminate</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {templates?.map(template => (
                    <Table.Row key={template.id}>
                        <Table.RowHeaderCell>{template.id}</Table.RowHeaderCell>
                        <Table.Cell>{template.type}</Table.Cell>
                        <Table.Cell><a target="_blank" href={url + template.template_url}>Link</a></Table.Cell>
                        <Table.Cell><a target="_blank" href={url + template.thumbnail_url}>Link</a></Table.Cell>
                        <Table.Cell>{template.unit_price ? template.unit_price : '$10'}</Table.Cell>
                        <Table.Cell>{template.recurring_price ? template.recurring_price : '$10'}</Table.Cell>
                        <Table.Cell>{template.createdAt}</Table.Cell>
                        <Table.Cell>{<Switch onClick={() => console.log("Swtiched id " + template.id)} size="3" defaultChecked={template.isActive} />}</Table.Cell>
                        <Table.Cell><AppAlertDialog 
                            buttonTitle='Terminate'
                            title='Terminate this template'
                            des='Are you sure to do this? This will delete the template and all related files. This will also be reflected on the template page seen by all customers.'
                            fn={() => handleDeleteTemplate(template.id)}
                        /></Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
      </Flex>
  )
}

export default TemplateRecords
