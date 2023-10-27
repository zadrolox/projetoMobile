import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  SectionList,
} from 'react-native';

type ListaSectionProps = {
    array: {
        title: string,
        data: {key: number; descricao: string}[]
    }[]
}

const ListaSection = (props: ListaSectionProps) => {
    return <SectionList
        sections={props.array}
        renderItem={({item}) =>
            <Text style={styles.item}>
                {item.descricao}
                </Text>}
        renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>
                {section.title}
            </Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
        />
}

export default ListaSection;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontsize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    }
});