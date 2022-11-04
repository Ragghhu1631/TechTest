import type { FC } from 'react';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import IssueItem from './IssueItem';
import type { MagazineType } from '../types/index';

const CoverItem: FC<MagazineType> = ({ coverName, items }: MagazineType) => {
    const [isEnabled, setIsEnabled] = useState(true);
    return (
        <View>
            <View style={style.container}>
                <Text testID={'coverName'} accessibilityLabel={coverName} style={style.textCoverType}>
                    {coverName}
                </Text>
                <Switch
                    testID={'switch'}
                    accessibilityLabel={coverName}
                    accessibilityRole={'switch'}
                    accessibilityState={{ expanded: isEnabled }}
                    accessibilityHint={
                        isEnabled
                            ? `Double tap to collapse ${coverName} issues`
                            : `Double tap to expand ${coverName} issues`
                    }
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={(): void => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
            </View>
            {isEnabled && (
                <View style={style.expandableView}>
                    {items.map((item, index) => {
                        return <IssueItem key={index} issue={item.issue} uri={item.uri} />;
                    })}
                </View>
            )}
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 10,
        width: '100%',
    },
    textCoverType: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },
    expandableView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default CoverItem;
