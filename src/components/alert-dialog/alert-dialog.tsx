import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { st, classes } from './alert-dialog.st.css';

export const AlertDialog: React.FC<RadixAlertDialog.AlertDialogProps> = (props) => (
    <RadixAlertDialog.Root {...props} className={st(classes.root, props.className)} />
);

// // <RadixAccordion.Root>
// //     <RadixAccordion.Item>
// //         <RadixAccordion.Header>
// //             <RadixAccordion.Trigger />
// //         </RadixAccordion.Header>
// //         <RadixAccordion.Content />
// //     </RadixAccordion.Item>
// // </RadixAccordion.Root>
