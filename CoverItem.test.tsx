import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CoverItem from './src/components/CoverItem';
const data = [
    {
        issue: 'September 2022',
        uri: 'https://via.placeholder.com/160x220.png',
        cover: 'Which? Magazine',
    },
    {
        issue: 'September 2022',
        uri: 'https://via.placeholder.com/160x220.png',
        cover: 'Which? Travel',
    },
];

describe('<CoverItem />', () => {
    test('should be able to render a cover Item component', () => {
        const { getByTestId } = render(<CoverItem coverName={'Which? Magazine'} items={data} />);
        expect(getByTestId('coverName').props.children).toEqual('Which? Magazine');
        const switchButton = getByTestId('switch');
        fireEvent(switchButton, 'onValueChange', true);
    });
});
