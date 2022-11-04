import React from 'react';
import { SafeAreaView } from 'react-native';
import MagazineList from './src/components/MagazineList';

const App: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MagazineList />
        </SafeAreaView>
    );
};

export default App;
