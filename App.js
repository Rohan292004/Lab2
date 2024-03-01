// App.js

import React from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from './todolist.js';
import ToDoForm from './todoform.js';

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
