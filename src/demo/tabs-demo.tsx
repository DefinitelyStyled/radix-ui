import React from 'react';
import { classes, st } from './tabs-demo.st.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs/tabs';

interface TabsDemoProps {
    className?: string;
}

const TabsDemo: React.FunctionComponent<TabsDemoProps> = () => (
    <Tabs defaultValue="tab1">
        <TabsList aria-label="Manage your account">
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
            <p className={classes.text}>
                Make changes to your account here. Click save when you are done.
            </p>
            <fieldset className={classes.fieldset}>
                <label className={classes.label} htmlFor="name">
                    Name
                </label>
                <input className={classes.input} id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className={classes.fieldset}>
                <label className={classes.label} htmlFor="username">
                    Username
                </label>
                <input className={classes.input} id="username" defaultValue="@peduarte" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className={st(classes.button, classes.green)}>Save changes</button>
            </div>
        </TabsContent>
        <TabsContent value="tab2">
            <p className={classes.text}>
                Change your password here. After saving, you will be logged out.
            </p>
            <fieldset className={classes.fieldset}>
                <label className={classes.label} htmlFor="currentPassword">
                    Current password
                </label>
                <input className={classes.input} id="currentPassword" type="password" />
            </fieldset>
            <fieldset className={classes.fieldset}>
                <label className={classes.label} htmlFor="newPassword">
                    New password
                </label>
                <input className={classes.input} id="newPassword" type="password" />
            </fieldset>
            <fieldset className={classes.fieldset}>
                <label className={classes.label} htmlFor="confirmPassword">
                    Confirm password
                </label>
                <input className={classes.input} id="confirmPassword" type="password" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className={st(classes.button, classes.green)}>Change password</button>
            </div>
        </TabsContent>
    </Tabs>
);

export default TabsDemo;
