import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export type IssueProps = {
    issue: string;
    uri: string;
};
const IssueItem: FC<IssueProps> = ({ issue, uri }: IssueProps) => {
    return (
        <View
            testID={'issueItem'}
            accessibilityLabel={issue}
            accessibilityRole={'menuitem'}
            accessibilityHint={`Double tap to navigate to  ${issue} screen`}
            style={style.container}
        >
            <Image testID={'image'} style={style.image} source={{ uri: uri }} />
            <Text testID={'issueTitle'} style={style.text}>
                {issue}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: 14,
        color: '#000',
    },
    image: {
        width: width * 0.7,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
});

export default IssueItem;
