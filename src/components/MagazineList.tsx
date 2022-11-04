import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CoverItem from './CoverItem';
import type { MagazineType } from '../types/index';
import type { IssueType, MagazineArray } from '../types/index';

const MagazineList: React.FC = () => {
    const [magazineData, setMagazineData] = useState<Array<MagazineType>>([]);
    React.useEffect(() => {
        loadMagazineData();
    }, []);
    const loadMagazineData = (): void => {
        const { issues } = require('../../data.json');
        const objIssueCategories: MagazineArray = issues.reduce(
            (result: Array<MagazineType>, issue: IssueType): MagazineArray | [] => {
                const object: MagazineType | undefined = result.find((item) => {
                    return issue.cover === item.coverName;
                });

                if (object) {
                    object.items = [...object.items, issue];
                } else {
                    const coverInnerObj = {
                        coverName: issue.cover,
                        items: [issue],
                    };
                    result = [...result, coverInnerObj];
                }
                return result;
            },
            [],
        );
        setMagazineData(objIssueCategories);
    };

    return (
        <View style={style.container}>
            <Text testID={'title'} accessibilityLabel={'Magazine issues'} style={style.title}>
                Magazine issues
            </Text>
            <FlatList
                style={style.list}
                data={magazineData}
                renderItem={({ item }: { item: MagazineType }): JSX.Element => (
                    <CoverItem coverName={item.coverName} items={item.items} />
                )}
                keyExtractor={(item, index): string => index.toString()}
                ItemSeparatorComponent={(): JSX.Element => <View style={style.separator} />}
                ListFooterComponent={(): JSX.Element => (
                    <Text style={style.footer}>The full archive is available to Which? members</Text>
                )}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'grey',
    },
    list: {
        width: '100%',
    },
    footer: {
        fontSize: 14,
        fontWeight: '300',
        padding: 10,
        textAlign: 'center',
    },
});

export default MagazineList;
