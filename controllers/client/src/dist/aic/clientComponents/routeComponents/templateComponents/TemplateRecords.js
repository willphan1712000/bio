"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const themes_1 = require("@radix-ui/themes");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const react_hot_toast_1 = __importStar(require("react-hot-toast"));
const AppAlertDialog_1 = __importDefault(require("../../../../client/clientComponents/AppAlertDialog"));
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const template_1 = __importDefault(require("../../api/template"));
const react_spinners_1 = require("react-spinners");
const timeFormat_1 = __importDefault(require("../../../../client/utilities/timeFormat"));
const config_1 = __importDefault(require("../../config"));
const TemplateRecords = () => {
    const { isPending, data: templates, error } = (0, react_query_1.useQuery)({
        queryKey: ["templates"],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return template_1.default.getTemplateRecords(); }),
        staleTime: 5 * 60 * 1000,
        retry: 1
    });
    const { data: url } = (0, react_query_1.useQuery)({
        queryKey: ['template_server_url'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return template_1.default.getTemplateServerURL(); }),
        staleTime: 5 * 60 * 1000,
        retry: 1
    });
    const queryClient = (0, react_query_1.useQueryClient)();
    const { mutateAsync: deleteTemplate } = (0, react_query_1.useMutation)({
        mutationFn: template_1.default.deleteTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] });
        }
    });
    const { mutateAsync: updateTemplate } = (0, react_query_1.useMutation)({
        mutationFn: template_1.default.updateTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] });
        }
    });
    const handleDeleteTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield deleteTemplate(id);
        if (!res) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: 'Delete unsuccessfully' }));
        }
        else {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { status: true, message: 'Delete successfully' }));
        }
    });
    const handleUpdateTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield updateTemplate(id);
        if (!res) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: 'Update unsuccessfully' }));
        }
        else {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { status: true, message: 'Update successfully' }));
        }
    });
    (0, react_1.useEffect)(() => {
        if (error) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: error.message }));
        }
    }, [error]);
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.DotLoader, {});
    return ((0, jsx_runtime_1.jsxs)(themes_1.Flex, { py: "9", height: "fit-content", direction: "column", children: [(0, jsx_runtime_1.jsx)(react_hot_toast_1.Toaster, {}), (0, jsx_runtime_1.jsxs)(themes_1.Table.Root, { variant: 'surface', children: [(0, jsx_runtime_1.jsx)(themes_1.Table.Header, { children: (0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "ID" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Type" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Template" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Thumbnail" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Unit price" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Recurring price" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Created at" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Active" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Terminate" })] }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Body, { children: templates === null || templates === void 0 ? void 0 : templates.map(template => ((0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.RowHeaderCell, { children: template.id }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: template.type }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)("a", { target: "_blank", href: url + template.template_url, children: "Link" }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)("a", { target: "_blank", href: url + template.thumbnail_url, children: "Link" }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: template.unit_price ? template.unit_price : '$10/year' }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: template.recurring_price ? template.recurring_price : '$10/year' }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, timeFormat_1.default)(template.createdAt) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)(themes_1.Switch, { onClick: () => handleUpdateTemplate(template.id), size: "3", defaultChecked: template.isActive }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)(AppAlertDialog_1.default, { buttonTitle: 'Terminate', title: config_1.default.message.template.terminateTitle, des: config_1.default.message.template.terminateMsg, fn: () => handleDeleteTemplate(template.id) }) })] }, template.id))) })] })] }));
};
exports.default = TemplateRecords;
