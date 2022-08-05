// import React from 'react';
// // import { violet, blackA, mauve } from '@radix-ui/colors';
// import { ChevronDownIcon } from '@radix-ui/react-icons';
// import * as AccordionPrimitive from '@radix-ui/react-accordion';
// import {} from './accordion.st.css';

// const StyledContent = styled(AccordionPrimitive.Content, {
//     overflow: 'hidden',
//     fontSize: 15,
//     color: mauve.mauve11,
//     backgroundColor: mauve.mauve2,

//     '&[data-state="open"]': {
//         animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
//     },
//     '&[data-state="closed"]': {
//         animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
//     },
// });

// const StyledContentText = styled('div', {
//     padding: '15px 20px',
// });

// const StyledChevron = styled(ChevronDownIcon, {
//     color: violet.violet10,
//     transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
//     '[data-state=open] &': { transform: 'rotate(180deg)' },
// });

// // Exports
// export const Accordion = StyledAccordion;
// export const AccordionItem = StyledItem;
// export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
//     <StyledHeader>
//         <StyledTrigger {...props} ref={forwardedRef}>
//             {children}
//             <StyledChevron aria-hidden />
//         </StyledTrigger>
//     </StyledHeader>
// ));
// export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
//     <StyledContent {...props} ref={forwardedRef}>
//         <StyledContentText>{children}</StyledContentText>
//     </StyledContent>
// ));

// // Your app...
// export const AccordionDemo = () => (
//     <Accordion type="single" defaultValue="item-1" collapsible>
//         <AccordionItem value="item-1">
//             <AccordionTrigger>Is it accessible?</AccordionTrigger>
//             <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="item-2">
//             <AccordionTrigger>Is it unstyled?</AccordionTrigger>
//             <AccordionContent>
//                 Yes. It's unstyled by default, giving you freedom over the look and feel.
//             </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="item-3">
//             <AccordionTrigger>Can it be animated?</AccordionTrigger>
//             <AccordionContent>
//                 Yes! You can animate the Accordion with CSS or JavaScript.
//             </AccordionContent>
//         </AccordionItem>
//     </Accordion>
// );

// export default AccordionDemo;
