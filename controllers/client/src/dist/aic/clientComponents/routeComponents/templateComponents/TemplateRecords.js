var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Switch, Table } from '@radix-ui/themes';
import toast from 'react-hot-toast';
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
    const { isPending, data: templates, error } = useAppQuery('templates', apiTemplate.getTemplateRecords);
    const { data: url } = useAppQuery('template_server_url', apiTemplate.getTemplateServerURL);
    const { mutateAsync: deleteTemplate } = useAppMutation('templates', apiTemplate.deleteTemplate);
    const { mutateAsync: updateTemplate } = useAppMutation('templates', apiTemplate.updateTemplate);
    useAppEffect(error);
    const handleDeleteTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield deleteTemplate(id);
        if (!res) {
            toast(_jsx(AppToaster, { message: 'Delete unsuccessfully' }));
        }
        else {
            toast(_jsx(AppToaster, { status: true, message: 'Delete successfully' }));
        }
    });
    const handleUpdateTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield updateTemplate(id);
        if (!res) {
            toast(_jsx(AppToaster, { message: 'Update unsuccessfully' }));
        }
        else {
            toast(_jsx(AppToaster, { status: true, message: 'Update successfully' }));
        }
    });
    if (isPending)
        return _jsx(DotLoader, {});
    return (_jsx(Flex, { py: "9", height: "fit-content", direction: "column", children: _jsxs(Table.Root, { variant: 'surface', children: [_jsx(Table.Header, { children: _jsxs(Table.Row, { children: [_jsx(Table.ColumnHeaderCell, { children: "ID" }), _jsx(Table.ColumnHeaderCell, { children: "Type" }), _jsx(Table.ColumnHeaderCell, { children: "Template" }), _jsx(Table.ColumnHeaderCell, { children: "Thumbnail" }), _jsx(Table.ColumnHeaderCell, { children: "Unit price" }), _jsx(Table.ColumnHeaderCell, { children: "Recurring price" }), _jsx(Table.ColumnHeaderCell, { children: "Created at" }), _jsx(Table.ColumnHeaderCell, { children: "Active" }), _jsx(Table.ColumnHeaderCell, { children: "Terminate" })] }) }), _jsx(Table.Body, { children: templates === null || templates === void 0 ? void 0 : templates.map(template => (_jsxs(Table.Row, { children: [_jsx(Table.RowHeaderCell, { children: template.id }), _jsx(Table.Cell, { children: template.type }), _jsx(Table.Cell, { children: _jsx("a", { target: "_blank", href: url + template.template_url, children: "Link" }) }), _jsx(Table.Cell, { children: _jsx("a", { target: "_blank", href: url + template.thumbnail_url, children: "Link" }) }), _jsx(Table.Cell, { children: template.unit_price ? template.unit_price : '$10/year' }), _jsx(Table.Cell, { children: template.recurring_price ? template.recurring_price : '$10/year' }), _jsx(Table.Cell, { children: dateFormat(template.createdAt) }), _jsx(Table.Cell, { children: _jsx(Switch, { onClick: () => handleUpdateTemplate(template.id), size: "3", defaultChecked: template.isActive }) }), _jsx(Table.Cell, { children: _jsx(AppAlertDialog, { buttonTitle: 'Terminate', title: config.message.template.terminateTitle, des: config.message.template.terminateMsg, fn: () => handleDeleteTemplate(template.id) }) })] }, template.id))) })] }) }));
};
export default TemplateRecords;
