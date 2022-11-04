import { render } from '@testing-library/react-native';
import React from 'react';
import MagazineList from './src/components/MagazineList';

describe('<MagazineList />', () => {
    it('should be able to render a title and magazine Issues', () => {
        const { getByTestId } = render(<MagazineList />);
        expect(getByTestId('title').props.children).toEqual('Magazine issues');
    });
});
