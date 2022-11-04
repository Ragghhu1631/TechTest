import { render } from '@testing-library/react-native';
import React from 'react';
import IssueItem from './src/components/IssueItem';

describe('<IssueItem />', () => {
    test('should be able to render a issue title and image', () => {
        const { getByTestId } = render(
            <IssueItem issue="September 22" uri={'https://via.placeholder.com/160x220.png'} />,
        );
        expect(getByTestId('issueTitle').props.children).toEqual('September 22');
        expect(getByTestId('image')).toBeTruthy();
    });
});
