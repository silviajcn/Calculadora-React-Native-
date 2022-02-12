import React from 'react';
import { Text, View } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {

    const { numero, numeroAnterior, limpiar, armarNumero, positiveNegative, btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>

            {
                (numeroAnterior !== '0') && (<Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>)
            }
            
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
            
                <BotonCalculadora texto="C" color="#9B9B9B" action={limpiar} />
                <BotonCalculadora texto="+/-" color="#9B9B9B" action={positiveNegative} />
                <BotonCalculadora texto="del" color="#9B9B9B" action={btnDelete} />
                <BotonCalculadora texto="/" color="#FF9427" action={btnDividir} />
                
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
            
                <BotonCalculadora texto="7" action={armarNumero}/>
                <BotonCalculadora texto="8" action={armarNumero} />
                <BotonCalculadora texto="9" action={armarNumero} />
                <BotonCalculadora texto="X" color="#FF9427" action={btnMultiplicar} />
                
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
            
                <BotonCalculadora texto="4" action={armarNumero} />
                <BotonCalculadora texto="5" action={armarNumero} />
                <BotonCalculadora texto="6" action={armarNumero} />
                <BotonCalculadora texto="-" color="#FF9427" action={btnRestar} />
                
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
            
                <BotonCalculadora texto="1" action={armarNumero} />
                <BotonCalculadora texto="2" action={armarNumero} />
                <BotonCalculadora texto="3" action={armarNumero} />
                <BotonCalculadora texto="+" color="#FF9427" action={btnSumar} />
                
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
            
                <BotonCalculadora texto="0" ancho  action={armarNumero}/>
                <BotonCalculadora texto="." action={armarNumero}/>
                <BotonCalculadora texto="="  color="#FF9427" action={calcular} />
                
            </View>

        </View>
    );
};

export default CalculadoraScreen;