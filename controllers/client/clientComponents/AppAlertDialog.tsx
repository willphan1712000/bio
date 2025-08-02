import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { BarLoader } from 'react-spinners'

interface Props {
    buttonTitle?: string,
    title?: string,
    des?: string,
    fn: () => void,
}

const AppAlertDialog = ({ buttonTitle, title, des, fn }: Props) => {
    const [isPending, setPending] = useState<boolean>(false)
  return (
    <Flex>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color="red" disabled={isPending}>{isPending ? <BarLoader width={60} /> : buttonTitle}</Button>
            </AlertDialog.Trigger>
            
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>{title}</AlertDialog.Title>
                <AlertDialog.Description size="2">{des}</AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">Cancel</Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red" onClick={async () => {
                            setPending(true)
                            await fn()
                            setPending(false)
                        }}>Continue</Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </Flex>
  )
}

export default AppAlertDialog
