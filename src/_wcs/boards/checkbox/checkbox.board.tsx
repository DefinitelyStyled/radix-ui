import { createBoard } from '@wixc3/react-board';
import { Checkbox, CheckboxIndicator } from '../../../components/checkbox/checkbox';

export default createBoard({
    name: 'Checkbox',
    Board: () => (
        <form>
            <div style={{ alignItems: 'center' }}>
                <Checkbox defaultChecked id="c1">
                    <CheckboxIndicator>✓</CheckboxIndicator>
                </Checkbox>
            </div>
        </form>
    ),
});
