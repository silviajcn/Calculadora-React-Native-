import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

const BotonCalculadora = ({ texto, color= '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ( ancho ) ? 180 : 80
            }}>
            <Text style={{
                ...styles.botonTexto,
                color: (color === '#9B9B9B') ? '#000000' : '#FFF'
            }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default BotonCalculadora;

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#FFF',
        fontWeight: '300',
    }
});