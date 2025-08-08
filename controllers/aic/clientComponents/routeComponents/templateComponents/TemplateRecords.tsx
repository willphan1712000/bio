import { Flex, Switch, Table } from '@radix-ui/themes';
import toast, { Toaster } from 'react-hot-toast';
import { DotLoader } from 'react-spinners';
import AppAlertDialog from '../../../../client/clientComponents/AppAlertDialog';
import AppToaster from '../../../../client/clientComponents/AppToaster';
import dateFormat from '../../../../client/utilities/timeFormat';
import apiTemplate from '../../api/template';
import config from '../../config';
import useAppEffect from '../../../../client/hooks/useAppEffect';
import useAppMutation from '../../../../client/hooks/useAppMutation';
import useAppQuery from '../../../../client/hooks/useAppQuery';

const TemplateRecords = () => {
    const { isPending, data: templates, error } = useAppQuery('templates', apiTemplate.getTemplateRecords)
    const { data: url } = useAppQuery('template_server_url', apiTemplate.getTemplateServerURL)

    const { mutateAsync: deleteTemplate } = useAppMutation('templates', apiTemplate.deleteTemplate)
    const {mutateAsync: updateTemplate } = useAppMutation('templates', apiTemplate.updateTemplate)

    useAppEffect(error)

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

    const handleUpdateTemplate = async (id: number) => {
        const res = await updateTemplate(id)
        if(!res) {
            toast(
                <AppToaster message='Update unsuccessfully' />
            )
        } else {
            toast(
                <AppToaster status={true} message='Update successfully' />
            )
        }
    }

    if(isPending) return <DotLoader />
    
    return (
      <Flex py="9" height="fit-content" direction="column">
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
                        <Table.Cell>{template.unit_price ? template.unit_price : '$10/year'}</Table.Cell>
                        <Table.Cell>{template.recurring_price ? template.recurring_price : '$10/year'}</Table.Cell>
                        <Table.Cell>{dateFormat(template.createdAt)}</Table.Cell>
                        <Table.Cell>{<Switch onClick={() => handleUpdateTemplate(template.id)} size="3" defaultChecked={template.isActive} />}</Table.Cell>
                        <Table.Cell><AppAlertDialog 
                            buttonTitle='Terminate'
                            title={config.message.template.terminateTitle}
                            des={config.message.template.terminateMsg}
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
